const sky1 = document.querySelector('.sky');
const skycomputerstyle = getComputedStyle(sky1);
const skywidth = parseFloat(skycomputerstyle.width) ;
const skyheight = parseFloat(skycomputerstyle.height) ;

class sky extends Regtangle{
    constructor(){
        super(skywidth,skyheight,0,0,-50,0,sky1);
    }

    onmove () {
        if(this.left <= -skywidth / 2){
            this.left = 0;
        }
            
        
    }
    
}

