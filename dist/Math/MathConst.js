import Vector3 from "./Vector3";
export default class MathConst {
}
MathConst.EPSILON = 0.00002;
MathConst.EPSILON_SQ = MathConst.EPSILON * MathConst.EPSILON;
MathConst.GRAVITY = new Vector3(0, -9.18, 0);
