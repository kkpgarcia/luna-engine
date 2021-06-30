export default class EventArgs {
    constructor(data) {
        this._data = data;
    }
    get data() {
        return this._data;
    }
}
