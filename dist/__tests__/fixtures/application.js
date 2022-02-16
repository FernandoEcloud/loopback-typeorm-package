"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmApp = void 0;
const boot_1 = require("@loopback/boot");
const rest_1 = require("@loopback/rest");
const __1 = require("../../");
class TypeOrmApp extends (0, boot_1.BootMixin)((0, __1.TypeOrmMixin)(rest_1.RestApplication)) {
    constructor(options) {
        super(options);
        this.projectRoot = __dirname;
    }
}
exports.TypeOrmApp = TypeOrmApp;
//# sourceMappingURL=application.js.map