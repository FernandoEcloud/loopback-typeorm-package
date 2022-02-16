export declare namespace typeorm {
    function repository(entity: Function, connectionName?: string): (target: Object, member: string | undefined, methodDescriptorOrParameterIndex?: number | TypedPropertyDescriptor<any> | undefined) => void;
}
