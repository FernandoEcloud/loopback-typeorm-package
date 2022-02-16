"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModelSchema = void 0;
const tslib_1 = require("tslib");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const typeorm_1 = require("typeorm");
const debug = (0, debug_1.default)('loopback:typeorm:mixin');
const modelSchemaCache = new WeakMap();
/**
 * Describe the provided Entity as a reference to a definition shared by multiple
 * endpoints. The definition is included in the returned schema.
 *
 * @param modelCtor - The entity constructor (e.g. `Product`)
 * @param options - Additional options
 */
function getModelSchema(modelCtor, options) {
    const cached = modelSchemaCache.get(modelCtor);
    if (cached) {
        return cached;
    }
    const allColumns = (0, typeorm_1.getMetadataArgsStorage)().columns;
    const modelColumns = allColumns.filter(col => col.target === modelCtor);
    const properties = {};
    for (const col of modelColumns) {
        // Skip @PrimaryGeneratedColumn
        if (!col.options.primary) {
            properties[col.propertyName] = {
                type: getStringifiedType({
                    func: col.options.type,
                    entity: modelCtor.name,
                    property: col.propertyName,
                }),
            };
        }
    }
    const schema = {
        title: modelCtor.name,
        properties,
    };
    modelSchemaCache.set(modelCtor, schema);
    return schema;
}
exports.getModelSchema = getModelSchema;
// TODO: identify other data types
function getStringifiedType(options) {
    const { func, entity, property } = options;
    if (func === Number) {
        return 'number';
    }
    else if (func === String) {
        return 'string';
    }
    else if (func === Boolean) {
        return 'boolean';
    }
    else {
        debug(`${entity}.${property}: Type conversion of ${func} to OpenAPI format not implemented.`);
        return undefined;
    }
}
//# sourceMappingURL=typeorm.utils.js.map