import { IFileSystem } from "./IFileSystem";
export declare class AndroidFileSystem implements IFileSystem {
    Init(): void;
    Read(): Promise<string>;
    Write(): void;
}
