import { VertexBuffer, VertexBufferLayout } from "./Buffer";
export default class VertexArray {
    private _renderer;
    constructor();
    AddBuffer(vertexBuffer: VertexBuffer, layout: VertexBufferLayout): void;
    Bind(): void;
    Unbind(): void;
}
