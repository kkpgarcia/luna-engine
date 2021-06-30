export default class Shader {
    private _shader;
    private _uniformLocationCache;
    constructor(filePath?: string);
    private CreateProgram;
    private CreateShader;
    Bind(): void;
    Unbind(): void;
    SetUniform4f(name: string, data: number[]): void;
    GetUniformLocation(name: string): WebGLUniformLocation;
}
