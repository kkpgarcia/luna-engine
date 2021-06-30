export default class VectorBase {
    protected _val: number[];
    Add_i(vec: VectorBase): VectorBase;
    Subtract_i(vec: VectorBase): VectorBase;
    Divide_i(vec: VectorBase): VectorBase;
    Scale_i(scale: number): VectorBase;
    Magnitude(): number;
    static Dot(vec_a: VectorBase, vec_b: VectorBase): number;
    static Distance(from: VectorBase, to: VectorBase): number;
    Lerp_i(from: VectorBase, to: VectorBase, time: number): VectorBase;
    AsArray(): number[];
}
