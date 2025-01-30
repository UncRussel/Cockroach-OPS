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