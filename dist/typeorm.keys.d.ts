import { BindingKey } from '@loopback/core';
import { ConnectionManager } from 'typeorm';
/**
 * Binding keys used by this component.
 */
export declare namespace TypeOrmBindings {
    const MANAGER: BindingKey<ConnectionManager>;
    const PREFIX = "connection";
    const TAG = "typeOrmConnection";
}
