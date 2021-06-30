export default class RenderingContext {
    constructor() {
        this._isInitalized = false;
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new RenderingContext();
        }
        return this._instance;
    }
    get gl() {
        return this._gl;
    }
    get isInitalizd() {
        return this._isInitalized;
    }
    Init(canvas) {
        this._gl = canvas.getContext("webgl2");
        this._isInitalized = true;
    }
}
