const api = 'https://api.dfgear.xyz';
function toast(type,msg){
  let toast = `<div class="dfToast alert alert-${type} alert-dismissible fade show" role="alert">
    <div>${msg}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  $('.container').append(toast);
  setTimeout(() => {
    $('.dfToast').eq(0).remove();
  }, 2000);
}
function numberFmt(number){
  let fmt = parseFloat(number).toLocaleString("ko-KR");
  return fmt;
}
function convertServer(serverId){
  switch(serverId) {
    case "anton": return "안톤";
    case "bakal": return "바칼";
    case "cain": return "카인";
    case "casillas": return "카시야스";
    case "diregie": return "디레지에";
    case "hilder": return "힐더";
    case "prey": return "프레이";
    case "siroco": return "시로코";
  }
  return "서버에러";
}