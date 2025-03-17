class channelName {
	constructor(props) {
    let value = props.value;
    const propId = `${props.columnInfo.name}${props.rowKey}`;
    let img = props.grid.store.data.rawData[props.rowKey].imgUrl;
		const el = document.createElement('div');
    const el1 = document.createElement('div');
    const el2 = document.createElement('div');
    const chImg = document.createElement('img');
    el.className = 'flex flex-row gap-2';
    el1.className = 'g-chdiv';
    el2.className = 'g-chName g-hover-text';
    chImg.id = `img_${propId}`;
    chImg.className = 'g-chimg';
    if(channelMap[value]){
      chImg.style = 'display: ;'
      chImg.setAttribute('src', channelMap[value]);
    } else if(img && props.grid.store.data.rawData[props.rowKey].stmName == value){
      chImg.style = 'display: ;'
      chImg.setAttribute('src', img);
    } else {
      chImg.style = 'display: none;'
    }
    el1.append(chImg);
    el2.innerText = value;
		el.appendChild(el1);
    el.appendChild(el2);
    this.el = el;
	}
  getElement() {
    return this.el;
  }
}
class characterIcon {
  constructor(props) {
    let value = props.value;
    const propId = `${props.columnInfo.name}${props.rowKey}`;
    let cId = props.grid.store.data.rawData[props.rowKey].cId;
    let sId = props.grid.store.data.rawData[props.rowKey].sId;
    let jc = props.grid.store.data.rawData[props.rowKey].jobCss;
		const el = document.createElement('div');
    const el1 = document.createElement('div');
    const el2 = document.createElement('div');
    const chIcon = document.createElement('div');
    el.className = 'flex flex-row gap-2';
    el1.className = 'g-chdiv';
    el2.className = 'g-chName g-hover-text';
    chIcon.id = `img_${propId}`;
    chIcon.className = `g-chimg smallIcon ${jc}`;
    if(characterMap[value]){
      chIcon.style = `display: ; background-image: url('${characterMap[value]}?zoom=1')`;
    } else if(cId && props.grid.store.data.rawData[props.rowKey].characterName == value){
      chIcon.style = `display: ; background-image: url('https://img-api.neople.co.kr/df/servers/${sId}/characters/${cId}?zoom=1')`;
    } else {
      chIcon.style = 'display: none;'
    }
    el1.append(chIcon);
    el2.innerText = value;
		el.appendChild(el1);
    el.appendChild(el2);
    this.el = el;
	}
  getElement() {
    return this.el;
  }
}
class colHover {
	constructor(props) {
	  const div = document.createElement('div');
	  const span = document.createElement('span');
	  div.className = 'tui-grid-cell-content';
	  span.className = 'g-hover-text';
	  span.innerText = props.value;
	  div.append(span);
	  this.el = div;
	//   this.render(props);
	}
  
	getElement() {
	  return this.el;
	}
  }