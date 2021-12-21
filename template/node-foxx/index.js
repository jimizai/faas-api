"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@jimizai/core");
const handler_1 = require("./function/handler");
function main() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield (0, core_1.createApp)({
            middlewares: [handler_1.default],
            srcDirs: [],
            port: 3000,
        });
        app.bootstrap();
    });
}
main();
