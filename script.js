// Mostrar modal de termos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('termosModal');
    modal.style.display = 'flex';
  
    // Fechar modal ao clicar no botão
    document.getElementById('fecharModal').addEventListener('click', () => {
      if (document.getElementById('aceitarTermos').checked) {
        modal.style.display = 'none';
      } else {
        alert('Você deve aceitar os termos para prosseguir.');
      }
    });
  });
  
  // Enviar formulário de cadastro
  document.getElementById('cadastroForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
  
    // Redirecionar para a página de verificação facial
    window.location.href = 'verificacao-facial.html';
  });

  document.getElementById('cpf').addEventListener('input', function (e) {
    let cpf = e.target.value;
  
    // Remove tudo que não for número
    cpf = cpf.replace(/\D/g, '');
  
    // Adiciona os pontos e o hífen no lugar certo
    if (cpf.length > 3) {
      cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
    }
    if (cpf.length > 7) {
      cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
    }
    if (cpf.length > 11) {
      cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
    }
  
    // Limita o CPF a 14 caracteres (incluindo pontos e hífen)
    cpf = cpf.substring(0, 14);
  
    // Atualiza o valor do campo
    e.target.value = cpf;
  });