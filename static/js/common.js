const api = 'http://localhost:3001';
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
    case "adventure": return "모험단";
  }
  return "서버에러";
}
function recentApply(serverId,characterName,cId=""){
  try{
    let rArr = localStorage.getItem('recent');    
    if(rArr != undefined && rArr != null){
      rArr = JSON.parse(rArr);
      if(rArr.indexOf(`"sId":"${serverId}","cName":"${characterName}"`)>-1){
        return;
      }
    } else {
      rArr = [];
    }
    if(rArr.length>=6){
      rArr.shift();
    }
    rArr.push({sId:serverId,cName:characterName,cId:cId});
    localStorage.setItem("recent",JSON.stringify(rArr));
  } catch(e){
    console.log(e);
  }
}
function recentDelete(index){
  try{
    let rArr = localStorage.getItem('recent');
    if(rArr != undefined){
      rArr = JSON.parse(rArr);
    } else {
      rArr = [];
    }
    if(rArr.length>0 && rArr.length>=index+1){
      rArr.splice(index,1);
      recentView(rArr);
    }
    localStorage.setItem("recent",JSON.stringify(rArr));
    if(rArr.length==0){
      $('.recentBox').removeClass('active');
    }
  } catch(e){
    console.log(e);
  }
}
function recentSearch(obj){
  try{
    serverId = obj.sId;
    characterName = obj.cName;
    characterId = obj.cId;
    if(serverId==='adventure'){
      sessionStorage.setItem('sId',serverId);
      sessionStorage.setItem('cName',characterName);
      return location.href="./";
      // return location.href=`./?sId=${serverId}&cName=${encodeURIComponent(characterName)}`;
    }
    return location.href=`./character?sId=${serverId}&cName=${encodeURIComponent(characterName)}&cId=${characterId}`;
  } catch(e){
    Search();
  }
}
function recentView(rArr){
  $('.r-list > *').remove();
  rArr.forEach((element,i) => {
    $('.r-list').append(`<div class="r-element"><div class="ndrag" onclick="recentSearch({'sId':'${element.sId}','cId':'${element.cId}','cName':'${element.cName}'})"><span>${convertServer(element.sId)}</span>${element.cName}</div><label data-num="${i}">x</label></div>`);
  });
}