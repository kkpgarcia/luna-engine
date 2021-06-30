import MathImpl from "./MathImpl";
import VectorBase from "./VectorBase";
export default class Vector3 extends VectorBase {
    constructor(x = 0, y = 0, z = 0) {
        super();
        this._val = [x, y, z];
    }
    get x() {
        return this._val[0];
    }
    get y() {
        return this._val[1];
    }
    get z() {
        return this._val[2];
    }
    Add(vec) {
        const result = MathImpl.Add(this._val, vec.AsArray());
        return new Vector3(result[0], result[1]);
    }
    Subtract(vec) {
        const result = MathImpl.Subtract(this._val, vec.AsArray());
        return new Vector3(result[0], result[1]);
    }
    Divide(vec) {
        const result = MathImpl.Divide(this._val, vec.AsArray());
        return new Vector3(result[0], result[1]);
    }
    Scale(scale) {
        const result = MathImpl.Scale(this._val, scale);
        return new Vector3(result[0], result[1]);
    }
    static Min(vec_a, vec_b) {
        const result = MathImpl.Min(vec_a.AsArray(), vec_b.AsArray());
        return new Vector3(result[0], result[1]);
    }
    static Max(vec_a, vec_b) {
        const result = MathImpl.Max(vec_a.AsArray(), vec_b.AsArray());
        return new Vector3(result[0], result[1]);
    }
    static Clamp(vec, min, max) {
        const result = MathImpl.Clamp(vec.AsArray(), min, max);
        return new Vector3(result[0], result[1]);
    }
    Lerp(from, to, time) {
        const result = MathImpl.Lerp(from.AsArray(), to.AsArray(), time);
        return new Vector3(result[0], result[1]);
    }
    static Cross(vec_a, vec_b) {
        const result = MathImpl.Cross(vec_a.AsArray(), vec_b.AsArray());
        return new Vector3(result[0], result[1], result[2]);
    }
}
Vector3.ZERO = new Vector3();
Vector3.LEFT = new Vector3(-1);
Vector3.RIGHT = new Vector3(1);
Vector3.UP = new Vector3(0, 1);
Vector3.DOWN = new Vector3(0, -1);
Vector3.FORWARD = new Vector3(0, 0, 1);
Vector3.BACKWARD = new Vector3(0, 0, -1);
