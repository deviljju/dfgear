const api = 'https://api.dfgear.xyz';
let apioff=false;
let timeLineList = [];
let nowDate = moment().format("YYYYMMDDTHHmm");
let serverId;
let characterName;
$(document).ready(function() {
  nowDate = moment().format("YYYYMMDDTHHmm");  
  try{
    serverId = sessionStorage.getItem("sId") ? sessionStorage.getItem("sId") : new URLSearchParams(location.search).get('sId');
    characterName = sessionStorage.getItem("cName") ? sessionStorage.getItem("cName") : new URLSearchParams(location.search).get('cName');
    if(characterName != null && characterName !== '' && serverId != null){
      $("select[name='server']").val(serverId)
      $("input[name='name']").val(characterName);
      if(serverId=='adventure'){
        Search();
      }
    }
    history.replaceState({}, null, location.pathname);
  } catch(e){
    console.log(e);
    history.replaceState({}, null, location.pathname);
    $("select[name='server']").val('')
    $("input[name='name']").val('');
    sessionStorage.clear();
  }
  $("#characterName").keyup(function () {
      if (window.event.keyCode == 13) {
          Search();
      }
  });
  $(document).on("click", "#btn_search", function() {
    Search();
  });
  $(document).on("click", "#advenTotal", function() {
    var cName = $("input[name='name']").val();
    let content = `https://dfgear.xyz/?sId=adventure&cName=${encodeURIComponent(cName)}`;
    navigator.clipboard.writeText(content)
    .then(() => {
      toast("info","링크 복사됨");
      // $("#btn_share").text('복사됨');
      // $("#btn_share").addClass('extend');
      // setTimeout(() => {
      //     $("#btn_share").text('공유');
      //     $("#btn_share").removeClass('extend');
      // }, 2000);
    })
    .catch(err => {
      console.log('Something went wrong', err);
    }) 
  });  
  $(document).on("click", ".row.title", function() {
    $("input[name='name']").val('');
    loadingToggle(false);
    $('.resultData').removeClass("show");
    $("#characterList").html("");
    $("#advenResult").removeClass("show");
  })
  // 집계 불러오기
  $.ajax({
    url: api+'/mistGearAggregate',
    type: 'get',
    timeout: 30000,
    processData:true,
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
    },
    success: function(result, textStatus, jqXHR){
      localStorage.setItem('serverState', "1");
      $('#maxChannel').html(`오늘은 ${result.channelName}`);
      $('#dailyCount').html(`오늘은 ${result.dailyCount}개`);
      let rate = parseFloat(result.dropRate.mist/result.dropRate.total);
      let per = parseInt(1/rate);
      let rateString = (rate*100).toFixed(2);
      $('#dailyRate').html(`${per}에픽 당 1개 (${rateString}%)`);
      $('#maxCount').html(`${result.maxCount}개 가지고 있습니다.`);
      try {
        $('#top1').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topMist[0].itemName]}">${result.topMist[0].itemName} <span class="badge bg-warning rounded-pill">${result.topMist[0].cnt}</span>`);
        $('#top2').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topMist[1].itemName]}">${result.topMist[1].itemName} <span class="badge bg-warning rounded-pill">${result.topMist[1].cnt}</span>`);
        $('#top3').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topMist[2].itemName]}">${result.topMist[2].itemName} <span class="badge bg-warning rounded-pill">${result.topMist[2].cnt}</span>`);
      } catch {
        apioff=true;
        $('#topThreeMist').remove();
      }
    },
    error: function(jqXHR, error) {
      apioff=true;
      localStorage.setItem('serverState', "0");
      toast("danger","통계를 불러오는데 실패했습니다.");
    }
  });
  // 미기 정가 계산
  let init = new Date('2023-09-14');
  let today = moment();
  let now = new Date(today.format("YYYY-MM-DD"));
  let btwDay = (now - init) / (1000 * 3600 * 24);
  let week = btwDay== 0 ? 1 : Math.floor(btwDay/7) + 1;
  let own = (week-8)*70 + 320;
  let prove =own;
  // // 월 마다 45개 해방
  var proof = moment('2023-11-01 06:00:00');
  var proofStone = (today.diff(proof,'months')+1)*45;
  prove = own + proofStone;
  $('#remainVal').html(`${own} (${prove})/1000`);  
  if(16-week == 0){
    $('.remain > .card-header').html(`1월 1일 증명 클리어 시 미기 정가!!`);
    $('#remainWeek').html(`${18 - week}주 (이번 주)`);
  } else if(18-week > 0){
    $('#remainWeek').html(`${18 - week}주 ${(16 - week)<0 ? '':'('+(16-week)+'주)'}`); // 1월 1일 기준 16, 1월 11일 기준 18
  } else {
    $('#remainWeek').html(`청해의 보은 습득 완료`);
  }
  let percent = parseFloat(own / 10);
  let provPer = parseFloat(prove / 10);
  $("#prg_own").attr("aria-valuenow",percent);
  $("#prg_own").css("width",`${percent}%`);
  $("#prg_own").html(`${percent}%`);
  if(percent<100){
    $("#prg_prove").attr("aria-valuenow",provPer-percent);
    $("#prg_prove").css("width",`${provPer-percent}%`);
    $("#prg_prove").html(`${provPer}%`);
  }
});
function Search(){
  if(apioff || localStorage.getItem('serverState')==="0"){
    return toast("warning","DFGEAR 서버 점검");
  }
  var serverId = $("select[name='server']").val();
  var characterName = $("input[name='name']").val();
  if(characterName.length<1){
      toast("danger","캐릭터명을 입력해주세요.");
      return $("#characterName").focus();
  }
  nowDate = moment().subtract(1,"m").format("YYYYMMDDTHHmm");
  loadingToggle();
  $('.resultData').removeClass("show");
  $("#characterList").html("");
  $("#advenResult").removeClass("show");
  if(serverId==='adventure'){
    searchAdventure(characterName, function(result, err){
      sessionStorage.clear();
      try{
        if(err){
          loadingToggle(false);
          if(result.responseText && result.responseText.indexOf("MISSING_PARAMETER") > -1){
            return toast("danger","에러 발생_입력값 오류");
          } else if(result.responseText && result.responseText.indexOf("NO_CHARACTER") > -1){
            return toast("danger","모험단에 소속된 캐릭터 정보가 없습니다");
          } else {
            console.log(err); console.log(result);
            return alert("에러 발생");
          }
        } else if(result.length>0){
          makeCardView(result);
        } else {
          loadingToggle(false);
          $("#advenResult").removeClass("show");
          return toast("danger","모험단에 소속된 캐릭터 정보가 없습니다.");
        }
      } catch(e){
        sessionStorage.clear();
        loadingToggle(false);
        if(e==="NO_CHARACTER"){
          return toast("danger","일치하는 캐릭터 정보가 없습니다");
        } 
        return alert("에러 발생");
      }
    })
  } else {
    sessionStorage.setItem('sId',serverId);
    sessionStorage.setItem('cName',characterName);
    return location.href="./character"; //?sId=${serverId}&cName=${encodeURIComponent(characterName)}`;
  }
}
function loadingToggle(toe=true) {
if(toe){
  $("#loading").css("display","block");
  $("#btn_search").addClass("disabled");
} else {
  $("#loading").css("display","");
  $("#btn_search").removeClass("disabled");
}
}
function makeCardView(characters){
  try{
    let total=0;
    let mist=0;
    let card=0;
    characters.forEach(character => {
      try{
        let html =`<div class="card characterView" data-cId="${character.characterId}" data-sId="${character.serverId}" onclick="location.href='/character?sId=${character.serverId}&cId=${character.characterId}&cName=${encodeURIComponent(character.characterName)}';">
          <img src="https://img-api.neople.co.kr/df/servers/${character.serverId}/characters/${character.characterId}/" class="card-img-top" alt="...">
          <div class="card-body"> <p class="card-text cName">${character.characterName}</p>
            <span class="card-text">중재자 에픽 : ${character.total}</span>
            <span class="card-text">미스트 기어 획득 : ${character.mist}</span>
            <p class="card-text">└ 카드 보상 : ${character.card}</p>
            <span class="card-text small">최근 업데이트</span>
            <span class="card-text small">${character.uptime==null ? '-' : character.uptime}</span>
          </div>
        </div>`;
        total += parseInt(character.total);
        mist += parseInt(character.mist);
        card += parseInt(character.card);
        $("#characterList").append(html);
      } catch (e) {
        console.log(e);
      }
    })
    $("#advenTotal").html(`중재자 에픽 : ${total}, 미스트 기어 : ${mist} (카드 ${card})`);
    $("#advenResult").addClass("show");
    loadingToggle(false);
  } catch(e){
    loadingToggle(false);
    console.log(e);
  }
}
function searchAdventure(adventureName, callback){
  try{
    let data = { adventureName: encodeURIComponent(adventureName)};
    $.ajax({
      url: api+'/adventure',
      type: 'get',
      timeout: 60000,
      processData:true,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
      },
      data: data,
      success: function(result, textStatus, jqXHR){
        callback(result,null);
      },
      error: function(jqXHR, error) {
        callback(jqXHR,error);
      }
    });
  } catch(e){
    sessionStorage.clear();
    console.log(e);
  }
}