import { IFileSystem } from "./IFileSystem";
export declare class WebFileSystem implements IFileSystem {
    Init(): void;
    Read(): Promise<string>;
    Write(): void;
}
