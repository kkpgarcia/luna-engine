export default class EventArgs<T> {
    private _data;
    get data(): T;
    constructor(data: T);
}
