/**
 * @constructor
 * @desc
 *
 * Numeric ButtonGrid with shuffling and sorting functionalities.
 *
 * @author Chitra
 */
class ButtonGrid {
  constructor() {
      /**
       * button indices list
       * @type {number[]}
       */
    this.btnIndexList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      /**
       * Hexadecimal color codes used for button grids
       * @type {string[]}
       */
    this.btnBackgroundColors = ['#2b8ead', '#2f454e', '#bfbfbf', '#6f98a8'];
  }

  /**
   * Shuffles the numeric buttons in the grid.
   * @protected
   */
  shuffleBtns() {
    const { btnIndexList } = this;

    for (let i = btnIndexList.length - 1; i > 0; i--) {
     	const newPos = Math.floor(Math.random() * (i + 1));
        [btnIndexList[newPos], btnIndexList[i]]  = [btnIndexList[i], btnIndexList[newPos]];
   }
     this._updateBtnsGrid();
  }

  /**
   * Sorts the numeric buttons in ascending order in the grid.
   * @protected
   */
  sortBtns() {
      const { btnIndexList } = this;
      btnIndexList.sort((a,b) => a - b);
      this._updateBtnsGrid();
  }

  /**
   * Updates the numberic buttons with randomly chosen background color and value.
   * @private
   */
  _updateBtnsGrid() {
    const { btnIndexList } = this;

		btnIndexList.forEach((val, index) => {
    		const btn = document.querySelector(`#btn-${index + 1}`);
    		btn.innerHTML = val;
        btn.style.backgroundColor = this._getColor();
        btn.className = 'box-transition';
    });
  }

  /**
   * Returns the randomly chosen color after shuffling the colors list.
   * @return {string}
   * @private
   */
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
