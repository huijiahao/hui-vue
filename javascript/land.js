const landdom = document.querySelector('.land');
const landcomputerstyle = getComputedStyle(landdom);
const landwidth = parseFloat(landcomputerstyle.width) ;
const landheight = parseFloat(landcomputerstyle.height) ;
const langdis =parseFloat(landcomputerstyle.top) ;
class land extends Regtangle{
    constructor(speed){
        super(landwidth,landheight,0,langdis,speed,0,landdom);
    }

    onmove () {
        if(this.left <= -skywidth / 2){
            this.left = 0;
        }
            
        
    }
    
}
