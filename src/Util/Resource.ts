import WebFileSystem from "./WebFileSystem";
import IFileSystem from "./IFileSystem";

export default class Resource
{
    private static _instance: Resource;
    public static get instance(): Resource
    {
        if (!this._instance)
        {
            this._instance = new Resource();
        }

        return this._instance;
    }

    private _fileSystem: IFileSystem;

    constructor()
    {
        this.Init();
    }

    private Init(): void
    {
        this._fileSystem = new WebFileSystem();
    }

    public GetText(dir: string, fileName: string): string
    {
        let retval = "";
        this._fileSystem.Read<string>(dir + fileName, 
            (data: string) => {
                retval = data;
            },
            (error: any) => {
                throw new Error(error);
            });
        return retval;
    }
}