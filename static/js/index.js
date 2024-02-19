let apioff=false;
let timeLineList = [];
let nowDate = moment().format("YYYYMMDDTHHmm");
let serverId='';
let characterName='';
let aggreInterval;
let characterId='';
let mistMapChart;
$(document).ready(function() {
  nowDate = moment().format("YYYYMMDDTHHmm");  
  try{
    if(new URLSearchParams(location.search).get('sId')){
      serverId = new URLSearchParams(location.search).get('sId');
    } else {
      serverId = sessionStorage.getItem("sId")
    }
    if(new URLSearchParams(location.search).get('cName')){
      characterName = new URLSearchParams(location.search).get('cName');
    } else {
      characterName = sessionStorage.getItem("cName")
    }
    // characterName = sessionStorage.getItem("cName") ? sessionStorage.getItem("cName") : new URLSearchParams(location.search).get('cName');
    if(characterName != null && characterName !== '' && serverId != null){
      $("select[name='server']").val(serverId)
      $("input[name='name']").val(characterName);
      if(serverId=='adventure' || serverId =='all'){
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
  try{
    let rArr = localStorage.getItem('recent');
    if(rArr != undefined){
      rArr = JSON.parse(rArr);
    } else {
      rArr = [];
    }
    if(rArr.length>0){
      $('.recentBox').addClass('active');
      recentView(rArr);
    }    
  } catch(er){
    $('.recentBox').removeClass('active');
  }
  $("#characterName").keyup(function () {
      if (window.event.keyCode == 13) {
          Search();
      }
  });
  $("#characterName").focus(function (ev) {
    if($(".recentBox").hasClass('active')){
      return;
    }
    let rArr = localStorage.getItem('recent');
    if(rArr != undefined){
      rArr = JSON.parse(rArr);
    } else {
      rArr = [];
    }
    if(rArr.length>0){
      $('.recentBox').addClass('active');
      recentView(rArr);
    } 
  });
  $(document).on("click", "#btn_search", function() {
    Search();
  });
  $(document).on("click", "#btn_lightmode", function(ev) {
    ligthModeChange(ev.target);
  })

  $(document).on("click", "#advenTotal", function() {
    if($("select[name='server']").val() != "adventure") {
      return;
    }
    var cName = $("input[name='name']").val();
    let content = `https://dfgear.xyz/?sId=adventure&cName=${encodeURIComponent(cName)}`;
    navigator.clipboard.writeText(content)
    .then(() => {
      toast("info","링크 복사됨");
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
    $('#btn_mistList').removeClass('show');
  })
  $(document).on("click", "#btn_mistList", function() {
    $('.modal-body').animate( { scrollTop : 0 }, 200 );
  })
  $(document).on("click", ".r-list > div > label", function(e) {
    console.log(e);
    let index = $(e.target).attr('data-num');
    recentDelete(parseInt(index));
  })
  $(window).resize(function(){
    $('#loadingScreen').css('height',$(document).height())
  })
  // 집계 불러오기
  getAggregate();
  aggreInterval = setInterval(() => {
    getAggregate();
  }, 15*60*1000);
  var slide = setInterval(() => {
    $('.rotate.show').fadeOut(1000,function(){
      $('.rotate').toggleClass('show');
      $('.rotate.show').fadeIn(500);
    });
  }, 15*1000);
  // 미기 정가 계산
  let init = new Date('2024-01-11'); // 950개
  let today = moment();
  let now = new Date(today.format("YYYY-MM-DD"));
  let btwDay = (now - init) / (1000 * 3600 * 24);
  let week = btwDay== 0 ? 1 : Math.floor(btwDay/7) + 1;
  let own = week* 90 + 950; // 20 + 20 + 30 + 20
  let prove =own;
  // // 월 마다 45개 해방
  var proof = moment('2023-11-01 06:00:00');
  var proofStone = (today.diff(proof,'months')+1)*45;
  prove = own + proofStone;
  $('#remainVal').html(`${own} (${prove})/2000`);  
  $('#remainWeek').html(`주간 부유석`);
  
  let percent = parseFloat(own / 20);
  let provPer = parseFloat(prove / 20);
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
  characterName = characterName.trim();
  if(characterName.length<1){
      toast("danger","캐릭터명을 입력해주세요.");
      return $("#characterName").focus();
  }
  nowDate = moment().subtract(1,"m").format("YYYYMMDDTHHmm");
  $('.resultData').removeClass("show");
  $("#characterList").html("");
  $("#advenResult").removeClass("show");
  $('#btn_mistList').removeClass('show');
  if(serverId==='adventure'){
    if(characterName.length>29){
      toast("danger","모험단명은 30자리 이내로 입력해주세요");
      $("#searchBar").addClass('show');
      return $("#characterName").focus();
    }
    sessionStorage.setItem('cName',characterName);
    return location.href=`./adventure?cName=${encodeURIComponent(characterName)}`;
  } else if(serverId==='all'){
    if(characterName.length>20){
      toast("danger","캐릭터명은 20자리 이내로 입력해주세요");
      $("#searchBar").addClass('show');
      return $("#characterName").focus();
    }
    loadingToggle();
    searchAll(characterName, function(result, err){
      sessionStorage.clear();
      $("#searchError").removeClass('show');
      try{
        if(err){
          loadingToggle(false);
          if(result.responseText){
            $("#searchError").text(`"${characterName}" 검색 결과`).addClass('show');
            if(result.responseText.indexOf("MISSING_PARAMETER") > -1){
              return toast("danger","에러 발생_입력값 오류");
            } else if(result.responseText.indexOf("TOO_LONG_NAME") > -1){
              return toast("danger","이름은 20자리 이내로 검색해주세요");
            } else if(result.responseText.indexOf("NO_CHARACTER") > -1){
              return toast("danger","일치하는 캐릭터 정보가 없습니다");
            } else {
              $("#searchError").removeClass('show');
              return alert("관리자에게 문의");
            }
          } else {
            console.log(err); console.log(result);
            return alert("에러 발생");
          }
        } else if(result.rows && result.rows.length>0){
          makeCardView(result.rows,false);
          $('.recentBox').removeClass('active'); // 최근검색 숨김처리
        } else {
          loadingToggle(false);
          $("#advenResult").removeClass("show");
          $('#btn_mistList').removeClass('show');
          $("#searchError").text(`"${characterName}" 검색 결과`).addClass('show');
          return toast("danger","일치하는 캐릭터 정보가 없습니다");
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
    if(characterName.length>20){
      toast("danger","캐릭터명은 20자리 이내로 입력해주세요");
      $("#searchBar").addClass('show');
      return $("#characterName").focus();
    }
    loadingToggle(false);
    sessionStorage.setItem('sId',serverId);
    sessionStorage.setItem('cName',characterName);
    return location.href="./character"; //?sId=${serverId}&cName=${encodeURIComponent(characterName)}`;
  }
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
function makeCardView(characters,adventure=true){
  try{
    let total=0;
    let mist=0;
    $("#characterList").html("");
    characters.forEach(character => {
      try{
        let html =`<div class="card characterView" data-cId="${character.characterId}" data-sId="${character.serverId}" onclick="location.href='/character?sId=${character.serverId}&cId=${character.characterId}&cName=${encodeURIComponent(character.characterName)}';">
          <img src="https://img-api.neople.co.kr/df/servers/${character.serverId}/characters/${character.characterId}/" class="card-img-top" alt="...">
          <div class="card-body">`;
          html+=`<span class="card-text cName uselct">${character.characterName}</span>            
          <p class="card-text jobserver">${character.jobGrowName} <span></span> ${convertServer(character.serverId)}</p>`;
          html +=`<span class="card-text uselct">중재자 에픽 : ${character.total}</span>
            <p class="card-text uselct">미스트 기어 획득 : ${character.mist+character.pot}</p>
            <span class="card-text small">최근 업데이트</span>
            <span class="card-text small">${character.uptime==null ? '-' : character.uptime}</span>
          </div>
        </div>`;
        total += parseInt(character.total);
        mist += parseInt(character.mist) + parseInt(character.pot);
        $("#characterList").append(html);
      } catch (e) {
        console.log(e);
      }
    })
    if(adventure){
      $("#advenTotal").html(`중재자 에픽 : ${total}, 미스트 기어 : ${mist}`);
    } else {
      $("#advenTotal").html(`${characters[0].characterName} 조회 결과`);
    }
    $("#advenResult").addClass("show");
    loadingToggle(false);
  } catch(e){
    loadingToggle(false);
    console.log(e);
  }
}
// function makeModalData(aName, mistGear){
//   $("#mistList").html('');
//   $("#mistModalLabel").html(`"${aName}" 미스트기어 리스트`);
//   let html=`<div class="card-header">${$('#advenTotal').text()}</div><ul class="list-group list-group-flush">`;
//   if(mistGear.length>0){
//     mistGear.forEach(e => {
//       html +=`<li class="list-group-item"><img src="https://img-api.neople.co.kr/df/items/${itemList[e.itemName]}">${e.characterName} | ${e.itemName} | ${e.channelName} | ${e.date}</li>`
//     })
//     html += `</ul></div>`;
//   } else {
//     html +=`<li class="list-group-item"> where is Mist Gear</li></ul></div>`;
//   }
//   $("#mistList").append(html);
// }
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
function searchAll(characterName, callback){
  try{
    let data = { cName: encodeURIComponent(characterName)};
    $.ajax({
      url: api+'/all',
      type: 'get',
      timeout: 60000,
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
function getAggregate(){
  let aggregate = localStorage.getItem('aggregate');
  if(aggregate != null){
    try {
      let result = JSON.parse(aggregate);
      if(result.update <= moment().subtract(15,"m").format("YYYYMMDDTHHmm")){
        $.ajax({
          url: api+'/mistGearAggregate',
          type: 'get',
          timeout: 30000,
          processData:true,
          beforeSend: function (xhr) {
            xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
            xhr.setRequestHeader("gear","dfgear");
          },
          success: function(result, textStatus, jqXHR){
            try {
              localStorage.setItem('serverState', "1");
              setAggregate(result);
              localStorage.setItem('aggregate',JSON.stringify(result));
            } catch {
              $('#topThreeMist').remove();
            }
          },
          error: function(jqXHR, error) {
            clearInterval(aggreInterval);
            apioff=true;
            localStorage.setItem('serverState', "0");
            toast("danger","통계를 불러오는데 실패했습니다.");
          }
        });
      } else {
        setAggregate(result);
      }      
    } catch {
      $('#topThreeMist').remove();
    }
  } else {
    $.ajax({
      url: api+'/mistGearAggregate',
      type: 'get',
      timeout: 15000,
      processData:true,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
        xhr.setRequestHeader("gear","dfgear");
      },
      success: function(result, textStatus, jqXHR){
        try {
          localStorage.setItem('serverState', "1");
          setAggregate(result);
          localStorage.setItem('aggregate',JSON.stringify(result));
        } catch {
          $('#topThreeMist').remove();
        }
      },
      error: function(jqXHR, error) {
        clearInterval(aggreInterval);
        apioff=true;
        localStorage.setItem('serverState', "0");
        toast("danger","통계를 불러오는데 실패했습니다.");
      }
    });
  }
}
function setAggregate(result){
  try {
    // $('#top1c').text(result.topChannel[0].replace('_',' Ch.'));
    // $('#top2c').text(result.topChannel[1].replace('_',' Ch.'));
    // $('#top3c').text(result.topChannel[2].replace('_',' Ch.'));
    //정미기
    $('#top1r').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topRefined[0].itemName]}">${result.topRefined[0].itemName} <span class="badge bg-warning rounded-pill">${result.topRefined[0].cnt}</span>`);
    $('#top2r').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topRefined[1].itemName]}">${result.topRefined[1].itemName} <span class="badge bg-warning rounded-pill">${result.topRefined[1].cnt}</span>`);
    $('#top3r').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topRefined[2].itemName]}">${result.topRefined[2].itemName} <span class="badge bg-warning rounded-pill">${result.topRefined[2].cnt}</span>`);
    $('#top4r').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topRefined[3].itemName]}">${result.topRefined[3].itemName} <span class="badge bg-warning rounded-pill">${result.topRefined[3].cnt}</span>`);
    $('#top5r').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topRefined[4].itemName]}">${result.topRefined[4].itemName} <span class="badge bg-warning rounded-pill">${result.topRefined[4].cnt}</span>`);
    // 일일 미기획득량
    $('#dailyCount').html(`오늘은 ${result.dailyCount}개`);
    let rate = parseFloat(result.dropRate.mist/result.dropRate.total);
    let per = parseInt(1/rate);
    let rateString = (rate*100).toFixed(3);
    $('#dailyRate').html(`${per}에픽 당 1개 (${rateString}%)`);
    $('#maxCount').html(`${result.maxCount}개 가지고 있습니다.`);
    $('#minCount').html(`어느 캐릭터는 중재자픽 ${result.minCount} 개를 획득하는 동안 미스트기어를 획득하지 못했습니다.`);
    
    $('#top1').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topMist[0].itemName]}">${result.topMist[0].itemName} <span class="badge bg-warning rounded-pill">${result.topMist[0].cnt}</span>`);
    $('#top2').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topMist[1].itemName]}">${result.topMist[1].itemName} <span class="badge bg-warning rounded-pill">${result.topMist[1].cnt}</span>`);
    $('#top3').html(`<img src="https://img-api.neople.co.kr/df/items/${itemList[result.topMist[2].itemName]}">${result.topMist[2].itemName} <span class="badge bg-warning rounded-pill">${result.topMist[2].cnt}</span>`);
    if(result.notice && result.notice.title !=undefined && result.notice.title !=''){
      $("#noticeTitle").text(result.notice.title);
      $("#noticeContent").html(result.notice.content ? result.notice.content : '');
      if(result.notice.link !='' && result.notice.link != null){
        $("#noticeContent").append(`<a href="${result.notice.link}" target="_blank">상세보기</a>`)
      }
      $("#notice").addClass('active');
    }
    if(result.mistMap && result.mistMap.length>0){
      let colorPalet = ['#5EC273','#9ECD6B','#D5D670','#FFDD82','#C4A64E','#999999'];
      let labels=[];
      let data = [];
      result.mistMap.forEach(e=> {
        labels.push(e.mist==5 ? "5개 이상":`${e.mist}개`);
        data.push(e.cnt);
      })
      makeChart("chart_mistMap","pie","미스트기어 획득분포",labels,data,colorPalet,mistMapChart);
    }
  } catch {
    $('#topThreeMist').remove();
  }
}