"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.default = (event, context) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const result = {
        body: JSON.stringify(event.body),
        "content-type": event.headers["content-type"],
    };
    return result;
});
