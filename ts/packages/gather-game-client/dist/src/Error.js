"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientError = void 0;
class ClientError extends Error {
    constructor(message, code) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.code = code;
    }
}
exports.ClientError = ClientError;
//# sourceMappingURL=Error.js.map