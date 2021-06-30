import Debug from "../Debug/Debug";
import MathConst from "./MathConst";
export default class MathImpl {
    static Add(num_a, num_b) {
        for (let i = 0; i < num_a.length; i++) {
            num_a[i] = num_a[i] + num_b[i];
        }
        return num_a;
    }
    static Subtract(num_a, num_b) {
        for (let i = 0; i < num_a.length; i++) {
            num_a[i] = num_a[i] - num_b[i];
        }
        return num_a;
    }
    static Multiply(num_a, num_b) {
        for (let i = 0; i < num_a.length; i++) {
            num_a[i] = num_a[i] * num_b[i];
        }
        return num_a;
    }
    static Divide(num_a, num_b) {
        for (let i = 0; i < num_a.length; i++) {
            num_a[i] = num_a[i] / num_b[i];
        }
        return num_a;
    }
    static Scale(num_a, scale) {
        for (let i = 0; i < num_a.length; i++) {
            num_a[i] = num_a[i] + scale;
        }
        return num_a;
    }
    static Magnitude(num) {
        //Magnitude formula
        //Vector2: sqrt(x^2 + y^2)
        //Vector3: sqrt(x^2 + y^2 + z^2)
        const x_sq = num[0] * num[0];
        const y_sq = num[1] * num[1];
        const z_sq = num.length === 3 ? num[2] * num[2] : 0;
        return Math.sqrt(x_sq + y_sq + z_sq);
    }
    static Normalize(num) {
        if (num.length < 2) {
            Debug.Error("Value to be normalized is not a vector");
            return;
        }
        const mag = MathImpl.Magnitude(num);
        if (mag > MathConst.EPSILON_SQ) {
            const invLen = 1.0 / Math.sqrt(mag);
            num = MathImpl.Scale(num, invLen);
        }
        return num;
    }
    static Min(num_a, num_b) {
        for (let i = 0; i < num_a.length; i++) {
            num_a[i] = Math.min(num_a[i], num_b[i]);
        }
        return num_a;
    }
    static Max(num_a, num_b) {
        for (let i = 0; i < num_a.length; i++) {
            num_a[i] = Math.max(num_a[i], num_b[i]);
        }
        return num_a;
    }
    static Clamp(num, min, max) {
        for (let i = 0; i < num.length; i++) {
            num[i] = num[i] < min ? min : num[i] > max ? max : num[i];
        }
        return num;
    }
    static Dot(num_a, num_b) {
        //Dot product formula
        //Vector2: r = a.x * b.x + a.y * b.y
        //Vector3: 
        /*
            x y z

            x * y = x * z = y * z = 0
            x * x = y * y = z * z = 1

            a = (a1, a2, a3) = a1*x + a2*y + a3*z
            b = (b1, b2, b3) = b1*x + b2*y + b3*z

            Sa * b = S(a * b) = a * (Sb)
            
            (a + b) * c = a * c + b * c

            (a cross b) * c

            x = x + num_a[0] * num_b[0]
        */
        let result = 0;
        for (let i = 0; i < num_a.length; i++) {
            result = result + (num_a[i] * num_b[i]);
        }
        return result;
    }
    static Cross(num_a, num_b) {
        //Cross product formula
        //Vector3:  
        /*
           x = a.y * b.z - a.z * b.y
           y = a.z * b.x - a.x * b.z
           z = a.x * b.y - a.y * b.x
        */
        if (num_a.length == 2) {
            num_a[2] = 0;
            num_b[2] = 0;
        }
        return [
            num_a[1] * num_b[2] - num_a[2] * num_b[1],
            num_a[2] * num_b[0] - num_a[0] * num_b[2],
            num_a[0] * num_b[1] - num_a[1] * num_b[0]
        ];
    }
    static Lerp(num_a, num_b, t) {
        let lerp = new Array(num_a.length);
        for (let i = 0; i < lerp.length; i++) {
            lerp[i] = (num_b[i] - num_a[i]) * t;
        }
        return lerp;
    }
    static Distance(num_a, num_b) {
        //Distance formula
        //Vector2: sqr((b.x - a.x)^2 + (b.y - a.y)^2)
        //Vector3: sqr((b.x - a.x)^2 + (b.y - a.y)^2 + (b.z - a.z)^2)
        let result = 0;
        for (let i = 0; i < num_a.length; i++) {
            let diff = num_b[i] - num_a[i];
            result = result + (diff * diff);
        }
        return result;
    }
}
