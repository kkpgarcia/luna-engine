export default class MathImpl {
    static Add(num_a: number[], num_b: number[]): number[];
    static Subtract(num_a: number[], num_b: number[]): number[];
    static Multiply(num_a: number[], num_b: number[]): number[];
    static Divide(num_a: number[], num_b: number[]): number[];
    static Scale(num_a: number[], scale: number): number[];
    static Magnitude(num: number[]): number;
    static Normalize(num: number[]): number[];
    static Min(num_a: number[], num_b: number[]): number[];
    static Max(num_a: number[], num_b: number[]): number[];
    static Clamp(num: number[], min: number, max: number): number[];
    static Dot(num_a: number[], num_b: number[]): number;
    static Cross(num_a: number[], num_b: number[]): number[];
    static Lerp(num_a: number[], num_b: number[], t: number): number[];
    static Distance(num_a: number[], num_b: number[]): number;
}
