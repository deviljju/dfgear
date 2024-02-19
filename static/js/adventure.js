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
    serverId = 'adventure';
    var cn = new URLSearchParams(location.search).get('cName');
    characterName = cn ? cn : sessionStorage.getItem("cName");
    if(characterName != null && characterName !== ''){
      $("select[name='server']").val(serverId)
      $("input[name='name']").val(characterName);
      if(serverId=='adventure'){
        Search();
      }
    }
  } catch(e){
    console.log(e);
    $("select[name='server']").val('adventure')
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
    let content = `https://dfgear.xyz/adventure?cName=${encodeURIComponent(cName)}`;
    navigator.clipboard.writeText(content)
    .then(() => {
      toast("info","링크 복사됨");
    })
    .catch(err => {
      console.log('Something went wrong', err);
    }) 
  });
  $(document).on("click", ".row.title", function() {
    try{
      location.href='./';
    } catch(e){
      sessionStorage.clear();
      location.href='https://dfgear.xyz';
    }
  })
  $(document).on("click", "#btn_mistList", function() {
    $('.modal-body').animate( { scrollTop : 0 }, 200 );
  })
  $(document).on("click", ".r-list > div > label", function(e) {
    console.log(e);
    let index = $(e.target).attr('data-num');
    recentDelete(parseInt(index));
  })
  $(document).on("click", "#advenRefresh", function() {
    try{
      var cName = $("input[name='name']").val();
      if(cName.length<1){
        toast("danger","모험단명을 입력해주세요.");
        return $("#characterName").focus();
      }
      if(!confirm(`${cName} 모험단의 타임라인을 갱신하시겠습니까?`)){
        return;
      }

      loadingToggle();
      let characterList = $('.characterView');
      // for(let i=0; i< characterList.length; i++){
      //   let character = characterList[i];
      async function refresh(){
        try{
          let i=0;
          for (let character of characterList){
            let sId=$(character).attr('data-sid');
            let cId=$(character).attr('data-cid');
            let cN = $(character).children('div').children('.cName').text();
            await searchCharacterRefresh(sId,cId,cN,(i==characterList.length-1 ? true : false))
            .then((result)=>{
              if(result.code && result.code =='Already Refresh'){
                toast("info","해당 모험단은 2시간 이내에 갱신되었습니다.");
                throw "forescape";
              }
              if(result.row){
                let info = result.row;
                $(character).children('div').children('.mi').text(`미스트 기어 획득 : ${info.mist+info.pot}`);
                $(character).children('div').children('.to').text(`중재자 에픽 : ${info.total}`);
                $(character).children('div').children('.da').text(info.uptime);
              }
            }).catch(err=>{console.log(err);
              if(err.responseJSON.code && err.responseJSON.code =='Already Refresh'){
                toast("info","해당 모험단은 2시간 이내에 갱신되었습니다.");
                throw "forescape";
              } else {
                toast("info","해당 모험단 갱신에 오류가 발생했습니다. 관리자에게 문의주세요");
                throw "forescape";
              }
            })
            i++;
          }
        } catch(e){
          loadingToggle(false);
        }
        loadingToggle(false);
      }
      refresh();      
    } catch(e){
      sessionStorage.clear();
      console.log(e);
      loadingToggle(false);
    }
  });
  $(window).resize(function(){
    $('#loadingScreen').css('height',$(document).height())
  })
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
    loadingToggle();
    searchAdventure(characterName, function(result, err){
      sessionStorage.clear();
      $("#searchError").removeClass('show');
      try{
        if(err){
          loadingToggle(false);
          if(result.responseText){
            $("#searchError").text(`"${characterName}" 검색 결과`).addClass('show');
            if(result.responseText.indexOf("MISSING_PARAMETER") > -1){
              return toast("danger","에러 발생_입력값 오류");
            } else if(result.responseText.indexOf("NO_CHARACTER") > -1){
              return toast("danger","모험단에 소속된 캐릭터 정보가 없습니다");
            } else if(result.responseText.indexOf("TOO_LONG_NAME") > -1){
              return toast("danger","이름은 30자리 이내로 검색해주세요");
            } else {
              $("#searchError").removeClass('show');
              return alert("관리자에게 문의");
            }
          } else {
              console.log(err); console.log(result);
              return alert("에러 발생");
            }
        } else if(result.rows && result.rows.length>0){
          makeCardView(result.rows,true);
          recentApply(serverId,characterName,cId="");
          $('.recentBox').removeClass('active'); // 최근검색 숨김처리
          // if(result.mist && result.mist.length>0){  //미기리스트 모달
          //   mistCount = result.mist.length;
          //   $('#btn_mistList').addClass('show');
          //   makeModalData(characterName, result.mist);
          // }
        } else {
          loadingToggle(false);
          $("#advenResult").removeClass("show");
          $('#btn_mistList').removeClass('show');
          $("#searchError").text(`"${characterName}" 검색 결과`).addClass('show');
          return toast("danger","모험단에 소속된 캐릭터 정보가 없습니다.");
        }
      } catch(e){
        sessionStorage.clear();
        loadingToggle(false);
        if(e==="NO_CHARACTER"){
          return toast("danger","모험단에 소속된 캐릭터 정보가 없습니다.");
        } 
        return alert("에러 발생");
      }
    })
  } else if(serverId==='all'){
    if(characterName.length>20){
      toast("danger","캐릭터명은 20자리 이내로 입력해주세요");
      $("#searchBar").addClass('show');
      return $("#characterName").focus();
    }
    loadingToggle();
    searchAll(characterName, function(result, err){
      sessionStorage.clear();
      try{
        if(err){
          loadingToggle(false);
          if(result.responseText){
            if(result.responseText.indexOf("MISSING_PARAMETER") > -1){
              return toast("danger","에러 발생_입력값 오류");
            } else if(result.responseText.indexOf("TOO_LONG_NAME") > -1){
              return toast("danger","이름은 20자리 이내로 검색해주세요");
            } else if(result.responseText.indexOf("NO_CHARACTER") > -1){
              return toast("danger","일치하는 캐릭터 정보가 없습니다");
            } else {
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
          html +=`<span class="card-text uselct to">중재자 에픽 : ${character.total}</span>
            <p class="card-text uselct mi">미스트 기어 획득 : ${character.mist+character.pot}</p>
            <span class="card-text small">최근 업데이트</span>
            <span class="card-text small da">${character.uptime==null ? '-' : character.uptime}</span>
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
function makeModalData(aName, mistGear){
  $("#mistList").html('');
  $("#mistModalLabel").html(`"${aName}" 미스트기어 리스트`);
  let html=`<div class="card-header">${$('#advenTotal').text()}</div><ul class="list-group list-group-flush">`;
  if(mistGear.length>0){
    mistGear.forEach(e => {
      html +=`<li class="list-group-item"><img src="https://img-api.neople.co.kr/df/items/${itemList[e.itemName]}">${e.characterName} | ${e.itemName} | ${e.channelName} | ${e.date}</li>`
    })
    html += `</ul></div>`;
  } else {
    html +=`<li class="list-group-item"> where is Mist Gear</li></ul></div>`;
  }
  $("#mistList").append(html);
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
function searchCharacterRefresh(serverId, characterId, characterName='',last=false){
  return new Promise((resolve, reject)=>{
    try{
      let data = { sId: serverId, cName: encodeURIComponent(characterName), cId:characterId, last:last?1:0 };
      $.ajax({
        url: api+'/character/TimelineRefresh',
        type: 'get',
        timeout: 60000,
        processData:true,
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
          xhr.setRequestHeader("gear","dfgear");
        },
        data: data,
        success: function(result){
          resolve(result,null);
        },
        error: function(jqXHR, error) {
          reject(jqXHR,error);
        }
      });
    } catch(e){
      sessionStorage.clear();
      console.log(e);
    }
  })
}
