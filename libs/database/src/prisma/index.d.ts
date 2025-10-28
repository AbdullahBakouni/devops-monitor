
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
 * Model ServiceEvent
 * 
 */
export type ServiceEvent = $Result.DefaultSelection<Prisma.$ServiceEventPayload>
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
 * Model ServiceAI
 * 
 */
export type ServiceAI = $Result.DefaultSelection<Prisma.$ServiceAIPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventType: {
  INITIAL: 'INITIAL',
  STATUS_CHANGE: 'STATUS_CHANGE',
  RECOVERY: 'RECOVERY',
  FAILURE: 'FAILURE'
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
 * // Fetch zero or more ServiceEvents
 * const serviceEvents = await prisma.serviceEvent.findMany()
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
   * // Fetch zero or more ServiceEvents
   * const serviceEvents = await prisma.serviceEvent.findMany()
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
   * `prisma.serviceEvent`: Exposes CRUD operations for the **ServiceEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceEvents
    * const serviceEvents = await prisma.serviceEvent.findMany()
    * ```
    */
  get serviceEvent(): Prisma.ServiceEventDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.serviceAI`: Exposes CRUD operations for the **ServiceAI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceAIS
    * const serviceAIS = await prisma.serviceAI.findMany()
    * ```
    */
  get serviceAI(): Prisma.ServiceAIDelegate<ExtArgs, ClientOptions>;
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
    ServiceEvent: 'ServiceEvent',
    Service: 'Service',
    ServiceDependency: 'ServiceDependency',
    ServiceAI: 'ServiceAI'
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
      modelProps: "serviceEvent" | "service" | "serviceDependency" | "serviceAI"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      ServiceAI: {
        payload: Prisma.$ServiceAIPayload<ExtArgs>
        fields: Prisma.ServiceAIFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceAIFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceAIFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>
          }
          findFirst: {
            args: Prisma.ServiceAIFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceAIFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>
          }
          findMany: {
            args: Prisma.ServiceAIFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>[]
          }
          create: {
            args: Prisma.ServiceAICreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>
          }
          createMany: {
            args: Prisma.ServiceAICreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceAICreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>[]
          }
          delete: {
            args: Prisma.ServiceAIDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>
          }
          update: {
            args: Prisma.ServiceAIUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>
          }
          deleteMany: {
            args: Prisma.ServiceAIDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceAIUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceAIUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>[]
          }
          upsert: {
            args: Prisma.ServiceAIUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAIPayload>
          }
          aggregate: {
            args: Prisma.ServiceAIAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceAI>
          }
          groupBy: {
            args: Prisma.ServiceAIGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceAIGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceAICountArgs<ExtArgs>
            result: $Utils.Optional<ServiceAICountAggregateOutputType> | number
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
    serviceEvent?: ServiceEventOmit
    service?: ServiceOmit
    serviceDependency?: ServiceDependencyOmit
    serviceAI?: ServiceAIOmit
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
    ServiceAI?: boolean | Service$ServiceAIArgs<ExtArgs>
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
    ServiceAI?: boolean | Service$ServiceAIArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      dependenciesFrom: Prisma.$ServiceDependencyPayload<ExtArgs>[]
      dependenciesTo: Prisma.$ServiceDependencyPayload<ExtArgs>[]
      ServiceAI: Prisma.$ServiceAIPayload<ExtArgs> | null
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
    ServiceAI<T extends Service$ServiceAIArgs<ExtArgs> = {}>(args?: Subset<T, Service$ServiceAIArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Service.ServiceAI
   */
  export type Service$ServiceAIArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    where?: ServiceAIWhereInput
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
   * Model ServiceAI
   */

  export type AggregateServiceAI = {
    _count: ServiceAICountAggregateOutputType | null
    _avg: ServiceAIAvgAggregateOutputType | null
    _sum: ServiceAISumAggregateOutputType | null
    _min: ServiceAIMinAggregateOutputType | null
    _max: ServiceAIMaxAggregateOutputType | null
  }

  export type ServiceAIAvgAggregateOutputType = {
    failCount: number | null
  }

  export type ServiceAISumAggregateOutputType = {
    failCount: number | null
  }

  export type ServiceAIMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    failCount: number | null
    lastUpdated: Date | null
    lastRefreshedAt: Date | null
  }

  export type ServiceAIMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    failCount: number | null
    lastUpdated: Date | null
    lastRefreshedAt: Date | null
  }

  export type ServiceAICountAggregateOutputType = {
    id: number
    serviceId: number
    aiData: number
    failCount: number
    lastUpdated: number
    lastRefreshedAt: number
    _all: number
  }


  export type ServiceAIAvgAggregateInputType = {
    failCount?: true
  }

  export type ServiceAISumAggregateInputType = {
    failCount?: true
  }

  export type ServiceAIMinAggregateInputType = {
    id?: true
    serviceId?: true
    failCount?: true
    lastUpdated?: true
    lastRefreshedAt?: true
  }

  export type ServiceAIMaxAggregateInputType = {
    id?: true
    serviceId?: true
    failCount?: true
    lastUpdated?: true
    lastRefreshedAt?: true
  }

  export type ServiceAICountAggregateInputType = {
    id?: true
    serviceId?: true
    aiData?: true
    failCount?: true
    lastUpdated?: true
    lastRefreshedAt?: true
    _all?: true
  }

  export type ServiceAIAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAI to aggregate.
     */
    where?: ServiceAIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAIS to fetch.
     */
    orderBy?: ServiceAIOrderByWithRelationInput | ServiceAIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceAIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceAIS
    **/
    _count?: true | ServiceAICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAIAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceAISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceAIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceAIMaxAggregateInputType
  }

  export type GetServiceAIAggregateType<T extends ServiceAIAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceAI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceAI[P]>
      : GetScalarType<T[P], AggregateServiceAI[P]>
  }




  export type ServiceAIGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAIWhereInput
    orderBy?: ServiceAIOrderByWithAggregationInput | ServiceAIOrderByWithAggregationInput[]
    by: ServiceAIScalarFieldEnum[] | ServiceAIScalarFieldEnum
    having?: ServiceAIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceAICountAggregateInputType | true
    _avg?: ServiceAIAvgAggregateInputType
    _sum?: ServiceAISumAggregateInputType
    _min?: ServiceAIMinAggregateInputType
    _max?: ServiceAIMaxAggregateInputType
  }

  export type ServiceAIGroupByOutputType = {
    id: string
    serviceId: string
    aiData: JsonValue
    failCount: number
    lastUpdated: Date
    lastRefreshedAt: Date
    _count: ServiceAICountAggregateOutputType | null
    _avg: ServiceAIAvgAggregateOutputType | null
    _sum: ServiceAISumAggregateOutputType | null
    _min: ServiceAIMinAggregateOutputType | null
    _max: ServiceAIMaxAggregateOutputType | null
  }

  type GetServiceAIGroupByPayload<T extends ServiceAIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceAIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceAIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceAIGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceAIGroupByOutputType[P]>
        }
      >
    >


  export type ServiceAISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    aiData?: boolean
    failCount?: boolean
    lastUpdated?: boolean
    lastRefreshedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAI"]>

  export type ServiceAISelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    aiData?: boolean
    failCount?: boolean
    lastUpdated?: boolean
    lastRefreshedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAI"]>

  export type ServiceAISelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    aiData?: boolean
    failCount?: boolean
    lastUpdated?: boolean
    lastRefreshedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceAI"]>

  export type ServiceAISelectScalar = {
    id?: boolean
    serviceId?: boolean
    aiData?: boolean
    failCount?: boolean
    lastUpdated?: boolean
    lastRefreshedAt?: boolean
  }

  export type ServiceAIOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "aiData" | "failCount" | "lastUpdated" | "lastRefreshedAt", ExtArgs["result"]["serviceAI"]>
  export type ServiceAIInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceAIIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceAIIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceAIPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceAI"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      aiData: Prisma.JsonValue
      failCount: number
      lastUpdated: Date
      lastRefreshedAt: Date
    }, ExtArgs["result"]["serviceAI"]>
    composites: {}
  }

  type ServiceAIGetPayload<S extends boolean | null | undefined | ServiceAIDefaultArgs> = $Result.GetResult<Prisma.$ServiceAIPayload, S>

  type ServiceAICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceAIFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceAICountAggregateInputType | true
    }

  export interface ServiceAIDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceAI'], meta: { name: 'ServiceAI' } }
    /**
     * Find zero or one ServiceAI that matches the filter.
     * @param {ServiceAIFindUniqueArgs} args - Arguments to find a ServiceAI
     * @example
     * // Get one ServiceAI
     * const serviceAI = await prisma.serviceAI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceAIFindUniqueArgs>(args: SelectSubset<T, ServiceAIFindUniqueArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceAI that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceAIFindUniqueOrThrowArgs} args - Arguments to find a ServiceAI
     * @example
     * // Get one ServiceAI
     * const serviceAI = await prisma.serviceAI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceAIFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceAIFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceAI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAIFindFirstArgs} args - Arguments to find a ServiceAI
     * @example
     * // Get one ServiceAI
     * const serviceAI = await prisma.serviceAI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceAIFindFirstArgs>(args?: SelectSubset<T, ServiceAIFindFirstArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceAI that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAIFindFirstOrThrowArgs} args - Arguments to find a ServiceAI
     * @example
     * // Get one ServiceAI
     * const serviceAI = await prisma.serviceAI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceAIFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceAIFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceAIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAIFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceAIS
     * const serviceAIS = await prisma.serviceAI.findMany()
     * 
     * // Get first 10 ServiceAIS
     * const serviceAIS = await prisma.serviceAI.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceAIWithIdOnly = await prisma.serviceAI.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceAIFindManyArgs>(args?: SelectSubset<T, ServiceAIFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceAI.
     * @param {ServiceAICreateArgs} args - Arguments to create a ServiceAI.
     * @example
     * // Create one ServiceAI
     * const ServiceAI = await prisma.serviceAI.create({
     *   data: {
     *     // ... data to create a ServiceAI
     *   }
     * })
     * 
     */
    create<T extends ServiceAICreateArgs>(args: SelectSubset<T, ServiceAICreateArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceAIS.
     * @param {ServiceAICreateManyArgs} args - Arguments to create many ServiceAIS.
     * @example
     * // Create many ServiceAIS
     * const serviceAI = await prisma.serviceAI.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceAICreateManyArgs>(args?: SelectSubset<T, ServiceAICreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceAIS and returns the data saved in the database.
     * @param {ServiceAICreateManyAndReturnArgs} args - Arguments to create many ServiceAIS.
     * @example
     * // Create many ServiceAIS
     * const serviceAI = await prisma.serviceAI.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceAIS and only return the `id`
     * const serviceAIWithIdOnly = await prisma.serviceAI.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceAICreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceAICreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceAI.
     * @param {ServiceAIDeleteArgs} args - Arguments to delete one ServiceAI.
     * @example
     * // Delete one ServiceAI
     * const ServiceAI = await prisma.serviceAI.delete({
     *   where: {
     *     // ... filter to delete one ServiceAI
     *   }
     * })
     * 
     */
    delete<T extends ServiceAIDeleteArgs>(args: SelectSubset<T, ServiceAIDeleteArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceAI.
     * @param {ServiceAIUpdateArgs} args - Arguments to update one ServiceAI.
     * @example
     * // Update one ServiceAI
     * const serviceAI = await prisma.serviceAI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceAIUpdateArgs>(args: SelectSubset<T, ServiceAIUpdateArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceAIS.
     * @param {ServiceAIDeleteManyArgs} args - Arguments to filter ServiceAIS to delete.
     * @example
     * // Delete a few ServiceAIS
     * const { count } = await prisma.serviceAI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceAIDeleteManyArgs>(args?: SelectSubset<T, ServiceAIDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceAIS
     * const serviceAI = await prisma.serviceAI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceAIUpdateManyArgs>(args: SelectSubset<T, ServiceAIUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAIS and returns the data updated in the database.
     * @param {ServiceAIUpdateManyAndReturnArgs} args - Arguments to update many ServiceAIS.
     * @example
     * // Update many ServiceAIS
     * const serviceAI = await prisma.serviceAI.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceAIS and only return the `id`
     * const serviceAIWithIdOnly = await prisma.serviceAI.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceAIUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceAIUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceAI.
     * @param {ServiceAIUpsertArgs} args - Arguments to update or create a ServiceAI.
     * @example
     * // Update or create a ServiceAI
     * const serviceAI = await prisma.serviceAI.upsert({
     *   create: {
     *     // ... data to create a ServiceAI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceAI we want to update
     *   }
     * })
     */
    upsert<T extends ServiceAIUpsertArgs>(args: SelectSubset<T, ServiceAIUpsertArgs<ExtArgs>>): Prisma__ServiceAIClient<$Result.GetResult<Prisma.$ServiceAIPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceAIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAICountArgs} args - Arguments to filter ServiceAIS to count.
     * @example
     * // Count the number of ServiceAIS
     * const count = await prisma.serviceAI.count({
     *   where: {
     *     // ... the filter for the ServiceAIS we want to count
     *   }
     * })
    **/
    count<T extends ServiceAICountArgs>(
      args?: Subset<T, ServiceAICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceAICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceAI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAIAggregateArgs>(args: Subset<T, ServiceAIAggregateArgs>): Prisma.PrismaPromise<GetServiceAIAggregateType<T>>

    /**
     * Group by ServiceAI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAIGroupByArgs} args - Group by arguments.
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
      T extends ServiceAIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceAIGroupByArgs['orderBy'] }
        : { orderBy?: ServiceAIGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceAIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceAIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceAI model
   */
  readonly fields: ServiceAIFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceAI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceAIClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ServiceAI model
   */
  interface ServiceAIFieldRefs {
    readonly id: FieldRef<"ServiceAI", 'String'>
    readonly serviceId: FieldRef<"ServiceAI", 'String'>
    readonly aiData: FieldRef<"ServiceAI", 'Json'>
    readonly failCount: FieldRef<"ServiceAI", 'Int'>
    readonly lastUpdated: FieldRef<"ServiceAI", 'DateTime'>
    readonly lastRefreshedAt: FieldRef<"ServiceAI", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceAI findUnique
   */
  export type ServiceAIFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAI to fetch.
     */
    where: ServiceAIWhereUniqueInput
  }

  /**
   * ServiceAI findUniqueOrThrow
   */
  export type ServiceAIFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAI to fetch.
     */
    where: ServiceAIWhereUniqueInput
  }

  /**
   * ServiceAI findFirst
   */
  export type ServiceAIFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAI to fetch.
     */
    where?: ServiceAIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAIS to fetch.
     */
    orderBy?: ServiceAIOrderByWithRelationInput | ServiceAIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAIS.
     */
    cursor?: ServiceAIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAIS.
     */
    distinct?: ServiceAIScalarFieldEnum | ServiceAIScalarFieldEnum[]
  }

  /**
   * ServiceAI findFirstOrThrow
   */
  export type ServiceAIFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAI to fetch.
     */
    where?: ServiceAIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAIS to fetch.
     */
    orderBy?: ServiceAIOrderByWithRelationInput | ServiceAIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAIS.
     */
    cursor?: ServiceAIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAIS.
     */
    distinct?: ServiceAIScalarFieldEnum | ServiceAIScalarFieldEnum[]
  }

  /**
   * ServiceAI findMany
   */
  export type ServiceAIFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAIS to fetch.
     */
    where?: ServiceAIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAIS to fetch.
     */
    orderBy?: ServiceAIOrderByWithRelationInput | ServiceAIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceAIS.
     */
    cursor?: ServiceAIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAIS.
     */
    skip?: number
    distinct?: ServiceAIScalarFieldEnum | ServiceAIScalarFieldEnum[]
  }

  /**
   * ServiceAI create
   */
  export type ServiceAICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceAI.
     */
    data: XOR<ServiceAICreateInput, ServiceAIUncheckedCreateInput>
  }

  /**
   * ServiceAI createMany
   */
  export type ServiceAICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceAIS.
     */
    data: ServiceAICreateManyInput | ServiceAICreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceAI createManyAndReturn
   */
  export type ServiceAICreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceAIS.
     */
    data: ServiceAICreateManyInput | ServiceAICreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceAI update
   */
  export type ServiceAIUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceAI.
     */
    data: XOR<ServiceAIUpdateInput, ServiceAIUncheckedUpdateInput>
    /**
     * Choose, which ServiceAI to update.
     */
    where: ServiceAIWhereUniqueInput
  }

  /**
   * ServiceAI updateMany
   */
  export type ServiceAIUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceAIS.
     */
    data: XOR<ServiceAIUpdateManyMutationInput, ServiceAIUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAIS to update
     */
    where?: ServiceAIWhereInput
    /**
     * Limit how many ServiceAIS to update.
     */
    limit?: number
  }

  /**
   * ServiceAI updateManyAndReturn
   */
  export type ServiceAIUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * The data used to update ServiceAIS.
     */
    data: XOR<ServiceAIUpdateManyMutationInput, ServiceAIUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAIS to update
     */
    where?: ServiceAIWhereInput
    /**
     * Limit how many ServiceAIS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceAI upsert
   */
  export type ServiceAIUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceAI to update in case it exists.
     */
    where: ServiceAIWhereUniqueInput
    /**
     * In case the ServiceAI found by the `where` argument doesn't exist, create a new ServiceAI with this data.
     */
    create: XOR<ServiceAICreateInput, ServiceAIUncheckedCreateInput>
    /**
     * In case the ServiceAI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceAIUpdateInput, ServiceAIUncheckedUpdateInput>
  }

  /**
   * ServiceAI delete
   */
  export type ServiceAIDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
    /**
     * Filter which ServiceAI to delete.
     */
    where: ServiceAIWhereUniqueInput
  }

  /**
   * ServiceAI deleteMany
   */
  export type ServiceAIDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAIS to delete
     */
    where?: ServiceAIWhereInput
    /**
     * Limit how many ServiceAIS to delete.
     */
    limit?: number
  }

  /**
   * ServiceAI without action
   */
  export type ServiceAIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceAI
     */
    select?: ServiceAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceAI
     */
    omit?: ServiceAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAIInclude<ExtArgs> | null
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


  export const ServiceAIScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    aiData: 'aiData',
    failCount: 'failCount',
    lastUpdated: 'lastUpdated',
    lastRefreshedAt: 'lastRefreshedAt'
  };

  export type ServiceAIScalarFieldEnum = (typeof ServiceAIScalarFieldEnum)[keyof typeof ServiceAIScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


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
    AND?: ServiceEventWhereInput | ServiceEventWhereInput[]
    OR?: ServiceEventWhereInput[]
    NOT?: ServiceEventWhereInput | ServiceEventWhereInput[]
    service?: StringFilter<"ServiceEvent"> | string
    status?: StringFilter<"ServiceEvent"> | string
    cluster?: StringNullableFilter<"ServiceEvent"> | string | null
    message?: StringNullableFilter<"ServiceEvent"> | string | null
    eventType?: EnumEventTypeFilter<"ServiceEvent"> | $Enums.EventType
    createdAt?: DateTimeFilter<"ServiceEvent"> | Date | string
  }, "id">

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
    ServiceAI?: XOR<ServiceAINullableScalarRelationFilter, ServiceAIWhereInput> | null
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
    ServiceAI?: ServiceAIOrderByWithRelationInput
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
    ServiceAI?: XOR<ServiceAINullableScalarRelationFilter, ServiceAIWhereInput> | null
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

  export type ServiceAIWhereInput = {
    AND?: ServiceAIWhereInput | ServiceAIWhereInput[]
    OR?: ServiceAIWhereInput[]
    NOT?: ServiceAIWhereInput | ServiceAIWhereInput[]
    id?: StringFilter<"ServiceAI"> | string
    serviceId?: StringFilter<"ServiceAI"> | string
    aiData?: JsonFilter<"ServiceAI">
    failCount?: IntFilter<"ServiceAI"> | number
    lastUpdated?: DateTimeFilter<"ServiceAI"> | Date | string
    lastRefreshedAt?: DateTimeFilter<"ServiceAI"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServiceAIOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    aiData?: SortOrder
    failCount?: SortOrder
    lastUpdated?: SortOrder
    lastRefreshedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ServiceAIWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId?: string
    AND?: ServiceAIWhereInput | ServiceAIWhereInput[]
    OR?: ServiceAIWhereInput[]
    NOT?: ServiceAIWhereInput | ServiceAIWhereInput[]
    aiData?: JsonFilter<"ServiceAI">
    failCount?: IntFilter<"ServiceAI"> | number
    lastUpdated?: DateTimeFilter<"ServiceAI"> | Date | string
    lastRefreshedAt?: DateTimeFilter<"ServiceAI"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "serviceId">

  export type ServiceAIOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    aiData?: SortOrder
    failCount?: SortOrder
    lastUpdated?: SortOrder
    lastRefreshedAt?: SortOrder
    _count?: ServiceAICountOrderByAggregateInput
    _avg?: ServiceAIAvgOrderByAggregateInput
    _max?: ServiceAIMaxOrderByAggregateInput
    _min?: ServiceAIMinOrderByAggregateInput
    _sum?: ServiceAISumOrderByAggregateInput
  }

  export type ServiceAIScalarWhereWithAggregatesInput = {
    AND?: ServiceAIScalarWhereWithAggregatesInput | ServiceAIScalarWhereWithAggregatesInput[]
    OR?: ServiceAIScalarWhereWithAggregatesInput[]
    NOT?: ServiceAIScalarWhereWithAggregatesInput | ServiceAIScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceAI"> | string
    serviceId?: StringWithAggregatesFilter<"ServiceAI"> | string
    aiData?: JsonWithAggregatesFilter<"ServiceAI">
    failCount?: IntWithAggregatesFilter<"ServiceAI"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"ServiceAI"> | Date | string
    lastRefreshedAt?: DateTimeWithAggregatesFilter<"ServiceAI"> | Date | string
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
    ServiceAI?: ServiceAICreateNestedOneWithoutServiceInput
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
    ServiceAI?: ServiceAIUncheckedCreateNestedOneWithoutServiceInput
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
    ServiceAI?: ServiceAIUpdateOneWithoutServiceNestedInput
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
    ServiceAI?: ServiceAIUncheckedUpdateOneWithoutServiceNestedInput
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

  export type ServiceAICreateInput = {
    id?: string
    aiData: JsonNullValueInput | InputJsonValue
    failCount?: number
    lastUpdated?: Date | string
    lastRefreshedAt?: Date | string
    service: ServiceCreateNestedOneWithoutServiceAIInput
  }

  export type ServiceAIUncheckedCreateInput = {
    id?: string
    serviceId: string
    aiData: JsonNullValueInput | InputJsonValue
    failCount?: number
    lastUpdated?: Date | string
    lastRefreshedAt?: Date | string
  }

  export type ServiceAIUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiData?: JsonNullValueInput | InputJsonValue
    failCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRefreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutServiceAINestedInput
  }

  export type ServiceAIUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    aiData?: JsonNullValueInput | InputJsonValue
    failCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRefreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAICreateManyInput = {
    id?: string
    serviceId: string
    aiData: JsonNullValueInput | InputJsonValue
    failCount?: number
    lastUpdated?: Date | string
    lastRefreshedAt?: Date | string
  }

  export type ServiceAIUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiData?: JsonNullValueInput | InputJsonValue
    failCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRefreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAIUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    aiData?: JsonNullValueInput | InputJsonValue
    failCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRefreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
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

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
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

  export type ServiceAINullableScalarRelationFilter = {
    is?: ServiceAIWhereInput | null
    isNot?: ServiceAIWhereInput | null
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ServiceAICountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    aiData?: SortOrder
    failCount?: SortOrder
    lastUpdated?: SortOrder
    lastRefreshedAt?: SortOrder
  }

  export type ServiceAIAvgOrderByAggregateInput = {
    failCount?: SortOrder
  }

  export type ServiceAIMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    failCount?: SortOrder
    lastUpdated?: SortOrder
    lastRefreshedAt?: SortOrder
  }

  export type ServiceAIMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    failCount?: SortOrder
    lastUpdated?: SortOrder
    lastRefreshedAt?: SortOrder
  }

  export type ServiceAISumOrderByAggregateInput = {
    failCount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type ServiceAICreateNestedOneWithoutServiceInput = {
    create?: XOR<ServiceAICreateWithoutServiceInput, ServiceAIUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceAICreateOrConnectWithoutServiceInput
    connect?: ServiceAIWhereUniqueInput
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

  export type ServiceAIUncheckedCreateNestedOneWithoutServiceInput = {
    create?: XOR<ServiceAICreateWithoutServiceInput, ServiceAIUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceAICreateOrConnectWithoutServiceInput
    connect?: ServiceAIWhereUniqueInput
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

  export type ServiceAIUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ServiceAICreateWithoutServiceInput, ServiceAIUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceAICreateOrConnectWithoutServiceInput
    upsert?: ServiceAIUpsertWithoutServiceInput
    disconnect?: ServiceAIWhereInput | boolean
    delete?: ServiceAIWhereInput | boolean
    connect?: ServiceAIWhereUniqueInput
    update?: XOR<XOR<ServiceAIUpdateToOneWithWhereWithoutServiceInput, ServiceAIUpdateWithoutServiceInput>, ServiceAIUncheckedUpdateWithoutServiceInput>
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

  export type ServiceAIUncheckedUpdateOneWithoutServiceNestedInput = {
    create?: XOR<ServiceAICreateWithoutServiceInput, ServiceAIUncheckedCreateWithoutServiceInput>
    connectOrCreate?: ServiceAICreateOrConnectWithoutServiceInput
    upsert?: ServiceAIUpsertWithoutServiceInput
    disconnect?: ServiceAIWhereInput | boolean
    delete?: ServiceAIWhereInput | boolean
    connect?: ServiceAIWhereUniqueInput
    update?: XOR<XOR<ServiceAIUpdateToOneWithWhereWithoutServiceInput, ServiceAIUpdateWithoutServiceInput>, ServiceAIUncheckedUpdateWithoutServiceInput>
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

  export type ServiceCreateNestedOneWithoutServiceAIInput = {
    create?: XOR<ServiceCreateWithoutServiceAIInput, ServiceUncheckedCreateWithoutServiceAIInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceAIInput
    connect?: ServiceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceUpdateOneRequiredWithoutServiceAINestedInput = {
    create?: XOR<ServiceCreateWithoutServiceAIInput, ServiceUncheckedCreateWithoutServiceAIInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceAIInput
    upsert?: ServiceUpsertWithoutServiceAIInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutServiceAIInput, ServiceUpdateWithoutServiceAIInput>, ServiceUncheckedUpdateWithoutServiceAIInput>
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

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
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

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ServiceAICreateWithoutServiceInput = {
    id?: string
    aiData: JsonNullValueInput | InputJsonValue
    failCount?: number
    lastUpdated?: Date | string
    lastRefreshedAt?: Date | string
  }

  export type ServiceAIUncheckedCreateWithoutServiceInput = {
    id?: string
    aiData: JsonNullValueInput | InputJsonValue
    failCount?: number
    lastUpdated?: Date | string
    lastRefreshedAt?: Date | string
  }

  export type ServiceAICreateOrConnectWithoutServiceInput = {
    where: ServiceAIWhereUniqueInput
    create: XOR<ServiceAICreateWithoutServiceInput, ServiceAIUncheckedCreateWithoutServiceInput>
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

  export type ServiceAIUpsertWithoutServiceInput = {
    update: XOR<ServiceAIUpdateWithoutServiceInput, ServiceAIUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceAICreateWithoutServiceInput, ServiceAIUncheckedCreateWithoutServiceInput>
    where?: ServiceAIWhereInput
  }

  export type ServiceAIUpdateToOneWithWhereWithoutServiceInput = {
    where?: ServiceAIWhereInput
    data: XOR<ServiceAIUpdateWithoutServiceInput, ServiceAIUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceAIUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiData?: JsonNullValueInput | InputJsonValue
    failCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRefreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAIUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiData?: JsonNullValueInput | InputJsonValue
    failCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRefreshedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    ServiceAI?: ServiceAICreateNestedOneWithoutServiceInput
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
    ServiceAI?: ServiceAIUncheckedCreateNestedOneWithoutServiceInput
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
    ServiceAI?: ServiceAICreateNestedOneWithoutServiceInput
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
    ServiceAI?: ServiceAIUncheckedCreateNestedOneWithoutServiceInput
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
    ServiceAI?: ServiceAIUpdateOneWithoutServiceNestedInput
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
    ServiceAI?: ServiceAIUncheckedUpdateOneWithoutServiceNestedInput
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
    ServiceAI?: ServiceAIUpdateOneWithoutServiceNestedInput
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
    ServiceAI?: ServiceAIUncheckedUpdateOneWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutServiceAIInput = {
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

  export type ServiceUncheckedCreateWithoutServiceAIInput = {
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

  export type ServiceCreateOrConnectWithoutServiceAIInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutServiceAIInput, ServiceUncheckedCreateWithoutServiceAIInput>
  }

  export type ServiceUpsertWithoutServiceAIInput = {
    update: XOR<ServiceUpdateWithoutServiceAIInput, ServiceUncheckedUpdateWithoutServiceAIInput>
    create: XOR<ServiceCreateWithoutServiceAIInput, ServiceUncheckedCreateWithoutServiceAIInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutServiceAIInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutServiceAIInput, ServiceUncheckedUpdateWithoutServiceAIInput>
  }

  export type ServiceUpdateWithoutServiceAIInput = {
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

  export type ServiceUncheckedUpdateWithoutServiceAIInput = {
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