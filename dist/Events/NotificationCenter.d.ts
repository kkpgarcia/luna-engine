import EventArgs from "./EventArgs";
export default class NotificationCenter {
    private static _instance;
    private _table;
    private _invoking;
    static get instance(): NotificationCenter;
    constructor();
    AddObserver(callback: Function, name: string, sender?: Object): void;
    RemoveObserver(callback: Function, name: string, sender: Object): void;
    PostNotification(name: string, args?: EventArgs<any>, sender?: Object): void;
    private InvokeFunction;
    private IsValid;
    private GetKey;
}
