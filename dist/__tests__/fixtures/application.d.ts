import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
declare const TypeOrmApp_base: (new (...args: any[]) => {
    projectRoot: string;
    bootOptions?: import("@loopback/boot").BootOptions | undefined;
    booted: boolean;
    start(): Promise<void>;
    boot(): Promise<void>;
    booters(...booterCls: import("@loopback/core").Constructor<import("@loopback/boot").Booter>[]): import("@loopback/boot").Binding<any>[];
    applicationBooter(subApp: import("@loopback/core").Application & import("@loopback/boot").Bootable, filter?: import("@loopback/core").BindingFilter | undefined): import("@loopback/boot").Binding<import("@loopback/boot").Booter>;
    component<C extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<C>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined): import("@loopback/boot").Binding<C>;
    mountComponentBooters(componentInstanceOrClass: import("@loopback/core").Constructor<unknown> | import("@loopback/boot").InstanceWithBooters): void;
    readonly options: ApplicationConfig;
    readonly state: string;
    controller: <T_1>(controllerCtor: import("@loopback/core").ControllerClass<T_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_1>;
    server: <T_2 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_2>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_2>;
    servers: <T_3 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_3>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_4 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_4>) => Promise<T_4>;
    init: () => Promise<void>;
    onInit: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    onStart: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    stop: () => Promise<void>;
    onStop: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_5 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_5>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_5>;
    service: <S>(cls: import("@loopback/core").ServiceOrProviderClass<S>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    scope: import("@loopback/core").BindingScope;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_6 extends import("@loopback/core").ContextEvent>(type: string, event: T_6) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType = any>(key: import("@loopback/core").BindingAddress<ValueType>) => import("@loopback/boot").Binding<ValueType>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType = any>(key?: import("@loopback/core").BindingAddress<unknown> | undefined) => import("@loopback/boot").Binding<ConfigValueType>;
    getConfigAsValueOrPromise: <ConfigValueType_1>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1 | undefined>;
    getConfig: <ConfigValueType_2>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2 | undefined>;
    getConfigSync: <ConfigValueType_3>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_7 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined, options?: Omit<import("@loopback/core").ResolutionOptions, "session"> | undefined) => import("@loopback/core").ContextView<T_7>;
    contains: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
    getOwnerContext: (keyOrBinding: import("@loopback/core").BindingAddress<unknown> | Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    getScopedContext: (scope: import("@loopback/core").BindingScope.APPLICATION | import("@loopback/core").BindingScope.SERVER | import("@loopback/core").BindingScope.REQUEST) => import("@loopback/core").Context | undefined;
    getResolutionContext: (binding: Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    isVisibleTo: (ctx: import("@loopback/core").Context) => boolean;
    find: <ValueType_1 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1>>[];
    findByTag: <ValueType_2 = any>(tagFilter: RegExp | import("@loopback/core").BindingTag) => Readonly<import("@loopback/boot").Binding<ValueType_2>>[];
    get: {
        <ValueType_3>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3>;
        <ValueType_4>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4 | undefined>;
    };
    getSync: {
        <ValueType_5>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5;
        <ValueType_6>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6 | undefined;
    };
    getBinding: {
        <ValueType_7 = any>(key: import("@loopback/core").BindingAddress<ValueType_7>): import("@loopback/boot").Binding<ValueType_7>;
        <ValueType_8>(key: import("@loopback/core").BindingAddress<ValueType_8>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8> | undefined;
    };
    findOrCreateBinding: <T_8>(key: import("@loopback/core").BindingAddress<T_8>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_8>;
    getValueOrPromise: <ValueType_9>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9>, optionsOrSession?: import("@loopback/core").ResolutionOptionsOrSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    addListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: (event: string | symbol) => Function[];
    rawListeners: (event: string | symbol) => Function[];
    emit: (event: string | symbol, ...args: any[]) => boolean;
    listenerCount: (type: string | symbol) => number;
    prependListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    eventNames: () => (string | symbol)[];
}) & {
    new (...args: any[]): {
        connectionManager: import("typeorm/connection/ConnectionManager").ConnectionManager;
        connection(connectionConfig: import("typeorm/connection/ConnectionOptions").ConnectionOptions): import("@loopback/boot").Binding<import("typeorm/connection/Connection").Connection>;
        migrateSchema(): Promise<void>;
        readonly options: ApplicationConfig;
        readonly state: string;
        controller: <T>(controllerCtor: import("@loopback/core").ControllerClass<T>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T>;
        server: <T_9 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_9>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_9>;
        servers: <T_10 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_10>[]) => import("@loopback/boot").Binding<any>[];
        getServer: <T_11 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_11>) => Promise<T_11>;
        init: () => Promise<void>;
        onInit: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
        start: () => Promise<void>;
        onStart: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
        stop: () => Promise<void>;
        onStop: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
        component: <T_12 extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<T_12>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_12>;
        setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
        lifeCycleObserver: <T_13 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_13>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_13>;
        service: <S_1>(cls: import("@loopback/core").ServiceOrProviderClass<S_1>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S_1>;
        interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
        readonly name: string;
        readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
        scope: import("@loopback/core").BindingScope;
        readonly parent: import("@loopback/core").Context | undefined;
        emitEvent: <T_14 extends import("@loopback/core").ContextEvent>(type: string, event: T_14) => void;
        emitError: (err: unknown) => void;
        bind: <ValueType_10 = any>(key: import("@loopback/core").BindingAddress<ValueType_10>) => import("@loopback/boot").Binding<ValueType_10>;
        add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
        configure: <ConfigValueType_4 = any>(key?: import("@loopback/core").BindingAddress<unknown> | undefined) => import("@loopback/boot").Binding<ConfigValueType_4>;
        getConfigAsValueOrPromise: <ConfigValueType_5>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_5 | undefined>;
        getConfig: <ConfigValueType_6>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_6 | undefined>;
        getConfigSync: <ConfigValueType_7>(key: import("@loopback/core").BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_7 | undefined;
        unbind: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
        subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
        unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
        close: () => void;
        isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
        createView: <T_15 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined, options?: Omit<import("@loopback/core").ResolutionOptions, "session"> | undefined) => import("@loopback/core").ContextView<T_15>;
        contains: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
        isBound: (key: import("@loopback/core").BindingAddress<unknown>) => boolean;
        getOwnerContext: (keyOrBinding: import("@loopback/core").BindingAddress<unknown> | Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
        getScopedContext: (scope: import("@loopback/core").BindingScope.APPLICATION | import("@loopback/core").BindingScope.SERVER | import("@loopback/core").BindingScope.REQUEST) => import("@loopback/core").Context | undefined;
        getResolutionContext: (binding: Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
        isVisibleTo: (ctx: import("@loopback/core").Context) => boolean;
        find: <ValueType_11 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_11>>[];
        findByTag: <ValueType_12 = any>(tagFilter: RegExp | import("@loopback/core").BindingTag) => Readonly<import("@loopback/boot").Binding<ValueType_12>>[];
        get: {
            <ValueType_13>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_13>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_13>;
            <ValueType_14>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_14>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_14 | undefined>;
        };
        getSync: {
            <ValueType_15>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_15>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_15;
            <ValueType_16>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_16>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_16 | undefined;
        };
        getBinding: {
            <ValueType_17 = any>(key: import("@loopback/core").BindingAddress<ValueType_17>): import("@loopback/boot").Binding<ValueType_17>;
            <ValueType_18>(key: import("@loopback/core").BindingAddress<ValueType_18>, options?: {
                optional?: boolean | undefined;
            } | undefined): import("@loopback/boot").Binding<ValueType_18> | undefined;
        };
        findOrCreateBinding: <T_16>(key: import("@loopback/core").BindingAddress<T_16>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_16>;
        getValueOrPromise: <ValueType_19>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_19>, optionsOrSession?: import("@loopback/core").ResolutionOptionsOrSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_19 | undefined>;
        toJSON: () => import("@loopback/core").JSONObject;
        inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
        on: {
            (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
            (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
        };
        once: {
            (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
            (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
        };
        addListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
        removeListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
        off: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
        removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
        setMaxListeners: (n: number) => import("@loopback/core").Application;
        getMaxListeners: () => number;
        listeners: (event: string | symbol) => Function[];
        rawListeners: (event: string | symbol) => Function[];
        emit: (event: string | symbol, ...args: any[]) => boolean;
        listenerCount: (type: string | symbol) => number;
        prependListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
        prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
        eventNames: () => (string | symbol)[];
    };
} & typeof RestApplication;
export declare class TypeOrmApp extends TypeOrmApp_base {
    constructor(options?: ApplicationConfig);
}
export {};
