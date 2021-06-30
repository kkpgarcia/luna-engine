var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class WebFileSystem {
    Init() {
        //No need to initialize this as of the moment
    }
    Read() {
        return __awaiter(this, void 0, void 0, function* () {
            let dir = "./basic.shader";
            let retVal = "";
            return fetch(dir)
                .then(response => {
                console.log("readong response:");
                console.log(response.status);
                console.log(response.text());
                response.text();
                console.log(response);
                return response.text();
            });
        });
    }
    Write() {
        throw new Error("Method not implemented.");
    }
}
