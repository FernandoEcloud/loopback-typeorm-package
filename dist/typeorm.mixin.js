"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmLifeCycleManager = exports.TypeOrmComponent = exports.TypeOrmMixin = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const typeorm_1 = require("typeorm");
const _1 = require("./");
const typeorm_keys_1 = require("./typeorm.keys");
const debug = (0, debug_1.default)('loopback:typeorm:mixin');
function TypeOrmMixin(superClass) {
    return class extends superClass {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args) {
            super(...args);
            this.component(TypeOrmComponent);
            this.connectionManager = new typeorm_1.ConnectionManager();
            const binding = this.bind(typeorm_keys_1.TypeOrmBindings.MANAGER).to(this.connectionManager);
            debug('Binding created for connection manager', binding);
        }
        connection(connectionConfig) {
            const connection = this.connectionManager.create(connectionConfig);
            const name = connection.name;
            const binding = this.bind(`${typeorm_keys_1.TypeOrmBindings.PREFIX}.${name}`)
                .toDynamicValue(() => this.connectionManager.get(name))
                .tag(typeorm_keys_1.TypeOrmBindings.TAG);
            this.add(binding);
            return binding;
        }
        async migrateSchema() {
            // TODO: implement using TypeORM
            throw new Error('TypeORM migration not implemented.');
        }
    };
}
exports.TypeOrmMixin = TypeOrmMixin;
let TypeOrmComponent = class TypeOrmComponent {
    constructor(options = {}) {
        this.options = options;
        this.bindings = [(0, core_1.createBindingFromClass)(_1.TypeOrmConnectionBooter)];
        this.lifeCycleObservers = [TypeOrmLifeCycleManager];
    }
};
TypeOrmComponent = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.config)()),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TypeOrmComponent);
exports.TypeOrmComponent = TypeOrmComponent;
let TypeOrmLifeCycleManager = class TypeOrmLifeCycleManager {
    constructor(manager) {
        this.manager = manager;
    }
    async start() {
        await Promise.all(this.manager.connections.map(c => c.connect()));
    }
    async stop() {
        await Promise.all(this.manager.connections.map(c => c.close()));
    }
};
TypeOrmLifeCycleManager = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource', {
        scope: core_1.BindingScope.SINGLETON,
    }),
    (0, tslib_1.__param)(0, (0, core_1.inject)(typeorm_keys_1.TypeOrmBindings.MANAGER)),
    (0, tslib_1.__metadata)("design:paramtypes", [typeorm_1.ConnectionManager])
], TypeOrmLifeCycleManager);
exports.TypeOrmLifeCycleManager = TypeOrmLifeCycleManager;
//# sourceMappingURL=typeorm.mixin.js.map