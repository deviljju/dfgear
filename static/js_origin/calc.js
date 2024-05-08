function weekThur(nowDate){
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth();
  const date = nowDate.getDate();
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month+1, 0);
  const firstDayOfWeek = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
  const lastDayOfweek = lastDate.getDay();
  const lastDay = lastDate.getDate();
  const firstWeekCheck = firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7;
  const lastWeekCheck = lastDayOfweek === 1 || lastDayOfweek === 2 || lastDayOfweek === 3;
  const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7);
  let weekNo = Math.ceil((firstDayOfWeek - 1 + date) / 7);
  if(weekNo === 1 && firstWeekCheck) weekNo = 'prev';
  else if(weekNo === lastWeekNo && lastWeekCheck) weekNo = 'next';
  else if(firstWeekCheck) weekNo = weekNo -1;  
  if(typeof(weekNo) == 'number' && weekNo>=4){
      if(lastDayOfweek<3){
          weekNo = 'next';
      } else if(weekNo === (lastWeekNo - (firstWeekCheck ? 1 : 0)) && lastDayOfweek !=3){
          weekNo = 'next';
      }
  }
  return weekNo;
};
function dayCalc(nowDate,stone){
  let own=parseInt(stone);
  let proofStone = 0;
  let weekend = nowDate.getDay();
  let nextAddDay = 4 - nowDate.getDay();
  if(nextAddDay<0){
      nextAddDay = 7-nextAddDay;
  }
  const newWeekCheck = weekend === 1 || weekend === 2 || weekend === 3;
  let nextWeek = new Date();
  nextWeek = new Date(nextWeek.setDate(nowDate.getDate()+nextAddDay));
  own = (newWeekCheck ? 1 : 0) * 130 + own; // 04.25 안개신+10
  let check = weekThur(nextWeek);
  if(check == 'next' || check === 5){
    proofStone += 45;
  }
  while(own+proofStone < 1000){
      nextWeek = new Date(nextWeek.setDate(nextWeek.getDate()+7)); // 다음 주 목요일
      own += 130;
      check = weekThur(nextWeek);
      if(check == 'next' || check === 5){
        proofStone += 45;
      }
  }
  const year = nextWeek.getFullYear();
  const month = nextWeek.getMonth();
  if((check == 'next' || check === 5) && own+proofStone-45<1000){    
    nextWeek = new Date(year, month+1, 1);
  } else if(own+proofStone-30<1000){
    nextWeek = new Date(nextWeek.setDate(nextWeek.getDate()+2));
  }
  return {date:nextWeek,stone:own+proofStone};
}