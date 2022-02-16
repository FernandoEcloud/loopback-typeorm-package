"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const testlab_1 = require("@loopback/testlab");
const path_1 = require("path");
const __1 = require("../../");
describe('TypeORM connection booter unit tests', () => {
    const sandbox = new testlab_1.TestSandbox((0, path_1.resolve)(__dirname, '../../../.sandbox'));
    class AppUsingTypeOrm extends (0, __1.TypeOrmMixin)(core_1.Application) {
    }
    let app;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let stub;
    beforeEach('reset sandbox', () => sandbox.reset());
    beforeEach(getApp);
    beforeEach(createStub);
    afterEach(restoreStub);
    it('gives a warning if called on an app without TypeOrmMixin', async () => {
        const normalApp = new core_1.Application();
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/typeorm-connections/sqlite.connection.js'), 'typeorm-connections/sqlite.connection.js');
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/typeorm-entities/book.entity.js'), 'typeorm-entities/book.entity.js');
        const booterInst = new __1.TypeOrmConnectionBooter(normalApp, sandbox.path);
        booterInst.discovered = [(0, path_1.resolve)(sandbox.path, 'sqlite.connection.js')];
        await booterInst.load();
        testlab_1.sinon.assert.calledOnce(stub);
        testlab_1.sinon.assert.calledWith(stub, 'app.connection() function is needed for TypeOrmConnectionBooter. You can add ' +
            'it to your Application using TypeOrmMixin from @loopback/typeorm.');
    });
    it(`uses ConnectionDefaults for 'options' if none are given`, () => {
        const booterInst = new __1.TypeOrmConnectionBooter(app, sandbox.path);
        (0, testlab_1.expect)(booterInst.options).to.deepEqual(__1.ConnectionDefaults);
    });
    it('overrides defaults with provided options and uses defaults for the rest', () => {
        const options = {
            dirs: ['test'],
            extensions: ['.ext1'],
        };
        const expected = Object.assign({}, options, {
            nested: __1.ConnectionDefaults.nested,
        });
        const booterInst = new __1.TypeOrmConnectionBooter(app, sandbox.path, options);
        (0, testlab_1.expect)(booterInst.options).to.deepEqual(expected);
    });
    it('binds connections during the load phase', async () => {
        const expected = [`${__1.TypeOrmBindings.PREFIX}.my-db`];
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/typeorm-connections/sqlite.connection.js'), 'typeorm-connections/sqlite.connection.js');
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/typeorm-entities/book.entity.js'), 'typeorm-entities/book.entity.js');
        const booterInst = new __1.TypeOrmConnectionBooter(app, sandbox.path);
        const NUM_CONNECTIONS = 1; // 1 connection in above file.
        booterInst.discovered = [
            (0, path_1.resolve)(sandbox.path, 'typeorm-connections/sqlite.connection.js'),
        ];
        await booterInst.load();
        const connections = app.findByTag(__1.TypeOrmBindings.TAG);
        const keys = connections.map(binding => binding.key);
        (0, testlab_1.expect)(keys).to.have.lengthOf(NUM_CONNECTIONS);
        (0, testlab_1.expect)(keys.sort()).to.eql(expected.sort());
    });
    function getApp() {
        app = new AppUsingTypeOrm();
    }
    function restoreStub() {
        stub.restore();
    }
    function createStub() {
        stub = testlab_1.sinon.stub(console, 'warn');
    }
});
//# sourceMappingURL=booter.unit.js.map