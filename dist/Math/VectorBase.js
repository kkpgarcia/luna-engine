import MathImpl from "./MathImpl";
export default class VectorBase {
    Add_i(vec) {
        this._val = MathImpl.Add(this._val, vec.AsArray());
        return this;
    }
    Subtract_i(vec) {
        this._val = MathImpl.Subtract(this._val, vec.AsArray());
        return this;
    }
    Divide_i(vec) {
        this._val = MathImpl.Divide(this._val, vec.AsArray());
        return this;
    }
    Scale_i(scale) {
        this._val = MathImpl.Scale(this._val, scale);
        return this;
    }
    Magnitude() {
        return MathImpl.Magnitude(this._val);
    }
    static Dot(vec_a, vec_b) {
        return MathImpl.Dot(vec_a.AsArray(), vec_b.AsArray());
    }
    static Distance(from, to) {
        return MathImpl.Distance(from.AsArray(), to.AsArray());
    }
    Lerp_i(from, to, time) {
        this._val = MathImpl.Lerp(from.AsArray(), to.AsArray(), time);
        return this;
    }
    AsArray() {
        return this._val;
    }
}
