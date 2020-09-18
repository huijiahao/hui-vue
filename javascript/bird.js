const birddom = document.querySelector('.bird');
const birdcomputerstyle = getComputedStyle(birddom);
const birdwidth = parseFloat(birdcomputerstyle.width);
const birdheight = parseFloat(birdcomputerstyle.height);
const birdtop = parseFloat(birdcomputerstyle.top);
const birdleft = parseFloat(birdcomputerstyle.left);
const gamedom =  document.querySelector('.game');
const gamemaxtop =gamedom.clientHeight;
class bird extends Regtangle {
    constructor() {
        super(birdwidth, birdheight, birdleft, birdtop, 0, 0, birddom);
        this.g = 1500;
        this.maxtop = gamemaxtop - landheight - this.height;
        this.swingStause = 1;
        this.timer = null;
        this.reader();
    }
    startswing() {
        if(this.timer){
            return ;
        }
        this.timer = setInterval(() => {
            this.swingStause++;
            if (this.swingStause == 4) {
                this.swingStause = 1;
            }
        }, 200);
        this.reader();
    }
    swingstop() {
        clearInterval(this.timer);
        this.timer = null;
    }
    reader(){
        super.reader();
        this.dom.className = `bird swing${this.swingStause}`;
    }
    move(duraing) {
        super.move(duraing);
        this.yspeed += this.g * duraing;
    }
    onmove() {
        if (this.top < 0) {
            this.top = 0;
        } else if (this.top > this.maxtop) {
            this.top = this.maxtop;
        }
    }
    jump() {
        this.yspeed = -350;
    }

}
