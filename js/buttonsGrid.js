  document.addEventListener('DOMContentLoaded', () => {
     document.querySelector('#action-btns').addEventListener('click', handleActionBtnClick);
     const btnIndexList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     let btnBackgroundColors = ['#2b8ead', '#2f454e', '#bfbfbf', '#6f98a8'];
      
    function handleActionBtnClick(event) {
    		const btn = event.target.getAttribute('id');
    		
        switch(btn) {
        		case 'shuffle':
            	shuffleBtns();
            	break;
            
            case 'sort':
            	sortBtns();
            	break;
        }
    }

             
   function shuffleBtns() {
       for (let i = btnIndexList.length - 1; i > 0; i--) {
        	const newPos = Math.floor(Math.random() * (i + 1));
           [btnIndexList[newPos], btnIndexList[i]]  = [btnIndexList[i], btnIndexList[newPos]];
      }
        updateBtnsGrid();        
   }  
   
   function sortBtns() {
   		btnIndexList.sort((a,b) => a - b);
 			updateBtnsGrid();
   }   
   
   function updateBtnsGrid() {
   			btnIndexList.forEach((val, index) => {
        		const btn = document.querySelector(`#btn-${index + 1}`);
        		btn.innerHTML = val;
            btn.style.backgroundColor = getColor();
            btn.className = 'box-transition';
        });
   }
   
   function getColor() {
    if (btnBackgroundColors.length === 0) {
        btnBackgroundColors = ['#2b8ead', '#2f454e', '#bfbfbf', '#6f98a8'];
    }
    var randIndex = parseInt(Math.random() * btnBackgroundColors.length);
    var color = btnBackgroundColors.splice(randIndex, 1);
    return color;
   }
});

const btnIndexList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class ButtonGrid {

  static get btnBackgroundcolors() { 
    return ['#2b8ead', '#2f454e', '#bfbfbf', '#6f98a8']; 
  }
  
  static shuffleBtns() {
      for (let i = btnIndexList.length - 1; i > 0; i--) {
       	const newPos = Math.floor(Math.random() * (i + 1));
          [btnIndexList[newPos], btnIndexList[i]]  = [btnIndexList[i], btnIndexList[newPos]];
     }
       updateBtnsGrid();        
  }  
  
  sortBtns() {
  		btnIndexList.sort((a,b) => a - b);
			updateBtnsGrid();
  }  
  
  
  getColor() {
   
   if (btnBackgroundColors.length === 0) {
       btnBackgroundColors = ['#2b8ead', '#2f454e', '#bfbfbf', '#6f98a8'];
   }
   var randIndex = parseInt(Math.random() * btnBackgroundColors.length);
   var color = btnBackgroundColors.splice(randIndex, 1);
   return color;
  }
  
}
