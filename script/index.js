class PraiseButton {
	constructor (num,element) {
		this.num = num;
		this.element = element;
	}
	clickAction () {
		this.element.click(()=>{
			if (this.num < 10) {
				this.element.css('-webkit-filter',"grayscale(0)");
				$('#animation').addClass('num');
				this.num = add(this.num);
				setTimeout(function(){
					$("#animation").removeClass('num');
				},1000);
			}else{
				this.num = 0;
				this.element.css('-webkit-filter','grayscale(1)');
				
			}
			console.log(this.num);
		})
	}
}

class Thumb extends PraiseButton () {
	constructor(num,element){
		super(num,element);
	}
}

export default {Thumb};



