class Interpolation {
    constructor(start, end, frames, frameEvent) {
        this.currentFrame = 0;
        this.success = () => { };
        this.wasDeleted = false;
        this.start = start;
        this.end = end;
        this.frames = frames;
        this.frameEvent = frameEvent;
        this.id = Interpolation.nextId++;
        if (Interpolation.intervalHandler === undefined)
            Interpolation.intervalHandler = setInterval(Interpolation.frame, 0);
        Interpolation.allInterpolations[this.id] = this;
    }
    [Symbol.toPrimitive]() { return this.id; }
    toString() { return this.id.toString(); }
    then(success, fail) {
        this.success = success || (() => { });
    }
    delete() {
        delete Interpolation.allInterpolations[this.id];
        this.wasDeleted = true;
        if (Interpolation.allInterpolations.count == 0) {
            clearInterval(Interpolation.intervalHandler);
            Interpolation.intervalHandler = undefined;
        }
    }
    frame() {
        if (this.currentFrame == 0) {
            this.currentFrame++;
            this.frameEvent(this.start);
        }
        else if (this.currentFrame == this.frames) {
            this.currentFrame++;
            this.frameEvent(this.end);
        }
        else if (this.currentFrame > this.frames) {
            this.success();
            return true;
        }
        else
            this.frameEvent(this.calculateValue(this.currentFrame++));
        return false;
    }
    static delete(inter) {
        delete Interpolation.allInterpolations[inter.id];
        if (Interpolation.allInterpolations.count == 0) {
            clearInterval(Interpolation.intervalHandler);
            Interpolation.intervalHandler = undefined;
        }
    }
    static frame() {
        for (let inter of Object.values(Interpolation.allInterpolations))
            if (inter.frame())
                Interpolation.delete(inter);
    }
}
Interpolation.allInterpolations = (() => {
    let obj = Object.create(null);
    let count = 0;
    return new Proxy(obj, {
        get(target, prop, receiver) {
            if (prop === "count")
                return count;
            else
                return target[prop];
        },
        set(target, property, value, receiver) {
            if (property !== "count") {
                if (value === undefined) {
                    delete obj[property];
                    count--;
                }
                else if (target[property] === undefined) {
                    count++;
                    target[property] = value;
                }
            }
            return true;
        },
        deleteProperty(target, prop) {
            if (prop !== "count")
                count--;
            return delete target[prop];
        }
    });
})();
Interpolation.nextId = Number.MIN_SAFE_INTEGER;
//Linear Interpolation
class InterpolationLinear extends Interpolation {
    calculateValue(currentFrame) {
        return (currentFrame / this.frames) * (this.end - this.start) + this.start;
    }
}
//Polynomial interpolation
class InterpolationPolynomial extends Interpolation {
    constructor(start, end, frames, constants, frameEvent) {
        super(start, end, frames, frameEvent);
        this.constants = constants;
        let speed = (end - start) / (frames ** (constants.length + 1));
        for (let [index, constant] of constants.entries())
            speed -= constant / (frames ** (constants.length - index));
        this.constants.push(speed);
    }
    calculateValue(currentFrame) {
        let value = this.start;
        for (let [index, constant] of this.constants.entries())
            value += constant * currentFrame ** (+index + 1);
        return value;
    }
}
class InterpolationSine extends Interpolation {
    constructor(start, end, frames, sinePower, frameEvent) {
        super(start, end, frames, frameEvent);
        if (sinePower < 0)
            throw new TypeError("Sine power must be positive");
        this.sinePower = sinePower;
    }
    calculateValue(currentFrame) {
        let val = Math.sin(currentFrame / this.frames * Math.PI / 2) ** this.sinePower;
        return (this.end - this.start) * val + this.start;
    }
}
