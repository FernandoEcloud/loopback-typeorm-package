import { ArtifactOptions, BaseArtifactBooter } from '@loopback/boot';
import { ApplicationUsingTypeOrm } from './';
/**
 * A class that extends BaseArtifactBooter to boot the TypeORM connection artifact type.
 *
 * Supported phases: configure, discover, load
 *
 * @param app - Application instance
 * @param projectRoot - Root of user's project relative to which all paths are resolved
 * @param bootConfig - Connection artifact options object
 */
export declare class TypeOrmConnectionBooter extends BaseArtifactBooter {
    app: ApplicationUsingTypeOrm;
    entityConfig: ArtifactOptions;
    constructor(app: ApplicationUsingTypeOrm, projectRoot: string, entityConfig?: ArtifactOptions);
    load(): Promise<void>;
}
/**
 * Default ArtifactOptions for TypeORM connection.
 */
export declare const ConnectionDefaults: ArtifactOptions;
