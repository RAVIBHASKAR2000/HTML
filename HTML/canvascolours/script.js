let ctx, 
    particles = [],
    W = innerWidth,
    H = innerHeight;

const getDistance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2-y1); //math.hypot returns sqrt of sum of squares of number 

const rotate = (velocity, angle) => ({
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
});

const minMax = (min, max) => Math.random() * (max - min + 1) + min;

const newtonianCollision = (particleA, particleB) => {
    let velXdiff = particleA.velocity.x - particleB.velocity.x;
    let velYdiff = particleA.velocity.y - particleB.velocity.y;

    let diffX = particleB.x - particleA.x;
    let diffY = particleB.y - particleA.y;
    // make sure particles are not overlapping
    if(diffX * velXdiff + diffY * velYdiff >= 0) {
        let angle = -Math.atan2(diffY, diffX);

        const m1 = particleA.mass;
        const m2 = particleB.mass;

        // get the inital velocity        
        const u1 = rotate(particleA.velocity, angle);
        const u2 = rotate(particleB.velocity, angle);

        // use newtonian equation to determine it's final velocity
        const v1 = { x:(((m1 - m2) * u1.x) / (m1 + m2)) + ((2 * m2) * u2.x) / (m1 + m2),
            y: u1.y};
        const v2 = {x:(((2 * m1)*u1.x) / (m1 + m2)) + (((m2 - m1) * u2.x) / (m1 + m2)), 
            y: u2.y};

        // get it's final velocity
        const finalV1 = rotate(v1, -angle);
        const finalV2 = rotate(v2, -angle);

        particleA.velocity.x = finalV1.x;
        particleA.velocity.y = finalV1.y;

        particleB.velocity.x = finalV2.x;
        particleB.velocity.y = finalV2.y;
    }
}

let colors = ["#800000", "#008080", "#008000", "#008066", "#006680"];

class Particle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.velocity = {
            x: Math.sin(Math.random() * 50) * 3,
            y: Math.sin(Math.random() * 50) * 3
        };
        this.mass = minMax(10, 15);
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 
            0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    hascollided() {
        for(let i=0; i < particles.length; i++) {
            if(this !== particles[i]) {
                if(getDistance(this.x, this.y, particles[i].x, 
                    particles[i].y) < this.radius + particles[i].radius) {
                        // colliding particles
                        newtonianCollision(this, particles[i]);
                    }
            }
        }
        // if object hits the wall, returns it's angle of reflection
        if(this.x - this.radius <= 0 || this.x + this.radius >= W)
            this.velocity.x = -this.velocity.x;
        else if(this.y - this.radius <= 0 || this.y + this.radius >= H)
            this.velocity.y = -this.velocity.y;
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
        this.hascollided();
    }
}

for(let i=0; i < 100; i++) {
    let radius = minMax(2, 5);
    let x = minMax(radius, W - radius);
    let y = minMax(radius, H - radius);
    // make sure particles are not overlapping
    if(i !== 0) {
        for(let j=0; j < particles.length; j++) {
            if(getDistance(x, y, particles[j].x, particles[j].y)
                < particles[j].radius + radius) {
                    // overlapping particles => generate new pos
                    x = minMax(radius, W - radius);
                    y = minMax(radius, H - radius);

                    j = -1;
                }
        }
    }
    particles.push(new Particle(x, y, radius));
}


const animate = () => {
    ctx.fillStyle = "rgba(0, 0, 0, .07)";
    ctx.fillRect(0, 0, W, H);
    if(ctx == null) return;
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animate);
}


const init = () => {
    ctx = document.querySelector("#cvs").getContext("2d");
    W = ctx.canvas.width = innerWidth;
    H = ctx.canvas.height = innerHeight;

    requestAnimationFrame(animate);
}


window.addEventListener("load", init);