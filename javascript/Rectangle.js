class Regtangle {
    constructor(width, height, left, top, xspeed, yspeed, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        this.dom = dom;
        this.reader();
    }
    reader() {
        this.dom.style.width = this.width + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';
    }
    move(duraing) {
        const xDis = this.xspeed * duraing;
        const yDis = this.yspeed * duraing;
        this.left = this.left + xDis;
        this.top = this.top + yDis;

        if(this.onmove){
            this.onmove();
        }

        this.reader();
    }
}
