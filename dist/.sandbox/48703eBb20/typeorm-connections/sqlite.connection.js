"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqliteConnection = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const book_entity_1 = require("../typeorm-entities/book.entity");
exports.SqliteConnection = {
    name: 'my-db',
    type: 'sqlite',
    database: path_1.default.join(__dirname, './mydb.sql'),
    entities: [book_entity_1.Book],
    synchronize: true,
};
//# sourceMappingURL=sqlite.connection.js.map
//# sourceMappingURL=/Users/dhmlau/loopback-release/loopback-next/extensions/typeorm/dist/__tests__/fixtures/typeorm-connections/sqlite.connection.js.map