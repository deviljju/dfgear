let timeLineList = [];
let nowDate = moment().format("YYYYMMDDTHHmm");
let serverId='';
let characterId='';
let characterName='';
let apioff=false;
$(document).ready(function() {
  $("#characterName").keyup(function () {
    if (window.event.keyCode == 13) {
      redirectSearch();
    }
  });
  $(document).on("click", "#btn_search", function() {
    redirectSearch();
  });
  $(document).on("click", ".row.title", function() {
    try{
      location.href='./';
    } catch(e){
      location.href='https://dfgear.xyz';
    }
  })
  $(document).on("click", "#btn_epicList", function() {
    if(timeLineList.length>1){
      $('.offcanvas-body').html('');
      let prevDate = '';
      let dateCnt = 0;
        timeLineList.forEach(element => {
          let eDate = moment(element.date).format('YYYY-MM-DD');
          let eTime = moment(element.date).format('HH:mm');
          if(prevDate == ''){
            prevDate = eDate;
          } else {
            let daybtw = (new Date(eDate) - new Date(prevDate)) / (60*60*1000*24);
            if(`${eDate} 06:00` > `${eDate} ${eTime}`){
              eDate = moment(eDate).subtract(1,'d').format('YYYY-MM-DD');
              daybtw == 1 ? 2 : daybtw;
            }
            if(prevDate != eDate){ // 날이 바꼈고
              if(daybtw > 1){
                $('.offcanvas-body').prepend(`<h5>${prevDate} | ${dateCnt}개`);
                dateCnt=0;
                prevDate = eDate;
              } else if(daybtw==1 && `${eDate} 06:00` <= `${eDate} ${eTime}`){
                $('.offcanvas-body').prepend(`<h5>${prevDate} | ${dateCnt}개`);
                dateCnt=0;
                prevDate = eDate;
              }            
            }
          }
          var html= `<div>${element.date} | ${element.mistGear ? "*" : ""} ${element.itemName} | ${element.channel}</div>`
          $('.offcanvas-body').prepend(html);
          dateCnt ++;
        });
        $('.offcanvas-body').prepend(`<h5>${prevDate} | ${dateCnt}개`);
    }
  })
  try{ 
    serverId = new URLSearchParams(location.search).get('sId');
    characterName = new URLSearchParams(location.search).get('cName');
    characterId = new URLSearchParams(location.search).get('cId');
    if(characterName == '' || characterName===null || serverId=='' || serverId===null){
      $("#searchBar").addClass('show');
      return alert("조회할 캐릭터명을 입력해주세요");
    } else {
      $("select[name='server']").val(serverId)
      $("input[name='name']").val(characterName);
    }
    characterName = decodeURIComponent(characterName)
    Search();
  } catch(e){
    $(document).on("click", "#btn_search", function() {
      Search();
    });
    alert("캐릭터명을 다시 입력해주세요");
    return $("#searchBar").addClass('show');
  }
});
function redirectSearch(){
  try{
    serverId = $("select[name='server']").val();
    characterName = $("input[name='name']").val();
    if(characterName.length<1){
      alert("캐릭터명을 입력해주세요");
      $("#searchBar").addClass('show');
      return $("#characterName").focus();
    }
    if(serverId==='adventure'){
      return location.href=`./?sId=${serverId}&cName=${encodeURIComponent(characterName)}`;
    }
    return location.href=`./character?sId=${serverId}&cName=${encodeURIComponent(characterName)}`;
  } catch(e){
    Search();
  }
}
function Search(){
  if(apioff){
      return alert("DNF점검");
  }
  if($("#searchBar").hasClass('show')){
    serverId = $("select[name='server']").val();
    characterName = $("input[name='name']").val();
    characterId = '';
  }
  if(characterName.length<1){
    alert("캐릭터명을 입력해주세요");
    $("#searchBar").addClass('show');
    return $("#characterName").focus();
  }
  if(serverId==='adventure'){
    return location.href=`./?sId=${serverId}&cName=${encodeURIComponent(characterName)}`;
  }
  nowDate = moment().subtract(1,"m").format("YYYYMMDDTHHmm");
  loadingToggle();
  $('.resultData').removeClass("show");
  $("#mistList").html("");
  searchCharacterTimeline(serverId, characterName, nowDate, characterId, function(result, err){
      try{
          $("#searchBar").addClass('show');
          timeLineList = [];
          if(err){
              loadingToggle(false);
              $("#btn_epicList").removeClass("show");
              $('.resultData').removeClass("show");
              $("#mistList").html("");
              if(result.responseText && result.responseText.indexOf("APIKEY") > -1){
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
                  $('.resultData').removeClass("show");
                  $("#mistList").html("");
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
                  makeCardView(result.rows[0]);
              } else {
                  loadingToggle(false);
                  $("#btn_epicList").removeClass("show");
                  $('.resultData').removeClass("show");
                  $("#mistList").html("");
                  return alert("일치하는 캐릭터 정보가 없습니다");
              }
          }
      } catch(chinfoErr){
          console.log(chinfoErr);
          loadingToggle(false);
          $("#btn_epicList").removeClass("show");
          $("#searchBar").addClass('show');
          $('.resultData').removeClass("show");
          $("#mistList").html("");
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
function makeCardView(character){
    try{
      $(".characterView").html("");
      let html =`<img src="https://img-api.neople.co.kr/df/servers/${character.serverId}/characters/${character.characterId}/" class="card-img-top" alt="...">
        <div class="card-body"> <p class="card-text">${character.characterName}</p>
          <span class="card-text">중재자 에픽 : ${character.total}</span>
          <p class="card-text">미스터 기어 획득 : ${character.mist}</p>
          <span class="card-text small">최근 업데이트</span>
          <span class="card-text small">${character.uptime==null ? moment().format("YYYY-MM-DD HH:mm:ss") : character.uptime}</span>
        </div>`;
      $(".characterView").append(html);
    } catch (e) {
      console.log(e);
    }
}
function data_List(Array) {
  let mistGear=[];
  let mistGearCount=1;
  let html=``;
  Array.forEach((element,i) => {
    if(element.mistGear){
      mistGear.push({code:element.code, missCount : mistGearCount, count:i, itemName:element.itemName });
      mistGearCount = 1;
    } else {
      mistGearCount++;
    }
  });
  timeLineList = Array
  // timeLineList = newArray;
  $('#mistList').html(`<div style="font-weight: bold;">미스트기어 리스트</div>`);
  if(mistGear.length>0){
    mistGear.forEach(e => {
        html +=`<div> 미기 ${e.code==505 ? "드랍" : "카드"} : ${e.count}번째 에픽, ${e.itemName} </div>`;
    })
  } else {
    html +=`<div>where is Mist Gear</div>`;
  }
  $("#mistList").append(html);
  loadingToggle(false);
  $(".resultData").addClass("show");
  $("#searchBar").addClass('show');
  $("input[name='name']").val("");
}
function searchCharacterTimeline(serverId, characterName, endDate, characterId='', callback){
  try{
    let data = { serverId: serverId, characterName: encodeURIComponent(characterName), endDate: endDate, characterId:characterId };
    $.ajax({
      url: 'https://api.dfgear.xyz/character/Timeline',
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