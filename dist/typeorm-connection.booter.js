"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/graphql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionDefaults = exports.TypeOrmConnectionBooter = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const core_1 = require("@loopback/core");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const debug = (0, debug_1.default)('loopback:typeorm:mixin');
/**
 * A class that extends BaseArtifactBooter to boot the TypeORM connection artifact type.
 *
 * Supported phases: configure, discover, load
 *
 * @param app - Application instance
 * @param projectRoot - Root of user's project relative to which all paths are resolved
 * @param bootConfig - Connection artifact options object
 */
let TypeOrmConnectionBooter = class TypeOrmConnectionBooter extends boot_1.BaseArtifactBooter {
    constructor(app, projectRoot, entityConfig = {}) {
        super(projectRoot, 
        // Set TypeORM connection options if passed in via bootConfig
        Object.assign({}, exports.ConnectionDefaults, entityConfig));
        this.app = app;
        this.entityConfig = entityConfig;
    }
    async load() {
        for (const file of this.discovered) {
            if (!this.app.connection) {
                console.warn('app.connection() function is needed for TypeOrmConnectionBooter. You can add ' +
                    'it to your Application using TypeOrmMixin from @loopback/typeorm.');
            }
            else {
                const connections = require(file);
                for (const k in connections) {
                    const connection = connections[k];
                    debug('Bind class: %s', connection.name);
                    const binding = this.app.connection(connection);
                    debug('Binding created for connection %s: %j', connection.name, binding);
                }
            }
        }
    }
};
TypeOrmConnectionBooter = (0, tslib_1.__decorate)([
    (0, boot_1.booter)('connections'),
    (0, tslib_1.__param)(0, (0, core_1.inject)(core_1.CoreBindings.APPLICATION_INSTANCE)),
    (0, tslib_1.__param)(1, (0, core_1.inject)(boot_1.BootBindings.PROJECT_ROOT)),
    (0, tslib_1.__param)(2, (0, core_1.config)()),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, String, Object])
], TypeOrmConnectionBooter);
exports.TypeOrmConnectionBooter = TypeOrmConnectionBooter;
/**
 * Default ArtifactOptions for TypeORM connection.
 */
exports.ConnectionDefaults = {
    dirs: ['typeorm-connections'],
    extensions: ['.connection.js'],
    nested: true,
};
//# sourceMappingURL=typeorm-connection.booter.js.map