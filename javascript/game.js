class game {
    constructor() {
        this.sky = new sky();
        this.land = new land(-100);
        this.bird = new bird();
        this.produce = new producer(-100);
        this.timer = null;
        this.tick = 16;
        this.gameover = false;
    }
    isHit(rev1, rev2) {
        const rev1x = rev1.left + rev1.width / 2;
        const rev1y = rev1.top + rev1.height / 2;
        const rev2x = rev2.left + rev2.width / 2;
        const rev2y = rev2.top + rev2.height / 2;
        const disx = Math.abs(rev1x - rev2x);
        const disy = Math.abs(rev1y - rev2y);
        if (disx < (rev1.width + rev2.width) / 2 && disy < (rev1.height + rev2.height) / 2) {
            return true;
        }
        return false;
    }
    isGameover() {
        if (this.bird.top === this.bird.maxtop) {
            this.gameover = true;
            return true;
        }
        for (let i = 0; i < this.produce.pipers.length; i++) {
            var allpipe = this.produce.pipers[i];
            if (this.isHit(this.bird, allpipe.toppipe) || this.isHit(this.bird, allpipe.downpipe)) {
                this.gameover = true;
                return true;
            }
        }
        return false;
    }
    start() {
        if (this.gameover) {
            window.location.reload();
            this.gameover = false;
        }
        if (this.timer) return;
        this.produce.startproducer();
        this.bird.startswing();
        this.timer = setInterval(() => {
            const during = 16 / 1000;
            this.sky.move(during);
            this.land.move(during);
            this.bird.move(during);
            this.produce.pipers.forEach(element => {
                element.move(during);
            });
            if (this.isGameover()) {
                alert("游戏结束");
                this.stop();
            }
        }, this.tick)
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
        this.bird.swingstop();
        this.produce.stopproducer();
    }
    redEvent() {
        window.onkeydown = (e) => {
            if (e.key === "Enter") {
                if (this.timer) {
                    this.stop();
                } else {
                    this.start();
                }
            } else if (e.key === " ") {
                this.bird.jump();
            }
        }
    }
}
var g = new game();
g.redEvent();