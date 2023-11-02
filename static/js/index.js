let apioff=false;
let timeLineList = [];
let nowDate = moment().format("YYYYMMDDTHHmm");

$(document).ready(function() {
  nowDate = moment().format("YYYYMMDDTHHmm");
  $("#characterName").keyup(function () {
      if (window.event.keyCode == 13) {
          Search();
      }
  });
  $(document).on("click", "#btn_search", function() {
    Search();
  });
  $(document).on("click", ".row.title", function() {
    $("select[name='server']").val('prey');
    $("input[name='name']").val('');
    loadingToggle(false);
    $('.resultData').removeClass("show");
    $("#characterList").html("");
  })
  // 집계 불러오기
  $.ajax({
    url: 'http://localhost:3000/mistGearAggregate',
    type: 'get',
    timeout: 30000,
    processData:true,
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
    },
    success: function(result, textStatus, jqXHR){
      $('#maxChannel').html(`오늘은 ${result.channelName}`);
      $('#dailyCount').html(`오늘은 ${result.dailyCount}개`);
      $('#maxCount').html(`${result.maxCount}개 가지고 있습니다.`);
    },
    error: function(jqXHR, error) {
      alert("통계를 불러오는데 실패했습니다.");
    }
  });
  // 미기 정가 계산
  let init = new Date('2023-09-14');
  let now = new Date(moment().format("YYYY-MM-DD"));
  let btwDay = (now - init) / (1000 * 3600 * 24);
  let week = btwDay== 0 ? 1 : Math.floor(btwDay/7) + 1;
  $('#remainVal').html(`${week*40}/1000`);
  $('#remainWeek').html(`${25 - week}주`);
});
function Search(){
  if(apioff){
      return alert("DNF점검");
  }
  var serverId = $("select[name='server']").val();
  var characterName = $("input[name='name']").val();
  if(characterName.length<1){
      alert("캐릭터명을 입력해주세요");
      return $("#characterName").focus();
  }
  nowDate = moment().subtract(1,"m").format("YYYYMMDDTHHmm");
  loadingToggle();
  $('.resultData').removeClass("show");
  $("#characterList").html("");
  if(serverId==='adventure'){
    searchAdventure(characterName, function(result, err){
      try{
        if(err){
          loadingToggle(false);
          if(result.responseText && result.responseText.indexOf("MISSING_PARAMETER") > -1){
            return alert("에러 발생_입력값 오류");
          } else if(result.responseText && result.responseText.indexOf("NO_CHARACTER") > -1){
            return alert("모험단에 소속된 캐릭터 정보가 없습니다");
          } else {
            console.log(err); console.log(result);
            return alert("에러 발생");
          }
        } else if(result.length>0){
          makeCardView(result);
        } else {
          loadingToggle(false);
          return alert("모험단에 소속된 캐릭터 정보가 없습니다");
        }
      } catch(e){
        loadingToggle(false);
        if(e==="NO_CHARACTER"){
          return alert("일치하는 캐릭터 정보가 없습니다");
        } 
        return alert("에러 발생");
      }
    })
  } else {
    return location.href=`./character.html?sId=${serverId}&cName=${encodeURIComponent(characterName)}`;
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
    characters.forEach(character => {
      try{
        let html =`<div class="card characterView" data-cId="${character.characterId}" data-sId="${character.serverId}" onclick="location.href='/character?sId=${character.serverId}&cId=${character.characterId}&cName=${encodeURIComponent(character.characterName)}';">
          <img src="https://img-api.neople.co.kr/df/servers/${character.serverId}/characters/${character.characterId}/" class="card-img-top" alt="...">
          <div class="card-body"> <p class="card-text">${character.characterName}</p>
            <span class="card-text">중재자 에픽 : ${character.total}</span>
            <p class="card-text">총 미기 획득 : ${character.mist}</p>
            <span class="card-text small">최근 업데이트</span>
            <span class="card-text small">${character.uptime}</span>
          </div>
        </div>`;
        $("#characterList").append(html);
      } catch (e) {
        console.log(e);
      }
    })
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
      url: 'http://localhost:3000/adventure', // https://api.dfgear.xyz/adventure
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
    console.log(e);
  }
}