import VectorBase from "./VectorBase";
export default class Vector3 extends VectorBase {
    static ZERO: Vector3;
    static LEFT: Vector3;
    static RIGHT: Vector3;
    static UP: Vector3;
    static DOWN: Vector3;
    static FORWARD: Vector3;
    static BACKWARD: Vector3;
    get x(): number;
    get y(): number;
    get z(): number;
    constructor(x?: number, y?: number, z?: number);
    Add(vec: Vector3): Vector3;
    Subtract(vec: Vector3): Vector3;
    Divide(vec: Vector3): Vector3;
    Scale(scale: number): Vector3;
    static Min(vec_a: Vector3, vec_b: Vector3): Vector3;
    static Max(vec_a: Vector3, vec_b: Vector3): Vector3;
    static Clamp(vec: Vector3, min: number, max: number): Vector3;
    Lerp(from: Vector3, to: Vector3, time: number): Vector3;
    static Cross(vec_a: Vector3, vec_b: Vector3): Vector3;
}
