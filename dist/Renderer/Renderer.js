import RenderingContext from "./RenderingContext";
//TODO: decide if it's a centralized renderer or
//      or derivable 
export default class Renderer {
    constructor() {
    }
    Draw(vertexArray, indexBuffer, shader) {
        const gl = RenderingContext.instance.gl;
        shader.Bind();
        vertexArray.Bind();
        indexBuffer.Bind();
        gl.drawElements(gl.TRIANGLES, indexBuffer.count, gl.UNSIGNED_SHORT, 0);
    }
    Clear() {
        const gl = RenderingContext.instance.gl;
        gl.clearColor(1, 1, 1, 1);
    }
}
