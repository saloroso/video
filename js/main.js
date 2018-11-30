var video;

  video  = document.getElementById('video');
  video.load();
  video.autoplay = true;
  video.controls = true; 
  video.addEventListener('play',function()
  {
    setTimeout(escolha,60000);    
  });

$(document).ready(function()
{
    $("#nao,#sim,#pergunta").addClass("block");
});
function escolha()
{
document.getElementById('sim').innerHTML = 'opção 1';
document.getElementById('nao').innerHTML = 'opcao 2';
document.getElementById('pergunta').innerHTML = 'outra música ?';
  $("#nao,#sim,#pergunta").removeClass("block");
  $("#sim").click(function()
  {
      video.src = 'videos/Rag Bone Man - Human.mp4';
      $("#nao,#sim,#pergunta").addClass("block");          
  });
  $("#nao").click(function()
  {
    video.src = 'videos/Kaleo - Way Down We Go.mp4';
    $("#nao,#sim,#pergunta").addClass("block");
  });
}


