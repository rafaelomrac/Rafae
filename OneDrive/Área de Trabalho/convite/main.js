document.addEventListener('DOMContentLoaded',  () => {
    var btnAceitar = document.getElementById('btnAceitar');
    var btnRecusar = document.getElementById('btnRecusar');
  
    btnAceitar.addEventListener('click',  () => {
      aceitarConvite();
    });
  
    btnRecusar.addEventListener('mouseover',  () => {
      moverBotao();
    });
  
    function aceitarConvite() {
      alert('Ótimo! Vamos sair!');
      // Adicione aqui o código para a ação de aceitar
    }
  
    function moverBotao() {
      var screenWidth = window.innerWidth;
      var screenHeight = window.innerHeight;
      var btnWidth = btnRecusar.offsetWidth;
      var btnHeight = btnRecusar.offsetHeight;
  
      var newPosX = Math.floor(Math.random() * (screenWidth - btnWidth));
      var newPosY = Math.floor(Math.random() * (screenHeight - btnHeight));
  
      btnRecusar.style.position = "absolute";
      btnRecusar.style.left = newPosX + "px";
      btnRecusar.style.top = newPosY + "px";
    }
  });
  