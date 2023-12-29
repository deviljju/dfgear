let timeLineList = [];
let nowDate = moment().format("YYYYMMDDTHHmm");
let serverId='';
let characterId='';
let characterName='';
let apioff=false;
$(document).ready(function() {
  $("#characterName").keyup(function () {
    if (window.event.keyCode == 13) {
      Search();
    }
  });
  $(document).on("click", "#btn_search", function() {
    Search();
  });
  $(document).on("click", ".row.title", function() {
    try{
      location.href='./';
    } catch(e){
      sessionStorage.clear();
      location.href='https://dfgear.xyz';
    }
  })
  $(document).on("click", "#btn_epicList", function() {
    $('.modal-body').animate( { scrollTop : 0 }, 200 );
    if(timeLineList.length>0){
      $('.modal-list').html(''); //offcanvas-body epicModalLabel
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
              $('.modal-list').prepend(`<h5>${prevDate} | ${dateCnt}개`);
              dateCnt=0;
              prevDate = eDate;
            } else if(daybtw==1 && `${eDate} 06:00` <= `${eDate} ${eTime}`){
              $('.modal-list').prepend(`<h5>${prevDate} | ${dateCnt}개`);
              dateCnt=0;
              prevDate = eDate;
            }            
          }
        }
        var html= `<div>${element.date} | ${element.mistGear ? "*" : ""} ${element.itemName} | ${element.channel}</div>`
        $('.modal-list').prepend(html);
        dateCnt ++;
      });
      $('.modal-list').prepend(`<h5>${prevDate} | ${dateCnt}개`);
    } else {
      $('.modal-list').html('데이터가 없습니다.');
      $('#btn_timelineAll').attr('disabled',false);
    }
  })
  $(document).on("click", "#btn_timelineAll", function() {
    let prevDate = '';
    let dateCnt = 0;
    let data = { sId: $(".characterView").attr('data-sId'), cId:$(".characterView").attr('data-cId') };
    loadingToggle();
    $.ajax({
      url: api+'/character/TimelineAll',
      type: 'get',
      timeout: 30000,
      processData:true,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
        xhr.setRequestHeader("gear","dfgear");
      },
      data: data,
      success: function(result, textStatus, jqXHR){
        $('.modal-body').animate( { scrollTop : 0 }, 200 );
        $('.modal-list').html('');
        timeLineList = result.timeline;
        if(timeLineList.length>0){
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
                  $('.modal-list').prepend(`<h5>${prevDate} | ${dateCnt}개`);
                  dateCnt=0;
                  prevDate = eDate;
                } else if(daybtw==1 && `${eDate} 06:00` <= `${eDate} ${eTime}`){
                  $('.modal-list').prepend(`<h5>${prevDate} | ${dateCnt}개`);
                  dateCnt=0;
                  prevDate = eDate;
                }            
              }
            }
            var html= `<div>${element.date} | ${element.mistGear ? "*" : ""} ${element.itemName} | ${element.channel}</div>`
            $('.modal-list').prepend(html);
            dateCnt ++;
          });
          $('.modal-list').prepend(`<h5>${prevDate} | ${dateCnt}개`);          
        } else {
          $('.modal-list').html('데이터가 없습니다.');
        }
        loadingToggle(false);
        $('#btn_timelineAll').attr('disabled',true);
      },
      error: function(jqXHR, error) {
        loadingToggle(false);
        return alert("에러 발생");
      }
    });
  })
  $(document).on("click", "#aName", function(ev) {
    console.log(ev.target);
    sessionStorage.setItem('sId','adventure');
    sessionStorage.setItem('cName',$(ev.target).text());
    return location.href="./";
  })
  $(window).resize(function(){
    $('#loadingScreen').css('height',$(document).height())
  })
  try{
    serverId = sessionStorage.getItem("sId") ? sessionStorage.getItem("sId") : new URLSearchParams(location.search).get('sId');
    characterName = sessionStorage.getItem("cName") ? sessionStorage.getItem("cName") : new URLSearchParams(location.search).get('cName');
    characterId = sessionStorage.getItem("cId") ? sessionStorage.getItem("cId") : new URLSearchParams(location.search).get('cId');
    if(characterName == '' || characterName===null || serverId=='' || serverId===null){
      $("#searchBar").addClass('show');
      $("select[name='server']").val('prey');
      $("input[name='name']").val('');
    } else {
      $("select[name='server']").val(serverId)
      $("input[name='name']").val(characterName);
      characterName = decodeURIComponent(characterName);
      Search();
    }
  } catch(e){
    toast("danger","캐릭터명을 다시 입력해주세요");
    sessionStorage.clear();
    return $("#searchBar").addClass('show');
  }
});

