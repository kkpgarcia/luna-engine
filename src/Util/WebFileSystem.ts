import IFileSystem from "./IFileSystem";

export default class WebFileSystem implements IFileSystem
{
    public Read<T>(path: string, onFinish: Function, onError: Function): void
    {
        fetch(path)
            .then((value: Response) => value.text())
            .then((data: string) => {
                console.log(data);
                if (onFinish)
                {
                    onFinish(data);
                }
            })
            .catch((reason: any) => {
                console.log(reason);
                if (onError)
                {
                    onError(reason);
                }
            });
    }

    public Write<T>(path: string, data: T, onFinish: Function, onError: Function): void
    {
        throw new Error ("Method not implemented");
    }
}