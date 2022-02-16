"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
const __1 = require("../../../");
const book_entity_1 = require("../typeorm-entities/book.entity");
class BookController {
    constructor() { }
    async create(data) {
        const bookEntity = new book_entity_1.Book();
        bookEntity.title = data.title;
        bookEntity.published = data.published;
        return this.bookRepo.save(bookEntity);
    }
    async findById(id) {
        return this.bookRepo.findOne(id);
    }
}
(0, tslib_1.__decorate)([
    __1.typeorm.repository(book_entity_1.Book, 'my-db'),
    (0, tslib_1.__metadata)("design:type", __1.Repository)
], BookController.prototype, "bookRepo", void 0);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/books', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: (0, __1.getModelSchema)(book_entity_1.Book) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, __1.getModelSchema)(book_entity_1.Book, {
                    title: 'NewUser',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BookController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/books/{id}', {
        responses: {
            '200': {
                description: 'User model instance',
                content: {
                    'application/json': {
                        schema: (0, __1.getModelSchema)(book_entity_1.Book, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BookController.prototype, "findById", null);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map
//# sourceMappingURL=/Users/dhmlau/loopback-release/loopback-next/extensions/typeorm/dist/__tests__/fixtures/controllers/book.controller.js.map