import { DebugType } from "./DebugType";
export default class Debug {
    static Log(message) {
        Debug.SendMessage(message, DebugType.LOG);
    }
    static Warning(message) {
        Debug.SendMessage(message, DebugType.WARNING);
    }
    static Error(message) {
        Debug.SendMessage(message, DebugType.ERROR);
    }
    static SendMessage(message, type) {
        console.log(Debug.LOG_PREFIX[type] + (message));
        //Send event
    }
}
Debug.LOG_PREFIX = [
    "LOG: ",
    "WARNING: ",
    "ERROR: "
];
