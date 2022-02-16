import * as loopbackContext from '@loopback/core';
import { Application, Binding, Component, LifeCycleObserver, MixinTarget } from '@loopback/core';
import { Connection, ConnectionManager, ConnectionOptions } from 'typeorm';
export declare function TypeOrmMixin<T extends MixinTarget<Application>>(superClass: T): {
    new (...args: any[]): {
        connectionManager: ConnectionManager;
        connection(connectionConfig: ConnectionOptions): loopbackContext.Binding<Connection>;
        migrateSchema(): Promise<void>;
        readonly options: loopbackContext.ApplicationConfig;
        readonly state: string;
        controller: <T_1>(controllerCtor: loopbackContext.ControllerClass<T_1>, nameOrOptions?: string | loopbackContext.BindingFromClassOptions | undefined) => loopbackContext.Binding<T_1>;
        server: <T_2 extends loopbackContext.Server>(ctor: loopbackContext.Constructor<T_2>, nameOrOptions?: string | loopbackContext.BindingFromClassOptions | undefined) => loopbackContext.Binding<T_2>;
        servers: <T_3 extends loopbackContext.Server>(ctors: loopbackContext.Constructor<T_3>[]) => loopbackContext.Binding<any>[];
        getServer: <T_4 extends loopbackContext.Server>(target: string | loopbackContext.Constructor<T_4>) => Promise<T_4>;
        init: () => Promise<void>;
        onInit: (fn: () => loopbackContext.ValueOrPromise<void>) => loopbackContext.Binding<loopbackContext.LifeCycleObserver>;
        start: () => Promise<void>;
        onStart: (fn: () => loopbackContext.ValueOrPromise<void>) => loopbackContext.Binding<loopbackContext.LifeCycleObserver>;
        stop: () => Promise<void>;
        onStop: (fn: () => loopbackContext.ValueOrPromise<void>) => loopbackContext.Binding<loopbackContext.LifeCycleObserver>;
        component: <T_5 extends loopbackContext.Component = loopbackContext.Component>(componentCtor: loopbackContext.Constructor<T_5>, nameOrOptions?: string | loopbackContext.BindingFromClassOptions | undefined) => loopbackContext.Binding<T_5>;
        setMetadata: (metadata: loopbackContext.ApplicationMetadata) => void;
        lifeCycleObserver: <T_6 extends loopbackContext.LifeCycleObserver>(ctor: loopbackContext.Constructor<T_6>, nameOrOptions?: string | loopbackContext.BindingFromClassOptions | undefined) => loopbackContext.Binding<T_6>;
        service: <S>(cls: loopbackContext.ServiceOrProviderClass<S>, nameOrOptions?: string | loopbackContext.ServiceOptions | undefined) => loopbackContext.Binding<S>;
        interceptor: (interceptor: loopbackContext.Interceptor | loopbackContext.Constructor<loopbackContext.Provider<loopbackContext.Interceptor>>, nameOrOptions?: string | loopbackContext.InterceptorBindingOptions | undefined) => loopbackContext.Binding<loopbackContext.Interceptor>;
        readonly name: string;
        readonly subscriptionManager: loopbackContext.ContextSubscriptionManager;
        scope: loopbackContext.BindingScope;
        readonly parent: loopbackContext.Context | undefined;
        emitEvent: <T_7 extends loopbackContext.ContextEvent>(type: string, event: T_7) => void;
        emitError: (err: unknown) => void;
        bind: <ValueType = any>(key: loopbackContext.BindingAddress<ValueType>) => loopbackContext.Binding<ValueType>;
        add: (binding: loopbackContext.Binding<unknown>) => loopbackContext.Application;
        configure: <ConfigValueType = any>(key?: loopbackContext.BindingAddress<unknown> | undefined) => loopbackContext.Binding<ConfigValueType>;
        getConfigAsValueOrPromise: <ConfigValueType_1>(key: loopbackContext.BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: loopbackContext.ResolutionOptions | undefined) => loopbackContext.ValueOrPromise<ConfigValueType_1 | undefined>;
        getConfig: <ConfigValueType_2>(key: loopbackContext.BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: loopbackContext.ResolutionOptions | undefined) => Promise<ConfigValueType_2 | undefined>;
        getConfigSync: <ConfigValueType_3>(key: loopbackContext.BindingAddress<unknown>, propertyPath?: string | undefined, resolutionOptions?: loopbackContext.ResolutionOptions | undefined) => ConfigValueType_3 | undefined;
        unbind: (key: loopbackContext.BindingAddress<unknown>) => boolean;
        subscribe: (observer: loopbackContext.ContextEventObserver) => loopbackContext.Subscription;
        unsubscribe: (observer: loopbackContext.ContextEventObserver) => boolean;
        close: () => void;
        isSubscribed: (observer: loopbackContext.ContextObserver) => boolean;
        createView: <T_8 = unknown>(filter: loopbackContext.BindingFilter, comparator?: loopbackContext.BindingComparator | undefined, options?: Omit<loopbackContext.ResolutionOptions, "session"> | undefined) => loopbackContext.ContextView<T_8>;
        contains: (key: loopbackContext.BindingAddress<unknown>) => boolean;
        isBound: (key: loopbackContext.BindingAddress<unknown>) => boolean;
        getOwnerContext: (keyOrBinding: loopbackContext.BindingAddress<unknown> | Readonly<loopbackContext.Binding<unknown>>) => loopbackContext.Context | undefined;
        getScopedContext: (scope: loopbackContext.BindingScope.APPLICATION | loopbackContext.BindingScope.SERVER | loopbackContext.BindingScope.REQUEST) => loopbackContext.Context | undefined;
        getResolutionContext: (binding: Readonly<loopbackContext.Binding<unknown>>) => loopbackContext.Context | undefined;
        isVisibleTo: (ctx: loopbackContext.Context) => boolean;
        find: <ValueType_1 = any>(pattern?: string | RegExp | loopbackContext.BindingFilter | undefined) => Readonly<loopbackContext.Binding<ValueType_1>>[];
        findByTag: <ValueType_2 = any>(tagFilter: RegExp | loopbackContext.BindingTag) => Readonly<loopbackContext.Binding<ValueType_2>>[];
        get: {
            <ValueType_3>(keyWithPath: loopbackContext.BindingAddress<ValueType_3>, session?: loopbackContext.ResolutionSession | undefined): Promise<ValueType_3>;
            <ValueType_4>(keyWithPath: loopbackContext.BindingAddress<ValueType_4>, options: loopbackContext.ResolutionOptions): Promise<ValueType_4 | undefined>;
        };
        getSync: {
            <ValueType_5>(keyWithPath: loopbackContext.BindingAddress<ValueType_5>, session?: loopbackContext.ResolutionSession | undefined): ValueType_5;
            <ValueType_6>(keyWithPath: loopbackContext.BindingAddress<ValueType_6>, options?: loopbackContext.ResolutionOptions | undefined): ValueType_6 | undefined;
        };
        getBinding: {
            <ValueType_7 = any>(key: loopbackContext.BindingAddress<ValueType_7>): loopbackContext.Binding<ValueType_7>;
            <ValueType_8>(key: loopbackContext.BindingAddress<ValueType_8>, options?: {
                optional?: boolean | undefined;
            } | undefined): loopbackContext.Binding<ValueType_8> | undefined;
        };
        findOrCreateBinding: <T_9>(key: loopbackContext.BindingAddress<T_9>, policy?: loopbackContext.BindingCreationPolicy | undefined) => loopbackContext.Binding<T_9>;
        getValueOrPromise: <ValueType_9>(keyWithPath: loopbackContext.BindingAddress<ValueType_9>, optionsOrSession?: loopbackContext.ResolutionOptionsOrSession | undefined) => loopbackContext.ValueOrPromise<ValueType_9 | undefined>;
        toJSON: () => loopbackContext.JSONObject;
        inspect: (options?: loopbackContext.ContextInspectOptions | undefined) => loopbackContext.JSONObject;
        on: {
            (eventName: "bind" | "unbind", listener: loopbackContext.ContextEventListener): loopbackContext.Application;
            (event: string | symbol, listener: (...args: any[]) => void): loopbackContext.Application;
        };
        once: {
            (eventName: "bind" | "unbind", listener: loopbackContext.ContextEventListener): loopbackContext.Application;
            (event: string | symbol, listener: (...args: any[]) => void): loopbackContext.Application;
        };
        addListener: (event: string | symbol, listener: (...args: any[]) => void) => loopbackContext.Application;
        removeListener: (event: string | symbol, listener: (...args: any[]) => void) => loopbackContext.Application;
        off: (event: string | symbol, listener: (...args: any[]) => void) => loopbackContext.Application;
        removeAllListeners: (event?: string | symbol | undefined) => loopbackContext.Application;
        setMaxListeners: (n: number) => loopbackContext.Application;
        getMaxListeners: () => number;
        listeners: (event: string | symbol) => Function[];
        rawListeners: (event: string | symbol) => Function[];
        emit: (event: string | symbol, ...args: any[]) => boolean;
        listenerCount: (type: string | symbol) => number;
        prependListener: (event: string | symbol, listener: (...args: any[]) => void) => loopbackContext.Application;
        prependOnceListener: (event: string | symbol, listener: (...args: any[]) => void) => loopbackContext.Application;
        eventNames: () => (string | symbol)[];
    };
} & T;
export interface ApplicationUsingTypeOrm extends Application {
    connection(options: ConnectionOptions): void;
    migrateSchema(): Promise<void>;
}
export declare type TypeOrmComponentOptions = {
    [prop: string]: string;
};
export declare class TypeOrmComponent implements Component {
    private options;
    bindings: Binding[];
    lifeCycleObservers: (typeof TypeOrmLifeCycleManager)[];
    constructor(options?: TypeOrmComponentOptions);
}
export declare class TypeOrmLifeCycleManager implements LifeCycleObserver {
    private manager;
    constructor(manager: ConnectionManager);
    start(): Promise<void>;
    stop(): Promise<void>;
}
