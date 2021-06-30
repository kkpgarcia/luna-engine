import MathImpl from "./MathImpl";
import VectorBase from "./VectorBase";
export default class Vector2 extends VectorBase {
    constructor(x = 0, y = 0) {
        super();
        this._val = [x, y];
    }
    get x() {
        return this._val[0];
    }
    get y() {
        return this._val[1];
    }
    Add(vec) {
        const result = MathImpl.Add(this._val, vec.AsArray());
        return new Vector2(result[0], result[1]);
    }
    Subtract(vec) {
        const result = MathImpl.Subtract(this._val, vec.AsArray());
        return new Vector2(result[0], result[1]);
    }
    Divide(vec) {
        const result = MathImpl.Divide(this._val, vec.AsArray());
        return new Vector2(result[0], result[1]);
    }
    Scale(scale) {
        const result = MathImpl.Scale(this._val, scale);
        return new Vector2(result[0], result[1]);
    }
    static Min(vec_a, vec_b) {
        const result = MathImpl.Min(vec_a.AsArray(), vec_b.AsArray());
        return new Vector2(result[0], result[1]);
    }
    static Max(vec_a, vec_b) {
        const result = MathImpl.Max(vec_a.AsArray(), vec_b.AsArray());
        return new Vector2(result[0], result[1]);
    }
    static Clamp(vec, min, max) {
        const result = MathImpl.Clamp(vec.AsArray(), min, max);
        return new Vector2(result[0], result[1]);
    }
    Lerp(from, to, time) {
        const result = MathImpl.Lerp(from.AsArray(), to.AsArray(), time);
        return new Vector2(result[0], result[1]);
    }
}
Vector2.ZERO = new Vector2();
Vector2.LEFT = new Vector2(-1);
Vector2.RIGHT = new Vector2(1);
Vector2.UP = new Vector2(0, 1);
Vector2.DOWN = new Vector2(0, -1);
