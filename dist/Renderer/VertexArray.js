import { VertexBufferElement } from "./Buffer";
import RenderingContext from "./RenderingContext";
export default class VertexArray {
    constructor() {
        const gl = RenderingContext.instance.gl;
        this._renderer = gl.createVertexArray();
    }
    AddBuffer(vertexBuffer, layout) {
        const gl = RenderingContext.instance.gl;
        this.Bind();
        vertexBuffer.Bind();
        const elements = layout.elements;
        let offset = 0;
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            gl.enableVertexAttribArray(i);
            gl.vertexAttribPointer(i, element.count, element.type, element.normalized, layout.stride, offset);
            offset += element.count * VertexBufferElement.GetSizeOfType(element.type);
            ;
        }
    }
    Bind() {
        const gl = RenderingContext.instance.gl;
        gl.bindVertexArray(this._renderer);
    }
    Unbind() {
        const gl = RenderingContext.instance.gl;
        gl.bindVertexArray(null);
    }
}
