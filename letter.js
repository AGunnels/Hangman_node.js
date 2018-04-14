// Create constructors to control letter and underscore game play functions

function display(word){
	this.wordArray = word.split(''),
	this.arrayOfDashes = [],
	this.updated,
	this.originalDisplay = function(){
		for(i=0;i<this.wordArray.length;i++){
			if(this.wordArray[i] === ' '){
				space = ' ';
				this.arrayOfDashes.push(space);
			}
			else{
				x = '-';
				this.arrayOfDashes.push(space);
			}
		}
		console.log(this.arrayOfDashes.join(''));
	},
	this.updatedDisplay = function(letter){
		for(i=0;i<this.wordArray.length;i++){
			if(letter == this.wordArray[i]){
				this.arrayOfDashes.splice(i, 1, letter);
			}
		}
		this.updated = this.arrayOfDashes.join('');
		console.log(this.updated);
	},
	this.checkForWin = function(){
		// console.log('check for wins complete')
		// console.log('entered word = ' + this.arrayOfDashes.join(''));
		// console.log(word);
		// if(this.arrayOfDashes.join('') == word){
		// 	victory = true;
		// 	return victory;

		}
}