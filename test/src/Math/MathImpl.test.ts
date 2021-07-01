import { MathConst } from "../../../src/index";
import MathImpl from "../../../src/Math/MathImpl";

test("MathImpl: Add", () => {
    const val = MathImpl.Add([2, 2], [2, 2]);
    
    expect (val[0]).toEqual(4);
    expect (val[1]).toEqual(4);
})

test("MathImpl: Subtract", () => {
    const val = MathImpl.Subtract([2, 2], [2, 2]);
    
    expect (val[0]).toEqual(0);
    expect (val[1]).toEqual(0);
})

test("MathImpl: Multiply", () => {
    const val = MathImpl.Multiply([2, 2], [2, 2]);
    
    expect (val[0]).toEqual(4);
    expect (val[1]).toEqual(4);
})

test("MathImpl: Divide", () => {
    const val = MathImpl.Divide([2, 2], [2, 2]);
    
    expect (val[0]).toEqual(1);
    expect (val[1]).toEqual(1);
})

test("MathImpl: Scale", () => {
    const val = MathImpl.Scale([2, 2], 2);
    
    expect (val[0]).toEqual(4);
    expect (val[1]).toEqual(4);
})


test("MathImpl: Magnitude of Vector2", () => {
    const val = MathImpl.Magnitude([10, 10]);
    const checker = Math.sqrt((10 * 10) + (10 * 10));

    expect (val).toEqual(checker);
});

test("MathImpl: Magnitude of Vector3", () => {
    const val = MathImpl.Magnitude([10, 10, 10]);
    const checker = Math.sqrt((10 * 10) + (10 * 10) + (10 * 10));

    expect (val).toEqual(checker);
});

test("MathImpl: Normalize of Vector2", () => {
    const val = MathImpl.Normalize([5, 5]);
    const checker = MathImpl.Magnitude([5, 5]) > MathConst.EPSILON_SQ ? MathImpl.Scale([5, 5], 1.0 / Math.sqrt(MathImpl.Magnitude([5, 5]))) : [5, 5];

    expect(val).toEqual(checker);
});

test("MathImpl: Normalize of Vector3", () => {
    const val = MathImpl.Normalize([5, 5, 5]);
    const checker = MathImpl.Magnitude([5, 5, 5]) > MathConst.EPSILON_SQ ? MathImpl.Scale([5, 5, 5], 1.0 / Math.sqrt(MathImpl.Magnitude([5, 5, 5]))) : [5, 5, 5];

    expect(val).toEqual(checker);
});

test("MathImpl: Min 1 number", () => {
    const val = MathImpl.Min([2], [5]);
    const checker = [2];
    
    expect(val).toEqual(checker);
});

test("MathImpl: Min 2 numbers", () => {
    const val = MathImpl.Min([2, 4], [5, 1]);
    const checker = [2, 1]

    expect(val).toEqual(checker);
});

test("MathImpl: Min 3 numbers", () => {
    const val = MathImpl.Min([2, 4, 6], [5, 1, 9]);
    const checker = [2, 1, 6]

    expect(val).toEqual(checker);
});


test("MathImpl: Max 1 number", () => {
    const val = MathImpl.Max([2], [5]);
    const checker = [5];
    
    expect(val).toEqual(checker);
});

test("MathImpl: Max 2 numbers", () => {
    const val = MathImpl.Max([2, 4], [5, 1]);
    const checker = [5, 4]

    expect(val).toEqual(checker);
});

test("MathImpl: Max 3 numbers", () => {
    const val = MathImpl.Max([2, 4, 6], [5, 1, 9]);
    const checker = [5, 4, 9]

    expect(val).toEqual(checker);
});

test("MathImpl: Clamp 3 numbers", () => {
    const val = MathImpl.Clamp([2, 4, 6], 3, 7);
    const checker = [3, 4, 6]

    expect(val).toEqual(checker);
});

test("MathImpl: Dot product of Vector2", () => {
    const val = MathImpl.Dot([2, 2], [3, 3]);
    const checker = 2 * 3 + 2 * 3;

    expect(val).toEqual(checker);
});

test("MathImpl: Dot product of Vector3", () => {
    const val = MathImpl.Dot([2, 2, 2], [3, 3, 3]);
    const checker = 2 * 3 + 2 * 3 + 2 * 3;

    expect(val).toEqual(checker);
});

test("MathImpl: Cross product of Vector3", () => {
    const val = MathImpl.Cross([1, 2, 3], [4, 5, 6]);
    const checker = [(2 * 6 - 3 * 5), (3 * 4 - 1 * 6), (1 * 5 - 2 * 4)];

    expect(val).toEqual(checker);
});

test("MathImpl: Linear Interpolation of Vector2", () => {
    const val = MathImpl.Lerp([1, 1], [3, 6], 0.5);
    const checker = [(3 - 1) * 0.5, (6 - 1) * 0.5];

    expect(val).toEqual(checker);
});

test("MathImpl: Linear Interpolation of Vector3", () => {
    const val = MathImpl.Lerp([1, 1, 4], [3, 6, 3], 0.5);
    const checker = [(3 - 1) * 0.5, (6 - 1) * 0.5, (3 - 4) * 0.5];

    expect(val).toEqual(checker);
});

test("MathImpl: Distance of two Vector2", () => {
    const val = MathImpl.Distance([2, 4], [5, 1]);
    const checker = Math.sqrt(((5 - 2)*(5 - 2)) + ((1 - 4)*(1 - 4)));

    expect(val).toEqual(checker);
});

test("MathImpl: Distance of two Vector3", () => {
    const val = MathImpl.Distance([2, 4, 9], [5, 1, 3]);
    const checker = Math.sqrt(((5 - 2)*(5 - 2)) + ((1 - 4)*(1 - 4)) + ((3 - 9)*(3 - 9)));

    expect(val).toEqual(checker);
});