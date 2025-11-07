
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ServiceEvent
 * 
 */
export type ServiceEvent = $Result.DefaultSelection<Prisma.$ServiceEventPayload>
/**
 * Model ServiceEventHistory
 * 
 */
export type ServiceEventHistory = $Result.DefaultSelection<Prisma.$ServiceEventHistoryPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceDependency
 * 
 */
export type ServiceDependency = $Result.DefaultSelection<Prisma.$ServiceDependencyPayload>
/**
 * Model Metrics
 * 
 */
export type Metrics = $Result.DefaultSelection<Prisma.$MetricsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventType: {
  INITIAL: 'INITIAL',
  STATUS_CHANGE: 'STATUS_CHANGE',
  RECOVERY: 'RECOVERY',
  FAILURE: 'FAILURE',
  CRASH_LOOP: 'CRASH_LOOP'
};

export type EventType = (typeof EventType)[keyof typeof EventType]

}

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notifications
 * const notifications = await prisma.notification.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceEvent`: Exposes CRUD operations for the **ServiceEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceEvents
    * const serviceEvents = await prisma.serviceEvent.findMany()
    * ```
    */
  get serviceEvent(): Prisma.ServiceEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceEventHistory`: Exposes CRUD operations for the **ServiceEventHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceEventHistories
    * const serviceEventHistories = await prisma.serviceEventHistory.findMany()
    * ```
    */
  get serviceEventHistory(): Prisma.ServiceEventHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceDependency`: Exposes CRUD operations for the **ServiceDependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceDependencies
    * const serviceDependencies = await prisma.serviceDependency.findMany()
    * ```
    */
  get serviceDependency(): Prisma.ServiceDependencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metrics`: Exposes CRUD operations for the **Metrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metrics.findMany()
    * ```
    */
  get metrics(): Prisma.MetricsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Notification: 'Notification',
    ServiceEvent: 'ServiceEvent',
    ServiceEventHistory: 'ServiceEventHistory',
    Service: 'Service',
    ServiceDependency: 'ServiceDependency',
    Metrics: 'Metrics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "notification" | "serviceEvent" | "serviceEventHistory" | "service" | "serviceDependency" | "metrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ServiceEvent: {
        payload: Prisma.$ServiceEventPayload<ExtArgs>
        fields: Prisma.ServiceEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>
          }
          findFirst: {
            args: Prisma.ServiceEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>
          }
          findMany: {
            args: Prisma.ServiceEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>[]
          }
          create: {
            args: Prisma.ServiceEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>
          }
          createMany: {
            args: Prisma.ServiceEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>[]
          }
          delete: {
            args: Prisma.ServiceEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>
          }
          update: {
            args: Prisma.ServiceEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>
          }
          deleteMany: {
            args: Prisma.ServiceEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>[]
          }
          upsert: {
            args: Prisma.ServiceEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventPayload>
          }
          aggregate: {
            args: Prisma.ServiceEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceEvent>
          }
          groupBy: {
            args: Prisma.ServiceEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceEventCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceEventCountAggregateOutputType> | number
          }
        }
      }
      ServiceEventHistory: {
        payload: Prisma.$ServiceEventHistoryPayload<ExtArgs>
        fields: Prisma.ServiceEventHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceEventHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceEventHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>
          }
          findFirst: {
            args: Prisma.ServiceEventHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceEventHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>
          }
          findMany: {
            args: Prisma.ServiceEventHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>[]
          }
          create: {
            args: Prisma.ServiceEventHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>
          }
          createMany: {
            args: Prisma.ServiceEventHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceEventHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>[]
          }
          delete: {
            args: Prisma.ServiceEventHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>
          }
          update: {
            args: Prisma.ServiceEventHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ServiceEventHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceEventHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceEventHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ServiceEventHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceEventHistoryPayload>
          }
          aggregate: {
            args: Prisma.ServiceEventHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceEventHistory>
          }
          groupBy: {
            args: Prisma.ServiceEventHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceEventHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceEventHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceEventHistoryCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceDependency: {
        payload: Prisma.$ServiceDependencyPayload<ExtArgs>
        fields: Prisma.ServiceDependencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceDependencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceDependencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>
          }
          findFirst: {
            args: Prisma.ServiceDependencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceDependencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>
          }
          findMany: {
            args: Prisma.ServiceDependencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>[]
          }
          create: {
            args: Prisma.ServiceDependencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>
          }
          createMany: {
            args: Prisma.ServiceDependencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceDependencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>[]
          }
          delete: {
            args: Prisma.ServiceDependencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>
          }
          update: {
            args: Prisma.ServiceDependencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>
          }
          deleteMany: {
            args: Prisma.ServiceDependencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceDependencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceDependencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>[]
          }
          upsert: {
            args: Prisma.ServiceDependencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDependencyPayload>
          }
          aggregate: {
            args: Prisma.ServiceDependencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceDependency>
          }
          groupBy: {
            args: Prisma.ServiceDependencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceDependencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceDependencyCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceDependencyCountAggregateOutputType> | number
          }
        }
      }
      Metrics: {
        payload: Prisma.$MetricsPayload<ExtArgs>
        fields: Prisma.MetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          findFirst: {
            args: Prisma.MetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          findMany: {
            args: Prisma.MetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>[]
          }
          create: {
            args: Prisma.MetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          createMany: {
            args: Prisma.MetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>[]
          }
          delete: {
            args: Prisma.MetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          update: {
            args: Prisma.MetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          deleteMany: {
            args: Prisma.MetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>[]
          }
          upsert: {
            args: Prisma.MetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          aggregate: {
            args: Prisma.MetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrics>
          }
          groupBy: {
            args: Prisma.MetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricsCountArgs<ExtArgs>
            result: $Utils.Optional<MetricsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    notification?: NotificationOmit
    serviceEvent?: ServiceEventOmit
    serviceEventHistory?: ServiceEventHistoryOmit
    service?: ServiceOmit
    serviceDependency?: ServiceDependencyOmit
    metrics?: MetricsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    dependenciesFrom: number
    dependenciesTo: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependenciesFrom?: boolean | ServiceCountOutputTypeCountDependenciesFromArgs
    dependenciesTo?: boolean | ServiceCountOutputTypeCountDependenciesToArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountDependenciesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceDependencyWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountDependenciesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceDependencyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    message: string | null
    service: string | null
    cluster: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    message: string | null
    service: string | null
    cluster: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    title: number
    message: number
    service: number
    cluster: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    service?: true
    cluster?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    service?: true
    cluster?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    service?: true
    cluster?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: string
    title: string
    message: string
    service: string
    cluster: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    service?: boolean
    cluster?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    service?: boolean
    cluster?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    service?: boolean
    cluster?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    service?: boolean
    cluster?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "message" | "service" | "cluster" | "createdAt", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      title: string
      message: string
      service: string
      cluster: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly service: FieldRef<"Notification", 'String'>
    readonly cluster: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Model ServiceEvent
   */

  export type AggregateServiceEvent = {
    _count: ServiceEventCountAggregateOutputType | null
    _min: ServiceEventMinAggregateOutputType | null
    _max: ServiceEventMaxAggregateOutputType | null
  }

  export type ServiceEventMinAggregateOutputType = {
    id: string | null
    service: string | null
    status: string | null
    cluster: string | null
    message: string | null
    eventType: $Enums.EventType | null
    createdAt: Date | null
  }

  export type ServiceEventMaxAggregateOutputType = {
    id: string | null
    service: string | null
    status: string | null
    cluster: string | null
    message: string | null
    eventType: $Enums.EventType | null
    createdAt: Date | null
  }

  export type ServiceEventCountAggregateOutputType = {
    id: number
    service: number
    status: number
    cluster: number
    message: number
    eventType: number
    createdAt: number
    _all: number
  }


  export type ServiceEventMinAggregateInputType = {
    id?: true
    service?: true
    status?: true
    cluster?: true
    message?: true
    eventType?: true
    createdAt?: true
  }

  export type ServiceEventMaxAggregateInputType = {
    id?: true
    service?: true
    status?: true
    cluster?: true
    message?: true
    eventType?: true
    createdAt?: true
  }

  export type ServiceEventCountAggregateInputType = {
    id?: true
    service?: true
    status?: true
    cluster?: true
    message?: true
    eventType?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceEvent to aggregate.
     */
    where?: ServiceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEvents to fetch.
     */
    orderBy?: ServiceEventOrderByWithRelationInput | ServiceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceEvents
    **/
    _count?: true | ServiceEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceEventMaxAggregateInputType
  }

  export type GetServiceEventAggregateType<T extends ServiceEventAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceEvent[P]>
      : GetScalarType<T[P], AggregateServiceEvent[P]>
  }




  export type ServiceEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceEventWhereInput
    orderBy?: ServiceEventOrderByWithAggregationInput | ServiceEventOrderByWithAggregationInput[]
    by: ServiceEventScalarFieldEnum[] | ServiceEventScalarFieldEnum
    having?: ServiceEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceEventCountAggregateInputType | true
    _min?: ServiceEventMinAggregateInputType
    _max?: ServiceEventMaxAggregateInputType
  }

  export type ServiceEventGroupByOutputType = {
    id: string
    service: string
    status: string
    cluster: string | null
    message: string | null
    eventType: $Enums.EventType
    createdAt: Date
    _count: ServiceEventCountAggregateOutputType | null
    _min: ServiceEventMinAggregateOutputType | null
    _max: ServiceEventMaxAggregateOutputType | null
  }

  type GetServiceEventGroupByPayload<T extends ServiceEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceEventGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceEventGroupByOutputType[P]>
        }
      >
    >


  export type ServiceEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    status?: boolean
    cluster?: boolean
    message?: boolean
    eventType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceEvent"]>

  export type ServiceEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    status?: boolean
    cluster?: boolean
    message?: boolean
    eventType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceEvent"]>

  export type ServiceEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    status?: boolean
    cluster?: boolean
    message?: boolean
    eventType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceEvent"]>

  export type ServiceEventSelectScalar = {
    id?: boolean
    service?: boolean
    status?: boolean
    cluster?: boolean
    message?: boolean
    eventType?: boolean
    createdAt?: boolean
  }

  export type ServiceEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "status" | "cluster" | "message" | "eventType" | "createdAt", ExtArgs["result"]["serviceEvent"]>

  export type $ServiceEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      status: string
      cluster: string | null
      message: string | null
      eventType: $Enums.EventType
      createdAt: Date
    }, ExtArgs["result"]["serviceEvent"]>
    composites: {}
  }

  type ServiceEventGetPayload<S extends boolean | null | undefined | ServiceEventDefaultArgs> = $Result.GetResult<Prisma.$ServiceEventPayload, S>

  type ServiceEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceEventCountAggregateInputType | true
    }

  export interface ServiceEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceEvent'], meta: { name: 'ServiceEvent' } }
    /**
     * Find zero or one ServiceEvent that matches the filter.
     * @param {ServiceEventFindUniqueArgs} args - Arguments to find a ServiceEvent
     * @example
     * // Get one ServiceEvent
     * const serviceEvent = await prisma.serviceEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceEventFindUniqueArgs>(args: SelectSubset<T, ServiceEventFindUniqueArgs<ExtArgs>>): Prisma__ServiceEventClient<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceEventFindUniqueOrThrowArgs} args - Arguments to find a ServiceEvent
     * @example
     * // Get one ServiceEvent
     * const serviceEvent = await prisma.serviceEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceEventClient<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventFindFirstArgs} args - Arguments to find a ServiceEvent
     * @example
     * // Get one ServiceEvent
     * const serviceEvent = await prisma.serviceEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceEventFindFirstArgs>(args?: SelectSubset<T, ServiceEventFindFirstArgs<ExtArgs>>): Prisma__ServiceEventClient<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventFindFirstOrThrowArgs} args - Arguments to find a ServiceEvent
     * @example
     * // Get one ServiceEvent
     * const serviceEvent = await prisma.serviceEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceEventClient<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceEvents
     * const serviceEvents = await prisma.serviceEvent.findMany()
     * 
     * // Get first 10 ServiceEvents
     * const serviceEvents = await prisma.serviceEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceEventWithIdOnly = await prisma.serviceEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceEventFindManyArgs>(args?: SelectSubset<T, ServiceEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceEvent.
     * @param {ServiceEventCreateArgs} args - Arguments to create a ServiceEvent.
     * @example
     * // Create one ServiceEvent
     * const ServiceEvent = await prisma.serviceEvent.create({
     *   data: {
     *     // ... data to create a ServiceEvent
     *   }
     * })
     * 
     */
    create<T extends ServiceEventCreateArgs>(args: SelectSubset<T, ServiceEventCreateArgs<ExtArgs>>): Prisma__ServiceEventClient<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceEvents.
     * @param {ServiceEventCreateManyArgs} args - Arguments to create many ServiceEvents.
     * @example
     * // Create many ServiceEvents
     * const serviceEvent = await prisma.serviceEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceEventCreateManyArgs>(args?: SelectSubset<T, ServiceEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceEvents and returns the data saved in the database.
     * @param {ServiceEventCreateManyAndReturnArgs} args - Arguments to create many ServiceEvents.
     * @example
     * // Create many ServiceEvents
     * const serviceEvent = await prisma.serviceEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceEvents and only return the `id`
     * const serviceEventWithIdOnly = await prisma.serviceEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceEvent.
     * @param {ServiceEventDeleteArgs} args - Arguments to delete one ServiceEvent.
     * @example
     * // Delete one ServiceEvent
     * const ServiceEvent = await prisma.serviceEvent.delete({
     *   where: {
     *     // ... filter to delete one ServiceEvent
     *   }
     * })
     * 
     */
    delete<T extends ServiceEventDeleteArgs>(args: SelectSubset<T, ServiceEventDeleteArgs<ExtArgs>>): Prisma__ServiceEventClient<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceEvent.
     * @param {ServiceEventUpdateArgs} args - Arguments to update one ServiceEvent.
     * @example
     * // Update one ServiceEvent
     * const serviceEvent = await prisma.serviceEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceEventUpdateArgs>(args: SelectSubset<T, ServiceEventUpdateArgs<ExtArgs>>): Prisma__ServiceEventClient<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceEvents.
     * @param {ServiceEventDeleteManyArgs} args - Arguments to filter ServiceEvents to delete.
     * @example
     * // Delete a few ServiceEvents
     * const { count } = await prisma.serviceEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceEventDeleteManyArgs>(args?: SelectSubset<T, ServiceEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceEvents
     * const serviceEvent = await prisma.serviceEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceEventUpdateManyArgs>(args: SelectSubset<T, ServiceEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceEvents and returns the data updated in the database.
     * @param {ServiceEventUpdateManyAndReturnArgs} args - Arguments to update many ServiceEvents.
     * @example
     * // Update many ServiceEvents
     * const serviceEvent = await prisma.serviceEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceEvents and only return the `id`
     * const serviceEventWithIdOnly = await prisma.serviceEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceEvent.
     * @param {ServiceEventUpsertArgs} args - Arguments to update or create a ServiceEvent.
     * @example
     * // Update or create a ServiceEvent
     * const serviceEvent = await prisma.serviceEvent.upsert({
     *   create: {
     *     // ... data to create a ServiceEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceEvent we want to update
     *   }
     * })
     */
    upsert<T extends ServiceEventUpsertArgs>(args: SelectSubset<T, ServiceEventUpsertArgs<ExtArgs>>): Prisma__ServiceEventClient<$Result.GetResult<Prisma.$ServiceEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventCountArgs} args - Arguments to filter ServiceEvents to count.
     * @example
     * // Count the number of ServiceEvents
     * const count = await prisma.serviceEvent.count({
     *   where: {
     *     // ... the filter for the ServiceEvents we want to count
     *   }
     * })
    **/
    count<T extends ServiceEventCountArgs>(
      args?: Subset<T, ServiceEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceEventAggregateArgs>(args: Subset<T, ServiceEventAggregateArgs>): Prisma.PrismaPromise<GetServiceEventAggregateType<T>>

    /**
     * Group by ServiceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceEventGroupByArgs['orderBy'] }
        : { orderBy?: ServiceEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceEvent model
   */
  readonly fields: ServiceEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceEvent model
   */
  interface ServiceEventFieldRefs {
    readonly id: FieldRef<"ServiceEvent", 'String'>
    readonly service: FieldRef<"ServiceEvent", 'String'>
    readonly status: FieldRef<"ServiceEvent", 'String'>
    readonly cluster: FieldRef<"ServiceEvent", 'String'>
    readonly message: FieldRef<"ServiceEvent", 'String'>
    readonly eventType: FieldRef<"ServiceEvent", 'EventType'>
    readonly createdAt: FieldRef<"ServiceEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceEvent findUnique
   */
  export type ServiceEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEvent to fetch.
     */
    where: ServiceEventWhereUniqueInput
  }

  /**
   * ServiceEvent findUniqueOrThrow
   */
  export type ServiceEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEvent to fetch.
     */
    where: ServiceEventWhereUniqueInput
  }

  /**
   * ServiceEvent findFirst
   */
  export type ServiceEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEvent to fetch.
     */
    where?: ServiceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEvents to fetch.
     */
    orderBy?: ServiceEventOrderByWithRelationInput | ServiceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceEvents.
     */
    cursor?: ServiceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceEvents.
     */
    distinct?: ServiceEventScalarFieldEnum | ServiceEventScalarFieldEnum[]
  }

  /**
   * ServiceEvent findFirstOrThrow
   */
  export type ServiceEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEvent to fetch.
     */
    where?: ServiceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEvents to fetch.
     */
    orderBy?: ServiceEventOrderByWithRelationInput | ServiceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceEvents.
     */
    cursor?: ServiceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceEvents.
     */
    distinct?: ServiceEventScalarFieldEnum | ServiceEventScalarFieldEnum[]
  }

  /**
   * ServiceEvent findMany
   */
  export type ServiceEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEvents to fetch.
     */
    where?: ServiceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEvents to fetch.
     */
    orderBy?: ServiceEventOrderByWithRelationInput | ServiceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceEvents.
     */
    cursor?: ServiceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEvents.
     */
    skip?: number
    distinct?: ServiceEventScalarFieldEnum | ServiceEventScalarFieldEnum[]
  }

  /**
   * ServiceEvent create
   */
  export type ServiceEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceEvent.
     */
    data: XOR<ServiceEventCreateInput, ServiceEventUncheckedCreateInput>
  }

  /**
   * ServiceEvent createMany
   */
  export type ServiceEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceEvents.
     */
    data: ServiceEventCreateManyInput | ServiceEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceEvent createManyAndReturn
   */
  export type ServiceEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceEvents.
     */
    data: ServiceEventCreateManyInput | ServiceEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceEvent update
   */
  export type ServiceEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceEvent.
     */
    data: XOR<ServiceEventUpdateInput, ServiceEventUncheckedUpdateInput>
    /**
     * Choose, which ServiceEvent to update.
     */
    where: ServiceEventWhereUniqueInput
  }

  /**
   * ServiceEvent updateMany
   */
  export type ServiceEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceEvents.
     */
    data: XOR<ServiceEventUpdateManyMutationInput, ServiceEventUncheckedUpdateManyInput>
    /**
     * Filter which ServiceEvents to update
     */
    where?: ServiceEventWhereInput
    /**
     * Limit how many ServiceEvents to update.
     */
    limit?: number
  }

  /**
   * ServiceEvent updateManyAndReturn
   */
  export type ServiceEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * The data used to update ServiceEvents.
     */
    data: XOR<ServiceEventUpdateManyMutationInput, ServiceEventUncheckedUpdateManyInput>
    /**
     * Filter which ServiceEvents to update
     */
    where?: ServiceEventWhereInput
    /**
     * Limit how many ServiceEvents to update.
     */
    limit?: number
  }

  /**
   * ServiceEvent upsert
   */
  export type ServiceEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceEvent to update in case it exists.
     */
    where: ServiceEventWhereUniqueInput
    /**
     * In case the ServiceEvent found by the `where` argument doesn't exist, create a new ServiceEvent with this data.
     */
    create: XOR<ServiceEventCreateInput, ServiceEventUncheckedCreateInput>
    /**
     * In case the ServiceEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceEventUpdateInput, ServiceEventUncheckedUpdateInput>
  }

  /**
   * ServiceEvent delete
   */
  export type ServiceEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
    /**
     * Filter which ServiceEvent to delete.
     */
    where: ServiceEventWhereUniqueInput
  }

  /**
   * ServiceEvent deleteMany
   */
  export type ServiceEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceEvents to delete
     */
    where?: ServiceEventWhereInput
    /**
     * Limit how many ServiceEvents to delete.
     */
    limit?: number
  }

  /**
   * ServiceEvent without action
   */
  export type ServiceEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEvent
     */
    select?: ServiceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEvent
     */
    omit?: ServiceEventOmit<ExtArgs> | null
  }


  /**
   * Model ServiceEventHistory
   */

  export type AggregateServiceEventHistory = {
    _count: ServiceEventHistoryCountAggregateOutputType | null
    _min: ServiceEventHistoryMinAggregateOutputType | null
    _max: ServiceEventHistoryMaxAggregateOutputType | null
  }

  export type ServiceEventHistoryMinAggregateOutputType = {
    id: string | null
    service: string | null
    status: string | null
    cluster: string | null
    message: string | null
    eventType: $Enums.EventType | null
    recordedAt: Date | null
  }

  export type ServiceEventHistoryMaxAggregateOutputType = {
    id: string | null
    service: string | null
    status: string | null
    cluster: string | null
    message: string | null
    eventType: $Enums.EventType | null
    recordedAt: Date | null
  }

  export type ServiceEventHistoryCountAggregateOutputType = {
    id: number
    service: number
    status: number
    cluster: number
    message: number
    eventType: number
    recordedAt: number
    _all: number
  }


  export type ServiceEventHistoryMinAggregateInputType = {
    id?: true
    service?: true
    status?: true
    cluster?: true
    message?: true
    eventType?: true
    recordedAt?: true
  }

  export type ServiceEventHistoryMaxAggregateInputType = {
    id?: true
    service?: true
    status?: true
    cluster?: true
    message?: true
    eventType?: true
    recordedAt?: true
  }

  export type ServiceEventHistoryCountAggregateInputType = {
    id?: true
    service?: true
    status?: true
    cluster?: true
    message?: true
    eventType?: true
    recordedAt?: true
    _all?: true
  }

  export type ServiceEventHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceEventHistory to aggregate.
     */
    where?: ServiceEventHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEventHistories to fetch.
     */
    orderBy?: ServiceEventHistoryOrderByWithRelationInput | ServiceEventHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceEventHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEventHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEventHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceEventHistories
    **/
    _count?: true | ServiceEventHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceEventHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceEventHistoryMaxAggregateInputType
  }

  export type GetServiceEventHistoryAggregateType<T extends ServiceEventHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceEventHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceEventHistory[P]>
      : GetScalarType<T[P], AggregateServiceEventHistory[P]>
  }




  export type ServiceEventHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceEventHistoryWhereInput
    orderBy?: ServiceEventHistoryOrderByWithAggregationInput | ServiceEventHistoryOrderByWithAggregationInput[]
    by: ServiceEventHistoryScalarFieldEnum[] | ServiceEventHistoryScalarFieldEnum
    having?: ServiceEventHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceEventHistoryCountAggregateInputType | true
    _min?: ServiceEventHistoryMinAggregateInputType
    _max?: ServiceEventHistoryMaxAggregateInputType
  }

  export type ServiceEventHistoryGroupByOutputType = {
    id: string
    service: string
    status: string
    cluster: string | null
    message: string | null
    eventType: $Enums.EventType
    recordedAt: Date
    _count: ServiceEventHistoryCountAggregateOutputType | null
    _min: ServiceEventHistoryMinAggregateOutputType | null
    _max: ServiceEventHistoryMaxAggregateOutputType | null
  }

  type GetServiceEventHistoryGroupByPayload<T extends ServiceEventHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceEventHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceEventHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceEventHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceEventHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ServiceEventHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    status?: boolean
    cluster?: boolean
    message?: boolean
    eventType?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["serviceEventHistory"]>

  export type ServiceEventHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    status?: boolean
    cluster?: boolean
    message?: boolean
    eventType?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["serviceEventHistory"]>

  export type ServiceEventHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    status?: boolean
    cluster?: boolean
    message?: boolean
    eventType?: boolean
    recordedAt?: boolean
  }, ExtArgs["result"]["serviceEventHistory"]>

  export type ServiceEventHistorySelectScalar = {
    id?: boolean
    service?: boolean
    status?: boolean
    cluster?: boolean
    message?: boolean
    eventType?: boolean
    recordedAt?: boolean
  }

  export type ServiceEventHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "status" | "cluster" | "message" | "eventType" | "recordedAt", ExtArgs["result"]["serviceEventHistory"]>

  export type $ServiceEventHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceEventHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      status: string
      cluster: string | null
      message: string | null
      eventType: $Enums.EventType
      recordedAt: Date
    }, ExtArgs["result"]["serviceEventHistory"]>
    composites: {}
  }

  type ServiceEventHistoryGetPayload<S extends boolean | null | undefined | ServiceEventHistoryDefaultArgs> = $Result.GetResult<Prisma.$ServiceEventHistoryPayload, S>

  type ServiceEventHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceEventHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceEventHistoryCountAggregateInputType | true
    }

  export interface ServiceEventHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceEventHistory'], meta: { name: 'ServiceEventHistory' } }
    /**
     * Find zero or one ServiceEventHistory that matches the filter.
     * @param {ServiceEventHistoryFindUniqueArgs} args - Arguments to find a ServiceEventHistory
     * @example
     * // Get one ServiceEventHistory
     * const serviceEventHistory = await prisma.serviceEventHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceEventHistoryFindUniqueArgs>(args: SelectSubset<T, ServiceEventHistoryFindUniqueArgs<ExtArgs>>): Prisma__ServiceEventHistoryClient<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceEventHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceEventHistoryFindUniqueOrThrowArgs} args - Arguments to find a ServiceEventHistory
     * @example
     * // Get one ServiceEventHistory
     * const serviceEventHistory = await prisma.serviceEventHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceEventHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceEventHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceEventHistoryClient<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceEventHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventHistoryFindFirstArgs} args - Arguments to find a ServiceEventHistory
     * @example
     * // Get one ServiceEventHistory
     * const serviceEventHistory = await prisma.serviceEventHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceEventHistoryFindFirstArgs>(args?: SelectSubset<T, ServiceEventHistoryFindFirstArgs<ExtArgs>>): Prisma__ServiceEventHistoryClient<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceEventHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventHistoryFindFirstOrThrowArgs} args - Arguments to find a ServiceEventHistory
     * @example
     * // Get one ServiceEventHistory
     * const serviceEventHistory = await prisma.serviceEventHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceEventHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceEventHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceEventHistoryClient<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceEventHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceEventHistories
     * const serviceEventHistories = await prisma.serviceEventHistory.findMany()
     * 
     * // Get first 10 ServiceEventHistories
     * const serviceEventHistories = await prisma.serviceEventHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceEventHistoryWithIdOnly = await prisma.serviceEventHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceEventHistoryFindManyArgs>(args?: SelectSubset<T, ServiceEventHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceEventHistory.
     * @param {ServiceEventHistoryCreateArgs} args - Arguments to create a ServiceEventHistory.
     * @example
     * // Create one ServiceEventHistory
     * const ServiceEventHistory = await prisma.serviceEventHistory.create({
     *   data: {
     *     // ... data to create a ServiceEventHistory
     *   }
     * })
     * 
     */
    create<T extends ServiceEventHistoryCreateArgs>(args: SelectSubset<T, ServiceEventHistoryCreateArgs<ExtArgs>>): Prisma__ServiceEventHistoryClient<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceEventHistories.
     * @param {ServiceEventHistoryCreateManyArgs} args - Arguments to create many ServiceEventHistories.
     * @example
     * // Create many ServiceEventHistories
     * const serviceEventHistory = await prisma.serviceEventHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceEventHistoryCreateManyArgs>(args?: SelectSubset<T, ServiceEventHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceEventHistories and returns the data saved in the database.
     * @param {ServiceEventHistoryCreateManyAndReturnArgs} args - Arguments to create many ServiceEventHistories.
     * @example
     * // Create many ServiceEventHistories
     * const serviceEventHistory = await prisma.serviceEventHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceEventHistories and only return the `id`
     * const serviceEventHistoryWithIdOnly = await prisma.serviceEventHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceEventHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceEventHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceEventHistory.
     * @param {ServiceEventHistoryDeleteArgs} args - Arguments to delete one ServiceEventHistory.
     * @example
     * // Delete one ServiceEventHistory
     * const ServiceEventHistory = await prisma.serviceEventHistory.delete({
     *   where: {
     *     // ... filter to delete one ServiceEventHistory
     *   }
     * })
     * 
     */
    delete<T extends ServiceEventHistoryDeleteArgs>(args: SelectSubset<T, ServiceEventHistoryDeleteArgs<ExtArgs>>): Prisma__ServiceEventHistoryClient<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceEventHistory.
     * @param {ServiceEventHistoryUpdateArgs} args - Arguments to update one ServiceEventHistory.
     * @example
     * // Update one ServiceEventHistory
     * const serviceEventHistory = await prisma.serviceEventHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceEventHistoryUpdateArgs>(args: SelectSubset<T, ServiceEventHistoryUpdateArgs<ExtArgs>>): Prisma__ServiceEventHistoryClient<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceEventHistories.
     * @param {ServiceEventHistoryDeleteManyArgs} args - Arguments to filter ServiceEventHistories to delete.
     * @example
     * // Delete a few ServiceEventHistories
     * const { count } = await prisma.serviceEventHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceEventHistoryDeleteManyArgs>(args?: SelectSubset<T, ServiceEventHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceEventHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceEventHistories
     * const serviceEventHistory = await prisma.serviceEventHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceEventHistoryUpdateManyArgs>(args: SelectSubset<T, ServiceEventHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceEventHistories and returns the data updated in the database.
     * @param {ServiceEventHistoryUpdateManyAndReturnArgs} args - Arguments to update many ServiceEventHistories.
     * @example
     * // Update many ServiceEventHistories
     * const serviceEventHistory = await prisma.serviceEventHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceEventHistories and only return the `id`
     * const serviceEventHistoryWithIdOnly = await prisma.serviceEventHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceEventHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceEventHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceEventHistory.
     * @param {ServiceEventHistoryUpsertArgs} args - Arguments to update or create a ServiceEventHistory.
     * @example
     * // Update or create a ServiceEventHistory
     * const serviceEventHistory = await prisma.serviceEventHistory.upsert({
     *   create: {
     *     // ... data to create a ServiceEventHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceEventHistory we want to update
     *   }
     * })
     */
    upsert<T extends ServiceEventHistoryUpsertArgs>(args: SelectSubset<T, ServiceEventHistoryUpsertArgs<ExtArgs>>): Prisma__ServiceEventHistoryClient<$Result.GetResult<Prisma.$ServiceEventHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceEventHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventHistoryCountArgs} args - Arguments to filter ServiceEventHistories to count.
     * @example
     * // Count the number of ServiceEventHistories
     * const count = await prisma.serviceEventHistory.count({
     *   where: {
     *     // ... the filter for the ServiceEventHistories we want to count
     *   }
     * })
    **/
    count<T extends ServiceEventHistoryCountArgs>(
      args?: Subset<T, ServiceEventHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceEventHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceEventHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceEventHistoryAggregateArgs>(args: Subset<T, ServiceEventHistoryAggregateArgs>): Prisma.PrismaPromise<GetServiceEventHistoryAggregateType<T>>

    /**
     * Group by ServiceEventHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceEventHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceEventHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceEventHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ServiceEventHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceEventHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceEventHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceEventHistory model
   */
  readonly fields: ServiceEventHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceEventHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceEventHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceEventHistory model
   */
  interface ServiceEventHistoryFieldRefs {
    readonly id: FieldRef<"ServiceEventHistory", 'String'>
    readonly service: FieldRef<"ServiceEventHistory", 'String'>
    readonly status: FieldRef<"ServiceEventHistory", 'String'>
    readonly cluster: FieldRef<"ServiceEventHistory", 'String'>
    readonly message: FieldRef<"ServiceEventHistory", 'String'>
    readonly eventType: FieldRef<"ServiceEventHistory", 'EventType'>
    readonly recordedAt: FieldRef<"ServiceEventHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceEventHistory findUnique
   */
  export type ServiceEventHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEventHistory to fetch.
     */
    where: ServiceEventHistoryWhereUniqueInput
  }

  /**
   * ServiceEventHistory findUniqueOrThrow
   */
  export type ServiceEventHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEventHistory to fetch.
     */
    where: ServiceEventHistoryWhereUniqueInput
  }

  /**
   * ServiceEventHistory findFirst
   */
  export type ServiceEventHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEventHistory to fetch.
     */
    where?: ServiceEventHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEventHistories to fetch.
     */
    orderBy?: ServiceEventHistoryOrderByWithRelationInput | ServiceEventHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceEventHistories.
     */
    cursor?: ServiceEventHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEventHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEventHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceEventHistories.
     */
    distinct?: ServiceEventHistoryScalarFieldEnum | ServiceEventHistoryScalarFieldEnum[]
  }

  /**
   * ServiceEventHistory findFirstOrThrow
   */
  export type ServiceEventHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEventHistory to fetch.
     */
    where?: ServiceEventHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEventHistories to fetch.
     */
    orderBy?: ServiceEventHistoryOrderByWithRelationInput | ServiceEventHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceEventHistories.
     */
    cursor?: ServiceEventHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEventHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEventHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceEventHistories.
     */
    distinct?: ServiceEventHistoryScalarFieldEnum | ServiceEventHistoryScalarFieldEnum[]
  }

  /**
   * ServiceEventHistory findMany
   */
  export type ServiceEventHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ServiceEventHistories to fetch.
     */
    where?: ServiceEventHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceEventHistories to fetch.
     */
    orderBy?: ServiceEventHistoryOrderByWithRelationInput | ServiceEventHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceEventHistories.
     */
    cursor?: ServiceEventHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceEventHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceEventHistories.
     */
    skip?: number
    distinct?: ServiceEventHistoryScalarFieldEnum | ServiceEventHistoryScalarFieldEnum[]
  }

  /**
   * ServiceEventHistory create
   */
  export type ServiceEventHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceEventHistory.
     */
    data: XOR<ServiceEventHistoryCreateInput, ServiceEventHistoryUncheckedCreateInput>
  }

  /**
   * ServiceEventHistory createMany
   */
  export type ServiceEventHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceEventHistories.
     */
    data: ServiceEventHistoryCreateManyInput | ServiceEventHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceEventHistory createManyAndReturn
   */
  export type ServiceEventHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceEventHistories.
     */
    data: ServiceEventHistoryCreateManyInput | ServiceEventHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceEventHistory update
   */
  export type ServiceEventHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceEventHistory.
     */
    data: XOR<ServiceEventHistoryUpdateInput, ServiceEventHistoryUncheckedUpdateInput>
    /**
     * Choose, which ServiceEventHistory to update.
     */
    where: ServiceEventHistoryWhereUniqueInput
  }

  /**
   * ServiceEventHistory updateMany
   */
  export type ServiceEventHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceEventHistories.
     */
    data: XOR<ServiceEventHistoryUpdateManyMutationInput, ServiceEventHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceEventHistories to update
     */
    where?: ServiceEventHistoryWhereInput
    /**
     * Limit how many ServiceEventHistories to update.
     */
    limit?: number
  }

  /**
   * ServiceEventHistory updateManyAndReturn
   */
  export type ServiceEventHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ServiceEventHistories.
     */
    data: XOR<ServiceEventHistoryUpdateManyMutationInput, ServiceEventHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceEventHistories to update
     */
    where?: ServiceEventHistoryWhereInput
    /**
     * Limit how many ServiceEventHistories to update.
     */
    limit?: number
  }

  /**
   * ServiceEventHistory upsert
   */
  export type ServiceEventHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceEventHistory to update in case it exists.
     */
    where: ServiceEventHistoryWhereUniqueInput
    /**
     * In case the ServiceEventHistory found by the `where` argument doesn't exist, create a new ServiceEventHistory with this data.
     */
    create: XOR<ServiceEventHistoryCreateInput, ServiceEventHistoryUncheckedCreateInput>
    /**
     * In case the ServiceEventHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceEventHistoryUpdateInput, ServiceEventHistoryUncheckedUpdateInput>
  }

  /**
   * ServiceEventHistory delete
   */
  export type ServiceEventHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
    /**
     * Filter which ServiceEventHistory to delete.
     */
    where: ServiceEventHistoryWhereUniqueInput
  }

  /**
   * ServiceEventHistory deleteMany
   */
  export type ServiceEventHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceEventHistories to delete
     */
    where?: ServiceEventHistoryWhereInput
    /**
     * Limit how many ServiceEventHistories to delete.
     */
    limit?: number
  }

  /**
   * ServiceEventHistory without action
   */
  export type ServiceEventHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceEventHistory
     */
    select?: ServiceEventHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceEventHistory
     */
    omit?: ServiceEventHistoryOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    cluster: string | null
    type: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    runtimeStatus: string | null
    lastReason: string | null
    lastSeenAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    cluster: string | null
    type: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    runtimeStatus: string | null
    lastReason: string | null
    lastSeenAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    url: number
    cluster: number
    type: number
    description: number
    createdAt: number
    updatedAt: number
    runtimeStatus: number
    lastReason: number
    lastSeenAt: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    cluster?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    runtimeStatus?: true
    lastReason?: true
    lastSeenAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    cluster?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    runtimeStatus?: true
    lastReason?: true
    lastSeenAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    cluster?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    runtimeStatus?: true
    lastReason?: true
    lastSeenAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    url: string
    cluster: string
    type: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    runtimeStatus: string | null
    lastReason: string | null
    lastSeenAt: Date | null
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    cluster?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    runtimeStatus?: boolean
    lastReason?: boolean
    lastSeenAt?: boolean
    dependenciesFrom?: boolean | Service$dependenciesFromArgs<ExtArgs>
    dependenciesTo?: boolean | Service$dependenciesToArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    cluster?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    runtimeStatus?: boolean
    lastReason?: boolean
    lastSeenAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    cluster?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    runtimeStatus?: boolean
    lastReason?: boolean
    lastSeenAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    cluster?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    runtimeStatus?: boolean
    lastReason?: boolean
    lastSeenAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "cluster" | "type" | "description" | "createdAt" | "updatedAt" | "runtimeStatus" | "lastReason" | "lastSeenAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependenciesFrom?: boolean | Service$dependenciesFromArgs<ExtArgs>
    dependenciesTo?: boolean | Service$dependenciesToArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      dependenciesFrom: Prisma.$ServiceDependencyPayload<ExtArgs>[]
      dependenciesTo: Prisma.$ServiceDependencyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      cluster: string
      type: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      runtimeStatus: string | null
      lastReason: string | null
      lastSeenAt: Date | null
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dependenciesFrom<T extends Service$dependenciesFromArgs<ExtArgs> = {}>(args?: Subset<T, Service$dependenciesFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dependenciesTo<T extends Service$dependenciesToArgs<ExtArgs> = {}>(args?: Subset<T, Service$dependenciesToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly url: FieldRef<"Service", 'String'>
    readonly cluster: FieldRef<"Service", 'String'>
    readonly type: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly runtimeStatus: FieldRef<"Service", 'String'>
    readonly lastReason: FieldRef<"Service", 'String'>
    readonly lastSeenAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.dependenciesFrom
   */
  export type Service$dependenciesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    where?: ServiceDependencyWhereInput
    orderBy?: ServiceDependencyOrderByWithRelationInput | ServiceDependencyOrderByWithRelationInput[]
    cursor?: ServiceDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceDependencyScalarFieldEnum | ServiceDependencyScalarFieldEnum[]
  }

  /**
   * Service.dependenciesTo
   */
  export type Service$dependenciesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    where?: ServiceDependencyWhereInput
    orderBy?: ServiceDependencyOrderByWithRelationInput | ServiceDependencyOrderByWithRelationInput[]
    cursor?: ServiceDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceDependencyScalarFieldEnum | ServiceDependencyScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceDependency
   */

  export type AggregateServiceDependency = {
    _count: ServiceDependencyCountAggregateOutputType | null
    _min: ServiceDependencyMinAggregateOutputType | null
    _max: ServiceDependencyMaxAggregateOutputType | null
  }

  export type ServiceDependencyMinAggregateOutputType = {
    id: string | null
    fromServiceId: string | null
    toServiceId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ServiceDependencyMaxAggregateOutputType = {
    id: string | null
    fromServiceId: string | null
    toServiceId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ServiceDependencyCountAggregateOutputType = {
    id: number
    fromServiceId: number
    toServiceId: number
    reason: number
    createdAt: number
    _all: number
  }


  export type ServiceDependencyMinAggregateInputType = {
    id?: true
    fromServiceId?: true
    toServiceId?: true
    reason?: true
    createdAt?: true
  }

  export type ServiceDependencyMaxAggregateInputType = {
    id?: true
    fromServiceId?: true
    toServiceId?: true
    reason?: true
    createdAt?: true
  }

  export type ServiceDependencyCountAggregateInputType = {
    id?: true
    fromServiceId?: true
    toServiceId?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceDependencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceDependency to aggregate.
     */
    where?: ServiceDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceDependencies to fetch.
     */
    orderBy?: ServiceDependencyOrderByWithRelationInput | ServiceDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceDependencies
    **/
    _count?: true | ServiceDependencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceDependencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceDependencyMaxAggregateInputType
  }

  export type GetServiceDependencyAggregateType<T extends ServiceDependencyAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceDependency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceDependency[P]>
      : GetScalarType<T[P], AggregateServiceDependency[P]>
  }




  export type ServiceDependencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceDependencyWhereInput
    orderBy?: ServiceDependencyOrderByWithAggregationInput | ServiceDependencyOrderByWithAggregationInput[]
    by: ServiceDependencyScalarFieldEnum[] | ServiceDependencyScalarFieldEnum
    having?: ServiceDependencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceDependencyCountAggregateInputType | true
    _min?: ServiceDependencyMinAggregateInputType
    _max?: ServiceDependencyMaxAggregateInputType
  }

  export type ServiceDependencyGroupByOutputType = {
    id: string
    fromServiceId: string
    toServiceId: string
    reason: string
    createdAt: Date
    _count: ServiceDependencyCountAggregateOutputType | null
    _min: ServiceDependencyMinAggregateOutputType | null
    _max: ServiceDependencyMaxAggregateOutputType | null
  }

  type GetServiceDependencyGroupByPayload<T extends ServiceDependencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceDependencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceDependencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceDependencyGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceDependencyGroupByOutputType[P]>
        }
      >
    >


  export type ServiceDependencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromServiceId?: boolean
    toServiceId?: boolean
    reason?: boolean
    createdAt?: boolean
    fromService?: boolean | ServiceDefaultArgs<ExtArgs>
    toService?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceDependency"]>

  export type ServiceDependencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromServiceId?: boolean
    toServiceId?: boolean
    reason?: boolean
    createdAt?: boolean
    fromService?: boolean | ServiceDefaultArgs<ExtArgs>
    toService?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceDependency"]>

  export type ServiceDependencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromServiceId?: boolean
    toServiceId?: boolean
    reason?: boolean
    createdAt?: boolean
    fromService?: boolean | ServiceDefaultArgs<ExtArgs>
    toService?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceDependency"]>

  export type ServiceDependencySelectScalar = {
    id?: boolean
    fromServiceId?: boolean
    toServiceId?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type ServiceDependencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromServiceId" | "toServiceId" | "reason" | "createdAt", ExtArgs["result"]["serviceDependency"]>
  export type ServiceDependencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromService?: boolean | ServiceDefaultArgs<ExtArgs>
    toService?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceDependencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromService?: boolean | ServiceDefaultArgs<ExtArgs>
    toService?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceDependencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromService?: boolean | ServiceDefaultArgs<ExtArgs>
    toService?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceDependencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceDependency"
    objects: {
      fromService: Prisma.$ServicePayload<ExtArgs>
      toService: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromServiceId: string
      toServiceId: string
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["serviceDependency"]>
    composites: {}
  }

  type ServiceDependencyGetPayload<S extends boolean | null | undefined | ServiceDependencyDefaultArgs> = $Result.GetResult<Prisma.$ServiceDependencyPayload, S>

  type ServiceDependencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceDependencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceDependencyCountAggregateInputType | true
    }

  export interface ServiceDependencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceDependency'], meta: { name: 'ServiceDependency' } }
    /**
     * Find zero or one ServiceDependency that matches the filter.
     * @param {ServiceDependencyFindUniqueArgs} args - Arguments to find a ServiceDependency
     * @example
     * // Get one ServiceDependency
     * const serviceDependency = await prisma.serviceDependency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceDependencyFindUniqueArgs>(args: SelectSubset<T, ServiceDependencyFindUniqueArgs<ExtArgs>>): Prisma__ServiceDependencyClient<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceDependency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceDependencyFindUniqueOrThrowArgs} args - Arguments to find a ServiceDependency
     * @example
     * // Get one ServiceDependency
     * const serviceDependency = await prisma.serviceDependency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceDependencyFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceDependencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceDependencyClient<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceDependency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDependencyFindFirstArgs} args - Arguments to find a ServiceDependency
     * @example
     * // Get one ServiceDependency
     * const serviceDependency = await prisma.serviceDependency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceDependencyFindFirstArgs>(args?: SelectSubset<T, ServiceDependencyFindFirstArgs<ExtArgs>>): Prisma__ServiceDependencyClient<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceDependency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDependencyFindFirstOrThrowArgs} args - Arguments to find a ServiceDependency
     * @example
     * // Get one ServiceDependency
     * const serviceDependency = await prisma.serviceDependency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceDependencyFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceDependencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceDependencyClient<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceDependencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDependencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceDependencies
     * const serviceDependencies = await prisma.serviceDependency.findMany()
     * 
     * // Get first 10 ServiceDependencies
     * const serviceDependencies = await prisma.serviceDependency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceDependencyWithIdOnly = await prisma.serviceDependency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceDependencyFindManyArgs>(args?: SelectSubset<T, ServiceDependencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceDependency.
     * @param {ServiceDependencyCreateArgs} args - Arguments to create a ServiceDependency.
     * @example
     * // Create one ServiceDependency
     * const ServiceDependency = await prisma.serviceDependency.create({
     *   data: {
     *     // ... data to create a ServiceDependency
     *   }
     * })
     * 
     */
    create<T extends ServiceDependencyCreateArgs>(args: SelectSubset<T, ServiceDependencyCreateArgs<ExtArgs>>): Prisma__ServiceDependencyClient<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceDependencies.
     * @param {ServiceDependencyCreateManyArgs} args - Arguments to create many ServiceDependencies.
     * @example
     * // Create many ServiceDependencies
     * const serviceDependency = await prisma.serviceDependency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceDependencyCreateManyArgs>(args?: SelectSubset<T, ServiceDependencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceDependencies and returns the data saved in the database.
     * @param {ServiceDependencyCreateManyAndReturnArgs} args - Arguments to create many ServiceDependencies.
     * @example
     * // Create many ServiceDependencies
     * const serviceDependency = await prisma.serviceDependency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceDependencies and only return the `id`
     * const serviceDependencyWithIdOnly = await prisma.serviceDependency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceDependencyCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceDependencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceDependency.
     * @param {ServiceDependencyDeleteArgs} args - Arguments to delete one ServiceDependency.
     * @example
     * // Delete one ServiceDependency
     * const ServiceDependency = await prisma.serviceDependency.delete({
     *   where: {
     *     // ... filter to delete one ServiceDependency
     *   }
     * })
     * 
     */
    delete<T extends ServiceDependencyDeleteArgs>(args: SelectSubset<T, ServiceDependencyDeleteArgs<ExtArgs>>): Prisma__ServiceDependencyClient<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceDependency.
     * @param {ServiceDependencyUpdateArgs} args - Arguments to update one ServiceDependency.
     * @example
     * // Update one ServiceDependency
     * const serviceDependency = await prisma.serviceDependency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceDependencyUpdateArgs>(args: SelectSubset<T, ServiceDependencyUpdateArgs<ExtArgs>>): Prisma__ServiceDependencyClient<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceDependencies.
     * @param {ServiceDependencyDeleteManyArgs} args - Arguments to filter ServiceDependencies to delete.
     * @example
     * // Delete a few ServiceDependencies
     * const { count } = await prisma.serviceDependency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDependencyDeleteManyArgs>(args?: SelectSubset<T, ServiceDependencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDependencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceDependencies
     * const serviceDependency = await prisma.serviceDependency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceDependencyUpdateManyArgs>(args: SelectSubset<T, ServiceDependencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceDependencies and returns the data updated in the database.
     * @param {ServiceDependencyUpdateManyAndReturnArgs} args - Arguments to update many ServiceDependencies.
     * @example
     * // Update many ServiceDependencies
     * const serviceDependency = await prisma.serviceDependency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceDependencies and only return the `id`
     * const serviceDependencyWithIdOnly = await prisma.serviceDependency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceDependencyUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceDependencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceDependency.
     * @param {ServiceDependencyUpsertArgs} args - Arguments to update or create a ServiceDependency.
     * @example
     * // Update or create a ServiceDependency
     * const serviceDependency = await prisma.serviceDependency.upsert({
     *   create: {
     *     // ... data to create a ServiceDependency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceDependency we want to update
     *   }
     * })
     */
    upsert<T extends ServiceDependencyUpsertArgs>(args: SelectSubset<T, ServiceDependencyUpsertArgs<ExtArgs>>): Prisma__ServiceDependencyClient<$Result.GetResult<Prisma.$ServiceDependencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDependencyCountArgs} args - Arguments to filter ServiceDependencies to count.
     * @example
     * // Count the number of ServiceDependencies
     * const count = await prisma.serviceDependency.count({
     *   where: {
     *     // ... the filter for the ServiceDependencies we want to count
     *   }
     * })
    **/
    count<T extends ServiceDependencyCountArgs>(
      args?: Subset<T, ServiceDependencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceDependencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceDependencyAggregateArgs>(args: Subset<T, ServiceDependencyAggregateArgs>): Prisma.PrismaPromise<GetServiceDependencyAggregateType<T>>

    /**
     * Group by ServiceDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDependencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceDependencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceDependencyGroupByArgs['orderBy'] }
        : { orderBy?: ServiceDependencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceDependencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceDependencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceDependency model
   */
  readonly fields: ServiceDependencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceDependency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceDependencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromService<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toService<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceDependency model
   */
  interface ServiceDependencyFieldRefs {
    readonly id: FieldRef<"ServiceDependency", 'String'>
    readonly fromServiceId: FieldRef<"ServiceDependency", 'String'>
    readonly toServiceId: FieldRef<"ServiceDependency", 'String'>
    readonly reason: FieldRef<"ServiceDependency", 'String'>
    readonly createdAt: FieldRef<"ServiceDependency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceDependency findUnique
   */
  export type ServiceDependencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ServiceDependency to fetch.
     */
    where: ServiceDependencyWhereUniqueInput
  }

  /**
   * ServiceDependency findUniqueOrThrow
   */
  export type ServiceDependencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ServiceDependency to fetch.
     */
    where: ServiceDependencyWhereUniqueInput
  }

  /**
   * ServiceDependency findFirst
   */
  export type ServiceDependencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ServiceDependency to fetch.
     */
    where?: ServiceDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceDependencies to fetch.
     */
    orderBy?: ServiceDependencyOrderByWithRelationInput | ServiceDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceDependencies.
     */
    cursor?: ServiceDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceDependencies.
     */
    distinct?: ServiceDependencyScalarFieldEnum | ServiceDependencyScalarFieldEnum[]
  }

  /**
   * ServiceDependency findFirstOrThrow
   */
  export type ServiceDependencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ServiceDependency to fetch.
     */
    where?: ServiceDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceDependencies to fetch.
     */
    orderBy?: ServiceDependencyOrderByWithRelationInput | ServiceDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceDependencies.
     */
    cursor?: ServiceDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceDependencies.
     */
    distinct?: ServiceDependencyScalarFieldEnum | ServiceDependencyScalarFieldEnum[]
  }

  /**
   * ServiceDependency findMany
   */
  export type ServiceDependencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * Filter, which ServiceDependencies to fetch.
     */
    where?: ServiceDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceDependencies to fetch.
     */
    orderBy?: ServiceDependencyOrderByWithRelationInput | ServiceDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceDependencies.
     */
    cursor?: ServiceDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceDependencies.
     */
    skip?: number
    distinct?: ServiceDependencyScalarFieldEnum | ServiceDependencyScalarFieldEnum[]
  }

  /**
   * ServiceDependency create
   */
  export type ServiceDependencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceDependency.
     */
    data: XOR<ServiceDependencyCreateInput, ServiceDependencyUncheckedCreateInput>
  }

  /**
   * ServiceDependency createMany
   */
  export type ServiceDependencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceDependencies.
     */
    data: ServiceDependencyCreateManyInput | ServiceDependencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceDependency createManyAndReturn
   */
  export type ServiceDependencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceDependencies.
     */
    data: ServiceDependencyCreateManyInput | ServiceDependencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceDependency update
   */
  export type ServiceDependencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceDependency.
     */
    data: XOR<ServiceDependencyUpdateInput, ServiceDependencyUncheckedUpdateInput>
    /**
     * Choose, which ServiceDependency to update.
     */
    where: ServiceDependencyWhereUniqueInput
  }

  /**
   * ServiceDependency updateMany
   */
  export type ServiceDependencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceDependencies.
     */
    data: XOR<ServiceDependencyUpdateManyMutationInput, ServiceDependencyUncheckedUpdateManyInput>
    /**
     * Filter which ServiceDependencies to update
     */
    where?: ServiceDependencyWhereInput
    /**
     * Limit how many ServiceDependencies to update.
     */
    limit?: number
  }

  /**
   * ServiceDependency updateManyAndReturn
   */
  export type ServiceDependencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * The data used to update ServiceDependencies.
     */
    data: XOR<ServiceDependencyUpdateManyMutationInput, ServiceDependencyUncheckedUpdateManyInput>
    /**
     * Filter which ServiceDependencies to update
     */
    where?: ServiceDependencyWhereInput
    /**
     * Limit how many ServiceDependencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceDependency upsert
   */
  export type ServiceDependencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceDependency to update in case it exists.
     */
    where: ServiceDependencyWhereUniqueInput
    /**
     * In case the ServiceDependency found by the `where` argument doesn't exist, create a new ServiceDependency with this data.
     */
    create: XOR<ServiceDependencyCreateInput, ServiceDependencyUncheckedCreateInput>
    /**
     * In case the ServiceDependency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceDependencyUpdateInput, ServiceDependencyUncheckedUpdateInput>
  }

  /**
   * ServiceDependency delete
   */
  export type ServiceDependencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
    /**
     * Filter which ServiceDependency to delete.
     */
    where: ServiceDependencyWhereUniqueInput
  }

  /**
   * ServiceDependency deleteMany
   */
  export type ServiceDependencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceDependencies to delete
     */
    where?: ServiceDependencyWhereInput
    /**
     * Limit how many ServiceDependencies to delete.
     */
    limit?: number
  }

  /**
   * ServiceDependency without action
   */
  export type ServiceDependencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDependency
     */
    select?: ServiceDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDependency
     */
    omit?: ServiceDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceDependencyInclude<ExtArgs> | null
  }


  /**
   * Model Metrics
   */

  export type AggregateMetrics = {
    _count: MetricsCountAggregateOutputType | null
    _avg: MetricsAvgAggregateOutputType | null
    _sum: MetricsSumAggregateOutputType | null
    _min: MetricsMinAggregateOutputType | null
    _max: MetricsMaxAggregateOutputType | null
  }

  export type MetricsAvgAggregateOutputType = {
    cpu: number | null
    memory: number | null
    networkRx: number | null
    networkTx: number | null
  }

  export type MetricsSumAggregateOutputType = {
    cpu: number | null
    memory: number | null
    networkRx: number | null
    networkTx: number | null
  }

  export type MetricsMinAggregateOutputType = {
    id: string | null
    service: string | null
    cpu: number | null
    memory: number | null
    networkRx: number | null
    networkTx: number | null
    status: string | null
    source: string | null
    createdAt: Date | null
  }

  export type MetricsMaxAggregateOutputType = {
    id: string | null
    service: string | null
    cpu: number | null
    memory: number | null
    networkRx: number | null
    networkTx: number | null
    status: string | null
    source: string | null
    createdAt: Date | null
  }

  export type MetricsCountAggregateOutputType = {
    id: number
    service: number
    cpu: number
    memory: number
    networkRx: number
    networkTx: number
    status: number
    source: number
    createdAt: number
    _all: number
  }


  export type MetricsAvgAggregateInputType = {
    cpu?: true
    memory?: true
    networkRx?: true
    networkTx?: true
  }

  export type MetricsSumAggregateInputType = {
    cpu?: true
    memory?: true
    networkRx?: true
    networkTx?: true
  }

  export type MetricsMinAggregateInputType = {
    id?: true
    service?: true
    cpu?: true
    memory?: true
    networkRx?: true
    networkTx?: true
    status?: true
    source?: true
    createdAt?: true
  }

  export type MetricsMaxAggregateInputType = {
    id?: true
    service?: true
    cpu?: true
    memory?: true
    networkRx?: true
    networkTx?: true
    status?: true
    source?: true
    createdAt?: true
  }

  export type MetricsCountAggregateInputType = {
    id?: true
    service?: true
    cpu?: true
    memory?: true
    networkRx?: true
    networkTx?: true
    status?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type MetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to aggregate.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricsMaxAggregateInputType
  }

  export type GetMetricsAggregateType<T extends MetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrics[P]>
      : GetScalarType<T[P], AggregateMetrics[P]>
  }




  export type MetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricsWhereInput
    orderBy?: MetricsOrderByWithAggregationInput | MetricsOrderByWithAggregationInput[]
    by: MetricsScalarFieldEnum[] | MetricsScalarFieldEnum
    having?: MetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricsCountAggregateInputType | true
    _avg?: MetricsAvgAggregateInputType
    _sum?: MetricsSumAggregateInputType
    _min?: MetricsMinAggregateInputType
    _max?: MetricsMaxAggregateInputType
  }

  export type MetricsGroupByOutputType = {
    id: string
    service: string
    cpu: number
    memory: number
    networkRx: number
    networkTx: number
    status: string
    source: string
    createdAt: Date
    _count: MetricsCountAggregateOutputType | null
    _avg: MetricsAvgAggregateOutputType | null
    _sum: MetricsSumAggregateOutputType | null
    _min: MetricsMinAggregateOutputType | null
    _max: MetricsMaxAggregateOutputType | null
  }

  type GetMetricsGroupByPayload<T extends MetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricsGroupByOutputType[P]>
            : GetScalarType<T[P], MetricsGroupByOutputType[P]>
        }
      >
    >


  export type MetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    cpu?: boolean
    memory?: boolean
    networkRx?: boolean
    networkTx?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["metrics"]>

  export type MetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    cpu?: boolean
    memory?: boolean
    networkRx?: boolean
    networkTx?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["metrics"]>

  export type MetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    cpu?: boolean
    memory?: boolean
    networkRx?: boolean
    networkTx?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["metrics"]>

  export type MetricsSelectScalar = {
    id?: boolean
    service?: boolean
    cpu?: boolean
    memory?: boolean
    networkRx?: boolean
    networkTx?: boolean
    status?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type MetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "cpu" | "memory" | "networkRx" | "networkTx" | "status" | "source" | "createdAt", ExtArgs["result"]["metrics"]>

  export type $MetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      cpu: number
      memory: number
      networkRx: number
      networkTx: number
      status: string
      source: string
      createdAt: Date
    }, ExtArgs["result"]["metrics"]>
    composites: {}
  }

  type MetricsGetPayload<S extends boolean | null | undefined | MetricsDefaultArgs> = $Result.GetResult<Prisma.$MetricsPayload, S>

  type MetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricsCountAggregateInputType | true
    }

  export interface MetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metrics'], meta: { name: 'Metrics' } }
    /**
     * Find zero or one Metrics that matches the filter.
     * @param {MetricsFindUniqueArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricsFindUniqueArgs>(args: SelectSubset<T, MetricsFindUniqueArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricsFindUniqueOrThrowArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindFirstArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricsFindFirstArgs>(args?: SelectSubset<T, MetricsFindFirstArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindFirstOrThrowArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metrics.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricsWithIdOnly = await prisma.metrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricsFindManyArgs>(args?: SelectSubset<T, MetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metrics.
     * @param {MetricsCreateArgs} args - Arguments to create a Metrics.
     * @example
     * // Create one Metrics
     * const Metrics = await prisma.metrics.create({
     *   data: {
     *     // ... data to create a Metrics
     *   }
     * })
     * 
     */
    create<T extends MetricsCreateArgs>(args: SelectSubset<T, MetricsCreateArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricsCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metrics = await prisma.metrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricsCreateManyArgs>(args?: SelectSubset<T, MetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricsCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metrics = await prisma.metrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricsWithIdOnly = await prisma.metrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metrics.
     * @param {MetricsDeleteArgs} args - Arguments to delete one Metrics.
     * @example
     * // Delete one Metrics
     * const Metrics = await prisma.metrics.delete({
     *   where: {
     *     // ... filter to delete one Metrics
     *   }
     * })
     * 
     */
    delete<T extends MetricsDeleteArgs>(args: SelectSubset<T, MetricsDeleteArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metrics.
     * @param {MetricsUpdateArgs} args - Arguments to update one Metrics.
     * @example
     * // Update one Metrics
     * const metrics = await prisma.metrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricsUpdateArgs>(args: SelectSubset<T, MetricsUpdateArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricsDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricsDeleteManyArgs>(args?: SelectSubset<T, MetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metrics = await prisma.metrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricsUpdateManyArgs>(args: SelectSubset<T, MetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricsUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metrics = await prisma.metrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `id`
     * const metricsWithIdOnly = await prisma.metrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metrics.
     * @param {MetricsUpsertArgs} args - Arguments to update or create a Metrics.
     * @example
     * // Update or create a Metrics
     * const metrics = await prisma.metrics.upsert({
     *   create: {
     *     // ... data to create a Metrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metrics we want to update
     *   }
     * })
     */
    upsert<T extends MetricsUpsertArgs>(args: SelectSubset<T, MetricsUpsertArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metrics.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricsCountArgs>(
      args?: Subset<T, MetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricsAggregateArgs>(args: Subset<T, MetricsAggregateArgs>): Prisma.PrismaPromise<GetMetricsAggregateType<T>>

    /**
     * Group by Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricsGroupByArgs['orderBy'] }
        : { orderBy?: MetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metrics model
   */
  readonly fields: MetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metrics model
   */
  interface MetricsFieldRefs {
    readonly id: FieldRef<"Metrics", 'String'>
    readonly service: FieldRef<"Metrics", 'String'>
    readonly cpu: FieldRef<"Metrics", 'Float'>
    readonly memory: FieldRef<"Metrics", 'Float'>
    readonly networkRx: FieldRef<"Metrics", 'Int'>
    readonly networkTx: FieldRef<"Metrics", 'Int'>
    readonly status: FieldRef<"Metrics", 'String'>
    readonly source: FieldRef<"Metrics", 'String'>
    readonly createdAt: FieldRef<"Metrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Metrics findUnique
   */
  export type MetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics findUniqueOrThrow
   */
  export type MetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics findFirst
   */
  export type MetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics findFirstOrThrow
   */
  export type MetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics findMany
   */
  export type MetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics create
   */
  export type MetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * The data needed to create a Metrics.
     */
    data: XOR<MetricsCreateInput, MetricsUncheckedCreateInput>
  }

  /**
   * Metrics createMany
   */
  export type MetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricsCreateManyInput | MetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metrics createManyAndReturn
   */
  export type MetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricsCreateManyInput | MetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metrics update
   */
  export type MetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * The data needed to update a Metrics.
     */
    data: XOR<MetricsUpdateInput, MetricsUncheckedUpdateInput>
    /**
     * Choose, which Metrics to update.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics updateMany
   */
  export type MetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricsUpdateManyMutationInput, MetricsUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricsWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metrics updateManyAndReturn
   */
  export type MetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricsUpdateManyMutationInput, MetricsUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricsWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metrics upsert
   */
  export type MetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * The filter to search for the Metrics to update in case it exists.
     */
    where: MetricsWhereUniqueInput
    /**
     * In case the Metrics found by the `where` argument doesn't exist, create a new Metrics with this data.
     */
    create: XOR<MetricsCreateInput, MetricsUncheckedCreateInput>
    /**
     * In case the Metrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricsUpdateInput, MetricsUncheckedUpdateInput>
  }

  /**
   * Metrics delete
   */
  export type MetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
    /**
     * Filter which Metrics to delete.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics deleteMany
   */
  export type MetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricsWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metrics without action
   */
  export type MetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrics
     */
    omit?: MetricsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    message: 'message',
    service: 'service',
    cluster: 'cluster',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ServiceEventScalarFieldEnum: {
    id: 'id',
    service: 'service',
    status: 'status',
    cluster: 'cluster',
    message: 'message',
    eventType: 'eventType',
    createdAt: 'createdAt'
  };

  export type ServiceEventScalarFieldEnum = (typeof ServiceEventScalarFieldEnum)[keyof typeof ServiceEventScalarFieldEnum]


  export const ServiceEventHistoryScalarFieldEnum: {
    id: 'id',
    service: 'service',
    status: 'status',
    cluster: 'cluster',
    message: 'message',
    eventType: 'eventType',
    recordedAt: 'recordedAt'
  };

  export type ServiceEventHistoryScalarFieldEnum = (typeof ServiceEventHistoryScalarFieldEnum)[keyof typeof ServiceEventHistoryScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    cluster: 'cluster',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    runtimeStatus: 'runtimeStatus',
    lastReason: 'lastReason',
    lastSeenAt: 'lastSeenAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceDependencyScalarFieldEnum: {
    id: 'id',
    fromServiceId: 'fromServiceId',
    toServiceId: 'toServiceId',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type ServiceDependencyScalarFieldEnum = (typeof ServiceDependencyScalarFieldEnum)[keyof typeof ServiceDependencyScalarFieldEnum]


  export const MetricsScalarFieldEnum: {
    id: 'id',
    service: 'service',
    cpu: 'cpu',
    memory: 'memory',
    networkRx: 'networkRx',
    networkTx: 'networkTx',
    status: 'status',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type MetricsScalarFieldEnum = (typeof MetricsScalarFieldEnum)[keyof typeof MetricsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    service?: StringFilter<"Notification"> | string
    cluster?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    service?: SortOrder
    cluster?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    service?: StringFilter<"Notification"> | string
    cluster?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    service?: SortOrder
    cluster?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    service?: StringWithAggregatesFilter<"Notification"> | string
    cluster?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ServiceEventWhereInput = {
    AND?: ServiceEventWhereInput | ServiceEventWhereInput[]
    OR?: ServiceEventWhereInput[]
    NOT?: ServiceEventWhereInput | ServiceEventWhereInput[]
    id?: StringFilter<"ServiceEvent"> | string
    service?: StringFilter<"ServiceEvent"> | string
    status?: StringFilter<"ServiceEvent"> | string
    cluster?: StringNullableFilter<"ServiceEvent"> | string | null
    message?: StringNullableFilter<"ServiceEvent"> | string | null
    eventType?: EnumEventTypeFilter<"ServiceEvent"> | $Enums.EventType
    createdAt?: DateTimeFilter<"ServiceEvent"> | Date | string
  }

  export type ServiceEventOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    service?: string
    AND?: ServiceEventWhereInput | ServiceEventWhereInput[]
    OR?: ServiceEventWhereInput[]
    NOT?: ServiceEventWhereInput | ServiceEventWhereInput[]
    status?: StringFilter<"ServiceEvent"> | string
    cluster?: StringNullableFilter<"ServiceEvent"> | string | null
    message?: StringNullableFilter<"ServiceEvent"> | string | null
    eventType?: EnumEventTypeFilter<"ServiceEvent"> | $Enums.EventType
    createdAt?: DateTimeFilter<"ServiceEvent"> | Date | string
  }, "id" | "service">

  export type ServiceEventOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceEventCountOrderByAggregateInput
    _max?: ServiceEventMaxOrderByAggregateInput
    _min?: ServiceEventMinOrderByAggregateInput
  }

  export type ServiceEventScalarWhereWithAggregatesInput = {
    AND?: ServiceEventScalarWhereWithAggregatesInput | ServiceEventScalarWhereWithAggregatesInput[]
    OR?: ServiceEventScalarWhereWithAggregatesInput[]
    NOT?: ServiceEventScalarWhereWithAggregatesInput | ServiceEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceEvent"> | string
    service?: StringWithAggregatesFilter<"ServiceEvent"> | string
    status?: StringWithAggregatesFilter<"ServiceEvent"> | string
    cluster?: StringNullableWithAggregatesFilter<"ServiceEvent"> | string | null
    message?: StringNullableWithAggregatesFilter<"ServiceEvent"> | string | null
    eventType?: EnumEventTypeWithAggregatesFilter<"ServiceEvent"> | $Enums.EventType
    createdAt?: DateTimeWithAggregatesFilter<"ServiceEvent"> | Date | string
  }

  export type ServiceEventHistoryWhereInput = {
    AND?: ServiceEventHistoryWhereInput | ServiceEventHistoryWhereInput[]
    OR?: ServiceEventHistoryWhereInput[]
    NOT?: ServiceEventHistoryWhereInput | ServiceEventHistoryWhereInput[]
    id?: StringFilter<"ServiceEventHistory"> | string
    service?: StringFilter<"ServiceEventHistory"> | string
    status?: StringFilter<"ServiceEventHistory"> | string
    cluster?: StringNullableFilter<"ServiceEventHistory"> | string | null
    message?: StringNullableFilter<"ServiceEventHistory"> | string | null
    eventType?: EnumEventTypeFilter<"ServiceEventHistory"> | $Enums.EventType
    recordedAt?: DateTimeFilter<"ServiceEventHistory"> | Date | string
  }

  export type ServiceEventHistoryOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    eventType?: SortOrder
    recordedAt?: SortOrder
  }

  export type ServiceEventHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceEventHistoryWhereInput | ServiceEventHistoryWhereInput[]
    OR?: ServiceEventHistoryWhereInput[]
    NOT?: ServiceEventHistoryWhereInput | ServiceEventHistoryWhereInput[]
    service?: StringFilter<"ServiceEventHistory"> | string
    status?: StringFilter<"ServiceEventHistory"> | string
    cluster?: StringNullableFilter<"ServiceEventHistory"> | string | null
    message?: StringNullableFilter<"ServiceEventHistory"> | string | null
    eventType?: EnumEventTypeFilter<"ServiceEventHistory"> | $Enums.EventType
    recordedAt?: DateTimeFilter<"ServiceEventHistory"> | Date | string
  }, "id">

  export type ServiceEventHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    eventType?: SortOrder
    recordedAt?: SortOrder
    _count?: ServiceEventHistoryCountOrderByAggregateInput
    _max?: ServiceEventHistoryMaxOrderByAggregateInput
    _min?: ServiceEventHistoryMinOrderByAggregateInput
  }

  export type ServiceEventHistoryScalarWhereWithAggregatesInput = {
    AND?: ServiceEventHistoryScalarWhereWithAggregatesInput | ServiceEventHistoryScalarWhereWithAggregatesInput[]
    OR?: ServiceEventHistoryScalarWhereWithAggregatesInput[]
    NOT?: ServiceEventHistoryScalarWhereWithAggregatesInput | ServiceEventHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceEventHistory"> | string
    service?: StringWithAggregatesFilter<"ServiceEventHistory"> | string
    status?: StringWithAggregatesFilter<"ServiceEventHistory"> | string
    cluster?: StringNullableWithAggregatesFilter<"ServiceEventHistory"> | string | null
    message?: StringNullableWithAggregatesFilter<"ServiceEventHistory"> | string | null
    eventType?: EnumEventTypeWithAggregatesFilter<"ServiceEventHistory"> | $Enums.EventType
    recordedAt?: DateTimeWithAggregatesFilter<"ServiceEventHistory"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    url?: StringFilter<"Service"> | string
    cluster?: StringFilter<"Service"> | string
    type?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    runtimeStatus?: StringNullableFilter<"Service"> | string | null
    lastReason?: StringNullableFilter<"Service"> | string | null
    lastSeenAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    dependenciesFrom?: ServiceDependencyListRelationFilter
    dependenciesTo?: ServiceDependencyListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    cluster?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    runtimeStatus?: SortOrderInput | SortOrder
    lastReason?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    dependenciesFrom?: ServiceDependencyOrderByRelationAggregateInput
    dependenciesTo?: ServiceDependencyOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_cluster?: ServiceNameClusterCompoundUniqueInput
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    url?: StringFilter<"Service"> | string
    cluster?: StringFilter<"Service"> | string
    type?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    runtimeStatus?: StringNullableFilter<"Service"> | string | null
    lastReason?: StringNullableFilter<"Service"> | string | null
    lastSeenAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    dependenciesFrom?: ServiceDependencyListRelationFilter
    dependenciesTo?: ServiceDependencyListRelationFilter
  }, "id" | "name_cluster">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    cluster?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    runtimeStatus?: SortOrderInput | SortOrder
    lastReason?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    url?: StringWithAggregatesFilter<"Service"> | string
    cluster?: StringWithAggregatesFilter<"Service"> | string
    type?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    runtimeStatus?: StringNullableWithAggregatesFilter<"Service"> | string | null
    lastReason?: StringNullableWithAggregatesFilter<"Service"> | string | null
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
  }

  export type ServiceDependencyWhereInput = {
    AND?: ServiceDependencyWhereInput | ServiceDependencyWhereInput[]
    OR?: ServiceDependencyWhereInput[]
    NOT?: ServiceDependencyWhereInput | ServiceDependencyWhereInput[]
    id?: StringFilter<"ServiceDependency"> | string
    fromServiceId?: StringFilter<"ServiceDependency"> | string
    toServiceId?: StringFilter<"ServiceDependency"> | string
    reason?: StringFilter<"ServiceDependency"> | string
    createdAt?: DateTimeFilter<"ServiceDependency"> | Date | string
    fromService?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    toService?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServiceDependencyOrderByWithRelationInput = {
    id?: SortOrder
    fromServiceId?: SortOrder
    toServiceId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    fromService?: ServiceOrderByWithRelationInput
    toService?: ServiceOrderByWithRelationInput
  }

  export type ServiceDependencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_service_relation?: ServiceDependencyUnique_service_relationCompoundUniqueInput
    AND?: ServiceDependencyWhereInput | ServiceDependencyWhereInput[]
    OR?: ServiceDependencyWhereInput[]
    NOT?: ServiceDependencyWhereInput | ServiceDependencyWhereInput[]
    fromServiceId?: StringFilter<"ServiceDependency"> | string
    toServiceId?: StringFilter<"ServiceDependency"> | string
    reason?: StringFilter<"ServiceDependency"> | string
    createdAt?: DateTimeFilter<"ServiceDependency"> | Date | string
    fromService?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    toService?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "unique_service_relation">

  export type ServiceDependencyOrderByWithAggregationInput = {
    id?: SortOrder
    fromServiceId?: SortOrder
    toServiceId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceDependencyCountOrderByAggregateInput
    _max?: ServiceDependencyMaxOrderByAggregateInput
    _min?: ServiceDependencyMinOrderByAggregateInput
  }

  export type ServiceDependencyScalarWhereWithAggregatesInput = {
    AND?: ServiceDependencyScalarWhereWithAggregatesInput | ServiceDependencyScalarWhereWithAggregatesInput[]
    OR?: ServiceDependencyScalarWhereWithAggregatesInput[]
    NOT?: ServiceDependencyScalarWhereWithAggregatesInput | ServiceDependencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceDependency"> | string
    fromServiceId?: StringWithAggregatesFilter<"ServiceDependency"> | string
    toServiceId?: StringWithAggregatesFilter<"ServiceDependency"> | string
    reason?: StringWithAggregatesFilter<"ServiceDependency"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceDependency"> | Date | string
  }

  export type MetricsWhereInput = {
    AND?: MetricsWhereInput | MetricsWhereInput[]
    OR?: MetricsWhereInput[]
    NOT?: MetricsWhereInput | MetricsWhereInput[]
    id?: StringFilter<"Metrics"> | string
    service?: StringFilter<"Metrics"> | string
    cpu?: FloatFilter<"Metrics"> | number
    memory?: FloatFilter<"Metrics"> | number
    networkRx?: IntFilter<"Metrics"> | number
    networkTx?: IntFilter<"Metrics"> | number
    status?: StringFilter<"Metrics"> | string
    source?: StringFilter<"Metrics"> | string
    createdAt?: DateTimeFilter<"Metrics"> | Date | string
  }

  export type MetricsOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    networkRx?: SortOrder
    networkTx?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    service_source?: MetricsServiceSourceCompoundUniqueInput
    AND?: MetricsWhereInput | MetricsWhereInput[]
    OR?: MetricsWhereInput[]
    NOT?: MetricsWhereInput | MetricsWhereInput[]
    service?: StringFilter<"Metrics"> | string
    cpu?: FloatFilter<"Metrics"> | number
    memory?: FloatFilter<"Metrics"> | number
    networkRx?: IntFilter<"Metrics"> | number
    networkTx?: IntFilter<"Metrics"> | number
    status?: StringFilter<"Metrics"> | string
    source?: StringFilter<"Metrics"> | string
    createdAt?: DateTimeFilter<"Metrics"> | Date | string
  }, "id" | "service_source">

  export type MetricsOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    networkRx?: SortOrder
    networkTx?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: MetricsCountOrderByAggregateInput
    _avg?: MetricsAvgOrderByAggregateInput
    _max?: MetricsMaxOrderByAggregateInput
    _min?: MetricsMinOrderByAggregateInput
    _sum?: MetricsSumOrderByAggregateInput
  }

  export type MetricsScalarWhereWithAggregatesInput = {
    AND?: MetricsScalarWhereWithAggregatesInput | MetricsScalarWhereWithAggregatesInput[]
    OR?: MetricsScalarWhereWithAggregatesInput[]
    NOT?: MetricsScalarWhereWithAggregatesInput | MetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Metrics"> | string
    service?: StringWithAggregatesFilter<"Metrics"> | string
    cpu?: FloatWithAggregatesFilter<"Metrics"> | number
    memory?: FloatWithAggregatesFilter<"Metrics"> | number
    networkRx?: IntWithAggregatesFilter<"Metrics"> | number
    networkTx?: IntWithAggregatesFilter<"Metrics"> | number
    status?: StringWithAggregatesFilter<"Metrics"> | string
    source?: StringWithAggregatesFilter<"Metrics"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Metrics"> | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title: string
    message: string
    service: string
    cluster?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: string
    title: string
    message: string
    service: string
    cluster?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: string
    title: string
    message: string
    service: string
    cluster?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEventCreateInput = {
    id?: string
    service: string
    status: string
    cluster?: string | null
    message?: string | null
    eventType?: $Enums.EventType
    createdAt?: Date | string
  }

  export type ServiceEventUncheckedCreateInput = {
    id?: string
    service: string
    status: string
    cluster?: string | null
    message?: string | null
    eventType?: $Enums.EventType
    createdAt?: Date | string
  }

  export type ServiceEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEventCreateManyInput = {
    id?: string
    service: string
    status: string
    cluster?: string | null
    message?: string | null
    eventType?: $Enums.EventType
    createdAt?: Date | string
  }

  export type ServiceEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEventHistoryCreateInput = {
    id?: string
    service: string
    status: string
    cluster?: string | null
    message?: string | null
    eventType: $Enums.EventType
    recordedAt?: Date | string
  }

  export type ServiceEventHistoryUncheckedCreateInput = {
    id?: string
    service: string
    status: string
    cluster?: string | null
    message?: string | null
    eventType: $Enums.EventType
    recordedAt?: Date | string
  }

  export type ServiceEventHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEventHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEventHistoryCreateManyInput = {
    id?: string
    service: string
    status: string
    cluster?: string | null
    message?: string | null
    eventType: $Enums.EventType
    recordedAt?: Date | string
  }

  export type ServiceEventHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceEventHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    cluster?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    url: string
    cluster: string
    type: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runtimeStatus?: string | null
    lastReason?: string | null
    lastSeenAt?: Date | string | null
    dependenciesFrom?: ServiceDependencyCreateNestedManyWithoutFromServiceInput
    dependenciesTo?: ServiceDependencyCreateNestedManyWithoutToServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    cluster: string
    type: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runtimeStatus?: string | null
    lastReason?: string | null
    lastSeenAt?: Date | string | null
    dependenciesFrom?: ServiceDependencyUncheckedCreateNestedManyWithoutFromServiceInput
    dependenciesTo?: ServiceDependencyUncheckedCreateNestedManyWithoutToServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cluster?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runtimeStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependenciesFrom?: ServiceDependencyUpdateManyWithoutFromServiceNestedInput
    dependenciesTo?: ServiceDependencyUpdateManyWithoutToServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cluster?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runtimeStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependenciesFrom?: ServiceDependencyUncheckedUpdateManyWithoutFromServiceNestedInput
    dependenciesTo?: ServiceDependencyUncheckedUpdateManyWithoutToServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    url: string
    cluster: string
    type: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runtimeStatus?: string | null
    lastReason?: string | null
    lastSeenAt?: Date | string | null
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cluster?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runtimeStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cluster?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runtimeStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceDependencyCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    fromService: ServiceCreateNestedOneWithoutDependenciesFromInput
    toService: ServiceCreateNestedOneWithoutDependenciesToInput
  }

  export type ServiceDependencyUncheckedCreateInput = {
    id?: string
    fromServiceId: string
    toServiceId: string
    reason: string
    createdAt?: Date | string
  }

  export type ServiceDependencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromService?: ServiceUpdateOneRequiredWithoutDependenciesFromNestedInput
    toService?: ServiceUpdateOneRequiredWithoutDependenciesToNestedInput
  }

  export type ServiceDependencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromServiceId?: StringFieldUpdateOperationsInput | string
    toServiceId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDependencyCreateManyInput = {
    id?: string
    fromServiceId: string
    toServiceId: string
    reason: string
    createdAt?: Date | string
  }

  export type ServiceDependencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDependencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromServiceId?: StringFieldUpdateOperationsInput | string
    toServiceId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricsCreateInput = {
    id?: string
    service: string
    cpu: number
    memory: number
    networkRx: number
    networkTx: number
    status: string
    source: string
    createdAt?: Date | string
  }

  export type MetricsUncheckedCreateInput = {
    id?: string
    service: string
    cpu: number
    memory: number
    networkRx: number
    networkTx: number
    status: string
    source: string
    createdAt?: Date | string
  }

  export type MetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cpu?: FloatFieldUpdateOperationsInput | number
    memory?: FloatFieldUpdateOperationsInput | number
    networkRx?: IntFieldUpdateOperationsInput | number
    networkTx?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cpu?: FloatFieldUpdateOperationsInput | number
    memory?: FloatFieldUpdateOperationsInput | number
    networkRx?: IntFieldUpdateOperationsInput | number
    networkTx?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricsCreateManyInput = {
    id?: string
    service: string
    cpu: number
    memory: number
    networkRx: number
    networkTx: number
    status: string
    source: string
    createdAt?: Date | string
  }

  export type MetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cpu?: FloatFieldUpdateOperationsInput | number
    memory?: FloatFieldUpdateOperationsInput | number
    networkRx?: IntFieldUpdateOperationsInput | number
    networkTx?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cpu?: FloatFieldUpdateOperationsInput | number
    memory?: FloatFieldUpdateOperationsInput | number
    networkRx?: IntFieldUpdateOperationsInput | number
    networkTx?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    service?: SortOrder
    cluster?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    service?: SortOrder
    cluster?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    service?: SortOrder
    cluster?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type ServiceEventCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrder
    message?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceEventMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrder
    message?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceEventMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrder
    message?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type ServiceEventHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrder
    message?: SortOrder
    eventType?: SortOrder
    recordedAt?: SortOrder
  }

  export type ServiceEventHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrder
    message?: SortOrder
    eventType?: SortOrder
    recordedAt?: SortOrder
  }

  export type ServiceEventHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    cluster?: SortOrder
    message?: SortOrder
    eventType?: SortOrder
    recordedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ServiceDependencyListRelationFilter = {
    every?: ServiceDependencyWhereInput
    some?: ServiceDependencyWhereInput
    none?: ServiceDependencyWhereInput
  }

  export type ServiceDependencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceNameClusterCompoundUniqueInput = {
    name: string
    cluster: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    cluster?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    runtimeStatus?: SortOrder
    lastReason?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    cluster?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    runtimeStatus?: SortOrder
    lastReason?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    cluster?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    runtimeStatus?: SortOrder
    lastReason?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServiceDependencyUnique_service_relationCompoundUniqueInput = {
    fromServiceId: string
    toServiceId: string
  }

  export type ServiceDependencyCountOrderByAggregateInput = {
    id?: SortOrder
    fromServiceId?: SortOrder
    toServiceId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceDependencyMaxOrderByAggregateInput = {
    id?: SortOrder
    fromServiceId?: SortOrder
    toServiceId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceDependencyMinOrderByAggregateInput = {
    id?: SortOrder
    fromServiceId?: SortOrder
    toServiceId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MetricsServiceSourceCompoundUniqueInput = {
    service: string
    source: string
  }

  export type MetricsCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    networkRx?: SortOrder
    networkTx?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricsAvgOrderByAggregateInput = {
    cpu?: SortOrder
    memory?: SortOrder
    networkRx?: SortOrder
    networkTx?: SortOrder
  }

  export type MetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    networkRx?: SortOrder
    networkTx?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricsMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    cpu?: SortOrder
    memory?: SortOrder
    networkRx?: SortOrder
    networkTx?: SortOrder
    status?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricsSumOrderByAggregateInput = {
    cpu?: SortOrder
    memory?: SortOrder
    networkRx?: SortOrder
    networkTx?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type ServiceDependencyCreateNestedManyWithoutFromServiceInput = {
    create?: XOR<ServiceDependencyCreateWithoutFromServiceInput, ServiceDependencyUncheckedCreateWithoutFromServiceInput> | ServiceDependencyCreateWithoutFromServiceInput[] | ServiceDependencyUncheckedCreateWithoutFromServiceInput[]
    connectOrCreate?: ServiceDependencyCreateOrConnectWithoutFromServiceInput | ServiceDependencyCreateOrConnectWithoutFromServiceInput[]
    createMany?: ServiceDependencyCreateManyFromServiceInputEnvelope
    connect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
  }

  export type ServiceDependencyCreateNestedManyWithoutToServiceInput = {
    create?: XOR<ServiceDependencyCreateWithoutToServiceInput, ServiceDependencyUncheckedCreateWithoutToServiceInput> | ServiceDependencyCreateWithoutToServiceInput[] | ServiceDependencyUncheckedCreateWithoutToServiceInput[]
    connectOrCreate?: ServiceDependencyCreateOrConnectWithoutToServiceInput | ServiceDependencyCreateOrConnectWithoutToServiceInput[]
    createMany?: ServiceDependencyCreateManyToServiceInputEnvelope
    connect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
  }

  export type ServiceDependencyUncheckedCreateNestedManyWithoutFromServiceInput = {
    create?: XOR<ServiceDependencyCreateWithoutFromServiceInput, ServiceDependencyUncheckedCreateWithoutFromServiceInput> | ServiceDependencyCreateWithoutFromServiceInput[] | ServiceDependencyUncheckedCreateWithoutFromServiceInput[]
    connectOrCreate?: ServiceDependencyCreateOrConnectWithoutFromServiceInput | ServiceDependencyCreateOrConnectWithoutFromServiceInput[]
    createMany?: ServiceDependencyCreateManyFromServiceInputEnvelope
    connect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
  }

  export type ServiceDependencyUncheckedCreateNestedManyWithoutToServiceInput = {
    create?: XOR<ServiceDependencyCreateWithoutToServiceInput, ServiceDependencyUncheckedCreateWithoutToServiceInput> | ServiceDependencyCreateWithoutToServiceInput[] | ServiceDependencyUncheckedCreateWithoutToServiceInput[]
    connectOrCreate?: ServiceDependencyCreateOrConnectWithoutToServiceInput | ServiceDependencyCreateOrConnectWithoutToServiceInput[]
    createMany?: ServiceDependencyCreateManyToServiceInputEnvelope
    connect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ServiceDependencyUpdateManyWithoutFromServiceNestedInput = {
    create?: XOR<ServiceDependencyCreateWithoutFromServiceInput, ServiceDependencyUncheckedCreateWithoutFromServiceInput> | ServiceDependencyCreateWithoutFromServiceInput[] | ServiceDependencyUncheckedCreateWithoutFromServiceInput[]
    connectOrCreate?: ServiceDependencyCreateOrConnectWithoutFromServiceInput | ServiceDependencyCreateOrConnectWithoutFromServiceInput[]
    upsert?: ServiceDependencyUpsertWithWhereUniqueWithoutFromServiceInput | ServiceDependencyUpsertWithWhereUniqueWithoutFromServiceInput[]
    createMany?: ServiceDependencyCreateManyFromServiceInputEnvelope
    set?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    disconnect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    delete?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    connect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    update?: ServiceDependencyUpdateWithWhereUniqueWithoutFromServiceInput | ServiceDependencyUpdateWithWhereUniqueWithoutFromServiceInput[]
    updateMany?: ServiceDependencyUpdateManyWithWhereWithoutFromServiceInput | ServiceDependencyUpdateManyWithWhereWithoutFromServiceInput[]
    deleteMany?: ServiceDependencyScalarWhereInput | ServiceDependencyScalarWhereInput[]
  }

  export type ServiceDependencyUpdateManyWithoutToServiceNestedInput = {
    create?: XOR<ServiceDependencyCreateWithoutToServiceInput, ServiceDependencyUncheckedCreateWithoutToServiceInput> | ServiceDependencyCreateWithoutToServiceInput[] | ServiceDependencyUncheckedCreateWithoutToServiceInput[]
    connectOrCreate?: ServiceDependencyCreateOrConnectWithoutToServiceInput | ServiceDependencyCreateOrConnectWithoutToServiceInput[]
    upsert?: ServiceDependencyUpsertWithWhereUniqueWithoutToServiceInput | ServiceDependencyUpsertWithWhereUniqueWithoutToServiceInput[]
    createMany?: ServiceDependencyCreateManyToServiceInputEnvelope
    set?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    disconnect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    delete?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    connect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    update?: ServiceDependencyUpdateWithWhereUniqueWithoutToServiceInput | ServiceDependencyUpdateWithWhereUniqueWithoutToServiceInput[]
    updateMany?: ServiceDependencyUpdateManyWithWhereWithoutToServiceInput | ServiceDependencyUpdateManyWithWhereWithoutToServiceInput[]
    deleteMany?: ServiceDependencyScalarWhereInput | ServiceDependencyScalarWhereInput[]
  }

  export type ServiceDependencyUncheckedUpdateManyWithoutFromServiceNestedInput = {
    create?: XOR<ServiceDependencyCreateWithoutFromServiceInput, ServiceDependencyUncheckedCreateWithoutFromServiceInput> | ServiceDependencyCreateWithoutFromServiceInput[] | ServiceDependencyUncheckedCreateWithoutFromServiceInput[]
    connectOrCreate?: ServiceDependencyCreateOrConnectWithoutFromServiceInput | ServiceDependencyCreateOrConnectWithoutFromServiceInput[]
    upsert?: ServiceDependencyUpsertWithWhereUniqueWithoutFromServiceInput | ServiceDependencyUpsertWithWhereUniqueWithoutFromServiceInput[]
    createMany?: ServiceDependencyCreateManyFromServiceInputEnvelope
    set?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    disconnect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    delete?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    connect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    update?: ServiceDependencyUpdateWithWhereUniqueWithoutFromServiceInput | ServiceDependencyUpdateWithWhereUniqueWithoutFromServiceInput[]
    updateMany?: ServiceDependencyUpdateManyWithWhereWithoutFromServiceInput | ServiceDependencyUpdateManyWithWhereWithoutFromServiceInput[]
    deleteMany?: ServiceDependencyScalarWhereInput | ServiceDependencyScalarWhereInput[]
  }

  export type ServiceDependencyUncheckedUpdateManyWithoutToServiceNestedInput = {
    create?: XOR<ServiceDependencyCreateWithoutToServiceInput, ServiceDependencyUncheckedCreateWithoutToServiceInput> | ServiceDependencyCreateWithoutToServiceInput[] | ServiceDependencyUncheckedCreateWithoutToServiceInput[]
    connectOrCreate?: ServiceDependencyCreateOrConnectWithoutToServiceInput | ServiceDependencyCreateOrConnectWithoutToServiceInput[]
    upsert?: ServiceDependencyUpsertWithWhereUniqueWithoutToServiceInput | ServiceDependencyUpsertWithWhereUniqueWithoutToServiceInput[]
    createMany?: ServiceDependencyCreateManyToServiceInputEnvelope
    set?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    disconnect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    delete?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    connect?: ServiceDependencyWhereUniqueInput | ServiceDependencyWhereUniqueInput[]
    update?: ServiceDependencyUpdateWithWhereUniqueWithoutToServiceInput | ServiceDependencyUpdateWithWhereUniqueWithoutToServiceInput[]
    updateMany?: ServiceDependencyUpdateManyWithWhereWithoutToServiceInput | ServiceDependencyUpdateManyWithWhereWithoutToServiceInput[]
    deleteMany?: ServiceDependencyScalarWhereInput | ServiceDependencyScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutDependenciesFromInput = {
    create?: XOR<ServiceCreateWithoutDependenciesFromInput, ServiceUncheckedCreateWithoutDependenciesFromInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDependenciesFromInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutDependenciesToInput = {
    create?: XOR<ServiceCreateWithoutDependenciesToInput, ServiceUncheckedCreateWithoutDependenciesToInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDependenciesToInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutDependenciesFromNestedInput = {
    create?: XOR<ServiceCreateWithoutDependenciesFromInput, ServiceUncheckedCreateWithoutDependenciesFromInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDependenciesFromInput
    upsert?: ServiceUpsertWithoutDependenciesFromInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutDependenciesFromInput, ServiceUpdateWithoutDependenciesFromInput>, ServiceUncheckedUpdateWithoutDependenciesFromInput>
  }

  export type ServiceUpdateOneRequiredWithoutDependenciesToNestedInput = {
    create?: XOR<ServiceCreateWithoutDependenciesToInput, ServiceUncheckedCreateWithoutDependenciesToInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDependenciesToInput
    upsert?: ServiceUpsertWithoutDependenciesToInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutDependenciesToInput, ServiceUpdateWithoutDependenciesToInput>, ServiceUncheckedUpdateWithoutDependenciesToInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ServiceDependencyCreateWithoutFromServiceInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    toService: ServiceCreateNestedOneWithoutDependenciesToInput
  }

  export type ServiceDependencyUncheckedCreateWithoutFromServiceInput = {
    id?: string
    toServiceId: string
    reason: string
    createdAt?: Date | string
  }

  export type ServiceDependencyCreateOrConnectWithoutFromServiceInput = {
    where: ServiceDependencyWhereUniqueInput
    create: XOR<ServiceDependencyCreateWithoutFromServiceInput, ServiceDependencyUncheckedCreateWithoutFromServiceInput>
  }

  export type ServiceDependencyCreateManyFromServiceInputEnvelope = {
    data: ServiceDependencyCreateManyFromServiceInput | ServiceDependencyCreateManyFromServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceDependencyCreateWithoutToServiceInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    fromService: ServiceCreateNestedOneWithoutDependenciesFromInput
  }

  export type ServiceDependencyUncheckedCreateWithoutToServiceInput = {
    id?: string
    fromServiceId: string
    reason: string
    createdAt?: Date | string
  }

  export type ServiceDependencyCreateOrConnectWithoutToServiceInput = {
    where: ServiceDependencyWhereUniqueInput
    create: XOR<ServiceDependencyCreateWithoutToServiceInput, ServiceDependencyUncheckedCreateWithoutToServiceInput>
  }

  export type ServiceDependencyCreateManyToServiceInputEnvelope = {
    data: ServiceDependencyCreateManyToServiceInput | ServiceDependencyCreateManyToServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceDependencyUpsertWithWhereUniqueWithoutFromServiceInput = {
    where: ServiceDependencyWhereUniqueInput
    update: XOR<ServiceDependencyUpdateWithoutFromServiceInput, ServiceDependencyUncheckedUpdateWithoutFromServiceInput>
    create: XOR<ServiceDependencyCreateWithoutFromServiceInput, ServiceDependencyUncheckedCreateWithoutFromServiceInput>
  }

  export type ServiceDependencyUpdateWithWhereUniqueWithoutFromServiceInput = {
    where: ServiceDependencyWhereUniqueInput
    data: XOR<ServiceDependencyUpdateWithoutFromServiceInput, ServiceDependencyUncheckedUpdateWithoutFromServiceInput>
  }

  export type ServiceDependencyUpdateManyWithWhereWithoutFromServiceInput = {
    where: ServiceDependencyScalarWhereInput
    data: XOR<ServiceDependencyUpdateManyMutationInput, ServiceDependencyUncheckedUpdateManyWithoutFromServiceInput>
  }

  export type ServiceDependencyScalarWhereInput = {
    AND?: ServiceDependencyScalarWhereInput | ServiceDependencyScalarWhereInput[]
    OR?: ServiceDependencyScalarWhereInput[]
    NOT?: ServiceDependencyScalarWhereInput | ServiceDependencyScalarWhereInput[]
    id?: StringFilter<"ServiceDependency"> | string
    fromServiceId?: StringFilter<"ServiceDependency"> | string
    toServiceId?: StringFilter<"ServiceDependency"> | string
    reason?: StringFilter<"ServiceDependency"> | string
    createdAt?: DateTimeFilter<"ServiceDependency"> | Date | string
  }

  export type ServiceDependencyUpsertWithWhereUniqueWithoutToServiceInput = {
    where: ServiceDependencyWhereUniqueInput
    update: XOR<ServiceDependencyUpdateWithoutToServiceInput, ServiceDependencyUncheckedUpdateWithoutToServiceInput>
    create: XOR<ServiceDependencyCreateWithoutToServiceInput, ServiceDependencyUncheckedCreateWithoutToServiceInput>
  }

  export type ServiceDependencyUpdateWithWhereUniqueWithoutToServiceInput = {
    where: ServiceDependencyWhereUniqueInput
    data: XOR<ServiceDependencyUpdateWithoutToServiceInput, ServiceDependencyUncheckedUpdateWithoutToServiceInput>
  }

  export type ServiceDependencyUpdateManyWithWhereWithoutToServiceInput = {
    where: ServiceDependencyScalarWhereInput
    data: XOR<ServiceDependencyUpdateManyMutationInput, ServiceDependencyUncheckedUpdateManyWithoutToServiceInput>
  }

  export type ServiceCreateWithoutDependenciesFromInput = {
    id?: string
    name: string
    url: string
    cluster: string
    type: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runtimeStatus?: string | null
    lastReason?: string | null
    lastSeenAt?: Date | string | null
    dependenciesTo?: ServiceDependencyCreateNestedManyWithoutToServiceInput
  }

  export type ServiceUncheckedCreateWithoutDependenciesFromInput = {
    id?: string
    name: string
    url: string
    cluster: string
    type: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runtimeStatus?: string | null
    lastReason?: string | null
    lastSeenAt?: Date | string | null
    dependenciesTo?: ServiceDependencyUncheckedCreateNestedManyWithoutToServiceInput
  }

  export type ServiceCreateOrConnectWithoutDependenciesFromInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutDependenciesFromInput, ServiceUncheckedCreateWithoutDependenciesFromInput>
  }

  export type ServiceCreateWithoutDependenciesToInput = {
    id?: string
    name: string
    url: string
    cluster: string
    type: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runtimeStatus?: string | null
    lastReason?: string | null
    lastSeenAt?: Date | string | null
    dependenciesFrom?: ServiceDependencyCreateNestedManyWithoutFromServiceInput
  }

  export type ServiceUncheckedCreateWithoutDependenciesToInput = {
    id?: string
    name: string
    url: string
    cluster: string
    type: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    runtimeStatus?: string | null
    lastReason?: string | null
    lastSeenAt?: Date | string | null
    dependenciesFrom?: ServiceDependencyUncheckedCreateNestedManyWithoutFromServiceInput
  }

  export type ServiceCreateOrConnectWithoutDependenciesToInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutDependenciesToInput, ServiceUncheckedCreateWithoutDependenciesToInput>
  }

  export type ServiceUpsertWithoutDependenciesFromInput = {
    update: XOR<ServiceUpdateWithoutDependenciesFromInput, ServiceUncheckedUpdateWithoutDependenciesFromInput>
    create: XOR<ServiceCreateWithoutDependenciesFromInput, ServiceUncheckedCreateWithoutDependenciesFromInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutDependenciesFromInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutDependenciesFromInput, ServiceUncheckedUpdateWithoutDependenciesFromInput>
  }

  export type ServiceUpdateWithoutDependenciesFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cluster?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runtimeStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependenciesTo?: ServiceDependencyUpdateManyWithoutToServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutDependenciesFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cluster?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runtimeStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependenciesTo?: ServiceDependencyUncheckedUpdateManyWithoutToServiceNestedInput
  }

  export type ServiceUpsertWithoutDependenciesToInput = {
    update: XOR<ServiceUpdateWithoutDependenciesToInput, ServiceUncheckedUpdateWithoutDependenciesToInput>
    create: XOR<ServiceCreateWithoutDependenciesToInput, ServiceUncheckedCreateWithoutDependenciesToInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutDependenciesToInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutDependenciesToInput, ServiceUncheckedUpdateWithoutDependenciesToInput>
  }

  export type ServiceUpdateWithoutDependenciesToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cluster?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runtimeStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependenciesFrom?: ServiceDependencyUpdateManyWithoutFromServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutDependenciesToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    cluster?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runtimeStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dependenciesFrom?: ServiceDependencyUncheckedUpdateManyWithoutFromServiceNestedInput
  }

  export type ServiceDependencyCreateManyFromServiceInput = {
    id?: string
    toServiceId: string
    reason: string
    createdAt?: Date | string
  }

  export type ServiceDependencyCreateManyToServiceInput = {
    id?: string
    fromServiceId: string
    reason: string
    createdAt?: Date | string
  }

  export type ServiceDependencyUpdateWithoutFromServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toService?: ServiceUpdateOneRequiredWithoutDependenciesToNestedInput
  }

  export type ServiceDependencyUncheckedUpdateWithoutFromServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    toServiceId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDependencyUncheckedUpdateManyWithoutFromServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    toServiceId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDependencyUpdateWithoutToServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromService?: ServiceUpdateOneRequiredWithoutDependenciesFromNestedInput
  }

  export type ServiceDependencyUncheckedUpdateWithoutToServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromServiceId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDependencyUncheckedUpdateManyWithoutToServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromServiceId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}