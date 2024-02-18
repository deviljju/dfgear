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
    case "adventure": return "모험단";
  }
  return "서버에러";
}
function recentApply(serverId,characterName,cId=""){
  try{
    let rArr = localStorage.getItem('recent');    
    if(rArr != undefined && rArr != null){
      if(rArr.indexOf(`"cName":"${characterName}","sId":"${serverId}"`)>-1){
        return;
      }
      rArr = JSON.parse(rArr);      
    } else {
      rArr = [];
    }
    if(rArr.length>=6){
      rArr.shift();
    }
    rArr.push({cId:cId,cName:characterName,sId:serverId});
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
function ligthModeChange(btn){
  let theme = localStorage.getItem('theme');
  if(theme == undefined || theme===''){
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if(theme ==='dark'){
    theme = 'light';
  } else {
    theme = 'dark';
  }
  localStorage.setItem('theme',theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
  btn.className = `btn btn-${theme=='light' ? 'secondary' : 'light'}`;
  btn.innerHTML = theme === 'dark' ? '라이트모드' : '다크모드';
}
function recentView(rArr){
  $('.r-list > *').remove();
  rArr.forEach((element,i) => {
    $('.r-list').append(`<div class="r-element"><div class="ndrag"><span>${convertServer(element.sId)}</span><div onclick="recentSearch({'sId':'${element.sId}','cId':'${element.cId}','cName':'${element.cName}'})">${element.cName}</div></div><label data-num="${i}">x</label></div>`);
  });
}
(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
      theme = 'dark';
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
    let btn =  document.getElementById("btn_lightmode");
    btn.className = `btn btn-${theme=='light' ? 'secondary' : theme}`;
    btn.innerHTML = theme === 'dark' ? '라이트모드' : '다크모드';
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()