function redirectSearch(){
  return;
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
  if(apioff || localStorage.getItem('serverState')==="0"){
    return toast("warning","DFGEAR 서버 점검");
  }
  if($("#searchBar").hasClass('show')){
    serverId = $("select[name='server']").val();
    characterName = $("input[name='name']").val();
    characterId = '';
  }
  if(characterName.length<1){
    toast("danger","캐릭터명을 입력해주세요");
    $("#searchBar").addClass('show');
    return $("#characterName").focus();
  }
  if(serverId==='adventure' || serverId==='all'){
    sessionStorage.setItem('sId',serverId);
    sessionStorage.setItem('cName',characterName);
    return location.href="./"; //?sId=${serverId}&cName=${encodeURIComponent(characterName)}
  }
  nowDate = moment().subtract(1,"m").format("YYYYMMDDTHHmm");
  loadingToggle();
  $('.resultData').removeClass("show");
  $("#mistList").html("");
  searchCharacterTimeline(serverId, characterName, nowDate, characterId, function(result, err){
      try{
          sessionStorage.clear();
          $("#searchBar").addClass('show');
          timeLineList = [];
          if(err){
              loadingToggle(false);
              $("#btn_epicList").removeClass("show");
              $('.resultData').removeClass("show");
              $("#mistList").html("");
              if(result.responseText && result.responseText.indexOf("APIKEY") > -1){
                  return toast("danger","에러 발생_APIKEY 오류");
              } else if(result.responseText && result.responseText.indexOf("MISSING_PARAMETER") > -1){
                  return toast("danger","에러 발생_입력값 오류");
              } else if(result.responseText && result.responseText.indexOf("NO_CHARACTER") > -1){
                  return toast("danger","일치하는 캐릭터 정보가 없습니다");
              } else if(result.responseText && result.responseText.indexOf("SYSTEM_INSPECT") > -1){
                apioff=true;
                return alert("DNF점검");
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
                      return toast("danger","에러 발생_APIKEY오류");
                  } else if(result.error.message=="SYSTEM_INSPECT"){
                      apioff=true;
                      return toast("danger","DNF점검");
                  } else {
                      console.log(result);
                      return toast("danger","에러 발생_캐릭터정보오류");
                  }
              } else if(result.rows.length>0){
                  data_List(result.timeline);
                  makeCardView(result.rows[0]);
                  $('#btn_timelineAll').attr('disabled',false);
              } else {
                  loadingToggle(false);
                  $("#btn_epicList").removeClass("show");
                  $('.resultData').removeClass("show");
                  $("#mistList").html("");
                  return toast("danger","일치하는 캐릭터 정보가 없습니다");
              }
          }
      } catch(chinfoErr){
          sessionStorage.clear();
          console.log(chinfoErr);
          loadingToggle(false);
          $("#btn_epicList").removeClass("show");
          $("#searchBar").addClass('show');
          $('.resultData').removeClass("show");
          $("#mistList").html("");
          if(chinfoErr==="NO_CHARACTER"){
              return toast("danger","일치하는 캐릭터 정보가 없습니다");
          } 
          return alert("에러 발생");				
      }
  })
}
function loadingToggle(toe=true) {
  if(toe){
    $('#loadingScreen').css('height',$(document).height())
    $('#loadingScreen').addClass('active'); 
    $("#btn_search").addClass("disabled");
  } else {
    $('#loadingScreen').removeClass('active'); 
    $("#btn_search").removeClass("disabled");
  }
}
function makeCardView(character){
    try{
      $(".characterView").html("");
      $(".characterView").attr('data-cId',character.characterId);
      $(".characterView").attr('data-sId',character.serverId);
      let html =`<img src="https://img-api.neople.co.kr/df/servers/${character.serverId}/characters/${character.characterId}/" class="card-img-top" alt="...">
        <div class="card-body"> <span id="cName" class="card-text">${character.characterName}</span>
          <p id="aName" class="card-text">${character.adventureName}</p>`;
          // if(character.ranking && character.ranking.ranking!=undefined){
          //   $("#rankingCard").css('display','flex');
          //   $("#ranking").text(`${character.ranking.ranking} / ${character.ranking.cnt} (상위 ${parseFloat(character.ranking.ranking/character.ranking.cnt*100).toFixed(1)}%)`);
          // } else {
          //   $("#rankingCard").css('display','none');
          // }
          html +=`<span class="card-text">중재자 에픽 : ${character.total}</span>
          <span class="card-text">미스트 기어 획득 : ${character.mist}</span>
          <span class="card-text">└ 카드 보상 : ${character.card}</span>
          <p class="card-text">항아리 : ${character.pot}</p>
          <span class="card-text small">최근 업데이트</span>
          <span class="card-text small">${moment().format("YYYY-MM-DD HH:mm:ss")}</span>
        </div>`;
      $(".characterView").append(html);
    } catch (e) {
      console.log(e);
    }
}
function data_List(Array) {
  let mistGear=[];
  let mistGearCount=1;
  let html=`<div class="card-header">미스트기어 리스트</div><ul class="list-group list-group-flush">`;
  Array.forEach((element,i) => {
    if(element.mistGear){
      mistGear.push({code:element.code, missCount : mistGearCount, count:element.count ? element.count : i+1, itemName:element.itemName, get: element.code==504 || element.code==510 ? "" : element.channel });
      mistGearCount = 1;
    } else {
      mistGearCount++;
    }
  });
  timeLineList = Array
  // timeLineList = newArray;
  if(mistGear.length>0){
    mistGear.forEach(e => {
      html +=`<li class="list-group-item"><img src="https://img-api.neople.co.kr/df/items/${itemList[e.itemName]}">${e.itemName}`;
      if(e.code == 504){
        html +=` <span class="badge bg-warning rounded-pill">항아리</span></li>`
      } else if(e.code == 510){
        html +=` <span class="badge bg-warning rounded-pill">봉인된</span></li>`
      } else {
        html +=`, ${e.code==505 ? e.count+"번째 에픽": e.get}<span class="badge bg-warning rounded-pill">${e.code==505 ? "드랍" : "카드"}</span></li>`
      }
    })
    html += `</ul>`;
  } else {
    html +=`<li class="list-group-item"> where is Mist Gear</li></ul>`;
  }
  $("#mistList").append(html);  
  $(".resultData").addClass("show");
  $("#searchBar").addClass('show');
  $("#notice").addClass('show');
  loadingToggle(false);
  $("input[name='name']").val("");
}
function searchCharacterTimeline(serverId, characterName, endDate, characterId='', callback){
  try{
    let data = { sId: serverId, cName: encodeURIComponent(characterName), endDate: endDate, cId:characterId };
    $.ajax({
      url: api+'/character/Timeline',
      type: 'get',
      timeout: 30000,
      processData:true,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
        xhr.setRequestHeader("gear","dfgear");
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