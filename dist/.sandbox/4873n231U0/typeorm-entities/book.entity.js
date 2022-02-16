"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../../");
let Book = class Book {
};
(0, tslib_1.__decorate)([
    (0, __1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Book.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, __1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Book.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, __1.Column)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Book.prototype, "published", void 0);
Book = (0, tslib_1.__decorate)([
    (0, __1.Entity)()
], Book);
exports.Book = Book;
//# sourceMappingURL=book.entity.js.map
//# sourceMappingURL=/Users/dhmlau/loopback-release/loopback-next/extensions/typeorm/dist/__tests__/fixtures/typeorm-entities/book.entity.js.map