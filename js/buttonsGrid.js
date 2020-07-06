

class ButtonGrid {
  constructor() {
    this.btnIndexList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.btnBackgroundColors = ['#2b8ead', '#2f454e', '#bfbfbf', '#6f98a8'];
  }
  
  shuffleBtns() {
    const { btnIndexList } = this;
    
    for (let i = btnIndexList.length - 1; i > 0; i--) {
     	const newPos = Math.floor(Math.random() * (i + 1));
        [btnIndexList[newPos], btnIndexList[i]]  = [btnIndexList[i], btnIndexList[newPos]];
   }
     this._updateBtnsGrid();  
  }
  
  _updateBtnsGrid() {
    const { btnIndexList } = this;
    
		btnIndexList.forEach((val, index) => {
    		const btn = document.querySelector(`#btn-${index + 1}`);
    		btn.innerHTML = val;
        btn.style.backgroundColor = this._getColor();
        btn.className = 'box-transition';
    });
  }
  
  sortBtns() {
      const { btnIndexList } = this;
  		btnIndexList.sort((a,b) => a - b);
			this._updateBtnsGrid();
  }   
  
  _getColor() {
    const bgColorLen = this.btnBackgroundColors.length;
    
    if (bgColorLen === 0) {
       this.btnBackgroundColors = ['#2b8ead', '#2f454e', '#bfbfbf', '#6f98a8'];
    }
    
    const randIndex = parseInt(Math.random() * bgColorLen);
    const color = this.btnBackgroundColors.splice(randIndex, 1);
    
    return color;
 }
}    
  
document.addEventListener('DOMContentLoaded', () => {
     document.querySelector('#action-btns').addEventListener('click', handleActionBtnClick);
     const btnGrid = new ButtonGrid();
      
    function handleActionBtnClick(event) {
    		const btn = event.target.getAttribute('id');
    		
        switch(btn) {
        		case 'shuffle':
            	btnGrid.shuffleBtns();
            	break;
            
            case 'sort':
            	btnGrid.sortBtns();
            	break;
        }
    }
});
