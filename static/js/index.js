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
    $("#mistList").html("");
  })
  $(document).on("click", "#btn_epicList", function() {
    let html = "";
    if(timeLineList.length>1){
        timeLineList.forEach(element => {
            html += `<div>${element.date} | ${element.mistGear ? "*" : ""} ${element.itemName} | ${element.channel}</div>`
        });
    }
    $('.offcanvas-body').html(html);
  })
  // 집계 불러오기
  $.ajax({
    url: 'https://api.dfgear.xyz/mistGearAggregate',
    type: 'get',
    timeout: 30000,
    processData:true,
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
    },
    success: function(result, textStatus, jqXHR){
      $('#maxChannel').html(result.channelName);
      $('#dailyCount').html(`${result.dailyCount}개`);
      $('#maxCount').html(`${result.maxCount}개`);
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
  $("#mistList").html("");
  searchCharacterTimeline(serverId,characterName,nowDate, function(result, err){
      try{
          timeLineList = [];
          if(err){
              loadingToggle(false);
              $("#btn_epicList").removeClass("show");
              if(result.responseText && result.responseText.indexOf("cors") > -1){
                  return alert("CORS에러_화면하단 CORS링크로 들어가 demo server 버튼을 눌러주세요");
              } else if(result.responseText && result.responseText.indexOf("APIKEY") > -1){
                  return alert("에러 발생_APIKEY 오류");
              } else if(result.responseText && result.responseText.indexOf("MISSING_PARAMETER") > -1){
                  return alert("에러 발생_입력값 오류");
              } else if(result.responseText && result.responseText.indexOf("NO_CHARACTER") > -1){
                  return alert("일치하는 캐릭터 정보가 없습니다");
              } else {
                  console.log(err); console.log(result);
                  return alert("에러 발생");
              }              
          } else {
              if(result.error){
                  loadingToggle(false);
                  $("#btn_epicList").removeClass("show");
                  if(result.error.message=="APIKEY_AUTH_ERROR"){
                      return alert("에러 발생_APIKEY오류");
                  } else if(result.error.message=="SYSTEM_INSPECT"){
                      apioff=true;
                      return alert("DNF점검");
                  } else {
                      console.log(result);
                      return alert("에러 발생_캐릭터정보오류");
                  }
              } else if(result.rows.length>0){
                  data_List(result.timeline);
              } else {
                  loadingToggle(false);
                  $("#btn_epicList").removeClass("show");
                  return alert("일치하는 캐릭터 정보가 없습니다");
              }
          }
      } catch(chinfoErr){
          console.log(chinfoErr);
          loadingToggle(false);
          if(chinfoErr==="NO_CHARACTER"){
              return alert("일치하는 캐릭터 정보가 없습니다");
          } 
          return alert("에러 발생");				
      }
  })
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
function data_List(Array) {
let newArray=[];
let mistGear=[];
let mistGearCount=1;
let html=``;
Array = Array.sort((a, b) => {
  return new Date(a.date) - new Date(b.date)
})
Array.forEach(element => {
  if(element.data.dungeonName ==="균형의 중재자"){
      newArray.push({ code:element.code, date:element.date, itemName:element.data.itemName, mistGear:element.data.mistGear, count: mistGearCount, channel:`${element.data.channelName}_${element.data.channelNo}` });
      if(!element.data.mistGear){
          mistGearCount++;
      } else {
          mistGear.push({code:element.code, missCount : mistGearCount, count:newArray.length, itemName:element.data.itemName });
          mistGearCount = 1;
      }
  } else if(element.data.mistGear) {
      newArray.push({ code:element.code, date:element.date, itemName: `${element.data.itemName} (${element.data.dungeonName})`, mistGear:element.data.mistGear, count: mistGearCount, channel:`` });
      mistGear.push({ code:element.code, missCount : mistGearCount, count:newArray.length, itemName: `${element.data.itemName}_${element.data.dungeonName}` });
      mistGearCount = 1;
  }
});
timeLineList = newArray;
  $('.resultData #count').html(`중재자 획득 에픽 수 : ${newArray.length}`);
if(mistGear.length>0){
  mistGear.forEach(e => {
      html +=`<div> 미기 ${e.code==505 ? "드랍" : "카드"} : ${e.count}번째 에픽, ${e.itemName} </div>`;
  })
} else {
  html +=`<div>where is Mist Gear`;
}
html += `</div>`;
  $("#mistList").html(html);
loadingToggle(false);
  $(".resultData").addClass("show");
}
function searchCharacterTimeline(serverId, characterName, endDate, callback){
  try{
    let data = { serverId: serverId, characterName: encodeURIComponent(characterName), endDate: endDate };
    $.ajax({
      url: 'https://api.dfgear.xyz/characterTimeline',
      type: 'get',
      timeout: 30000,
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