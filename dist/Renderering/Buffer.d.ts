export declare class VertexBuffer {
    private _buffer;
    constructor(data: number[]);
    Bind(): void;
    Unbind(): void;
}
export declare class IndexBuffer {
    private _buffer;
    private _count;
    get count(): number;
    constructor(data: number[], count: number);
    Bind(): void;
    Unbind(): void;
}
export declare class VertexBufferElement {
    type: number;
    count: number;
    normalized: boolean;
    static GetSizeOfType(type: number): number;
}
export declare class VertexBufferLayout {
    private _elements;
    get elements(): Array<VertexBufferElement>;
    private _stride;
    get stride(): number;
    constructor();
    Push(count: number, type: number): void;
}
