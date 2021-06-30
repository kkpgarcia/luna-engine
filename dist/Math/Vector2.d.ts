import VectorBase from "./VectorBase";
export default class Vector2 extends VectorBase {
    static ZERO: Vector2;
    static LEFT: Vector2;
    static RIGHT: Vector2;
    static UP: Vector2;
    static DOWN: Vector2;
    get x(): number;
    get y(): number;
    constructor(x?: number, y?: number);
    Add(vec: Vector2): Vector2;
    Subtract(vec: Vector2): Vector2;
    Divide(vec: Vector2): Vector2;
    Scale(scale: number): Vector2;
    static Min(vec_a: Vector2, vec_b: Vector2): Vector2;
    static Max(vec_a: Vector2, vec_b: Vector2): Vector2;
    static Clamp(vec: Vector2, min: number, max: number): Vector2;
    Lerp(from: Vector2, to: Vector2, time: number): Vector2;
}
