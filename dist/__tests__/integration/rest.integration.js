"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const path_1 = require("path");
describe('REST with TypeORM (integration)', () => {
    const sandbox = new testlab_1.TestSandbox((0, path_1.resolve)(__dirname, '../../.sandbox'));
    let app;
    let client;
    beforeEach('reset sandbox', () => sandbox.reset());
    beforeEach(getAppAndClient);
    afterEach(async () => {
        if (app)
            await app.stop();
        app = undefined;
    });
    it('creates an entity', async () => {
        const book = {
            title: 'The Jungle',
            published: false,
        };
        const res = await client.post('/books').send(book);
        (0, testlab_1.expect)(res.body).to.have.property('title', book.title);
        (0, testlab_1.expect)(res.body).to.have.property('published', book.published);
    });
    it('fetches an entity', async () => {
        const book = {
            title: 'The Book',
            published: true,
        };
        const create = await client.post('/books').send(book);
        const res = await client.get(`/books/${create.body.id}`);
        (0, testlab_1.expect)(res.body).to.have.property('title', book.title);
        (0, testlab_1.expect)(res.body).to.have.property('published', book.published);
    });
    async function getAppAndClient() {
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/application.js'));
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/typeorm-connections/sqlite.connection.js'), 'typeorm-connections/sqlite.connection.js');
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/typeorm-entities/book.entity.js'), 'typeorm-entities/book.entity.js');
        await sandbox.copyFile((0, path_1.resolve)(__dirname, '../fixtures/controllers/book.controller.js'), 'controllers/book.controller.js');
        const MyApp = require((0, path_1.resolve)(sandbox.path, 'application.js')).TypeOrmApp;
        app = new MyApp({
            rest: (0, testlab_1.givenHttpServerConfig)(),
        });
        await app.boot();
        await app.start();
        client = (0, testlab_1.createRestAppClient)(app);
    }
});
//# sourceMappingURL=rest.integration.js.map