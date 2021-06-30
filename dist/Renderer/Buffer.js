import RenderingContext from "./RenderingContext";
export class VertexBuffer {
    constructor(data) {
        const gl = RenderingContext.instance.gl;
        this._buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this._buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    }
    Bind() {
        const gl = RenderingContext.instance.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this._buffer);
    }
    Unbind() {
        const gl = RenderingContext.instance.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
}
export class IndexBuffer {
    constructor(data, count) {
        const gl = RenderingContext.instance.gl;
        this._buffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), gl.STATIC_DRAW);
        this._count = count;
    }
    get count() {
        return this._count;
    }
    Bind() {
        const gl = RenderingContext.instance.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._buffer);
    }
    Unbind() {
        const gl = RenderingContext.instance.gl;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }
}
export class VertexBufferElement {
    static GetSizeOfType(type) {
        const gl = RenderingContext.instance.gl;
        switch (type) {
            case gl.FLOAT:
                return 4;
            case gl.UNSIGNED_INT:
                return 4;
            case gl.UNSIGNED_BYTE:
                return 1;
            default:
                return 0;
        }
    }
}
export class VertexBufferLayout {
    constructor() {
        this._stride = 0;
        this._elements = new Array();
    }
    get elements() {
        return this._elements;
    }
    get stride() {
        return this._stride;
    }
    Push(count, type) {
        const normalized = false;
        this._elements.push({ type, count, normalized });
        this._stride += VertexBufferElement.GetSizeOfType(type) * count;
    }
}
