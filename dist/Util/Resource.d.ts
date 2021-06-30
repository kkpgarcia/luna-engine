export default class Resource {
    private static _instance;
    static get instance(): Resource;
    private _fileSystem;
    private _platform;
    constructor();
    Init(): void;
    GetText(dir: string, fileName: string): string;
    GetShader(shaderName: string): Promise<string>;
    private PlatformCheck;
}
