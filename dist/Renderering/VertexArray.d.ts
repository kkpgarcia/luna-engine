import { VertexBuffer, VertexBufferLayout } from "./Buffer";
export declare class VertexArray {
    private _renderer;
    constructor();
    AddBuffer(vertexBuffer: VertexBuffer, layout: VertexBufferLayout): void;
    Bind(): void;
    Unbind(): void;
}
