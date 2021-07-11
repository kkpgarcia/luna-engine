export default interface IFileSystem
{
    Read<T>(path: string, onFinish: Function, onError: Function): void;
    Write<T>(path: string, data: T, onFinish: Function, onError: Function): void;
}