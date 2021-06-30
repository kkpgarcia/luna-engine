export default class RenderingContext {
    private static _instance;
    static get instance(): RenderingContext;
    private _gl;
    get gl(): WebGL2RenderingContext;
    private _isInitalized;
    get isInitalizd(): boolean;
    Init(canvas: HTMLCanvasElement): void;
}
