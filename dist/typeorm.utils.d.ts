import { JsonSchemaOptions, ReferenceObject, SchemaObject } from '@loopback/rest';
import { ColumnType } from 'typeorm/driver/types/ColumnTypes';
/**
 * Describe the provided Entity as a reference to a definition shared by multiple
 * endpoints. The definition is included in the returned schema.
 *
 * @param modelCtor - The entity constructor (e.g. `Product`)
 * @param options - Additional options
 */
export declare function getModelSchema<T extends object>(modelCtor: Function & {
    prototype: T;
}, options?: JsonSchemaOptions<T>): SchemaObject;
export declare type PropertyType = {
    [propertyName: string]: SchemaObject | ReferenceObject;
};
export declare type StringifiedTypeOptions = {
    func: ColumnType;
    entity: string;
    property: string;
};
