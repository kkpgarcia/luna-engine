var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Resource {
    // private _http: HttpClient;
    constructor() {
        this.PlatformCheck();
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new Resource;
        }
        return this._instance;
    }
    Init() {
        this._fileSystem.Init();
    }
    GetText(dir, fileName) {
        let retVal = "";
        this._fileSystem.Read()
            .then(onFullfilled => {
            retVal = onFullfilled;
        });
        return retVal;
    }
    GetShader(shaderName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
            });
        });
    }
    PlatformCheck() {
        // this._platform = Capacitor.getPlatform();
        // console.log(this._platform);
        // switch(this._platform)
        // {
        //     case "ios":
        //     case "android":
        //         this._fileSystem = new AndroidFileSystem();
        //         break;
        //     default:
        //         {
        //             console.log("Creating file system for web.");
        //             this._fileSystem = new WebFileSystem();
        //         }
        //         //TODO: Use fs system instead?
        //         break;
        // }
    }
}
