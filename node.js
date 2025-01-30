function validarCPF(cpf) {
    // Remove pontos e hífen
    cpf = cpf.replace(/[^\d]/g, '');
  
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    // Validação dos dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  }
  
  // Exemplo de uso no backend
  app.post('/cadastro', (req, res) => {
    const { cpf } = req.body;
  
    if (!validarCPF(cpf)) {
      return res.status(400).json({ error: 'CPF inválido.' });
    }
  
    // Prosseguir com o cadastro...
  });