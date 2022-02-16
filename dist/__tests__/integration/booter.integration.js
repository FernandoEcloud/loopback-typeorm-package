"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const path_1 = require("path");
const __1 = require("../../");
describe('TypeORM connection booter integration tests', () => {
    const sandbox = new testlab_1.TestSandbox((0, path_1.resolve)(__dirname, '../../.sandbox'));
    let app;
    beforeEach('reset sandbox', () => sandbox.reset());
    beforeEach(getApp);
    it('boots connections when app.boot() is called', async () => {
        const expectedBindings = [`${__1.TypeOrmBindings.PREFIX}.my-db`];
        await app.boot();
        const bindings = app.findByTag(__1.TypeOrmBindings.TAG).map(b => b.key);
        (0, testlab_1.expect)(bindings.sort()).to.eql(expectedBindings.sort());
    });
    async function getApp() {
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/application.js'));
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/typeorm-connections/sqlite.connection.js'), 'typeorm-connections/sqlite.connection.js');
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/typeorm-entities/book.entity.js'), 'typeorm-entities/book.entity.js');
        const MyApp = require((0, path_1.resolve)(sandbox.path, 'application.js')).TypeOrmApp;
        app = new MyApp();
    }
});
//# sourceMappingURL=booter.integration.js.map