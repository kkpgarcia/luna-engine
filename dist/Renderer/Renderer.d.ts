import { IndexBuffer } from "./Buffer";
import Shader from "./Shader";
import VertexArray from "./VertexArray";
export default class Renderer {
    constructor();
    Draw(vertexArray: VertexArray, indexBuffer: IndexBuffer, shader: Shader): void;
    Clear(): void;
}
