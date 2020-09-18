const gameclientwidth = gamedom.clientWidth;
class pipe extends Regtangle{
    constructor(height,top,speed,dom){
        super(52,height,gameclientwidth,top,speed,0,dom);
    }
    onmove(){
        if(this.left < -this.width){
            this.dom.remove();
        }
    }
}
function radom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
class pipepare {
    constructor(speed){
        this.spaceroom = 150;
        this.minpipeheight = 80;
        this.maxpipeheight = langdis - this.spaceroom -this.minpipeheight;
        this.uppipe = radom(this.minpipeheight,this.maxpipeheight);
        this.dowmpipe = 488 - this.uppipe -this.spaceroom;
        const downpipetop = langdis - this.dowmpipe;
        const updom = document.createElement('div');
        updom.className = "pipe up";
        this.toppipe = new pipe(this.uppipe,0,speed,updom);
        const downdom = document.createElement('div');
        downdom.className = "pipe down";
        this.downpipe = new pipe(this.dowmpipe,downpipetop,speed,downdom);
        gamedom.appendChild(updom);
        gamedom.appendChild(downdom);
    }
    get pipeok(){
        return this.toppipe.left < -this.toppipe.width;
    }
    move(during){
        this.toppipe.move(during);
        this.downpipe.move(during);
    }
}

class producer {
    constructor(speed){
        this.pipers = [];
        this.tick = 1500;
        this.timer = null;
        this.speed = speed;
    }
    
    startproducer(){
        if(this.timer){
            return ;
        }
        this.timer = setInterval(() => {
            this.pipers.push(new pipepare(this.speed));
            for (let i = 0; i < this.pipers.length; i++) {
                var pair = this.pipers[i];
                if(pair.pipeok){
                    this.pipers.splice(i,1);
                    i--;
                }
                
            }
        }, this.tick);
        
    }
    stopproducer(){
        clearInterval(this.timer);
        this.timer = null;
    }
}



