"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeorm = void 0;
const core_1 = require("@loopback/core");
const typeorm_keys_1 = require("./typeorm.keys");
var typeorm;
(function (typeorm) {
    function repository(entity, connectionName) {
        return (0, core_1.inject)('', { decorator: '@typeorm.repository' }, async (ctx, injection, session) => {
            const conn = await getConnection(ctx, connectionName);
            return conn.getRepository(entity);
        });
    }
    typeorm.repository = repository;
})(typeorm = exports.typeorm || (exports.typeorm = {}));
/**
 * Get a connection by name
 * @param ctx - Context object
 * @param connectionName - Optional connection name
 */
async function getConnection(ctx, connectionName) {
    const manager = await ctx.get(typeorm_keys_1.TypeOrmBindings.MANAGER);
    return manager.get(connectionName);
}
//# sourceMappingURL=typeorm.decorators.js.map