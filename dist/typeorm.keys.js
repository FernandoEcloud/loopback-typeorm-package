"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmBindings = void 0;
const core_1 = require("@loopback/core");
/**
 * Binding keys used by this component.
 */
var TypeOrmBindings;
(function (TypeOrmBindings) {
    TypeOrmBindings.MANAGER = core_1.BindingKey.create('services.TypeOrmConnectionManager');
    TypeOrmBindings.PREFIX = 'connection';
    TypeOrmBindings.TAG = 'typeOrmConnection';
})(TypeOrmBindings = exports.TypeOrmBindings || (exports.TypeOrmBindings = {}));
//# sourceMappingURL=typeorm.keys.js.map