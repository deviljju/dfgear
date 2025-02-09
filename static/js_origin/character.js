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
  $(document).on("click", "#btn_lightmode", function(ev) {
    ligthModeChange(ev.target);
  })
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
  $(document).on("click", ".potList", function() {
    if($(".card-header.potList").hasClass('open')){
      $('.card-header.potList').removeClass('open');
      $('ul.pots').removeClass('show');
    } else {
      $('.card-header.potList').addClass('open');
      $('ul.pots').addClass('show');
    }
  });
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
        let tag="r_legnd";
        if(element.itemRarity=="에픽"){
          tag = "r_epic";
        } else if(element.itemRarity=="태초") {
          tag = "r_begin";
        }
        var html= `<div class="${tag}">${element.date} | ${element.mistGear || element.begin ? "*" : ""} ${element.itemName} | ${element.channel}</div>`
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
      url: api+'/character/v2/TimelineAll',
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
            let tag="r_legnd";
            if(element.itemRarity=="에픽"){
              tag = "r_epic";
            } else if(element.itemRarity=="태초") {
              tag = "r_begin";
            }
            var html= `<div class="${tag}">${element.date} | ${element.mistGear ? "*" : ""} ${element.itemName} | ${element.channel}</div>`
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
    sessionStorage.setItem('sId','adventure');
    sessionStorage.setItem('cName',$(ev.target).text());
    return location.href=`https://dfgear.xyz/adventure?cName=${encodeURIComponent($(ev.target).text())}`;
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
    characterName = characterName.trim();
    characterId = '';
  }
  if(characterName.length<1){
    toast("danger","캐릭터명을 입력해주세요");
    $("#searchBar").addClass('show');
    return $("#characterName").focus();
  }
  if(serverId==='adventure'){
    if(characterName.length>29){
      toast("danger","모험단명은 30자리 이내로 입력해주세요");
      $("#searchBar").addClass('show');
      return $("#characterName").focus();
    }
    sessionStorage.setItem('cName',characterName);
    return location.href=`./adventure?cName=${encodeURIComponent(characterName)}`;
  } else if(serverId==='all'){
    sessionStorage.setItem('sId',serverId);
    sessionStorage.setItem('cName',characterName);
    return location.href="./"; //?sId=${serverId}&cName=${encodeURIComponent(characterName)}
  }
  if(characterName.length>20){
    toast("danger","캐릭터명은 20자리 이내로 입력해주세요");
    $("#searchBar").addClass('show');
    return $("#characterName").focus();
  }
  nowDate = moment().subtract(1,"m").format("YYYYMMDDTHHmm");
  loadingToggle();
  $('.resultData').removeClass("show");
  $("#mistList").html("");
  searchCharacterTimeline(serverId, characterName, nowDate, characterId, function(result, err){
      try{
          sessionStorage.clear();
          $("#searchBar").addClass('show');
          $("#searchError").removeClass('show');
          timeLineList = [];
          if(err){
              loadingToggle(false);
              $("#btn_epicList").removeClass("show");
              $('.resultData').removeClass("show");
              $("#mistList").html("");
              if(result.responseText){
                $("#searchError").text(`"${characterName}" 검색 결과`).addClass('show');
                if(result.responseText.indexOf("APIKEY") > -1){
                  return toast("danger","에러 발생_APIKEY 오류");
                } else if(result.responseText.indexOf("MISSING_PARAMETER") > -1){
                  return toast("danger","에러 발생_입력값 오류");
                } else if(result.responseText.indexOf("MISSING_SERVER") > -1){
                  return toast("danger","서버아이디가 잘못 입력되었습니다");
                } else if(result.responseText.indexOf("TOO_LONG_NAME") > -1){
                  return toast("danger","이름은 20자리 이내로 검색해주세요");
                } else if(result.responseText.indexOf("NO_CHARACTER") > -1){
                  return toast("danger","일치하는 캐릭터 정보가 없습니다");
                } else if(result.responseText.indexOf("NOT_FOUND_CHARACTER") > -1){
                  return toast("danger","캐릭터 정보를 찾을 수 없습니다");
                } else if(result.responseText.indexOf("DENY_CHARACTER") > -1){
                  return toast("danger","소유자의 요청으로 조회가 차단된 캐릭터 입니다");
                } else if(result.responseText.indexOf("SYSTEM_INSPECT") > -1){
                  apioff=true;
                  return alert("DNF점검");
                } else {
                  $("#searchError").removeClass('show');
                  return alert("관리자에게 문의");
                }
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
                  $("#searchError").text(`"${characterName}" 검색 결과`).addClass('show');
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
                  data_List(result);
                  recentApply(serverId,characterName,result.rows[0].characterId);
                  $('#btn_timelineAll').attr('disabled',false);
              } else {
                  loadingToggle(false);
                  $("#btn_epicList").removeClass("show");
                  $('.resultData').removeClass("show");
                  $("#mistList").html("");
                  $("#searchError").text(`"${characterName}" 검색 결과`).addClass('show');
                  return toast("danger","일치하는 캐릭터 정보가 없습니다");
              }
          }
      } catch(chinfoErr){
          sessionStorage.clear();
          console.error(chinfoErr);
          loadingToggle(false);
          $("#btn_epicList").removeClass("show");
          $("#searchBar").addClass('show');
          $('.resultData').removeClass("show");
          $("#mistList").html("");
          $("#searchError").text(`"${characterName}" 검색 결과`).addClass('show');
          if(chinfoErr==="NO_CHARACTER"){
            return toast("danger","일치하는 캐릭터 정보가 없습니다");
          } else if(chinfoErr ==="NOT_FOUND_CHARACTER"){
            return toast("danger","캐릭터 정보를 찾을 수 없습니다");
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
function makeCardView(character,mistObj={}){
    try{
      $(".characterView").html("");
      $(".characterView").attr('data-cId',character.characterId);
      $(".characterView").attr('data-sId',character.serverId);
      let html =`<img src="https://img-api.neople.co.kr/df/servers/${character.serverId}/characters/${character.characterId}/" class="card-img-top" alt="...">
        <div class="card-body"> <span id="cName" class="card-text uselct">${character.characterName}</span>
          <div style="text-align: -webkit-center"><p id="aName" class="card-text uselct" style="width:max-content;margin-bottom: 1rem !important;">${character.adventureName}</p></div>`;
          if(character.many>0){
            try{
              let lucky = character.many / character.rankingTotal * 100;
              if(lucky>100){
                lucky = 100;
              } else {
                lucky = lucky.toFixed(2);
              }
              html +=`<p class="card-text uselct rank">획득 랭킹 : ${numberFmt(character.many)}위(상위 ${lucky}%)</p>`;
            } catch(e){
              console.log(e);
            }
          }
          html +=`<span class="card-text uselct">태초 획득 : ${character.begin}</span>
          <span class="card-text uselct">에픽 획득 : ${character.epic}</span>          
          <span class="card-text uselct">레전더리 획득 : ${character.legnd}</span>
          <span class="card-text small">최근 업데이트</span>
          <span class="card-text small">${moment().format("YYYY-MM-DD HH:mm:ss")}</span>
          <button id="btn_epicList" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#epicModal" aria-controls="epicModal">상세보기</button>
          <a href="https://dundam.xyz/character?server=${character.serverId}&key=${character.characterId}" target="_blank"><img src="https://dundam.xyz/007.png" alt="던담 바로가기" style="height:2.375rem"/></a>
          
        </div>`;
      $(".characterView").append(html);
      if(character.equipment && character.equipment.length > 0){
        $("#equipList").addClass("show");
        character.equipment.forEach(equip => {
          $(`#${equip.slotId}`).attr("src",`https://img-api.neople.co.kr/df/items/${equip.itemId}`);
        });
      }
    } catch (e) {
      console.log(e);
    }
}
function data_List(result) {
  let mistGear=[];
  let beginHtml = `<div class="card-header begin">태초 리스트</div><ul class="list-group list-group-flush">`;
  let html=`<div class="card-header">에픽 리스트</div><ul class="list-group list-group-flush">`;
  let potHtml = `<div class="card-header potList">항아리 리스트</div><ul class="list-group list-group-flush pots">`;
  let refHtml = ``;
  let setItem = {};
  result.timeline.forEach((element,i) => {
    if(element.itemRarity == "에픽"){
      mistGear.push({code:element.code, itemName:element.itemName, get: element.channel, date:element.date, itemId: element.itemId, r:"e"});
    } else if(element.itemRarity =="태초"){
      mistGear.push({code:element.code, itemName:element.itemName, get: element.channel, date:element.date, itemId: element.itemId, r: "b" });
    }
    if(element.detail.setItemName != null && element.detail.setItemName != "") {
      if(setItem[element.detail.setItemName] == undefined) { setItem[element.detail.setItemName] = [{ itemName:element.itemName, itemId: element.itemId, itemRarity: element.detail.itemRarity, r: changeorderKey("r", element.detail.itemRarity), t: changeorderKey("t", element.detail.itemType)}]; }
      else { setItem[element.detail.setItemName].push({ itemName:element.itemName, itemId: element.itemId, itemRarity: element.detail.itemRarity, r: changeorderKey("r", element.detail.itemRarity), t: changeorderKey("t", element.detail.itemType)}) }
    }
  });
  timeLineList = result.timeline;
  let countObj={
    begin:0,
    epic:0,
    pot:0,
    total:mistGear.length
  }
  if(mistGear.length>0){
    mistGear.forEach((e,i) => {
      if(e.r==="b"){
        countObj.begin++;
        countObj.total--;
        beginHtml +=`<li class="list-group-item"><dd>${countObj.begin}</dd><p title="${e.date}"><img src="https://img-api.neople.co.kr/df/items/${e.itemId}">${e.itemName}</p>`;
        if(e.code == 504){
          beginHtml +=` <span class="badge bg-warning rounded-pill">항아리&상자</span>`
        } else if(e.code == 507){
          beginHtml +=` <span class="badge bg-warning rounded-pill" title="${e.get}">레이드</span>`
        } else if(e.code == 513){
          beginHtml +=` <span class="badge bg-warning rounded-pill" title="${e.get}">카드</span>`;
        } else if(e.code == 515 || e.code == 516){
          beginHtml +=` <span class="badge bg-warning rounded-pill" title="${e.get}">초월</span>`;
        } else {
          beginHtml +=`, ${e.get}`;
        }
        beginHtml += `</li>`;
      } else if(e.code == 504){        
        potHtml += `<li class="list-group-item"><dd>${countObj.pot+1}</dd><p title="${e.date}"><img src="https://img-api.neople.co.kr/df/items/${e.itemId}">${e.itemName}</p></li>`;
        countObj.pot++;
      } else {
        let tempHtml = `<li class="list-group-item"><dd>${i+1-countObj.begin-countObj.pot}</dd><p title="${e.date}"><img src="https://img-api.neople.co.kr/df/items/${e.itemId}">${e.itemName}</p>`;
        if(e.code == 507){
          tempHtml +=`<span class="badge bg-warning rounded-pill">레이드</span>`
        } else if(e.code == 510){
          refHtml +=`<li class="list-group-item"><dd>-</dd><p title="${e.date}"><img src="https://img-api.neople.co.kr/df/items/${e.itemId}">${e.itemName}</p> <span class="badge bg-warning rounded-pill">${e.get}</span>`;
        } else if(e.code == 513){
          tempHtml +=` <span class="badge bg-warning rounded-pill">카드</span>`;
        } else if(e.code == 515 || e.code == 516){
          tempHtml +=` <span class="badge bg-warning rounded-pill">초월</span>`;
        }
        tempHtml += `</li>`;
        html += tempHtml;
      }
    })
    html += refHtml;
    html += `</ul>`;
    beginHtml += `</ul>`;
    potHtml += `</ul>`;
  } else {
    html +=`<li class="list-group-item"> 나만 운없어 </li></ul>`;
  }
  $("#mistList").append(beginHtml);
  $("#mistList").append(html);
  if(countObj.pot > 0){
    $("#mistList").append(potHtml);
  }
  $(".resultData").addClass("show");
  $("#searchBar").addClass('show');
  makeSetList(setItem);
  loadingToggle(false);
  makeCardView(result.rows[0],countObj);
  $("input[name='name']").val("");
}
function searchCharacterTimeline(serverId, characterName, endDate, characterId='', callback){
  try{
    let data = { sId: serverId, cName: encodeURIComponent(characterName), endDate: endDate, cId:characterId };
    $.ajax({
      url: api+'/character/v2/Timeline',
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
function makeSetList(setList){
  let dupSetItem = [];
  let countItemId = {};
  let setPoint = {};
  let pointArr = [];
  if(typeof(setList)=='object'){
    for (const key in setList) {
      if (setList.hasOwnProperty(key)) {
        setPoint[key] = { "partsPoint": [0,0,0,0,0,0,0,0,0,0,0], "addHtml": "", "total":0 };
        let sortArr = setList[key].sort((x, y) => {
          if (x.t !== y.t) {
            return x.t - y.t;
          }
          return x.r - y.r;
        });
        setPoint[key].addHtml += `<div class="card-header" id="${key.replace(/\s+/g, '')}">${key}</div><ul class="list-group list-group-flush"><li class="list-group-item">`;
        sortArr.forEach(e=>{
          if(dupSetItem.indexOf(e.itemId) < 0) {
            dupSetItem.push(e.itemId);
            countItemId[e.itemId] = 1;
            let point = pointCalc(e.r);
            if(setPoint[key].partsPoint[e.t-1] < point){
              setPoint[key].partsPoint[e.t-1] = point;
              setPoint[key].total += point;
            }            
            setPoint[key].addHtml += `<div title="${e.itemName}(${e.itemRarity})"><img class="setImg" src="https://img-api.neople.co.kr/df/items/${e.itemId}"><div id="s_${e.itemId}" class="itemCount"></div></div>`;
          } else {
            countItemId[e.itemId]++;
          }
        })
        pointArr.push({setName: key, total: setPoint[key].total })
        setPoint[key].addHtml += `</li></ul>`;
      }
    }
  }
  pointArr = pointArr.sort((x, y) => {
    return y.total - x.total;
  });
  $('#setItem *').remove();
  pointArr.forEach(set=>{
    // setHtml += setPoint[set.setName].addHtml;
    $("#setItem").append(setPoint[set.setName].addHtml);
    $(`#setItem > #${set.setName.replace(/\s+/g, '')}`).text(`${set.setName} (pt:${set.total}+@)`);
  })
  
  for (const itemId in countItemId) {
    if(countItemId[itemId] > 1){
      $(`#s_${itemId}`).text(`x${countItemId[itemId]}`);
    }
  }

}
function changeorderKey(type, word) {
  if(type=="t"){
    switch(word){
      case "머리어깨":
        return 1;
      case "상의":
        return 2;
      case "하의":
        return 3;
      case "벨트":
        return 4;
      case "신발":
        return 5;
      case "팔찌":
        return 6;
      case "목걸이":
        return 7;
      case "반지":
        return 8;
      case "보조장비":
        return 9;
      case "마법석":
        return 10;
      case "귀걸이":
        return 11;
      default:
        return 99;
    }
  } else if(type =="r") {
    switch(word){
      case "태초":
        return 1;
      case "에픽":
        return 2;
      case "레전더리":
        return 3;
      default:
        return 99;
    }
  }
}
function pointCalc(r){
  try{
    switch(r){
      case 1:
        return 265;
      case 2:
        return 215;
      case 3:
        return 165;
      default:
        return 0;
    }
  } catch(e){
    console.error(e);
    return 0;
  }  
}
