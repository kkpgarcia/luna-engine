import Debug from "../Debug/Debug";
import ArrayEx from "../Util/ArrayEx";
export default class NotificationCenter {
    constructor() {
        this._table = new Map();
        this._invoking = new Array();
    }
    static get instance() {
        if (this._instance == null) {
            this._instance = new NotificationCenter();
        }
        return this._instance;
    }
    AddObserver(callback, name, sender) {
        if (!this.IsValid(callback, name)) {
            Debug.Error("Parameters invalid when adding an observer.");
            return;
        }
        if (!this._table.has(name)) {
            this._table.set(name, new Map());
        }
        var subTable = this._table.get(name);
        const key = this.GetKey(sender);
        if (!subTable.has(key)) {
            subTable.set(key, new Array());
        }
        let list = subTable.get(key);
        if (!list.find(x => x === callback)) {
            if (this._invoking.find(x => x === list)) {
                subTable.set(key, list);
            }
            list.push(callback);
        }
    }
    RemoveObserver(callback, name, sender) {
        if (!this.IsValid(callback, name)) {
            Debug.Error("Parameters invalid.");
            return;
        }
        if (!this._table.has(name)) {
            return;
        }
        let subTable = this._table[name];
        let key = this.GetKey(sender);
        if (!subTable.has(key)) {
            return;
        }
        let list = subTable.get(key);
        let index = list.indexOf(callback);
        if (!list.find(x => x === callback)) {
            if (this._invoking.find(x => x === list)) {
                subTable.set(key, list);
            }
            delete list[index];
        }
    }
    PostNotification(name, args = null, sender = this) {
        if (name === '') {
            Debug.Error("Notification Name is Required");
            return;
        }
        if (!this._table.has(name)) {
            return;
        }
        let subTable = this._table.get(name);
        let key = this.GetKey(sender);
        this.InvokeFunction(subTable, key, args);
    }
    InvokeFunction(senderTable, sender, args) {
        if (senderTable.has(sender)) {
            let handlers = senderTable.get(sender);
            this._invoking.push(handlers);
            for (let i = 0; i < handlers.length; i++) {
                let handler = handlers[i];
                if (handler === null) {
                    continue;
                }
                handler(sender, args);
            }
            this._invoking = ArrayEx.RemoveElement(this._invoking, handlers);
        }
    }
    IsValid(callback, name) {
        return callback != null || name !== '';
    }
    GetKey(sender) {
        return (sender != null) ? sender : this;
    }
}
