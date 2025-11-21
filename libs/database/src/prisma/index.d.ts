
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
 * Model LogEntry
 * 
 */
export type LogEntry = $Result.DefaultSelection<Prisma.$LogEntryPayload>
/**
 * Model LogIngestionToken
 * 
 */
export type LogIngestionToken = $Result.DefaultSelection<Prisma.$LogIngestionTokenPayload>
/**
 * Model StatisticsHourly
 * 
 */
export type StatisticsHourly = $Result.DefaultSelection<Prisma.$StatisticsHourlyPayload>
/**
 * Model StatisticsDaily
 * 
 */
export type StatisticsDaily = $Result.DefaultSelection<Prisma.$StatisticsDailyPayload>
/**
 * Model ServiceRisk
 * 
 */
export type ServiceRisk = $Result.DefaultSelection<Prisma.$ServiceRiskPayload>
/**
 * Model RootCauseReport
 * 
 */
export type RootCauseReport = $Result.DefaultSelection<Prisma.$RootCauseReportPayload>
/**
 * Model FailurePrediction
 * 
 */
export type FailurePrediction = $Result.DefaultSelection<Prisma.$FailurePredictionPayload>
/**
 * Model ServiceDailyStats
 * 
 */
export type ServiceDailyStats = $Result.DefaultSelection<Prisma.$ServiceDailyStatsPayload>

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

  /**
   * `prisma.logEntry`: Exposes CRUD operations for the **LogEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogEntries
    * const logEntries = await prisma.logEntry.findMany()
    * ```
    */
  get logEntry(): Prisma.LogEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logIngestionToken`: Exposes CRUD operations for the **LogIngestionToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogIngestionTokens
    * const logIngestionTokens = await prisma.logIngestionToken.findMany()
    * ```
    */
  get logIngestionToken(): Prisma.LogIngestionTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statisticsHourly`: Exposes CRUD operations for the **StatisticsHourly** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatisticsHourlies
    * const statisticsHourlies = await prisma.statisticsHourly.findMany()
    * ```
    */
  get statisticsHourly(): Prisma.StatisticsHourlyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statisticsDaily`: Exposes CRUD operations for the **StatisticsDaily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatisticsDailies
    * const statisticsDailies = await prisma.statisticsDaily.findMany()
    * ```
    */
  get statisticsDaily(): Prisma.StatisticsDailyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRisk`: Exposes CRUD operations for the **ServiceRisk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRisks
    * const serviceRisks = await prisma.serviceRisk.findMany()
    * ```
    */
  get serviceRisk(): Prisma.ServiceRiskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rootCauseReport`: Exposes CRUD operations for the **RootCauseReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RootCauseReports
    * const rootCauseReports = await prisma.rootCauseReport.findMany()
    * ```
    */
  get rootCauseReport(): Prisma.RootCauseReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.failurePrediction`: Exposes CRUD operations for the **FailurePrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FailurePredictions
    * const failurePredictions = await prisma.failurePrediction.findMany()
    * ```
    */
  get failurePrediction(): Prisma.FailurePredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceDailyStats`: Exposes CRUD operations for the **ServiceDailyStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceDailyStats
    * const serviceDailyStats = await prisma.serviceDailyStats.findMany()
    * ```
    */
  get serviceDailyStats(): Prisma.ServiceDailyStatsDelegate<ExtArgs, ClientOptions>;
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
    Metrics: 'Metrics',
    LogEntry: 'LogEntry',
    LogIngestionToken: 'LogIngestionToken',
    StatisticsHourly: 'StatisticsHourly',
    StatisticsDaily: 'StatisticsDaily',
    ServiceRisk: 'ServiceRisk',
    RootCauseReport: 'RootCauseReport',
    FailurePrediction: 'FailurePrediction',
    ServiceDailyStats: 'ServiceDailyStats'
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
      modelProps: "notification" | "serviceEvent" | "serviceEventHistory" | "service" | "serviceDependency" | "metrics" | "logEntry" | "logIngestionToken" | "statisticsHourly" | "statisticsDaily" | "serviceRisk" | "rootCauseReport" | "failurePrediction" | "serviceDailyStats"
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
      LogEntry: {
        payload: Prisma.$LogEntryPayload<ExtArgs>
        fields: Prisma.LogEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          findFirst: {
            args: Prisma.LogEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          findMany: {
            args: Prisma.LogEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>[]
          }
          create: {
            args: Prisma.LogEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          createMany: {
            args: Prisma.LogEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>[]
          }
          delete: {
            args: Prisma.LogEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          update: {
            args: Prisma.LogEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          deleteMany: {
            args: Prisma.LogEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>[]
          }
          upsert: {
            args: Prisma.LogEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogEntryPayload>
          }
          aggregate: {
            args: Prisma.LogEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogEntry>
          }
          groupBy: {
            args: Prisma.LogEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LogEntryCountAggregateOutputType> | number
          }
        }
      }
      LogIngestionToken: {
        payload: Prisma.$LogIngestionTokenPayload<ExtArgs>
        fields: Prisma.LogIngestionTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogIngestionTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogIngestionTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>
          }
          findFirst: {
            args: Prisma.LogIngestionTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogIngestionTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>
          }
          findMany: {
            args: Prisma.LogIngestionTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>[]
          }
          create: {
            args: Prisma.LogIngestionTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>
          }
          createMany: {
            args: Prisma.LogIngestionTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogIngestionTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>[]
          }
          delete: {
            args: Prisma.LogIngestionTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>
          }
          update: {
            args: Prisma.LogIngestionTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>
          }
          deleteMany: {
            args: Prisma.LogIngestionTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogIngestionTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogIngestionTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>[]
          }
          upsert: {
            args: Prisma.LogIngestionTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogIngestionTokenPayload>
          }
          aggregate: {
            args: Prisma.LogIngestionTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogIngestionToken>
          }
          groupBy: {
            args: Prisma.LogIngestionTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogIngestionTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogIngestionTokenCountArgs<ExtArgs>
            result: $Utils.Optional<LogIngestionTokenCountAggregateOutputType> | number
          }
        }
      }
      StatisticsHourly: {
        payload: Prisma.$StatisticsHourlyPayload<ExtArgs>
        fields: Prisma.StatisticsHourlyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticsHourlyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticsHourlyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>
          }
          findFirst: {
            args: Prisma.StatisticsHourlyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticsHourlyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>
          }
          findMany: {
            args: Prisma.StatisticsHourlyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>[]
          }
          create: {
            args: Prisma.StatisticsHourlyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>
          }
          createMany: {
            args: Prisma.StatisticsHourlyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatisticsHourlyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>[]
          }
          delete: {
            args: Prisma.StatisticsHourlyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>
          }
          update: {
            args: Prisma.StatisticsHourlyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>
          }
          deleteMany: {
            args: Prisma.StatisticsHourlyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticsHourlyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatisticsHourlyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>[]
          }
          upsert: {
            args: Prisma.StatisticsHourlyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsHourlyPayload>
          }
          aggregate: {
            args: Prisma.StatisticsHourlyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatisticsHourly>
          }
          groupBy: {
            args: Prisma.StatisticsHourlyGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatisticsHourlyGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticsHourlyCountArgs<ExtArgs>
            result: $Utils.Optional<StatisticsHourlyCountAggregateOutputType> | number
          }
        }
      }
      StatisticsDaily: {
        payload: Prisma.$StatisticsDailyPayload<ExtArgs>
        fields: Prisma.StatisticsDailyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticsDailyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticsDailyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>
          }
          findFirst: {
            args: Prisma.StatisticsDailyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticsDailyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>
          }
          findMany: {
            args: Prisma.StatisticsDailyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>[]
          }
          create: {
            args: Prisma.StatisticsDailyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>
          }
          createMany: {
            args: Prisma.StatisticsDailyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatisticsDailyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>[]
          }
          delete: {
            args: Prisma.StatisticsDailyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>
          }
          update: {
            args: Prisma.StatisticsDailyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>
          }
          deleteMany: {
            args: Prisma.StatisticsDailyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticsDailyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatisticsDailyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>[]
          }
          upsert: {
            args: Prisma.StatisticsDailyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticsDailyPayload>
          }
          aggregate: {
            args: Prisma.StatisticsDailyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatisticsDaily>
          }
          groupBy: {
            args: Prisma.StatisticsDailyGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatisticsDailyGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticsDailyCountArgs<ExtArgs>
            result: $Utils.Optional<StatisticsDailyCountAggregateOutputType> | number
          }
        }
      }
      ServiceRisk: {
        payload: Prisma.$ServiceRiskPayload<ExtArgs>
        fields: Prisma.ServiceRiskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRiskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRiskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>
          }
          findFirst: {
            args: Prisma.ServiceRiskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRiskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>
          }
          findMany: {
            args: Prisma.ServiceRiskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>[]
          }
          create: {
            args: Prisma.ServiceRiskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>
          }
          createMany: {
            args: Prisma.ServiceRiskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceRiskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>[]
          }
          delete: {
            args: Prisma.ServiceRiskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>
          }
          update: {
            args: Prisma.ServiceRiskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>
          }
          deleteMany: {
            args: Prisma.ServiceRiskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRiskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceRiskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>[]
          }
          upsert: {
            args: Prisma.ServiceRiskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRiskPayload>
          }
          aggregate: {
            args: Prisma.ServiceRiskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceRisk>
          }
          groupBy: {
            args: Prisma.ServiceRiskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceRiskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRiskCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceRiskCountAggregateOutputType> | number
          }
        }
      }
      RootCauseReport: {
        payload: Prisma.$RootCauseReportPayload<ExtArgs>
        fields: Prisma.RootCauseReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RootCauseReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RootCauseReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>
          }
          findFirst: {
            args: Prisma.RootCauseReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RootCauseReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>
          }
          findMany: {
            args: Prisma.RootCauseReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>[]
          }
          create: {
            args: Prisma.RootCauseReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>
          }
          createMany: {
            args: Prisma.RootCauseReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RootCauseReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>[]
          }
          delete: {
            args: Prisma.RootCauseReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>
          }
          update: {
            args: Prisma.RootCauseReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>
          }
          deleteMany: {
            args: Prisma.RootCauseReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RootCauseReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RootCauseReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>[]
          }
          upsert: {
            args: Prisma.RootCauseReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootCauseReportPayload>
          }
          aggregate: {
            args: Prisma.RootCauseReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRootCauseReport>
          }
          groupBy: {
            args: Prisma.RootCauseReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<RootCauseReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.RootCauseReportCountArgs<ExtArgs>
            result: $Utils.Optional<RootCauseReportCountAggregateOutputType> | number
          }
        }
      }
      FailurePrediction: {
        payload: Prisma.$FailurePredictionPayload<ExtArgs>
        fields: Prisma.FailurePredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FailurePredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FailurePredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>
          }
          findFirst: {
            args: Prisma.FailurePredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FailurePredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>
          }
          findMany: {
            args: Prisma.FailurePredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>[]
          }
          create: {
            args: Prisma.FailurePredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>
          }
          createMany: {
            args: Prisma.FailurePredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FailurePredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>[]
          }
          delete: {
            args: Prisma.FailurePredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>
          }
          update: {
            args: Prisma.FailurePredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>
          }
          deleteMany: {
            args: Prisma.FailurePredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FailurePredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FailurePredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>[]
          }
          upsert: {
            args: Prisma.FailurePredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailurePredictionPayload>
          }
          aggregate: {
            args: Prisma.FailurePredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailurePrediction>
          }
          groupBy: {
            args: Prisma.FailurePredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FailurePredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FailurePredictionCountArgs<ExtArgs>
            result: $Utils.Optional<FailurePredictionCountAggregateOutputType> | number
          }
        }
      }
      ServiceDailyStats: {
        payload: Prisma.$ServiceDailyStatsPayload<ExtArgs>
        fields: Prisma.ServiceDailyStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceDailyStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceDailyStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>
          }
          findFirst: {
            args: Prisma.ServiceDailyStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceDailyStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>
          }
          findMany: {
            args: Prisma.ServiceDailyStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>[]
          }
          create: {
            args: Prisma.ServiceDailyStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>
          }
          createMany: {
            args: Prisma.ServiceDailyStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceDailyStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>[]
          }
          delete: {
            args: Prisma.ServiceDailyStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>
          }
          update: {
            args: Prisma.ServiceDailyStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>
          }
          deleteMany: {
            args: Prisma.ServiceDailyStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceDailyStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceDailyStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>[]
          }
          upsert: {
            args: Prisma.ServiceDailyStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceDailyStatsPayload>
          }
          aggregate: {
            args: Prisma.ServiceDailyStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceDailyStats>
          }
          groupBy: {
            args: Prisma.ServiceDailyStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceDailyStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceDailyStatsCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceDailyStatsCountAggregateOutputType> | number
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
    logEntry?: LogEntryOmit
    logIngestionToken?: LogIngestionTokenOmit
    statisticsHourly?: StatisticsHourlyOmit
    statisticsDaily?: StatisticsDailyOmit
    serviceRisk?: ServiceRiskOmit
    rootCauseReport?: RootCauseReportOmit
    failurePrediction?: FailurePredictionOmit
    serviceDailyStats?: ServiceDailyStatsOmit
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
   * Model LogEntry
   */

  export type AggregateLogEntry = {
    _count: LogEntryCountAggregateOutputType | null
    _min: LogEntryMinAggregateOutputType | null
    _max: LogEntryMaxAggregateOutputType | null
  }

  export type LogEntryMinAggregateOutputType = {
    id: string | null
    logHash: string | null
    service: string | null
    level: string | null
    message: string | null
    traceId: string | null
    spanId: string | null
    host: string | null
    source: string | null
    pod: string | null
    namespace: string | null
    image: string | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type LogEntryMaxAggregateOutputType = {
    id: string | null
    logHash: string | null
    service: string | null
    level: string | null
    message: string | null
    traceId: string | null
    spanId: string | null
    host: string | null
    source: string | null
    pod: string | null
    namespace: string | null
    image: string | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type LogEntryCountAggregateOutputType = {
    id: number
    logHash: number
    service: number
    level: number
    message: number
    context: number
    traceId: number
    spanId: number
    host: number
    source: number
    pod: number
    namespace: number
    image: number
    timestamp: number
    createdAt: number
    _all: number
  }


  export type LogEntryMinAggregateInputType = {
    id?: true
    logHash?: true
    service?: true
    level?: true
    message?: true
    traceId?: true
    spanId?: true
    host?: true
    source?: true
    pod?: true
    namespace?: true
    image?: true
    timestamp?: true
    createdAt?: true
  }

  export type LogEntryMaxAggregateInputType = {
    id?: true
    logHash?: true
    service?: true
    level?: true
    message?: true
    traceId?: true
    spanId?: true
    host?: true
    source?: true
    pod?: true
    namespace?: true
    image?: true
    timestamp?: true
    createdAt?: true
  }

  export type LogEntryCountAggregateInputType = {
    id?: true
    logHash?: true
    service?: true
    level?: true
    message?: true
    context?: true
    traceId?: true
    spanId?: true
    host?: true
    source?: true
    pod?: true
    namespace?: true
    image?: true
    timestamp?: true
    createdAt?: true
    _all?: true
  }

  export type LogEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogEntry to aggregate.
     */
    where?: LogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogEntries to fetch.
     */
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogEntries
    **/
    _count?: true | LogEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogEntryMaxAggregateInputType
  }

  export type GetLogEntryAggregateType<T extends LogEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLogEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogEntry[P]>
      : GetScalarType<T[P], AggregateLogEntry[P]>
  }




  export type LogEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogEntryWhereInput
    orderBy?: LogEntryOrderByWithAggregationInput | LogEntryOrderByWithAggregationInput[]
    by: LogEntryScalarFieldEnum[] | LogEntryScalarFieldEnum
    having?: LogEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogEntryCountAggregateInputType | true
    _min?: LogEntryMinAggregateInputType
    _max?: LogEntryMaxAggregateInputType
  }

  export type LogEntryGroupByOutputType = {
    id: string
    logHash: string | null
    service: string
    level: string
    message: string
    context: JsonValue | null
    traceId: string | null
    spanId: string | null
    host: string | null
    source: string | null
    pod: string | null
    namespace: string | null
    image: string | null
    timestamp: Date
    createdAt: Date
    _count: LogEntryCountAggregateOutputType | null
    _min: LogEntryMinAggregateOutputType | null
    _max: LogEntryMaxAggregateOutputType | null
  }

  type GetLogEntryGroupByPayload<T extends LogEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LogEntryGroupByOutputType[P]>
        }
      >
    >


  export type LogEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logHash?: boolean
    service?: boolean
    level?: boolean
    message?: boolean
    context?: boolean
    traceId?: boolean
    spanId?: boolean
    host?: boolean
    source?: boolean
    pod?: boolean
    namespace?: boolean
    image?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logEntry"]>

  export type LogEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logHash?: boolean
    service?: boolean
    level?: boolean
    message?: boolean
    context?: boolean
    traceId?: boolean
    spanId?: boolean
    host?: boolean
    source?: boolean
    pod?: boolean
    namespace?: boolean
    image?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logEntry"]>

  export type LogEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logHash?: boolean
    service?: boolean
    level?: boolean
    message?: boolean
    context?: boolean
    traceId?: boolean
    spanId?: boolean
    host?: boolean
    source?: boolean
    pod?: boolean
    namespace?: boolean
    image?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logEntry"]>

  export type LogEntrySelectScalar = {
    id?: boolean
    logHash?: boolean
    service?: boolean
    level?: boolean
    message?: boolean
    context?: boolean
    traceId?: boolean
    spanId?: boolean
    host?: boolean
    source?: boolean
    pod?: boolean
    namespace?: boolean
    image?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }

  export type LogEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logHash" | "service" | "level" | "message" | "context" | "traceId" | "spanId" | "host" | "source" | "pod" | "namespace" | "image" | "timestamp" | "createdAt", ExtArgs["result"]["logEntry"]>

  export type $LogEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logHash: string | null
      service: string
      level: string
      message: string
      context: Prisma.JsonValue | null
      traceId: string | null
      spanId: string | null
      host: string | null
      source: string | null
      pod: string | null
      namespace: string | null
      image: string | null
      timestamp: Date
      createdAt: Date
    }, ExtArgs["result"]["logEntry"]>
    composites: {}
  }

  type LogEntryGetPayload<S extends boolean | null | undefined | LogEntryDefaultArgs> = $Result.GetResult<Prisma.$LogEntryPayload, S>

  type LogEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogEntryCountAggregateInputType | true
    }

  export interface LogEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogEntry'], meta: { name: 'LogEntry' } }
    /**
     * Find zero or one LogEntry that matches the filter.
     * @param {LogEntryFindUniqueArgs} args - Arguments to find a LogEntry
     * @example
     * // Get one LogEntry
     * const logEntry = await prisma.logEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogEntryFindUniqueArgs>(args: SelectSubset<T, LogEntryFindUniqueArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogEntryFindUniqueOrThrowArgs} args - Arguments to find a LogEntry
     * @example
     * // Get one LogEntry
     * const logEntry = await prisma.logEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LogEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryFindFirstArgs} args - Arguments to find a LogEntry
     * @example
     * // Get one LogEntry
     * const logEntry = await prisma.logEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogEntryFindFirstArgs>(args?: SelectSubset<T, LogEntryFindFirstArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryFindFirstOrThrowArgs} args - Arguments to find a LogEntry
     * @example
     * // Get one LogEntry
     * const logEntry = await prisma.logEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LogEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogEntries
     * const logEntries = await prisma.logEntry.findMany()
     * 
     * // Get first 10 LogEntries
     * const logEntries = await prisma.logEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logEntryWithIdOnly = await prisma.logEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogEntryFindManyArgs>(args?: SelectSubset<T, LogEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogEntry.
     * @param {LogEntryCreateArgs} args - Arguments to create a LogEntry.
     * @example
     * // Create one LogEntry
     * const LogEntry = await prisma.logEntry.create({
     *   data: {
     *     // ... data to create a LogEntry
     *   }
     * })
     * 
     */
    create<T extends LogEntryCreateArgs>(args: SelectSubset<T, LogEntryCreateArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogEntries.
     * @param {LogEntryCreateManyArgs} args - Arguments to create many LogEntries.
     * @example
     * // Create many LogEntries
     * const logEntry = await prisma.logEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogEntryCreateManyArgs>(args?: SelectSubset<T, LogEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogEntries and returns the data saved in the database.
     * @param {LogEntryCreateManyAndReturnArgs} args - Arguments to create many LogEntries.
     * @example
     * // Create many LogEntries
     * const logEntry = await prisma.logEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogEntries and only return the `id`
     * const logEntryWithIdOnly = await prisma.logEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LogEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogEntry.
     * @param {LogEntryDeleteArgs} args - Arguments to delete one LogEntry.
     * @example
     * // Delete one LogEntry
     * const LogEntry = await prisma.logEntry.delete({
     *   where: {
     *     // ... filter to delete one LogEntry
     *   }
     * })
     * 
     */
    delete<T extends LogEntryDeleteArgs>(args: SelectSubset<T, LogEntryDeleteArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogEntry.
     * @param {LogEntryUpdateArgs} args - Arguments to update one LogEntry.
     * @example
     * // Update one LogEntry
     * const logEntry = await prisma.logEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogEntryUpdateArgs>(args: SelectSubset<T, LogEntryUpdateArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogEntries.
     * @param {LogEntryDeleteManyArgs} args - Arguments to filter LogEntries to delete.
     * @example
     * // Delete a few LogEntries
     * const { count } = await prisma.logEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogEntryDeleteManyArgs>(args?: SelectSubset<T, LogEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogEntries
     * const logEntry = await prisma.logEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogEntryUpdateManyArgs>(args: SelectSubset<T, LogEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogEntries and returns the data updated in the database.
     * @param {LogEntryUpdateManyAndReturnArgs} args - Arguments to update many LogEntries.
     * @example
     * // Update many LogEntries
     * const logEntry = await prisma.logEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogEntries and only return the `id`
     * const logEntryWithIdOnly = await prisma.logEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, LogEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogEntry.
     * @param {LogEntryUpsertArgs} args - Arguments to update or create a LogEntry.
     * @example
     * // Update or create a LogEntry
     * const logEntry = await prisma.logEntry.upsert({
     *   create: {
     *     // ... data to create a LogEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogEntry we want to update
     *   }
     * })
     */
    upsert<T extends LogEntryUpsertArgs>(args: SelectSubset<T, LogEntryUpsertArgs<ExtArgs>>): Prisma__LogEntryClient<$Result.GetResult<Prisma.$LogEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryCountArgs} args - Arguments to filter LogEntries to count.
     * @example
     * // Count the number of LogEntries
     * const count = await prisma.logEntry.count({
     *   where: {
     *     // ... the filter for the LogEntries we want to count
     *   }
     * })
    **/
    count<T extends LogEntryCountArgs>(
      args?: Subset<T, LogEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogEntryAggregateArgs>(args: Subset<T, LogEntryAggregateArgs>): Prisma.PrismaPromise<GetLogEntryAggregateType<T>>

    /**
     * Group by LogEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogEntryGroupByArgs} args - Group by arguments.
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
      T extends LogEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogEntryGroupByArgs['orderBy'] }
        : { orderBy?: LogEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogEntry model
   */
  readonly fields: LogEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LogEntry model
   */
  interface LogEntryFieldRefs {
    readonly id: FieldRef<"LogEntry", 'String'>
    readonly logHash: FieldRef<"LogEntry", 'String'>
    readonly service: FieldRef<"LogEntry", 'String'>
    readonly level: FieldRef<"LogEntry", 'String'>
    readonly message: FieldRef<"LogEntry", 'String'>
    readonly context: FieldRef<"LogEntry", 'Json'>
    readonly traceId: FieldRef<"LogEntry", 'String'>
    readonly spanId: FieldRef<"LogEntry", 'String'>
    readonly host: FieldRef<"LogEntry", 'String'>
    readonly source: FieldRef<"LogEntry", 'String'>
    readonly pod: FieldRef<"LogEntry", 'String'>
    readonly namespace: FieldRef<"LogEntry", 'String'>
    readonly image: FieldRef<"LogEntry", 'String'>
    readonly timestamp: FieldRef<"LogEntry", 'DateTime'>
    readonly createdAt: FieldRef<"LogEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogEntry findUnique
   */
  export type LogEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Filter, which LogEntry to fetch.
     */
    where: LogEntryWhereUniqueInput
  }

  /**
   * LogEntry findUniqueOrThrow
   */
  export type LogEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Filter, which LogEntry to fetch.
     */
    where: LogEntryWhereUniqueInput
  }

  /**
   * LogEntry findFirst
   */
  export type LogEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Filter, which LogEntry to fetch.
     */
    where?: LogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogEntries to fetch.
     */
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogEntries.
     */
    cursor?: LogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogEntries.
     */
    distinct?: LogEntryScalarFieldEnum | LogEntryScalarFieldEnum[]
  }

  /**
   * LogEntry findFirstOrThrow
   */
  export type LogEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Filter, which LogEntry to fetch.
     */
    where?: LogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogEntries to fetch.
     */
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogEntries.
     */
    cursor?: LogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogEntries.
     */
    distinct?: LogEntryScalarFieldEnum | LogEntryScalarFieldEnum[]
  }

  /**
   * LogEntry findMany
   */
  export type LogEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Filter, which LogEntries to fetch.
     */
    where?: LogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogEntries to fetch.
     */
    orderBy?: LogEntryOrderByWithRelationInput | LogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogEntries.
     */
    cursor?: LogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogEntries.
     */
    skip?: number
    distinct?: LogEntryScalarFieldEnum | LogEntryScalarFieldEnum[]
  }

  /**
   * LogEntry create
   */
  export type LogEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a LogEntry.
     */
    data: XOR<LogEntryCreateInput, LogEntryUncheckedCreateInput>
  }

  /**
   * LogEntry createMany
   */
  export type LogEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogEntries.
     */
    data: LogEntryCreateManyInput | LogEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogEntry createManyAndReturn
   */
  export type LogEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * The data used to create many LogEntries.
     */
    data: LogEntryCreateManyInput | LogEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogEntry update
   */
  export type LogEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a LogEntry.
     */
    data: XOR<LogEntryUpdateInput, LogEntryUncheckedUpdateInput>
    /**
     * Choose, which LogEntry to update.
     */
    where: LogEntryWhereUniqueInput
  }

  /**
   * LogEntry updateMany
   */
  export type LogEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogEntries.
     */
    data: XOR<LogEntryUpdateManyMutationInput, LogEntryUncheckedUpdateManyInput>
    /**
     * Filter which LogEntries to update
     */
    where?: LogEntryWhereInput
    /**
     * Limit how many LogEntries to update.
     */
    limit?: number
  }

  /**
   * LogEntry updateManyAndReturn
   */
  export type LogEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * The data used to update LogEntries.
     */
    data: XOR<LogEntryUpdateManyMutationInput, LogEntryUncheckedUpdateManyInput>
    /**
     * Filter which LogEntries to update
     */
    where?: LogEntryWhereInput
    /**
     * Limit how many LogEntries to update.
     */
    limit?: number
  }

  /**
   * LogEntry upsert
   */
  export type LogEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the LogEntry to update in case it exists.
     */
    where: LogEntryWhereUniqueInput
    /**
     * In case the LogEntry found by the `where` argument doesn't exist, create a new LogEntry with this data.
     */
    create: XOR<LogEntryCreateInput, LogEntryUncheckedCreateInput>
    /**
     * In case the LogEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogEntryUpdateInput, LogEntryUncheckedUpdateInput>
  }

  /**
   * LogEntry delete
   */
  export type LogEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
    /**
     * Filter which LogEntry to delete.
     */
    where: LogEntryWhereUniqueInput
  }

  /**
   * LogEntry deleteMany
   */
  export type LogEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogEntries to delete
     */
    where?: LogEntryWhereInput
    /**
     * Limit how many LogEntries to delete.
     */
    limit?: number
  }

  /**
   * LogEntry without action
   */
  export type LogEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogEntry
     */
    select?: LogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogEntry
     */
    omit?: LogEntryOmit<ExtArgs> | null
  }


  /**
   * Model LogIngestionToken
   */

  export type AggregateLogIngestionToken = {
    _count: LogIngestionTokenCountAggregateOutputType | null
    _min: LogIngestionTokenMinAggregateOutputType | null
    _max: LogIngestionTokenMaxAggregateOutputType | null
  }

  export type LogIngestionTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    service: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type LogIngestionTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    service: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type LogIngestionTokenCountAggregateOutputType = {
    id: number
    token: number
    service: number
    active: number
    createdAt: number
    _all: number
  }


  export type LogIngestionTokenMinAggregateInputType = {
    id?: true
    token?: true
    service?: true
    active?: true
    createdAt?: true
  }

  export type LogIngestionTokenMaxAggregateInputType = {
    id?: true
    token?: true
    service?: true
    active?: true
    createdAt?: true
  }

  export type LogIngestionTokenCountAggregateInputType = {
    id?: true
    token?: true
    service?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type LogIngestionTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogIngestionToken to aggregate.
     */
    where?: LogIngestionTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogIngestionTokens to fetch.
     */
    orderBy?: LogIngestionTokenOrderByWithRelationInput | LogIngestionTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogIngestionTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogIngestionTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogIngestionTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogIngestionTokens
    **/
    _count?: true | LogIngestionTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogIngestionTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogIngestionTokenMaxAggregateInputType
  }

  export type GetLogIngestionTokenAggregateType<T extends LogIngestionTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateLogIngestionToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogIngestionToken[P]>
      : GetScalarType<T[P], AggregateLogIngestionToken[P]>
  }




  export type LogIngestionTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogIngestionTokenWhereInput
    orderBy?: LogIngestionTokenOrderByWithAggregationInput | LogIngestionTokenOrderByWithAggregationInput[]
    by: LogIngestionTokenScalarFieldEnum[] | LogIngestionTokenScalarFieldEnum
    having?: LogIngestionTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogIngestionTokenCountAggregateInputType | true
    _min?: LogIngestionTokenMinAggregateInputType
    _max?: LogIngestionTokenMaxAggregateInputType
  }

  export type LogIngestionTokenGroupByOutputType = {
    id: string
    token: string
    service: string
    active: boolean
    createdAt: Date
    _count: LogIngestionTokenCountAggregateOutputType | null
    _min: LogIngestionTokenMinAggregateOutputType | null
    _max: LogIngestionTokenMaxAggregateOutputType | null
  }

  type GetLogIngestionTokenGroupByPayload<T extends LogIngestionTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogIngestionTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogIngestionTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogIngestionTokenGroupByOutputType[P]>
            : GetScalarType<T[P], LogIngestionTokenGroupByOutputType[P]>
        }
      >
    >


  export type LogIngestionTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    service?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logIngestionToken"]>

  export type LogIngestionTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    service?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logIngestionToken"]>

  export type LogIngestionTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    service?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["logIngestionToken"]>

  export type LogIngestionTokenSelectScalar = {
    id?: boolean
    token?: boolean
    service?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type LogIngestionTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "service" | "active" | "createdAt", ExtArgs["result"]["logIngestionToken"]>

  export type $LogIngestionTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogIngestionToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      service: string
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["logIngestionToken"]>
    composites: {}
  }

  type LogIngestionTokenGetPayload<S extends boolean | null | undefined | LogIngestionTokenDefaultArgs> = $Result.GetResult<Prisma.$LogIngestionTokenPayload, S>

  type LogIngestionTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogIngestionTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogIngestionTokenCountAggregateInputType | true
    }

  export interface LogIngestionTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogIngestionToken'], meta: { name: 'LogIngestionToken' } }
    /**
     * Find zero or one LogIngestionToken that matches the filter.
     * @param {LogIngestionTokenFindUniqueArgs} args - Arguments to find a LogIngestionToken
     * @example
     * // Get one LogIngestionToken
     * const logIngestionToken = await prisma.logIngestionToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogIngestionTokenFindUniqueArgs>(args: SelectSubset<T, LogIngestionTokenFindUniqueArgs<ExtArgs>>): Prisma__LogIngestionTokenClient<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogIngestionToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogIngestionTokenFindUniqueOrThrowArgs} args - Arguments to find a LogIngestionToken
     * @example
     * // Get one LogIngestionToken
     * const logIngestionToken = await prisma.logIngestionToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogIngestionTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, LogIngestionTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogIngestionTokenClient<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogIngestionToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogIngestionTokenFindFirstArgs} args - Arguments to find a LogIngestionToken
     * @example
     * // Get one LogIngestionToken
     * const logIngestionToken = await prisma.logIngestionToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogIngestionTokenFindFirstArgs>(args?: SelectSubset<T, LogIngestionTokenFindFirstArgs<ExtArgs>>): Prisma__LogIngestionTokenClient<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogIngestionToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogIngestionTokenFindFirstOrThrowArgs} args - Arguments to find a LogIngestionToken
     * @example
     * // Get one LogIngestionToken
     * const logIngestionToken = await prisma.logIngestionToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogIngestionTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, LogIngestionTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogIngestionTokenClient<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogIngestionTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogIngestionTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogIngestionTokens
     * const logIngestionTokens = await prisma.logIngestionToken.findMany()
     * 
     * // Get first 10 LogIngestionTokens
     * const logIngestionTokens = await prisma.logIngestionToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logIngestionTokenWithIdOnly = await prisma.logIngestionToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogIngestionTokenFindManyArgs>(args?: SelectSubset<T, LogIngestionTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogIngestionToken.
     * @param {LogIngestionTokenCreateArgs} args - Arguments to create a LogIngestionToken.
     * @example
     * // Create one LogIngestionToken
     * const LogIngestionToken = await prisma.logIngestionToken.create({
     *   data: {
     *     // ... data to create a LogIngestionToken
     *   }
     * })
     * 
     */
    create<T extends LogIngestionTokenCreateArgs>(args: SelectSubset<T, LogIngestionTokenCreateArgs<ExtArgs>>): Prisma__LogIngestionTokenClient<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogIngestionTokens.
     * @param {LogIngestionTokenCreateManyArgs} args - Arguments to create many LogIngestionTokens.
     * @example
     * // Create many LogIngestionTokens
     * const logIngestionToken = await prisma.logIngestionToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogIngestionTokenCreateManyArgs>(args?: SelectSubset<T, LogIngestionTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogIngestionTokens and returns the data saved in the database.
     * @param {LogIngestionTokenCreateManyAndReturnArgs} args - Arguments to create many LogIngestionTokens.
     * @example
     * // Create many LogIngestionTokens
     * const logIngestionToken = await prisma.logIngestionToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogIngestionTokens and only return the `id`
     * const logIngestionTokenWithIdOnly = await prisma.logIngestionToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogIngestionTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, LogIngestionTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogIngestionToken.
     * @param {LogIngestionTokenDeleteArgs} args - Arguments to delete one LogIngestionToken.
     * @example
     * // Delete one LogIngestionToken
     * const LogIngestionToken = await prisma.logIngestionToken.delete({
     *   where: {
     *     // ... filter to delete one LogIngestionToken
     *   }
     * })
     * 
     */
    delete<T extends LogIngestionTokenDeleteArgs>(args: SelectSubset<T, LogIngestionTokenDeleteArgs<ExtArgs>>): Prisma__LogIngestionTokenClient<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogIngestionToken.
     * @param {LogIngestionTokenUpdateArgs} args - Arguments to update one LogIngestionToken.
     * @example
     * // Update one LogIngestionToken
     * const logIngestionToken = await prisma.logIngestionToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogIngestionTokenUpdateArgs>(args: SelectSubset<T, LogIngestionTokenUpdateArgs<ExtArgs>>): Prisma__LogIngestionTokenClient<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogIngestionTokens.
     * @param {LogIngestionTokenDeleteManyArgs} args - Arguments to filter LogIngestionTokens to delete.
     * @example
     * // Delete a few LogIngestionTokens
     * const { count } = await prisma.logIngestionToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogIngestionTokenDeleteManyArgs>(args?: SelectSubset<T, LogIngestionTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogIngestionTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogIngestionTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogIngestionTokens
     * const logIngestionToken = await prisma.logIngestionToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogIngestionTokenUpdateManyArgs>(args: SelectSubset<T, LogIngestionTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogIngestionTokens and returns the data updated in the database.
     * @param {LogIngestionTokenUpdateManyAndReturnArgs} args - Arguments to update many LogIngestionTokens.
     * @example
     * // Update many LogIngestionTokens
     * const logIngestionToken = await prisma.logIngestionToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogIngestionTokens and only return the `id`
     * const logIngestionTokenWithIdOnly = await prisma.logIngestionToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogIngestionTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, LogIngestionTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogIngestionToken.
     * @param {LogIngestionTokenUpsertArgs} args - Arguments to update or create a LogIngestionToken.
     * @example
     * // Update or create a LogIngestionToken
     * const logIngestionToken = await prisma.logIngestionToken.upsert({
     *   create: {
     *     // ... data to create a LogIngestionToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogIngestionToken we want to update
     *   }
     * })
     */
    upsert<T extends LogIngestionTokenUpsertArgs>(args: SelectSubset<T, LogIngestionTokenUpsertArgs<ExtArgs>>): Prisma__LogIngestionTokenClient<$Result.GetResult<Prisma.$LogIngestionTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogIngestionTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogIngestionTokenCountArgs} args - Arguments to filter LogIngestionTokens to count.
     * @example
     * // Count the number of LogIngestionTokens
     * const count = await prisma.logIngestionToken.count({
     *   where: {
     *     // ... the filter for the LogIngestionTokens we want to count
     *   }
     * })
    **/
    count<T extends LogIngestionTokenCountArgs>(
      args?: Subset<T, LogIngestionTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogIngestionTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogIngestionToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogIngestionTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogIngestionTokenAggregateArgs>(args: Subset<T, LogIngestionTokenAggregateArgs>): Prisma.PrismaPromise<GetLogIngestionTokenAggregateType<T>>

    /**
     * Group by LogIngestionToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogIngestionTokenGroupByArgs} args - Group by arguments.
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
      T extends LogIngestionTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogIngestionTokenGroupByArgs['orderBy'] }
        : { orderBy?: LogIngestionTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogIngestionTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogIngestionTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogIngestionToken model
   */
  readonly fields: LogIngestionTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogIngestionToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogIngestionTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LogIngestionToken model
   */
  interface LogIngestionTokenFieldRefs {
    readonly id: FieldRef<"LogIngestionToken", 'String'>
    readonly token: FieldRef<"LogIngestionToken", 'String'>
    readonly service: FieldRef<"LogIngestionToken", 'String'>
    readonly active: FieldRef<"LogIngestionToken", 'Boolean'>
    readonly createdAt: FieldRef<"LogIngestionToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogIngestionToken findUnique
   */
  export type LogIngestionTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * Filter, which LogIngestionToken to fetch.
     */
    where: LogIngestionTokenWhereUniqueInput
  }

  /**
   * LogIngestionToken findUniqueOrThrow
   */
  export type LogIngestionTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * Filter, which LogIngestionToken to fetch.
     */
    where: LogIngestionTokenWhereUniqueInput
  }

  /**
   * LogIngestionToken findFirst
   */
  export type LogIngestionTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * Filter, which LogIngestionToken to fetch.
     */
    where?: LogIngestionTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogIngestionTokens to fetch.
     */
    orderBy?: LogIngestionTokenOrderByWithRelationInput | LogIngestionTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogIngestionTokens.
     */
    cursor?: LogIngestionTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogIngestionTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogIngestionTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogIngestionTokens.
     */
    distinct?: LogIngestionTokenScalarFieldEnum | LogIngestionTokenScalarFieldEnum[]
  }

  /**
   * LogIngestionToken findFirstOrThrow
   */
  export type LogIngestionTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * Filter, which LogIngestionToken to fetch.
     */
    where?: LogIngestionTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogIngestionTokens to fetch.
     */
    orderBy?: LogIngestionTokenOrderByWithRelationInput | LogIngestionTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogIngestionTokens.
     */
    cursor?: LogIngestionTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogIngestionTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogIngestionTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogIngestionTokens.
     */
    distinct?: LogIngestionTokenScalarFieldEnum | LogIngestionTokenScalarFieldEnum[]
  }

  /**
   * LogIngestionToken findMany
   */
  export type LogIngestionTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * Filter, which LogIngestionTokens to fetch.
     */
    where?: LogIngestionTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogIngestionTokens to fetch.
     */
    orderBy?: LogIngestionTokenOrderByWithRelationInput | LogIngestionTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogIngestionTokens.
     */
    cursor?: LogIngestionTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogIngestionTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogIngestionTokens.
     */
    skip?: number
    distinct?: LogIngestionTokenScalarFieldEnum | LogIngestionTokenScalarFieldEnum[]
  }

  /**
   * LogIngestionToken create
   */
  export type LogIngestionTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a LogIngestionToken.
     */
    data: XOR<LogIngestionTokenCreateInput, LogIngestionTokenUncheckedCreateInput>
  }

  /**
   * LogIngestionToken createMany
   */
  export type LogIngestionTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogIngestionTokens.
     */
    data: LogIngestionTokenCreateManyInput | LogIngestionTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogIngestionToken createManyAndReturn
   */
  export type LogIngestionTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * The data used to create many LogIngestionTokens.
     */
    data: LogIngestionTokenCreateManyInput | LogIngestionTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogIngestionToken update
   */
  export type LogIngestionTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a LogIngestionToken.
     */
    data: XOR<LogIngestionTokenUpdateInput, LogIngestionTokenUncheckedUpdateInput>
    /**
     * Choose, which LogIngestionToken to update.
     */
    where: LogIngestionTokenWhereUniqueInput
  }

  /**
   * LogIngestionToken updateMany
   */
  export type LogIngestionTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogIngestionTokens.
     */
    data: XOR<LogIngestionTokenUpdateManyMutationInput, LogIngestionTokenUncheckedUpdateManyInput>
    /**
     * Filter which LogIngestionTokens to update
     */
    where?: LogIngestionTokenWhereInput
    /**
     * Limit how many LogIngestionTokens to update.
     */
    limit?: number
  }

  /**
   * LogIngestionToken updateManyAndReturn
   */
  export type LogIngestionTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * The data used to update LogIngestionTokens.
     */
    data: XOR<LogIngestionTokenUpdateManyMutationInput, LogIngestionTokenUncheckedUpdateManyInput>
    /**
     * Filter which LogIngestionTokens to update
     */
    where?: LogIngestionTokenWhereInput
    /**
     * Limit how many LogIngestionTokens to update.
     */
    limit?: number
  }

  /**
   * LogIngestionToken upsert
   */
  export type LogIngestionTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the LogIngestionToken to update in case it exists.
     */
    where: LogIngestionTokenWhereUniqueInput
    /**
     * In case the LogIngestionToken found by the `where` argument doesn't exist, create a new LogIngestionToken with this data.
     */
    create: XOR<LogIngestionTokenCreateInput, LogIngestionTokenUncheckedCreateInput>
    /**
     * In case the LogIngestionToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogIngestionTokenUpdateInput, LogIngestionTokenUncheckedUpdateInput>
  }

  /**
   * LogIngestionToken delete
   */
  export type LogIngestionTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
    /**
     * Filter which LogIngestionToken to delete.
     */
    where: LogIngestionTokenWhereUniqueInput
  }

  /**
   * LogIngestionToken deleteMany
   */
  export type LogIngestionTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogIngestionTokens to delete
     */
    where?: LogIngestionTokenWhereInput
    /**
     * Limit how many LogIngestionTokens to delete.
     */
    limit?: number
  }

  /**
   * LogIngestionToken without action
   */
  export type LogIngestionTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogIngestionToken
     */
    select?: LogIngestionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogIngestionToken
     */
    omit?: LogIngestionTokenOmit<ExtArgs> | null
  }


  /**
   * Model StatisticsHourly
   */

  export type AggregateStatisticsHourly = {
    _count: StatisticsHourlyCountAggregateOutputType | null
    _avg: StatisticsHourlyAvgAggregateOutputType | null
    _sum: StatisticsHourlySumAggregateOutputType | null
    _min: StatisticsHourlyMinAggregateOutputType | null
    _max: StatisticsHourlyMaxAggregateOutputType | null
  }

  export type StatisticsHourlyAvgAggregateOutputType = {
    avgCpu: number | null
    avgMemory: number | null
    peakCpu: number | null
    peakMemory: number | null
    logsErrors: number | null
    logsWarnings: number | null
    logsInfo: number | null
    failures: number | null
    recoveries: number | null
    crashLoops: number | null
    anomalies: number | null
  }

  export type StatisticsHourlySumAggregateOutputType = {
    avgCpu: number | null
    avgMemory: number | null
    peakCpu: number | null
    peakMemory: number | null
    logsErrors: number | null
    logsWarnings: number | null
    logsInfo: number | null
    failures: number | null
    recoveries: number | null
    crashLoops: number | null
    anomalies: number | null
  }

  export type StatisticsHourlyMinAggregateOutputType = {
    id: string | null
    service: string | null
    hour: Date | null
    avgCpu: number | null
    avgMemory: number | null
    peakCpu: number | null
    peakMemory: number | null
    logsErrors: number | null
    logsWarnings: number | null
    logsInfo: number | null
    failures: number | null
    recoveries: number | null
    crashLoops: number | null
    anomalies: number | null
    createdAt: Date | null
  }

  export type StatisticsHourlyMaxAggregateOutputType = {
    id: string | null
    service: string | null
    hour: Date | null
    avgCpu: number | null
    avgMemory: number | null
    peakCpu: number | null
    peakMemory: number | null
    logsErrors: number | null
    logsWarnings: number | null
    logsInfo: number | null
    failures: number | null
    recoveries: number | null
    crashLoops: number | null
    anomalies: number | null
    createdAt: Date | null
  }

  export type StatisticsHourlyCountAggregateOutputType = {
    id: number
    service: number
    hour: number
    avgCpu: number
    avgMemory: number
    peakCpu: number
    peakMemory: number
    logsErrors: number
    logsWarnings: number
    logsInfo: number
    failures: number
    recoveries: number
    crashLoops: number
    anomalies: number
    createdAt: number
    _all: number
  }


  export type StatisticsHourlyAvgAggregateInputType = {
    avgCpu?: true
    avgMemory?: true
    peakCpu?: true
    peakMemory?: true
    logsErrors?: true
    logsWarnings?: true
    logsInfo?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    anomalies?: true
  }

  export type StatisticsHourlySumAggregateInputType = {
    avgCpu?: true
    avgMemory?: true
    peakCpu?: true
    peakMemory?: true
    logsErrors?: true
    logsWarnings?: true
    logsInfo?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    anomalies?: true
  }

  export type StatisticsHourlyMinAggregateInputType = {
    id?: true
    service?: true
    hour?: true
    avgCpu?: true
    avgMemory?: true
    peakCpu?: true
    peakMemory?: true
    logsErrors?: true
    logsWarnings?: true
    logsInfo?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    anomalies?: true
    createdAt?: true
  }

  export type StatisticsHourlyMaxAggregateInputType = {
    id?: true
    service?: true
    hour?: true
    avgCpu?: true
    avgMemory?: true
    peakCpu?: true
    peakMemory?: true
    logsErrors?: true
    logsWarnings?: true
    logsInfo?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    anomalies?: true
    createdAt?: true
  }

  export type StatisticsHourlyCountAggregateInputType = {
    id?: true
    service?: true
    hour?: true
    avgCpu?: true
    avgMemory?: true
    peakCpu?: true
    peakMemory?: true
    logsErrors?: true
    logsWarnings?: true
    logsInfo?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    anomalies?: true
    createdAt?: true
    _all?: true
  }

  export type StatisticsHourlyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatisticsHourly to aggregate.
     */
    where?: StatisticsHourlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticsHourlies to fetch.
     */
    orderBy?: StatisticsHourlyOrderByWithRelationInput | StatisticsHourlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticsHourlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticsHourlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticsHourlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatisticsHourlies
    **/
    _count?: true | StatisticsHourlyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatisticsHourlyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatisticsHourlySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticsHourlyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticsHourlyMaxAggregateInputType
  }

  export type GetStatisticsHourlyAggregateType<T extends StatisticsHourlyAggregateArgs> = {
        [P in keyof T & keyof AggregateStatisticsHourly]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatisticsHourly[P]>
      : GetScalarType<T[P], AggregateStatisticsHourly[P]>
  }




  export type StatisticsHourlyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticsHourlyWhereInput
    orderBy?: StatisticsHourlyOrderByWithAggregationInput | StatisticsHourlyOrderByWithAggregationInput[]
    by: StatisticsHourlyScalarFieldEnum[] | StatisticsHourlyScalarFieldEnum
    having?: StatisticsHourlyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticsHourlyCountAggregateInputType | true
    _avg?: StatisticsHourlyAvgAggregateInputType
    _sum?: StatisticsHourlySumAggregateInputType
    _min?: StatisticsHourlyMinAggregateInputType
    _max?: StatisticsHourlyMaxAggregateInputType
  }

  export type StatisticsHourlyGroupByOutputType = {
    id: string
    service: string
    hour: Date
    avgCpu: number
    avgMemory: number
    peakCpu: number
    peakMemory: number
    logsErrors: number
    logsWarnings: number
    logsInfo: number
    failures: number
    recoveries: number
    crashLoops: number
    anomalies: number
    createdAt: Date
    _count: StatisticsHourlyCountAggregateOutputType | null
    _avg: StatisticsHourlyAvgAggregateOutputType | null
    _sum: StatisticsHourlySumAggregateOutputType | null
    _min: StatisticsHourlyMinAggregateOutputType | null
    _max: StatisticsHourlyMaxAggregateOutputType | null
  }

  type GetStatisticsHourlyGroupByPayload<T extends StatisticsHourlyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticsHourlyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticsHourlyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticsHourlyGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticsHourlyGroupByOutputType[P]>
        }
      >
    >


  export type StatisticsHourlySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    hour?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    peakCpu?: boolean
    peakMemory?: boolean
    logsErrors?: boolean
    logsWarnings?: boolean
    logsInfo?: boolean
    failures?: boolean
    recoveries?: boolean
    crashLoops?: boolean
    anomalies?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["statisticsHourly"]>

  export type StatisticsHourlySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    hour?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    peakCpu?: boolean
    peakMemory?: boolean
    logsErrors?: boolean
    logsWarnings?: boolean
    logsInfo?: boolean
    failures?: boolean
    recoveries?: boolean
    crashLoops?: boolean
    anomalies?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["statisticsHourly"]>

  export type StatisticsHourlySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    hour?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    peakCpu?: boolean
    peakMemory?: boolean
    logsErrors?: boolean
    logsWarnings?: boolean
    logsInfo?: boolean
    failures?: boolean
    recoveries?: boolean
    crashLoops?: boolean
    anomalies?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["statisticsHourly"]>

  export type StatisticsHourlySelectScalar = {
    id?: boolean
    service?: boolean
    hour?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    peakCpu?: boolean
    peakMemory?: boolean
    logsErrors?: boolean
    logsWarnings?: boolean
    logsInfo?: boolean
    failures?: boolean
    recoveries?: boolean
    crashLoops?: boolean
    anomalies?: boolean
    createdAt?: boolean
  }

  export type StatisticsHourlyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "hour" | "avgCpu" | "avgMemory" | "peakCpu" | "peakMemory" | "logsErrors" | "logsWarnings" | "logsInfo" | "failures" | "recoveries" | "crashLoops" | "anomalies" | "createdAt", ExtArgs["result"]["statisticsHourly"]>

  export type $StatisticsHourlyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatisticsHourly"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      hour: Date
      avgCpu: number
      avgMemory: number
      peakCpu: number
      peakMemory: number
      logsErrors: number
      logsWarnings: number
      logsInfo: number
      failures: number
      recoveries: number
      crashLoops: number
      anomalies: number
      createdAt: Date
    }, ExtArgs["result"]["statisticsHourly"]>
    composites: {}
  }

  type StatisticsHourlyGetPayload<S extends boolean | null | undefined | StatisticsHourlyDefaultArgs> = $Result.GetResult<Prisma.$StatisticsHourlyPayload, S>

  type StatisticsHourlyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatisticsHourlyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatisticsHourlyCountAggregateInputType | true
    }

  export interface StatisticsHourlyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatisticsHourly'], meta: { name: 'StatisticsHourly' } }
    /**
     * Find zero or one StatisticsHourly that matches the filter.
     * @param {StatisticsHourlyFindUniqueArgs} args - Arguments to find a StatisticsHourly
     * @example
     * // Get one StatisticsHourly
     * const statisticsHourly = await prisma.statisticsHourly.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatisticsHourlyFindUniqueArgs>(args: SelectSubset<T, StatisticsHourlyFindUniqueArgs<ExtArgs>>): Prisma__StatisticsHourlyClient<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatisticsHourly that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatisticsHourlyFindUniqueOrThrowArgs} args - Arguments to find a StatisticsHourly
     * @example
     * // Get one StatisticsHourly
     * const statisticsHourly = await prisma.statisticsHourly.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatisticsHourlyFindUniqueOrThrowArgs>(args: SelectSubset<T, StatisticsHourlyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatisticsHourlyClient<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatisticsHourly that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsHourlyFindFirstArgs} args - Arguments to find a StatisticsHourly
     * @example
     * // Get one StatisticsHourly
     * const statisticsHourly = await prisma.statisticsHourly.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatisticsHourlyFindFirstArgs>(args?: SelectSubset<T, StatisticsHourlyFindFirstArgs<ExtArgs>>): Prisma__StatisticsHourlyClient<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatisticsHourly that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsHourlyFindFirstOrThrowArgs} args - Arguments to find a StatisticsHourly
     * @example
     * // Get one StatisticsHourly
     * const statisticsHourly = await prisma.statisticsHourly.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatisticsHourlyFindFirstOrThrowArgs>(args?: SelectSubset<T, StatisticsHourlyFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatisticsHourlyClient<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatisticsHourlies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsHourlyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatisticsHourlies
     * const statisticsHourlies = await prisma.statisticsHourly.findMany()
     * 
     * // Get first 10 StatisticsHourlies
     * const statisticsHourlies = await prisma.statisticsHourly.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticsHourlyWithIdOnly = await prisma.statisticsHourly.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatisticsHourlyFindManyArgs>(args?: SelectSubset<T, StatisticsHourlyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatisticsHourly.
     * @param {StatisticsHourlyCreateArgs} args - Arguments to create a StatisticsHourly.
     * @example
     * // Create one StatisticsHourly
     * const StatisticsHourly = await prisma.statisticsHourly.create({
     *   data: {
     *     // ... data to create a StatisticsHourly
     *   }
     * })
     * 
     */
    create<T extends StatisticsHourlyCreateArgs>(args: SelectSubset<T, StatisticsHourlyCreateArgs<ExtArgs>>): Prisma__StatisticsHourlyClient<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatisticsHourlies.
     * @param {StatisticsHourlyCreateManyArgs} args - Arguments to create many StatisticsHourlies.
     * @example
     * // Create many StatisticsHourlies
     * const statisticsHourly = await prisma.statisticsHourly.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatisticsHourlyCreateManyArgs>(args?: SelectSubset<T, StatisticsHourlyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatisticsHourlies and returns the data saved in the database.
     * @param {StatisticsHourlyCreateManyAndReturnArgs} args - Arguments to create many StatisticsHourlies.
     * @example
     * // Create many StatisticsHourlies
     * const statisticsHourly = await prisma.statisticsHourly.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatisticsHourlies and only return the `id`
     * const statisticsHourlyWithIdOnly = await prisma.statisticsHourly.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatisticsHourlyCreateManyAndReturnArgs>(args?: SelectSubset<T, StatisticsHourlyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatisticsHourly.
     * @param {StatisticsHourlyDeleteArgs} args - Arguments to delete one StatisticsHourly.
     * @example
     * // Delete one StatisticsHourly
     * const StatisticsHourly = await prisma.statisticsHourly.delete({
     *   where: {
     *     // ... filter to delete one StatisticsHourly
     *   }
     * })
     * 
     */
    delete<T extends StatisticsHourlyDeleteArgs>(args: SelectSubset<T, StatisticsHourlyDeleteArgs<ExtArgs>>): Prisma__StatisticsHourlyClient<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatisticsHourly.
     * @param {StatisticsHourlyUpdateArgs} args - Arguments to update one StatisticsHourly.
     * @example
     * // Update one StatisticsHourly
     * const statisticsHourly = await prisma.statisticsHourly.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatisticsHourlyUpdateArgs>(args: SelectSubset<T, StatisticsHourlyUpdateArgs<ExtArgs>>): Prisma__StatisticsHourlyClient<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatisticsHourlies.
     * @param {StatisticsHourlyDeleteManyArgs} args - Arguments to filter StatisticsHourlies to delete.
     * @example
     * // Delete a few StatisticsHourlies
     * const { count } = await prisma.statisticsHourly.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatisticsHourlyDeleteManyArgs>(args?: SelectSubset<T, StatisticsHourlyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatisticsHourlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsHourlyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatisticsHourlies
     * const statisticsHourly = await prisma.statisticsHourly.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatisticsHourlyUpdateManyArgs>(args: SelectSubset<T, StatisticsHourlyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatisticsHourlies and returns the data updated in the database.
     * @param {StatisticsHourlyUpdateManyAndReturnArgs} args - Arguments to update many StatisticsHourlies.
     * @example
     * // Update many StatisticsHourlies
     * const statisticsHourly = await prisma.statisticsHourly.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatisticsHourlies and only return the `id`
     * const statisticsHourlyWithIdOnly = await prisma.statisticsHourly.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatisticsHourlyUpdateManyAndReturnArgs>(args: SelectSubset<T, StatisticsHourlyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatisticsHourly.
     * @param {StatisticsHourlyUpsertArgs} args - Arguments to update or create a StatisticsHourly.
     * @example
     * // Update or create a StatisticsHourly
     * const statisticsHourly = await prisma.statisticsHourly.upsert({
     *   create: {
     *     // ... data to create a StatisticsHourly
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatisticsHourly we want to update
     *   }
     * })
     */
    upsert<T extends StatisticsHourlyUpsertArgs>(args: SelectSubset<T, StatisticsHourlyUpsertArgs<ExtArgs>>): Prisma__StatisticsHourlyClient<$Result.GetResult<Prisma.$StatisticsHourlyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatisticsHourlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsHourlyCountArgs} args - Arguments to filter StatisticsHourlies to count.
     * @example
     * // Count the number of StatisticsHourlies
     * const count = await prisma.statisticsHourly.count({
     *   where: {
     *     // ... the filter for the StatisticsHourlies we want to count
     *   }
     * })
    **/
    count<T extends StatisticsHourlyCountArgs>(
      args?: Subset<T, StatisticsHourlyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticsHourlyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatisticsHourly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsHourlyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatisticsHourlyAggregateArgs>(args: Subset<T, StatisticsHourlyAggregateArgs>): Prisma.PrismaPromise<GetStatisticsHourlyAggregateType<T>>

    /**
     * Group by StatisticsHourly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsHourlyGroupByArgs} args - Group by arguments.
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
      T extends StatisticsHourlyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticsHourlyGroupByArgs['orderBy'] }
        : { orderBy?: StatisticsHourlyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatisticsHourlyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticsHourlyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatisticsHourly model
   */
  readonly fields: StatisticsHourlyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatisticsHourly.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticsHourlyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StatisticsHourly model
   */
  interface StatisticsHourlyFieldRefs {
    readonly id: FieldRef<"StatisticsHourly", 'String'>
    readonly service: FieldRef<"StatisticsHourly", 'String'>
    readonly hour: FieldRef<"StatisticsHourly", 'DateTime'>
    readonly avgCpu: FieldRef<"StatisticsHourly", 'Float'>
    readonly avgMemory: FieldRef<"StatisticsHourly", 'Float'>
    readonly peakCpu: FieldRef<"StatisticsHourly", 'Float'>
    readonly peakMemory: FieldRef<"StatisticsHourly", 'Float'>
    readonly logsErrors: FieldRef<"StatisticsHourly", 'Int'>
    readonly logsWarnings: FieldRef<"StatisticsHourly", 'Int'>
    readonly logsInfo: FieldRef<"StatisticsHourly", 'Int'>
    readonly failures: FieldRef<"StatisticsHourly", 'Int'>
    readonly recoveries: FieldRef<"StatisticsHourly", 'Int'>
    readonly crashLoops: FieldRef<"StatisticsHourly", 'Int'>
    readonly anomalies: FieldRef<"StatisticsHourly", 'Int'>
    readonly createdAt: FieldRef<"StatisticsHourly", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatisticsHourly findUnique
   */
  export type StatisticsHourlyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsHourly to fetch.
     */
    where: StatisticsHourlyWhereUniqueInput
  }

  /**
   * StatisticsHourly findUniqueOrThrow
   */
  export type StatisticsHourlyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsHourly to fetch.
     */
    where: StatisticsHourlyWhereUniqueInput
  }

  /**
   * StatisticsHourly findFirst
   */
  export type StatisticsHourlyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsHourly to fetch.
     */
    where?: StatisticsHourlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticsHourlies to fetch.
     */
    orderBy?: StatisticsHourlyOrderByWithRelationInput | StatisticsHourlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatisticsHourlies.
     */
    cursor?: StatisticsHourlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticsHourlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticsHourlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatisticsHourlies.
     */
    distinct?: StatisticsHourlyScalarFieldEnum | StatisticsHourlyScalarFieldEnum[]
  }

  /**
   * StatisticsHourly findFirstOrThrow
   */
  export type StatisticsHourlyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsHourly to fetch.
     */
    where?: StatisticsHourlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticsHourlies to fetch.
     */
    orderBy?: StatisticsHourlyOrderByWithRelationInput | StatisticsHourlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatisticsHourlies.
     */
    cursor?: StatisticsHourlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticsHourlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticsHourlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatisticsHourlies.
     */
    distinct?: StatisticsHourlyScalarFieldEnum | StatisticsHourlyScalarFieldEnum[]
  }

  /**
   * StatisticsHourly findMany
   */
  export type StatisticsHourlyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsHourlies to fetch.
     */
    where?: StatisticsHourlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticsHourlies to fetch.
     */
    orderBy?: StatisticsHourlyOrderByWithRelationInput | StatisticsHourlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatisticsHourlies.
     */
    cursor?: StatisticsHourlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticsHourlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticsHourlies.
     */
    skip?: number
    distinct?: StatisticsHourlyScalarFieldEnum | StatisticsHourlyScalarFieldEnum[]
  }

  /**
   * StatisticsHourly create
   */
  export type StatisticsHourlyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * The data needed to create a StatisticsHourly.
     */
    data: XOR<StatisticsHourlyCreateInput, StatisticsHourlyUncheckedCreateInput>
  }

  /**
   * StatisticsHourly createMany
   */
  export type StatisticsHourlyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatisticsHourlies.
     */
    data: StatisticsHourlyCreateManyInput | StatisticsHourlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatisticsHourly createManyAndReturn
   */
  export type StatisticsHourlyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * The data used to create many StatisticsHourlies.
     */
    data: StatisticsHourlyCreateManyInput | StatisticsHourlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatisticsHourly update
   */
  export type StatisticsHourlyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * The data needed to update a StatisticsHourly.
     */
    data: XOR<StatisticsHourlyUpdateInput, StatisticsHourlyUncheckedUpdateInput>
    /**
     * Choose, which StatisticsHourly to update.
     */
    where: StatisticsHourlyWhereUniqueInput
  }

  /**
   * StatisticsHourly updateMany
   */
  export type StatisticsHourlyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatisticsHourlies.
     */
    data: XOR<StatisticsHourlyUpdateManyMutationInput, StatisticsHourlyUncheckedUpdateManyInput>
    /**
     * Filter which StatisticsHourlies to update
     */
    where?: StatisticsHourlyWhereInput
    /**
     * Limit how many StatisticsHourlies to update.
     */
    limit?: number
  }

  /**
   * StatisticsHourly updateManyAndReturn
   */
  export type StatisticsHourlyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * The data used to update StatisticsHourlies.
     */
    data: XOR<StatisticsHourlyUpdateManyMutationInput, StatisticsHourlyUncheckedUpdateManyInput>
    /**
     * Filter which StatisticsHourlies to update
     */
    where?: StatisticsHourlyWhereInput
    /**
     * Limit how many StatisticsHourlies to update.
     */
    limit?: number
  }

  /**
   * StatisticsHourly upsert
   */
  export type StatisticsHourlyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * The filter to search for the StatisticsHourly to update in case it exists.
     */
    where: StatisticsHourlyWhereUniqueInput
    /**
     * In case the StatisticsHourly found by the `where` argument doesn't exist, create a new StatisticsHourly with this data.
     */
    create: XOR<StatisticsHourlyCreateInput, StatisticsHourlyUncheckedCreateInput>
    /**
     * In case the StatisticsHourly was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticsHourlyUpdateInput, StatisticsHourlyUncheckedUpdateInput>
  }

  /**
   * StatisticsHourly delete
   */
  export type StatisticsHourlyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
    /**
     * Filter which StatisticsHourly to delete.
     */
    where: StatisticsHourlyWhereUniqueInput
  }

  /**
   * StatisticsHourly deleteMany
   */
  export type StatisticsHourlyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatisticsHourlies to delete
     */
    where?: StatisticsHourlyWhereInput
    /**
     * Limit how many StatisticsHourlies to delete.
     */
    limit?: number
  }

  /**
   * StatisticsHourly without action
   */
  export type StatisticsHourlyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsHourly
     */
    select?: StatisticsHourlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsHourly
     */
    omit?: StatisticsHourlyOmit<ExtArgs> | null
  }


  /**
   * Model StatisticsDaily
   */

  export type AggregateStatisticsDaily = {
    _count: StatisticsDailyCountAggregateOutputType | null
    _avg: StatisticsDailyAvgAggregateOutputType | null
    _sum: StatisticsDailySumAggregateOutputType | null
    _min: StatisticsDailyMinAggregateOutputType | null
    _max: StatisticsDailyMaxAggregateOutputType | null
  }

  export type StatisticsDailyAvgAggregateOutputType = {
    avgCpu: number | null
    avgMemory: number | null
    errors: number | null
    warnings: number | null
    info: number | null
    failures: number | null
    recoveries: number | null
    crashLoops: number | null
    uptimePercentage: number | null
    anomalyCount: number | null
  }

  export type StatisticsDailySumAggregateOutputType = {
    avgCpu: number | null
    avgMemory: number | null
    errors: number | null
    warnings: number | null
    info: number | null
    failures: number | null
    recoveries: number | null
    crashLoops: number | null
    uptimePercentage: number | null
    anomalyCount: number | null
  }

  export type StatisticsDailyMinAggregateOutputType = {
    id: string | null
    service: string | null
    day: Date | null
    avgCpu: number | null
    avgMemory: number | null
    errors: number | null
    warnings: number | null
    info: number | null
    failures: number | null
    recoveries: number | null
    crashLoops: number | null
    uptimePercentage: number | null
    anomalyCount: number | null
    createdAt: Date | null
  }

  export type StatisticsDailyMaxAggregateOutputType = {
    id: string | null
    service: string | null
    day: Date | null
    avgCpu: number | null
    avgMemory: number | null
    errors: number | null
    warnings: number | null
    info: number | null
    failures: number | null
    recoveries: number | null
    crashLoops: number | null
    uptimePercentage: number | null
    anomalyCount: number | null
    createdAt: Date | null
  }

  export type StatisticsDailyCountAggregateOutputType = {
    id: number
    service: number
    day: number
    avgCpu: number
    avgMemory: number
    errors: number
    warnings: number
    info: number
    failures: number
    recoveries: number
    crashLoops: number
    uptimePercentage: number
    anomalyCount: number
    createdAt: number
    _all: number
  }


  export type StatisticsDailyAvgAggregateInputType = {
    avgCpu?: true
    avgMemory?: true
    errors?: true
    warnings?: true
    info?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    uptimePercentage?: true
    anomalyCount?: true
  }

  export type StatisticsDailySumAggregateInputType = {
    avgCpu?: true
    avgMemory?: true
    errors?: true
    warnings?: true
    info?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    uptimePercentage?: true
    anomalyCount?: true
  }

  export type StatisticsDailyMinAggregateInputType = {
    id?: true
    service?: true
    day?: true
    avgCpu?: true
    avgMemory?: true
    errors?: true
    warnings?: true
    info?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    uptimePercentage?: true
    anomalyCount?: true
    createdAt?: true
  }

  export type StatisticsDailyMaxAggregateInputType = {
    id?: true
    service?: true
    day?: true
    avgCpu?: true
    avgMemory?: true
    errors?: true
    warnings?: true
    info?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    uptimePercentage?: true
    anomalyCount?: true
    createdAt?: true
  }

  export type StatisticsDailyCountAggregateInputType = {
    id?: true
    service?: true
    day?: true
    avgCpu?: true
    avgMemory?: true
    errors?: true
    warnings?: true
    info?: true
    failures?: true
    recoveries?: true
    crashLoops?: true
    uptimePercentage?: true
    anomalyCount?: true
    createdAt?: true
    _all?: true
  }

  export type StatisticsDailyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatisticsDaily to aggregate.
     */
    where?: StatisticsDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticsDailies to fetch.
     */
    orderBy?: StatisticsDailyOrderByWithRelationInput | StatisticsDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticsDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticsDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticsDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatisticsDailies
    **/
    _count?: true | StatisticsDailyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatisticsDailyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatisticsDailySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticsDailyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticsDailyMaxAggregateInputType
  }

  export type GetStatisticsDailyAggregateType<T extends StatisticsDailyAggregateArgs> = {
        [P in keyof T & keyof AggregateStatisticsDaily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatisticsDaily[P]>
      : GetScalarType<T[P], AggregateStatisticsDaily[P]>
  }




  export type StatisticsDailyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticsDailyWhereInput
    orderBy?: StatisticsDailyOrderByWithAggregationInput | StatisticsDailyOrderByWithAggregationInput[]
    by: StatisticsDailyScalarFieldEnum[] | StatisticsDailyScalarFieldEnum
    having?: StatisticsDailyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticsDailyCountAggregateInputType | true
    _avg?: StatisticsDailyAvgAggregateInputType
    _sum?: StatisticsDailySumAggregateInputType
    _min?: StatisticsDailyMinAggregateInputType
    _max?: StatisticsDailyMaxAggregateInputType
  }

  export type StatisticsDailyGroupByOutputType = {
    id: string
    service: string
    day: Date
    avgCpu: number
    avgMemory: number
    errors: number
    warnings: number
    info: number
    failures: number
    recoveries: number
    crashLoops: number
    uptimePercentage: number
    anomalyCount: number
    createdAt: Date
    _count: StatisticsDailyCountAggregateOutputType | null
    _avg: StatisticsDailyAvgAggregateOutputType | null
    _sum: StatisticsDailySumAggregateOutputType | null
    _min: StatisticsDailyMinAggregateOutputType | null
    _max: StatisticsDailyMaxAggregateOutputType | null
  }

  type GetStatisticsDailyGroupByPayload<T extends StatisticsDailyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticsDailyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticsDailyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticsDailyGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticsDailyGroupByOutputType[P]>
        }
      >
    >


  export type StatisticsDailySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    day?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    errors?: boolean
    warnings?: boolean
    info?: boolean
    failures?: boolean
    recoveries?: boolean
    crashLoops?: boolean
    uptimePercentage?: boolean
    anomalyCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["statisticsDaily"]>

  export type StatisticsDailySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    day?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    errors?: boolean
    warnings?: boolean
    info?: boolean
    failures?: boolean
    recoveries?: boolean
    crashLoops?: boolean
    uptimePercentage?: boolean
    anomalyCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["statisticsDaily"]>

  export type StatisticsDailySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    day?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    errors?: boolean
    warnings?: boolean
    info?: boolean
    failures?: boolean
    recoveries?: boolean
    crashLoops?: boolean
    uptimePercentage?: boolean
    anomalyCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["statisticsDaily"]>

  export type StatisticsDailySelectScalar = {
    id?: boolean
    service?: boolean
    day?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    errors?: boolean
    warnings?: boolean
    info?: boolean
    failures?: boolean
    recoveries?: boolean
    crashLoops?: boolean
    uptimePercentage?: boolean
    anomalyCount?: boolean
    createdAt?: boolean
  }

  export type StatisticsDailyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "day" | "avgCpu" | "avgMemory" | "errors" | "warnings" | "info" | "failures" | "recoveries" | "crashLoops" | "uptimePercentage" | "anomalyCount" | "createdAt", ExtArgs["result"]["statisticsDaily"]>

  export type $StatisticsDailyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatisticsDaily"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      day: Date
      avgCpu: number
      avgMemory: number
      errors: number
      warnings: number
      info: number
      failures: number
      recoveries: number
      crashLoops: number
      uptimePercentage: number
      anomalyCount: number
      createdAt: Date
    }, ExtArgs["result"]["statisticsDaily"]>
    composites: {}
  }

  type StatisticsDailyGetPayload<S extends boolean | null | undefined | StatisticsDailyDefaultArgs> = $Result.GetResult<Prisma.$StatisticsDailyPayload, S>

  type StatisticsDailyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatisticsDailyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatisticsDailyCountAggregateInputType | true
    }

  export interface StatisticsDailyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatisticsDaily'], meta: { name: 'StatisticsDaily' } }
    /**
     * Find zero or one StatisticsDaily that matches the filter.
     * @param {StatisticsDailyFindUniqueArgs} args - Arguments to find a StatisticsDaily
     * @example
     * // Get one StatisticsDaily
     * const statisticsDaily = await prisma.statisticsDaily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatisticsDailyFindUniqueArgs>(args: SelectSubset<T, StatisticsDailyFindUniqueArgs<ExtArgs>>): Prisma__StatisticsDailyClient<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatisticsDaily that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatisticsDailyFindUniqueOrThrowArgs} args - Arguments to find a StatisticsDaily
     * @example
     * // Get one StatisticsDaily
     * const statisticsDaily = await prisma.statisticsDaily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatisticsDailyFindUniqueOrThrowArgs>(args: SelectSubset<T, StatisticsDailyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatisticsDailyClient<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatisticsDaily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsDailyFindFirstArgs} args - Arguments to find a StatisticsDaily
     * @example
     * // Get one StatisticsDaily
     * const statisticsDaily = await prisma.statisticsDaily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatisticsDailyFindFirstArgs>(args?: SelectSubset<T, StatisticsDailyFindFirstArgs<ExtArgs>>): Prisma__StatisticsDailyClient<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatisticsDaily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsDailyFindFirstOrThrowArgs} args - Arguments to find a StatisticsDaily
     * @example
     * // Get one StatisticsDaily
     * const statisticsDaily = await prisma.statisticsDaily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatisticsDailyFindFirstOrThrowArgs>(args?: SelectSubset<T, StatisticsDailyFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatisticsDailyClient<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatisticsDailies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsDailyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatisticsDailies
     * const statisticsDailies = await prisma.statisticsDaily.findMany()
     * 
     * // Get first 10 StatisticsDailies
     * const statisticsDailies = await prisma.statisticsDaily.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticsDailyWithIdOnly = await prisma.statisticsDaily.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatisticsDailyFindManyArgs>(args?: SelectSubset<T, StatisticsDailyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatisticsDaily.
     * @param {StatisticsDailyCreateArgs} args - Arguments to create a StatisticsDaily.
     * @example
     * // Create one StatisticsDaily
     * const StatisticsDaily = await prisma.statisticsDaily.create({
     *   data: {
     *     // ... data to create a StatisticsDaily
     *   }
     * })
     * 
     */
    create<T extends StatisticsDailyCreateArgs>(args: SelectSubset<T, StatisticsDailyCreateArgs<ExtArgs>>): Prisma__StatisticsDailyClient<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatisticsDailies.
     * @param {StatisticsDailyCreateManyArgs} args - Arguments to create many StatisticsDailies.
     * @example
     * // Create many StatisticsDailies
     * const statisticsDaily = await prisma.statisticsDaily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatisticsDailyCreateManyArgs>(args?: SelectSubset<T, StatisticsDailyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatisticsDailies and returns the data saved in the database.
     * @param {StatisticsDailyCreateManyAndReturnArgs} args - Arguments to create many StatisticsDailies.
     * @example
     * // Create many StatisticsDailies
     * const statisticsDaily = await prisma.statisticsDaily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatisticsDailies and only return the `id`
     * const statisticsDailyWithIdOnly = await prisma.statisticsDaily.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatisticsDailyCreateManyAndReturnArgs>(args?: SelectSubset<T, StatisticsDailyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatisticsDaily.
     * @param {StatisticsDailyDeleteArgs} args - Arguments to delete one StatisticsDaily.
     * @example
     * // Delete one StatisticsDaily
     * const StatisticsDaily = await prisma.statisticsDaily.delete({
     *   where: {
     *     // ... filter to delete one StatisticsDaily
     *   }
     * })
     * 
     */
    delete<T extends StatisticsDailyDeleteArgs>(args: SelectSubset<T, StatisticsDailyDeleteArgs<ExtArgs>>): Prisma__StatisticsDailyClient<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatisticsDaily.
     * @param {StatisticsDailyUpdateArgs} args - Arguments to update one StatisticsDaily.
     * @example
     * // Update one StatisticsDaily
     * const statisticsDaily = await prisma.statisticsDaily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatisticsDailyUpdateArgs>(args: SelectSubset<T, StatisticsDailyUpdateArgs<ExtArgs>>): Prisma__StatisticsDailyClient<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatisticsDailies.
     * @param {StatisticsDailyDeleteManyArgs} args - Arguments to filter StatisticsDailies to delete.
     * @example
     * // Delete a few StatisticsDailies
     * const { count } = await prisma.statisticsDaily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatisticsDailyDeleteManyArgs>(args?: SelectSubset<T, StatisticsDailyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatisticsDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsDailyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatisticsDailies
     * const statisticsDaily = await prisma.statisticsDaily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatisticsDailyUpdateManyArgs>(args: SelectSubset<T, StatisticsDailyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatisticsDailies and returns the data updated in the database.
     * @param {StatisticsDailyUpdateManyAndReturnArgs} args - Arguments to update many StatisticsDailies.
     * @example
     * // Update many StatisticsDailies
     * const statisticsDaily = await prisma.statisticsDaily.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatisticsDailies and only return the `id`
     * const statisticsDailyWithIdOnly = await prisma.statisticsDaily.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatisticsDailyUpdateManyAndReturnArgs>(args: SelectSubset<T, StatisticsDailyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatisticsDaily.
     * @param {StatisticsDailyUpsertArgs} args - Arguments to update or create a StatisticsDaily.
     * @example
     * // Update or create a StatisticsDaily
     * const statisticsDaily = await prisma.statisticsDaily.upsert({
     *   create: {
     *     // ... data to create a StatisticsDaily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatisticsDaily we want to update
     *   }
     * })
     */
    upsert<T extends StatisticsDailyUpsertArgs>(args: SelectSubset<T, StatisticsDailyUpsertArgs<ExtArgs>>): Prisma__StatisticsDailyClient<$Result.GetResult<Prisma.$StatisticsDailyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatisticsDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsDailyCountArgs} args - Arguments to filter StatisticsDailies to count.
     * @example
     * // Count the number of StatisticsDailies
     * const count = await prisma.statisticsDaily.count({
     *   where: {
     *     // ... the filter for the StatisticsDailies we want to count
     *   }
     * })
    **/
    count<T extends StatisticsDailyCountArgs>(
      args?: Subset<T, StatisticsDailyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticsDailyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatisticsDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsDailyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatisticsDailyAggregateArgs>(args: Subset<T, StatisticsDailyAggregateArgs>): Prisma.PrismaPromise<GetStatisticsDailyAggregateType<T>>

    /**
     * Group by StatisticsDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticsDailyGroupByArgs} args - Group by arguments.
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
      T extends StatisticsDailyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticsDailyGroupByArgs['orderBy'] }
        : { orderBy?: StatisticsDailyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatisticsDailyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticsDailyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatisticsDaily model
   */
  readonly fields: StatisticsDailyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatisticsDaily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticsDailyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StatisticsDaily model
   */
  interface StatisticsDailyFieldRefs {
    readonly id: FieldRef<"StatisticsDaily", 'String'>
    readonly service: FieldRef<"StatisticsDaily", 'String'>
    readonly day: FieldRef<"StatisticsDaily", 'DateTime'>
    readonly avgCpu: FieldRef<"StatisticsDaily", 'Float'>
    readonly avgMemory: FieldRef<"StatisticsDaily", 'Float'>
    readonly errors: FieldRef<"StatisticsDaily", 'Int'>
    readonly warnings: FieldRef<"StatisticsDaily", 'Int'>
    readonly info: FieldRef<"StatisticsDaily", 'Int'>
    readonly failures: FieldRef<"StatisticsDaily", 'Int'>
    readonly recoveries: FieldRef<"StatisticsDaily", 'Int'>
    readonly crashLoops: FieldRef<"StatisticsDaily", 'Int'>
    readonly uptimePercentage: FieldRef<"StatisticsDaily", 'Float'>
    readonly anomalyCount: FieldRef<"StatisticsDaily", 'Int'>
    readonly createdAt: FieldRef<"StatisticsDaily", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatisticsDaily findUnique
   */
  export type StatisticsDailyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsDaily to fetch.
     */
    where: StatisticsDailyWhereUniqueInput
  }

  /**
   * StatisticsDaily findUniqueOrThrow
   */
  export type StatisticsDailyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsDaily to fetch.
     */
    where: StatisticsDailyWhereUniqueInput
  }

  /**
   * StatisticsDaily findFirst
   */
  export type StatisticsDailyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsDaily to fetch.
     */
    where?: StatisticsDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticsDailies to fetch.
     */
    orderBy?: StatisticsDailyOrderByWithRelationInput | StatisticsDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatisticsDailies.
     */
    cursor?: StatisticsDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticsDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticsDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatisticsDailies.
     */
    distinct?: StatisticsDailyScalarFieldEnum | StatisticsDailyScalarFieldEnum[]
  }

  /**
   * StatisticsDaily findFirstOrThrow
   */
  export type StatisticsDailyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsDaily to fetch.
     */
    where?: StatisticsDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticsDailies to fetch.
     */
    orderBy?: StatisticsDailyOrderByWithRelationInput | StatisticsDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatisticsDailies.
     */
    cursor?: StatisticsDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticsDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticsDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatisticsDailies.
     */
    distinct?: StatisticsDailyScalarFieldEnum | StatisticsDailyScalarFieldEnum[]
  }

  /**
   * StatisticsDaily findMany
   */
  export type StatisticsDailyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * Filter, which StatisticsDailies to fetch.
     */
    where?: StatisticsDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatisticsDailies to fetch.
     */
    orderBy?: StatisticsDailyOrderByWithRelationInput | StatisticsDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatisticsDailies.
     */
    cursor?: StatisticsDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatisticsDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatisticsDailies.
     */
    skip?: number
    distinct?: StatisticsDailyScalarFieldEnum | StatisticsDailyScalarFieldEnum[]
  }

  /**
   * StatisticsDaily create
   */
  export type StatisticsDailyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * The data needed to create a StatisticsDaily.
     */
    data: XOR<StatisticsDailyCreateInput, StatisticsDailyUncheckedCreateInput>
  }

  /**
   * StatisticsDaily createMany
   */
  export type StatisticsDailyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatisticsDailies.
     */
    data: StatisticsDailyCreateManyInput | StatisticsDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatisticsDaily createManyAndReturn
   */
  export type StatisticsDailyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * The data used to create many StatisticsDailies.
     */
    data: StatisticsDailyCreateManyInput | StatisticsDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatisticsDaily update
   */
  export type StatisticsDailyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * The data needed to update a StatisticsDaily.
     */
    data: XOR<StatisticsDailyUpdateInput, StatisticsDailyUncheckedUpdateInput>
    /**
     * Choose, which StatisticsDaily to update.
     */
    where: StatisticsDailyWhereUniqueInput
  }

  /**
   * StatisticsDaily updateMany
   */
  export type StatisticsDailyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatisticsDailies.
     */
    data: XOR<StatisticsDailyUpdateManyMutationInput, StatisticsDailyUncheckedUpdateManyInput>
    /**
     * Filter which StatisticsDailies to update
     */
    where?: StatisticsDailyWhereInput
    /**
     * Limit how many StatisticsDailies to update.
     */
    limit?: number
  }

  /**
   * StatisticsDaily updateManyAndReturn
   */
  export type StatisticsDailyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * The data used to update StatisticsDailies.
     */
    data: XOR<StatisticsDailyUpdateManyMutationInput, StatisticsDailyUncheckedUpdateManyInput>
    /**
     * Filter which StatisticsDailies to update
     */
    where?: StatisticsDailyWhereInput
    /**
     * Limit how many StatisticsDailies to update.
     */
    limit?: number
  }

  /**
   * StatisticsDaily upsert
   */
  export type StatisticsDailyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * The filter to search for the StatisticsDaily to update in case it exists.
     */
    where: StatisticsDailyWhereUniqueInput
    /**
     * In case the StatisticsDaily found by the `where` argument doesn't exist, create a new StatisticsDaily with this data.
     */
    create: XOR<StatisticsDailyCreateInput, StatisticsDailyUncheckedCreateInput>
    /**
     * In case the StatisticsDaily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticsDailyUpdateInput, StatisticsDailyUncheckedUpdateInput>
  }

  /**
   * StatisticsDaily delete
   */
  export type StatisticsDailyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
    /**
     * Filter which StatisticsDaily to delete.
     */
    where: StatisticsDailyWhereUniqueInput
  }

  /**
   * StatisticsDaily deleteMany
   */
  export type StatisticsDailyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatisticsDailies to delete
     */
    where?: StatisticsDailyWhereInput
    /**
     * Limit how many StatisticsDailies to delete.
     */
    limit?: number
  }

  /**
   * StatisticsDaily without action
   */
  export type StatisticsDailyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatisticsDaily
     */
    select?: StatisticsDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatisticsDaily
     */
    omit?: StatisticsDailyOmit<ExtArgs> | null
  }


  /**
   * Model ServiceRisk
   */

  export type AggregateServiceRisk = {
    _count: ServiceRiskCountAggregateOutputType | null
    _avg: ServiceRiskAvgAggregateOutputType | null
    _sum: ServiceRiskSumAggregateOutputType | null
    _min: ServiceRiskMinAggregateOutputType | null
    _max: ServiceRiskMaxAggregateOutputType | null
  }

  export type ServiceRiskAvgAggregateOutputType = {
    riskScore: number | null
  }

  export type ServiceRiskSumAggregateOutputType = {
    riskScore: number | null
  }

  export type ServiceRiskMinAggregateOutputType = {
    id: string | null
    service: string | null
    riskScore: number | null
    level: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ServiceRiskMaxAggregateOutputType = {
    id: string | null
    service: string | null
    riskScore: number | null
    level: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type ServiceRiskCountAggregateOutputType = {
    id: number
    service: number
    riskScore: number
    level: number
    reason: number
    createdAt: number
    _all: number
  }


  export type ServiceRiskAvgAggregateInputType = {
    riskScore?: true
  }

  export type ServiceRiskSumAggregateInputType = {
    riskScore?: true
  }

  export type ServiceRiskMinAggregateInputType = {
    id?: true
    service?: true
    riskScore?: true
    level?: true
    reason?: true
    createdAt?: true
  }

  export type ServiceRiskMaxAggregateInputType = {
    id?: true
    service?: true
    riskScore?: true
    level?: true
    reason?: true
    createdAt?: true
  }

  export type ServiceRiskCountAggregateInputType = {
    id?: true
    service?: true
    riskScore?: true
    level?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceRiskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRisk to aggregate.
     */
    where?: ServiceRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRisks to fetch.
     */
    orderBy?: ServiceRiskOrderByWithRelationInput | ServiceRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRisks
    **/
    _count?: true | ServiceRiskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceRiskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceRiskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRiskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRiskMaxAggregateInputType
  }

  export type GetServiceRiskAggregateType<T extends ServiceRiskAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRisk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRisk[P]>
      : GetScalarType<T[P], AggregateServiceRisk[P]>
  }




  export type ServiceRiskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRiskWhereInput
    orderBy?: ServiceRiskOrderByWithAggregationInput | ServiceRiskOrderByWithAggregationInput[]
    by: ServiceRiskScalarFieldEnum[] | ServiceRiskScalarFieldEnum
    having?: ServiceRiskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRiskCountAggregateInputType | true
    _avg?: ServiceRiskAvgAggregateInputType
    _sum?: ServiceRiskSumAggregateInputType
    _min?: ServiceRiskMinAggregateInputType
    _max?: ServiceRiskMaxAggregateInputType
  }

  export type ServiceRiskGroupByOutputType = {
    id: string
    service: string
    riskScore: number
    level: string
    reason: string | null
    createdAt: Date
    _count: ServiceRiskCountAggregateOutputType | null
    _avg: ServiceRiskAvgAggregateOutputType | null
    _sum: ServiceRiskSumAggregateOutputType | null
    _min: ServiceRiskMinAggregateOutputType | null
    _max: ServiceRiskMaxAggregateOutputType | null
  }

  type GetServiceRiskGroupByPayload<T extends ServiceRiskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRiskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRiskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRiskGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRiskGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRiskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    riskScore?: boolean
    level?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceRisk"]>

  export type ServiceRiskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    riskScore?: boolean
    level?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceRisk"]>

  export type ServiceRiskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    riskScore?: boolean
    level?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceRisk"]>

  export type ServiceRiskSelectScalar = {
    id?: boolean
    service?: boolean
    riskScore?: boolean
    level?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type ServiceRiskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "riskScore" | "level" | "reason" | "createdAt", ExtArgs["result"]["serviceRisk"]>

  export type $ServiceRiskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRisk"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      riskScore: number
      level: string
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["serviceRisk"]>
    composites: {}
  }

  type ServiceRiskGetPayload<S extends boolean | null | undefined | ServiceRiskDefaultArgs> = $Result.GetResult<Prisma.$ServiceRiskPayload, S>

  type ServiceRiskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceRiskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceRiskCountAggregateInputType | true
    }

  export interface ServiceRiskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRisk'], meta: { name: 'ServiceRisk' } }
    /**
     * Find zero or one ServiceRisk that matches the filter.
     * @param {ServiceRiskFindUniqueArgs} args - Arguments to find a ServiceRisk
     * @example
     * // Get one ServiceRisk
     * const serviceRisk = await prisma.serviceRisk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRiskFindUniqueArgs>(args: SelectSubset<T, ServiceRiskFindUniqueArgs<ExtArgs>>): Prisma__ServiceRiskClient<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceRisk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRiskFindUniqueOrThrowArgs} args - Arguments to find a ServiceRisk
     * @example
     * // Get one ServiceRisk
     * const serviceRisk = await prisma.serviceRisk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRiskFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceRiskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceRiskClient<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRisk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRiskFindFirstArgs} args - Arguments to find a ServiceRisk
     * @example
     * // Get one ServiceRisk
     * const serviceRisk = await prisma.serviceRisk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRiskFindFirstArgs>(args?: SelectSubset<T, ServiceRiskFindFirstArgs<ExtArgs>>): Prisma__ServiceRiskClient<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRisk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRiskFindFirstOrThrowArgs} args - Arguments to find a ServiceRisk
     * @example
     * // Get one ServiceRisk
     * const serviceRisk = await prisma.serviceRisk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRiskFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceRiskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceRiskClient<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceRisks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRiskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRisks
     * const serviceRisks = await prisma.serviceRisk.findMany()
     * 
     * // Get first 10 ServiceRisks
     * const serviceRisks = await prisma.serviceRisk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceRiskWithIdOnly = await prisma.serviceRisk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceRiskFindManyArgs>(args?: SelectSubset<T, ServiceRiskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceRisk.
     * @param {ServiceRiskCreateArgs} args - Arguments to create a ServiceRisk.
     * @example
     * // Create one ServiceRisk
     * const ServiceRisk = await prisma.serviceRisk.create({
     *   data: {
     *     // ... data to create a ServiceRisk
     *   }
     * })
     * 
     */
    create<T extends ServiceRiskCreateArgs>(args: SelectSubset<T, ServiceRiskCreateArgs<ExtArgs>>): Prisma__ServiceRiskClient<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceRisks.
     * @param {ServiceRiskCreateManyArgs} args - Arguments to create many ServiceRisks.
     * @example
     * // Create many ServiceRisks
     * const serviceRisk = await prisma.serviceRisk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceRiskCreateManyArgs>(args?: SelectSubset<T, ServiceRiskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceRisks and returns the data saved in the database.
     * @param {ServiceRiskCreateManyAndReturnArgs} args - Arguments to create many ServiceRisks.
     * @example
     * // Create many ServiceRisks
     * const serviceRisk = await prisma.serviceRisk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceRisks and only return the `id`
     * const serviceRiskWithIdOnly = await prisma.serviceRisk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceRiskCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceRiskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceRisk.
     * @param {ServiceRiskDeleteArgs} args - Arguments to delete one ServiceRisk.
     * @example
     * // Delete one ServiceRisk
     * const ServiceRisk = await prisma.serviceRisk.delete({
     *   where: {
     *     // ... filter to delete one ServiceRisk
     *   }
     * })
     * 
     */
    delete<T extends ServiceRiskDeleteArgs>(args: SelectSubset<T, ServiceRiskDeleteArgs<ExtArgs>>): Prisma__ServiceRiskClient<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceRisk.
     * @param {ServiceRiskUpdateArgs} args - Arguments to update one ServiceRisk.
     * @example
     * // Update one ServiceRisk
     * const serviceRisk = await prisma.serviceRisk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceRiskUpdateArgs>(args: SelectSubset<T, ServiceRiskUpdateArgs<ExtArgs>>): Prisma__ServiceRiskClient<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceRisks.
     * @param {ServiceRiskDeleteManyArgs} args - Arguments to filter ServiceRisks to delete.
     * @example
     * // Delete a few ServiceRisks
     * const { count } = await prisma.serviceRisk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceRiskDeleteManyArgs>(args?: SelectSubset<T, ServiceRiskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRisks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRiskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRisks
     * const serviceRisk = await prisma.serviceRisk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceRiskUpdateManyArgs>(args: SelectSubset<T, ServiceRiskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRisks and returns the data updated in the database.
     * @param {ServiceRiskUpdateManyAndReturnArgs} args - Arguments to update many ServiceRisks.
     * @example
     * // Update many ServiceRisks
     * const serviceRisk = await prisma.serviceRisk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceRisks and only return the `id`
     * const serviceRiskWithIdOnly = await prisma.serviceRisk.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceRiskUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceRiskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceRisk.
     * @param {ServiceRiskUpsertArgs} args - Arguments to update or create a ServiceRisk.
     * @example
     * // Update or create a ServiceRisk
     * const serviceRisk = await prisma.serviceRisk.upsert({
     *   create: {
     *     // ... data to create a ServiceRisk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRisk we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRiskUpsertArgs>(args: SelectSubset<T, ServiceRiskUpsertArgs<ExtArgs>>): Prisma__ServiceRiskClient<$Result.GetResult<Prisma.$ServiceRiskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceRisks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRiskCountArgs} args - Arguments to filter ServiceRisks to count.
     * @example
     * // Count the number of ServiceRisks
     * const count = await prisma.serviceRisk.count({
     *   where: {
     *     // ... the filter for the ServiceRisks we want to count
     *   }
     * })
    **/
    count<T extends ServiceRiskCountArgs>(
      args?: Subset<T, ServiceRiskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRiskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRisk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRiskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceRiskAggregateArgs>(args: Subset<T, ServiceRiskAggregateArgs>): Prisma.PrismaPromise<GetServiceRiskAggregateType<T>>

    /**
     * Group by ServiceRisk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRiskGroupByArgs} args - Group by arguments.
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
      T extends ServiceRiskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRiskGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRiskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceRiskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRiskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRisk model
   */
  readonly fields: ServiceRiskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRisk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRiskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ServiceRisk model
   */
  interface ServiceRiskFieldRefs {
    readonly id: FieldRef<"ServiceRisk", 'String'>
    readonly service: FieldRef<"ServiceRisk", 'String'>
    readonly riskScore: FieldRef<"ServiceRisk", 'Int'>
    readonly level: FieldRef<"ServiceRisk", 'String'>
    readonly reason: FieldRef<"ServiceRisk", 'String'>
    readonly createdAt: FieldRef<"ServiceRisk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceRisk findUnique
   */
  export type ServiceRiskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * Filter, which ServiceRisk to fetch.
     */
    where: ServiceRiskWhereUniqueInput
  }

  /**
   * ServiceRisk findUniqueOrThrow
   */
  export type ServiceRiskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * Filter, which ServiceRisk to fetch.
     */
    where: ServiceRiskWhereUniqueInput
  }

  /**
   * ServiceRisk findFirst
   */
  export type ServiceRiskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * Filter, which ServiceRisk to fetch.
     */
    where?: ServiceRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRisks to fetch.
     */
    orderBy?: ServiceRiskOrderByWithRelationInput | ServiceRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRisks.
     */
    cursor?: ServiceRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRisks.
     */
    distinct?: ServiceRiskScalarFieldEnum | ServiceRiskScalarFieldEnum[]
  }

  /**
   * ServiceRisk findFirstOrThrow
   */
  export type ServiceRiskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * Filter, which ServiceRisk to fetch.
     */
    where?: ServiceRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRisks to fetch.
     */
    orderBy?: ServiceRiskOrderByWithRelationInput | ServiceRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRisks.
     */
    cursor?: ServiceRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRisks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRisks.
     */
    distinct?: ServiceRiskScalarFieldEnum | ServiceRiskScalarFieldEnum[]
  }

  /**
   * ServiceRisk findMany
   */
  export type ServiceRiskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * Filter, which ServiceRisks to fetch.
     */
    where?: ServiceRiskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRisks to fetch.
     */
    orderBy?: ServiceRiskOrderByWithRelationInput | ServiceRiskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRisks.
     */
    cursor?: ServiceRiskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRisks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRisks.
     */
    skip?: number
    distinct?: ServiceRiskScalarFieldEnum | ServiceRiskScalarFieldEnum[]
  }

  /**
   * ServiceRisk create
   */
  export type ServiceRiskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceRisk.
     */
    data: XOR<ServiceRiskCreateInput, ServiceRiskUncheckedCreateInput>
  }

  /**
   * ServiceRisk createMany
   */
  export type ServiceRiskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRisks.
     */
    data: ServiceRiskCreateManyInput | ServiceRiskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRisk createManyAndReturn
   */
  export type ServiceRiskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceRisks.
     */
    data: ServiceRiskCreateManyInput | ServiceRiskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRisk update
   */
  export type ServiceRiskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceRisk.
     */
    data: XOR<ServiceRiskUpdateInput, ServiceRiskUncheckedUpdateInput>
    /**
     * Choose, which ServiceRisk to update.
     */
    where: ServiceRiskWhereUniqueInput
  }

  /**
   * ServiceRisk updateMany
   */
  export type ServiceRiskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRisks.
     */
    data: XOR<ServiceRiskUpdateManyMutationInput, ServiceRiskUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRisks to update
     */
    where?: ServiceRiskWhereInput
    /**
     * Limit how many ServiceRisks to update.
     */
    limit?: number
  }

  /**
   * ServiceRisk updateManyAndReturn
   */
  export type ServiceRiskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * The data used to update ServiceRisks.
     */
    data: XOR<ServiceRiskUpdateManyMutationInput, ServiceRiskUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRisks to update
     */
    where?: ServiceRiskWhereInput
    /**
     * Limit how many ServiceRisks to update.
     */
    limit?: number
  }

  /**
   * ServiceRisk upsert
   */
  export type ServiceRiskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceRisk to update in case it exists.
     */
    where: ServiceRiskWhereUniqueInput
    /**
     * In case the ServiceRisk found by the `where` argument doesn't exist, create a new ServiceRisk with this data.
     */
    create: XOR<ServiceRiskCreateInput, ServiceRiskUncheckedCreateInput>
    /**
     * In case the ServiceRisk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRiskUpdateInput, ServiceRiskUncheckedUpdateInput>
  }

  /**
   * ServiceRisk delete
   */
  export type ServiceRiskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
    /**
     * Filter which ServiceRisk to delete.
     */
    where: ServiceRiskWhereUniqueInput
  }

  /**
   * ServiceRisk deleteMany
   */
  export type ServiceRiskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRisks to delete
     */
    where?: ServiceRiskWhereInput
    /**
     * Limit how many ServiceRisks to delete.
     */
    limit?: number
  }

  /**
   * ServiceRisk without action
   */
  export type ServiceRiskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRisk
     */
    select?: ServiceRiskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRisk
     */
    omit?: ServiceRiskOmit<ExtArgs> | null
  }


  /**
   * Model RootCauseReport
   */

  export type AggregateRootCauseReport = {
    _count: RootCauseReportCountAggregateOutputType | null
    _avg: RootCauseReportAvgAggregateOutputType | null
    _sum: RootCauseReportSumAggregateOutputType | null
    _min: RootCauseReportMinAggregateOutputType | null
    _max: RootCauseReportMaxAggregateOutputType | null
  }

  export type RootCauseReportAvgAggregateOutputType = {
    confidence: number | null
  }

  export type RootCauseReportSumAggregateOutputType = {
    confidence: number | null
  }

  export type RootCauseReportMinAggregateOutputType = {
    id: string | null
    service: string | null
    cause: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type RootCauseReportMaxAggregateOutputType = {
    id: string | null
    service: string | null
    cause: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type RootCauseReportCountAggregateOutputType = {
    id: number
    service: number
    cause: number
    confidence: number
    createdAt: number
    _all: number
  }


  export type RootCauseReportAvgAggregateInputType = {
    confidence?: true
  }

  export type RootCauseReportSumAggregateInputType = {
    confidence?: true
  }

  export type RootCauseReportMinAggregateInputType = {
    id?: true
    service?: true
    cause?: true
    confidence?: true
    createdAt?: true
  }

  export type RootCauseReportMaxAggregateInputType = {
    id?: true
    service?: true
    cause?: true
    confidence?: true
    createdAt?: true
  }

  export type RootCauseReportCountAggregateInputType = {
    id?: true
    service?: true
    cause?: true
    confidence?: true
    createdAt?: true
    _all?: true
  }

  export type RootCauseReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RootCauseReport to aggregate.
     */
    where?: RootCauseReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RootCauseReports to fetch.
     */
    orderBy?: RootCauseReportOrderByWithRelationInput | RootCauseReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RootCauseReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RootCauseReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RootCauseReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RootCauseReports
    **/
    _count?: true | RootCauseReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RootCauseReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RootCauseReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RootCauseReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RootCauseReportMaxAggregateInputType
  }

  export type GetRootCauseReportAggregateType<T extends RootCauseReportAggregateArgs> = {
        [P in keyof T & keyof AggregateRootCauseReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRootCauseReport[P]>
      : GetScalarType<T[P], AggregateRootCauseReport[P]>
  }




  export type RootCauseReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RootCauseReportWhereInput
    orderBy?: RootCauseReportOrderByWithAggregationInput | RootCauseReportOrderByWithAggregationInput[]
    by: RootCauseReportScalarFieldEnum[] | RootCauseReportScalarFieldEnum
    having?: RootCauseReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RootCauseReportCountAggregateInputType | true
    _avg?: RootCauseReportAvgAggregateInputType
    _sum?: RootCauseReportSumAggregateInputType
    _min?: RootCauseReportMinAggregateInputType
    _max?: RootCauseReportMaxAggregateInputType
  }

  export type RootCauseReportGroupByOutputType = {
    id: string
    service: string
    cause: string
    confidence: number
    createdAt: Date
    _count: RootCauseReportCountAggregateOutputType | null
    _avg: RootCauseReportAvgAggregateOutputType | null
    _sum: RootCauseReportSumAggregateOutputType | null
    _min: RootCauseReportMinAggregateOutputType | null
    _max: RootCauseReportMaxAggregateOutputType | null
  }

  type GetRootCauseReportGroupByPayload<T extends RootCauseReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RootCauseReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RootCauseReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RootCauseReportGroupByOutputType[P]>
            : GetScalarType<T[P], RootCauseReportGroupByOutputType[P]>
        }
      >
    >


  export type RootCauseReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    cause?: boolean
    confidence?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rootCauseReport"]>

  export type RootCauseReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    cause?: boolean
    confidence?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rootCauseReport"]>

  export type RootCauseReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    cause?: boolean
    confidence?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rootCauseReport"]>

  export type RootCauseReportSelectScalar = {
    id?: boolean
    service?: boolean
    cause?: boolean
    confidence?: boolean
    createdAt?: boolean
  }

  export type RootCauseReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "cause" | "confidence" | "createdAt", ExtArgs["result"]["rootCauseReport"]>

  export type $RootCauseReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RootCauseReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      cause: string
      confidence: number
      createdAt: Date
    }, ExtArgs["result"]["rootCauseReport"]>
    composites: {}
  }

  type RootCauseReportGetPayload<S extends boolean | null | undefined | RootCauseReportDefaultArgs> = $Result.GetResult<Prisma.$RootCauseReportPayload, S>

  type RootCauseReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RootCauseReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RootCauseReportCountAggregateInputType | true
    }

  export interface RootCauseReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RootCauseReport'], meta: { name: 'RootCauseReport' } }
    /**
     * Find zero or one RootCauseReport that matches the filter.
     * @param {RootCauseReportFindUniqueArgs} args - Arguments to find a RootCauseReport
     * @example
     * // Get one RootCauseReport
     * const rootCauseReport = await prisma.rootCauseReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RootCauseReportFindUniqueArgs>(args: SelectSubset<T, RootCauseReportFindUniqueArgs<ExtArgs>>): Prisma__RootCauseReportClient<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RootCauseReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RootCauseReportFindUniqueOrThrowArgs} args - Arguments to find a RootCauseReport
     * @example
     * // Get one RootCauseReport
     * const rootCauseReport = await prisma.rootCauseReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RootCauseReportFindUniqueOrThrowArgs>(args: SelectSubset<T, RootCauseReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RootCauseReportClient<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RootCauseReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootCauseReportFindFirstArgs} args - Arguments to find a RootCauseReport
     * @example
     * // Get one RootCauseReport
     * const rootCauseReport = await prisma.rootCauseReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RootCauseReportFindFirstArgs>(args?: SelectSubset<T, RootCauseReportFindFirstArgs<ExtArgs>>): Prisma__RootCauseReportClient<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RootCauseReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootCauseReportFindFirstOrThrowArgs} args - Arguments to find a RootCauseReport
     * @example
     * // Get one RootCauseReport
     * const rootCauseReport = await prisma.rootCauseReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RootCauseReportFindFirstOrThrowArgs>(args?: SelectSubset<T, RootCauseReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__RootCauseReportClient<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RootCauseReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootCauseReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RootCauseReports
     * const rootCauseReports = await prisma.rootCauseReport.findMany()
     * 
     * // Get first 10 RootCauseReports
     * const rootCauseReports = await prisma.rootCauseReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rootCauseReportWithIdOnly = await prisma.rootCauseReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RootCauseReportFindManyArgs>(args?: SelectSubset<T, RootCauseReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RootCauseReport.
     * @param {RootCauseReportCreateArgs} args - Arguments to create a RootCauseReport.
     * @example
     * // Create one RootCauseReport
     * const RootCauseReport = await prisma.rootCauseReport.create({
     *   data: {
     *     // ... data to create a RootCauseReport
     *   }
     * })
     * 
     */
    create<T extends RootCauseReportCreateArgs>(args: SelectSubset<T, RootCauseReportCreateArgs<ExtArgs>>): Prisma__RootCauseReportClient<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RootCauseReports.
     * @param {RootCauseReportCreateManyArgs} args - Arguments to create many RootCauseReports.
     * @example
     * // Create many RootCauseReports
     * const rootCauseReport = await prisma.rootCauseReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RootCauseReportCreateManyArgs>(args?: SelectSubset<T, RootCauseReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RootCauseReports and returns the data saved in the database.
     * @param {RootCauseReportCreateManyAndReturnArgs} args - Arguments to create many RootCauseReports.
     * @example
     * // Create many RootCauseReports
     * const rootCauseReport = await prisma.rootCauseReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RootCauseReports and only return the `id`
     * const rootCauseReportWithIdOnly = await prisma.rootCauseReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RootCauseReportCreateManyAndReturnArgs>(args?: SelectSubset<T, RootCauseReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RootCauseReport.
     * @param {RootCauseReportDeleteArgs} args - Arguments to delete one RootCauseReport.
     * @example
     * // Delete one RootCauseReport
     * const RootCauseReport = await prisma.rootCauseReport.delete({
     *   where: {
     *     // ... filter to delete one RootCauseReport
     *   }
     * })
     * 
     */
    delete<T extends RootCauseReportDeleteArgs>(args: SelectSubset<T, RootCauseReportDeleteArgs<ExtArgs>>): Prisma__RootCauseReportClient<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RootCauseReport.
     * @param {RootCauseReportUpdateArgs} args - Arguments to update one RootCauseReport.
     * @example
     * // Update one RootCauseReport
     * const rootCauseReport = await prisma.rootCauseReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RootCauseReportUpdateArgs>(args: SelectSubset<T, RootCauseReportUpdateArgs<ExtArgs>>): Prisma__RootCauseReportClient<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RootCauseReports.
     * @param {RootCauseReportDeleteManyArgs} args - Arguments to filter RootCauseReports to delete.
     * @example
     * // Delete a few RootCauseReports
     * const { count } = await prisma.rootCauseReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RootCauseReportDeleteManyArgs>(args?: SelectSubset<T, RootCauseReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RootCauseReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootCauseReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RootCauseReports
     * const rootCauseReport = await prisma.rootCauseReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RootCauseReportUpdateManyArgs>(args: SelectSubset<T, RootCauseReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RootCauseReports and returns the data updated in the database.
     * @param {RootCauseReportUpdateManyAndReturnArgs} args - Arguments to update many RootCauseReports.
     * @example
     * // Update many RootCauseReports
     * const rootCauseReport = await prisma.rootCauseReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RootCauseReports and only return the `id`
     * const rootCauseReportWithIdOnly = await prisma.rootCauseReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends RootCauseReportUpdateManyAndReturnArgs>(args: SelectSubset<T, RootCauseReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RootCauseReport.
     * @param {RootCauseReportUpsertArgs} args - Arguments to update or create a RootCauseReport.
     * @example
     * // Update or create a RootCauseReport
     * const rootCauseReport = await prisma.rootCauseReport.upsert({
     *   create: {
     *     // ... data to create a RootCauseReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RootCauseReport we want to update
     *   }
     * })
     */
    upsert<T extends RootCauseReportUpsertArgs>(args: SelectSubset<T, RootCauseReportUpsertArgs<ExtArgs>>): Prisma__RootCauseReportClient<$Result.GetResult<Prisma.$RootCauseReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RootCauseReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootCauseReportCountArgs} args - Arguments to filter RootCauseReports to count.
     * @example
     * // Count the number of RootCauseReports
     * const count = await prisma.rootCauseReport.count({
     *   where: {
     *     // ... the filter for the RootCauseReports we want to count
     *   }
     * })
    **/
    count<T extends RootCauseReportCountArgs>(
      args?: Subset<T, RootCauseReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RootCauseReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RootCauseReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootCauseReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RootCauseReportAggregateArgs>(args: Subset<T, RootCauseReportAggregateArgs>): Prisma.PrismaPromise<GetRootCauseReportAggregateType<T>>

    /**
     * Group by RootCauseReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootCauseReportGroupByArgs} args - Group by arguments.
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
      T extends RootCauseReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RootCauseReportGroupByArgs['orderBy'] }
        : { orderBy?: RootCauseReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RootCauseReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRootCauseReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RootCauseReport model
   */
  readonly fields: RootCauseReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RootCauseReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RootCauseReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RootCauseReport model
   */
  interface RootCauseReportFieldRefs {
    readonly id: FieldRef<"RootCauseReport", 'String'>
    readonly service: FieldRef<"RootCauseReport", 'String'>
    readonly cause: FieldRef<"RootCauseReport", 'String'>
    readonly confidence: FieldRef<"RootCauseReport", 'Int'>
    readonly createdAt: FieldRef<"RootCauseReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RootCauseReport findUnique
   */
  export type RootCauseReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * Filter, which RootCauseReport to fetch.
     */
    where: RootCauseReportWhereUniqueInput
  }

  /**
   * RootCauseReport findUniqueOrThrow
   */
  export type RootCauseReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * Filter, which RootCauseReport to fetch.
     */
    where: RootCauseReportWhereUniqueInput
  }

  /**
   * RootCauseReport findFirst
   */
  export type RootCauseReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * Filter, which RootCauseReport to fetch.
     */
    where?: RootCauseReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RootCauseReports to fetch.
     */
    orderBy?: RootCauseReportOrderByWithRelationInput | RootCauseReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RootCauseReports.
     */
    cursor?: RootCauseReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RootCauseReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RootCauseReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RootCauseReports.
     */
    distinct?: RootCauseReportScalarFieldEnum | RootCauseReportScalarFieldEnum[]
  }

  /**
   * RootCauseReport findFirstOrThrow
   */
  export type RootCauseReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * Filter, which RootCauseReport to fetch.
     */
    where?: RootCauseReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RootCauseReports to fetch.
     */
    orderBy?: RootCauseReportOrderByWithRelationInput | RootCauseReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RootCauseReports.
     */
    cursor?: RootCauseReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RootCauseReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RootCauseReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RootCauseReports.
     */
    distinct?: RootCauseReportScalarFieldEnum | RootCauseReportScalarFieldEnum[]
  }

  /**
   * RootCauseReport findMany
   */
  export type RootCauseReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * Filter, which RootCauseReports to fetch.
     */
    where?: RootCauseReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RootCauseReports to fetch.
     */
    orderBy?: RootCauseReportOrderByWithRelationInput | RootCauseReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RootCauseReports.
     */
    cursor?: RootCauseReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RootCauseReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RootCauseReports.
     */
    skip?: number
    distinct?: RootCauseReportScalarFieldEnum | RootCauseReportScalarFieldEnum[]
  }

  /**
   * RootCauseReport create
   */
  export type RootCauseReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * The data needed to create a RootCauseReport.
     */
    data: XOR<RootCauseReportCreateInput, RootCauseReportUncheckedCreateInput>
  }

  /**
   * RootCauseReport createMany
   */
  export type RootCauseReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RootCauseReports.
     */
    data: RootCauseReportCreateManyInput | RootCauseReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RootCauseReport createManyAndReturn
   */
  export type RootCauseReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * The data used to create many RootCauseReports.
     */
    data: RootCauseReportCreateManyInput | RootCauseReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RootCauseReport update
   */
  export type RootCauseReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * The data needed to update a RootCauseReport.
     */
    data: XOR<RootCauseReportUpdateInput, RootCauseReportUncheckedUpdateInput>
    /**
     * Choose, which RootCauseReport to update.
     */
    where: RootCauseReportWhereUniqueInput
  }

  /**
   * RootCauseReport updateMany
   */
  export type RootCauseReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RootCauseReports.
     */
    data: XOR<RootCauseReportUpdateManyMutationInput, RootCauseReportUncheckedUpdateManyInput>
    /**
     * Filter which RootCauseReports to update
     */
    where?: RootCauseReportWhereInput
    /**
     * Limit how many RootCauseReports to update.
     */
    limit?: number
  }

  /**
   * RootCauseReport updateManyAndReturn
   */
  export type RootCauseReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * The data used to update RootCauseReports.
     */
    data: XOR<RootCauseReportUpdateManyMutationInput, RootCauseReportUncheckedUpdateManyInput>
    /**
     * Filter which RootCauseReports to update
     */
    where?: RootCauseReportWhereInput
    /**
     * Limit how many RootCauseReports to update.
     */
    limit?: number
  }

  /**
   * RootCauseReport upsert
   */
  export type RootCauseReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * The filter to search for the RootCauseReport to update in case it exists.
     */
    where: RootCauseReportWhereUniqueInput
    /**
     * In case the RootCauseReport found by the `where` argument doesn't exist, create a new RootCauseReport with this data.
     */
    create: XOR<RootCauseReportCreateInput, RootCauseReportUncheckedCreateInput>
    /**
     * In case the RootCauseReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RootCauseReportUpdateInput, RootCauseReportUncheckedUpdateInput>
  }

  /**
   * RootCauseReport delete
   */
  export type RootCauseReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
    /**
     * Filter which RootCauseReport to delete.
     */
    where: RootCauseReportWhereUniqueInput
  }

  /**
   * RootCauseReport deleteMany
   */
  export type RootCauseReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RootCauseReports to delete
     */
    where?: RootCauseReportWhereInput
    /**
     * Limit how many RootCauseReports to delete.
     */
    limit?: number
  }

  /**
   * RootCauseReport without action
   */
  export type RootCauseReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCauseReport
     */
    select?: RootCauseReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RootCauseReport
     */
    omit?: RootCauseReportOmit<ExtArgs> | null
  }


  /**
   * Model FailurePrediction
   */

  export type AggregateFailurePrediction = {
    _count: FailurePredictionCountAggregateOutputType | null
    _avg: FailurePredictionAvgAggregateOutputType | null
    _sum: FailurePredictionSumAggregateOutputType | null
    _min: FailurePredictionMinAggregateOutputType | null
    _max: FailurePredictionMaxAggregateOutputType | null
  }

  export type FailurePredictionAvgAggregateOutputType = {
    windowHours: number | null
    probability: number | null
  }

  export type FailurePredictionSumAggregateOutputType = {
    windowHours: number | null
    probability: number | null
  }

  export type FailurePredictionMinAggregateOutputType = {
    id: string | null
    service: string | null
    windowHours: number | null
    probability: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type FailurePredictionMaxAggregateOutputType = {
    id: string | null
    service: string | null
    windowHours: number | null
    probability: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type FailurePredictionCountAggregateOutputType = {
    id: number
    service: number
    windowHours: number
    probability: number
    reason: number
    createdAt: number
    _all: number
  }


  export type FailurePredictionAvgAggregateInputType = {
    windowHours?: true
    probability?: true
  }

  export type FailurePredictionSumAggregateInputType = {
    windowHours?: true
    probability?: true
  }

  export type FailurePredictionMinAggregateInputType = {
    id?: true
    service?: true
    windowHours?: true
    probability?: true
    reason?: true
    createdAt?: true
  }

  export type FailurePredictionMaxAggregateInputType = {
    id?: true
    service?: true
    windowHours?: true
    probability?: true
    reason?: true
    createdAt?: true
  }

  export type FailurePredictionCountAggregateInputType = {
    id?: true
    service?: true
    windowHours?: true
    probability?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type FailurePredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailurePrediction to aggregate.
     */
    where?: FailurePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailurePredictions to fetch.
     */
    orderBy?: FailurePredictionOrderByWithRelationInput | FailurePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FailurePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailurePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailurePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FailurePredictions
    **/
    _count?: true | FailurePredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FailurePredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FailurePredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FailurePredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FailurePredictionMaxAggregateInputType
  }

  export type GetFailurePredictionAggregateType<T extends FailurePredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateFailurePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailurePrediction[P]>
      : GetScalarType<T[P], AggregateFailurePrediction[P]>
  }




  export type FailurePredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FailurePredictionWhereInput
    orderBy?: FailurePredictionOrderByWithAggregationInput | FailurePredictionOrderByWithAggregationInput[]
    by: FailurePredictionScalarFieldEnum[] | FailurePredictionScalarFieldEnum
    having?: FailurePredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FailurePredictionCountAggregateInputType | true
    _avg?: FailurePredictionAvgAggregateInputType
    _sum?: FailurePredictionSumAggregateInputType
    _min?: FailurePredictionMinAggregateInputType
    _max?: FailurePredictionMaxAggregateInputType
  }

  export type FailurePredictionGroupByOutputType = {
    id: string
    service: string
    windowHours: number
    probability: number
    reason: string | null
    createdAt: Date
    _count: FailurePredictionCountAggregateOutputType | null
    _avg: FailurePredictionAvgAggregateOutputType | null
    _sum: FailurePredictionSumAggregateOutputType | null
    _min: FailurePredictionMinAggregateOutputType | null
    _max: FailurePredictionMaxAggregateOutputType | null
  }

  type GetFailurePredictionGroupByPayload<T extends FailurePredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FailurePredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FailurePredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FailurePredictionGroupByOutputType[P]>
            : GetScalarType<T[P], FailurePredictionGroupByOutputType[P]>
        }
      >
    >


  export type FailurePredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    windowHours?: boolean
    probability?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["failurePrediction"]>

  export type FailurePredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    windowHours?: boolean
    probability?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["failurePrediction"]>

  export type FailurePredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    windowHours?: boolean
    probability?: boolean
    reason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["failurePrediction"]>

  export type FailurePredictionSelectScalar = {
    id?: boolean
    service?: boolean
    windowHours?: boolean
    probability?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type FailurePredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "windowHours" | "probability" | "reason" | "createdAt", ExtArgs["result"]["failurePrediction"]>

  export type $FailurePredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FailurePrediction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      windowHours: number
      probability: number
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["failurePrediction"]>
    composites: {}
  }

  type FailurePredictionGetPayload<S extends boolean | null | undefined | FailurePredictionDefaultArgs> = $Result.GetResult<Prisma.$FailurePredictionPayload, S>

  type FailurePredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FailurePredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FailurePredictionCountAggregateInputType | true
    }

  export interface FailurePredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FailurePrediction'], meta: { name: 'FailurePrediction' } }
    /**
     * Find zero or one FailurePrediction that matches the filter.
     * @param {FailurePredictionFindUniqueArgs} args - Arguments to find a FailurePrediction
     * @example
     * // Get one FailurePrediction
     * const failurePrediction = await prisma.failurePrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FailurePredictionFindUniqueArgs>(args: SelectSubset<T, FailurePredictionFindUniqueArgs<ExtArgs>>): Prisma__FailurePredictionClient<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FailurePrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FailurePredictionFindUniqueOrThrowArgs} args - Arguments to find a FailurePrediction
     * @example
     * // Get one FailurePrediction
     * const failurePrediction = await prisma.failurePrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FailurePredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, FailurePredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FailurePredictionClient<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailurePrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailurePredictionFindFirstArgs} args - Arguments to find a FailurePrediction
     * @example
     * // Get one FailurePrediction
     * const failurePrediction = await prisma.failurePrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FailurePredictionFindFirstArgs>(args?: SelectSubset<T, FailurePredictionFindFirstArgs<ExtArgs>>): Prisma__FailurePredictionClient<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailurePrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailurePredictionFindFirstOrThrowArgs} args - Arguments to find a FailurePrediction
     * @example
     * // Get one FailurePrediction
     * const failurePrediction = await prisma.failurePrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FailurePredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, FailurePredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FailurePredictionClient<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FailurePredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailurePredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FailurePredictions
     * const failurePredictions = await prisma.failurePrediction.findMany()
     * 
     * // Get first 10 FailurePredictions
     * const failurePredictions = await prisma.failurePrediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failurePredictionWithIdOnly = await prisma.failurePrediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FailurePredictionFindManyArgs>(args?: SelectSubset<T, FailurePredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FailurePrediction.
     * @param {FailurePredictionCreateArgs} args - Arguments to create a FailurePrediction.
     * @example
     * // Create one FailurePrediction
     * const FailurePrediction = await prisma.failurePrediction.create({
     *   data: {
     *     // ... data to create a FailurePrediction
     *   }
     * })
     * 
     */
    create<T extends FailurePredictionCreateArgs>(args: SelectSubset<T, FailurePredictionCreateArgs<ExtArgs>>): Prisma__FailurePredictionClient<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FailurePredictions.
     * @param {FailurePredictionCreateManyArgs} args - Arguments to create many FailurePredictions.
     * @example
     * // Create many FailurePredictions
     * const failurePrediction = await prisma.failurePrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FailurePredictionCreateManyArgs>(args?: SelectSubset<T, FailurePredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FailurePredictions and returns the data saved in the database.
     * @param {FailurePredictionCreateManyAndReturnArgs} args - Arguments to create many FailurePredictions.
     * @example
     * // Create many FailurePredictions
     * const failurePrediction = await prisma.failurePrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FailurePredictions and only return the `id`
     * const failurePredictionWithIdOnly = await prisma.failurePrediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FailurePredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, FailurePredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FailurePrediction.
     * @param {FailurePredictionDeleteArgs} args - Arguments to delete one FailurePrediction.
     * @example
     * // Delete one FailurePrediction
     * const FailurePrediction = await prisma.failurePrediction.delete({
     *   where: {
     *     // ... filter to delete one FailurePrediction
     *   }
     * })
     * 
     */
    delete<T extends FailurePredictionDeleteArgs>(args: SelectSubset<T, FailurePredictionDeleteArgs<ExtArgs>>): Prisma__FailurePredictionClient<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FailurePrediction.
     * @param {FailurePredictionUpdateArgs} args - Arguments to update one FailurePrediction.
     * @example
     * // Update one FailurePrediction
     * const failurePrediction = await prisma.failurePrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FailurePredictionUpdateArgs>(args: SelectSubset<T, FailurePredictionUpdateArgs<ExtArgs>>): Prisma__FailurePredictionClient<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FailurePredictions.
     * @param {FailurePredictionDeleteManyArgs} args - Arguments to filter FailurePredictions to delete.
     * @example
     * // Delete a few FailurePredictions
     * const { count } = await prisma.failurePrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FailurePredictionDeleteManyArgs>(args?: SelectSubset<T, FailurePredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailurePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailurePredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FailurePredictions
     * const failurePrediction = await prisma.failurePrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FailurePredictionUpdateManyArgs>(args: SelectSubset<T, FailurePredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailurePredictions and returns the data updated in the database.
     * @param {FailurePredictionUpdateManyAndReturnArgs} args - Arguments to update many FailurePredictions.
     * @example
     * // Update many FailurePredictions
     * const failurePrediction = await prisma.failurePrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FailurePredictions and only return the `id`
     * const failurePredictionWithIdOnly = await prisma.failurePrediction.updateManyAndReturn({
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
    updateManyAndReturn<T extends FailurePredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, FailurePredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FailurePrediction.
     * @param {FailurePredictionUpsertArgs} args - Arguments to update or create a FailurePrediction.
     * @example
     * // Update or create a FailurePrediction
     * const failurePrediction = await prisma.failurePrediction.upsert({
     *   create: {
     *     // ... data to create a FailurePrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FailurePrediction we want to update
     *   }
     * })
     */
    upsert<T extends FailurePredictionUpsertArgs>(args: SelectSubset<T, FailurePredictionUpsertArgs<ExtArgs>>): Prisma__FailurePredictionClient<$Result.GetResult<Prisma.$FailurePredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FailurePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailurePredictionCountArgs} args - Arguments to filter FailurePredictions to count.
     * @example
     * // Count the number of FailurePredictions
     * const count = await prisma.failurePrediction.count({
     *   where: {
     *     // ... the filter for the FailurePredictions we want to count
     *   }
     * })
    **/
    count<T extends FailurePredictionCountArgs>(
      args?: Subset<T, FailurePredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FailurePredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FailurePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailurePredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FailurePredictionAggregateArgs>(args: Subset<T, FailurePredictionAggregateArgs>): Prisma.PrismaPromise<GetFailurePredictionAggregateType<T>>

    /**
     * Group by FailurePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailurePredictionGroupByArgs} args - Group by arguments.
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
      T extends FailurePredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FailurePredictionGroupByArgs['orderBy'] }
        : { orderBy?: FailurePredictionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FailurePredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailurePredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FailurePrediction model
   */
  readonly fields: FailurePredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FailurePrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FailurePredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FailurePrediction model
   */
  interface FailurePredictionFieldRefs {
    readonly id: FieldRef<"FailurePrediction", 'String'>
    readonly service: FieldRef<"FailurePrediction", 'String'>
    readonly windowHours: FieldRef<"FailurePrediction", 'Int'>
    readonly probability: FieldRef<"FailurePrediction", 'Float'>
    readonly reason: FieldRef<"FailurePrediction", 'String'>
    readonly createdAt: FieldRef<"FailurePrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FailurePrediction findUnique
   */
  export type FailurePredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * Filter, which FailurePrediction to fetch.
     */
    where: FailurePredictionWhereUniqueInput
  }

  /**
   * FailurePrediction findUniqueOrThrow
   */
  export type FailurePredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * Filter, which FailurePrediction to fetch.
     */
    where: FailurePredictionWhereUniqueInput
  }

  /**
   * FailurePrediction findFirst
   */
  export type FailurePredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * Filter, which FailurePrediction to fetch.
     */
    where?: FailurePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailurePredictions to fetch.
     */
    orderBy?: FailurePredictionOrderByWithRelationInput | FailurePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailurePredictions.
     */
    cursor?: FailurePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailurePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailurePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailurePredictions.
     */
    distinct?: FailurePredictionScalarFieldEnum | FailurePredictionScalarFieldEnum[]
  }

  /**
   * FailurePrediction findFirstOrThrow
   */
  export type FailurePredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * Filter, which FailurePrediction to fetch.
     */
    where?: FailurePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailurePredictions to fetch.
     */
    orderBy?: FailurePredictionOrderByWithRelationInput | FailurePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailurePredictions.
     */
    cursor?: FailurePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailurePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailurePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailurePredictions.
     */
    distinct?: FailurePredictionScalarFieldEnum | FailurePredictionScalarFieldEnum[]
  }

  /**
   * FailurePrediction findMany
   */
  export type FailurePredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * Filter, which FailurePredictions to fetch.
     */
    where?: FailurePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailurePredictions to fetch.
     */
    orderBy?: FailurePredictionOrderByWithRelationInput | FailurePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FailurePredictions.
     */
    cursor?: FailurePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailurePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailurePredictions.
     */
    skip?: number
    distinct?: FailurePredictionScalarFieldEnum | FailurePredictionScalarFieldEnum[]
  }

  /**
   * FailurePrediction create
   */
  export type FailurePredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * The data needed to create a FailurePrediction.
     */
    data: XOR<FailurePredictionCreateInput, FailurePredictionUncheckedCreateInput>
  }

  /**
   * FailurePrediction createMany
   */
  export type FailurePredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FailurePredictions.
     */
    data: FailurePredictionCreateManyInput | FailurePredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FailurePrediction createManyAndReturn
   */
  export type FailurePredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * The data used to create many FailurePredictions.
     */
    data: FailurePredictionCreateManyInput | FailurePredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FailurePrediction update
   */
  export type FailurePredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * The data needed to update a FailurePrediction.
     */
    data: XOR<FailurePredictionUpdateInput, FailurePredictionUncheckedUpdateInput>
    /**
     * Choose, which FailurePrediction to update.
     */
    where: FailurePredictionWhereUniqueInput
  }

  /**
   * FailurePrediction updateMany
   */
  export type FailurePredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FailurePredictions.
     */
    data: XOR<FailurePredictionUpdateManyMutationInput, FailurePredictionUncheckedUpdateManyInput>
    /**
     * Filter which FailurePredictions to update
     */
    where?: FailurePredictionWhereInput
    /**
     * Limit how many FailurePredictions to update.
     */
    limit?: number
  }

  /**
   * FailurePrediction updateManyAndReturn
   */
  export type FailurePredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * The data used to update FailurePredictions.
     */
    data: XOR<FailurePredictionUpdateManyMutationInput, FailurePredictionUncheckedUpdateManyInput>
    /**
     * Filter which FailurePredictions to update
     */
    where?: FailurePredictionWhereInput
    /**
     * Limit how many FailurePredictions to update.
     */
    limit?: number
  }

  /**
   * FailurePrediction upsert
   */
  export type FailurePredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * The filter to search for the FailurePrediction to update in case it exists.
     */
    where: FailurePredictionWhereUniqueInput
    /**
     * In case the FailurePrediction found by the `where` argument doesn't exist, create a new FailurePrediction with this data.
     */
    create: XOR<FailurePredictionCreateInput, FailurePredictionUncheckedCreateInput>
    /**
     * In case the FailurePrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FailurePredictionUpdateInput, FailurePredictionUncheckedUpdateInput>
  }

  /**
   * FailurePrediction delete
   */
  export type FailurePredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
    /**
     * Filter which FailurePrediction to delete.
     */
    where: FailurePredictionWhereUniqueInput
  }

  /**
   * FailurePrediction deleteMany
   */
  export type FailurePredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailurePredictions to delete
     */
    where?: FailurePredictionWhereInput
    /**
     * Limit how many FailurePredictions to delete.
     */
    limit?: number
  }

  /**
   * FailurePrediction without action
   */
  export type FailurePredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailurePrediction
     */
    select?: FailurePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailurePrediction
     */
    omit?: FailurePredictionOmit<ExtArgs> | null
  }


  /**
   * Model ServiceDailyStats
   */

  export type AggregateServiceDailyStats = {
    _count: ServiceDailyStatsCountAggregateOutputType | null
    _avg: ServiceDailyStatsAvgAggregateOutputType | null
    _sum: ServiceDailyStatsSumAggregateOutputType | null
    _min: ServiceDailyStatsMinAggregateOutputType | null
    _max: ServiceDailyStatsMaxAggregateOutputType | null
  }

  export type ServiceDailyStatsAvgAggregateOutputType = {
    avgCpu: number | null
    avgMemory: number | null
    failures: number | null
    anomalies: number | null
  }

  export type ServiceDailyStatsSumAggregateOutputType = {
    avgCpu: number | null
    avgMemory: number | null
    failures: number | null
    anomalies: number | null
  }

  export type ServiceDailyStatsMinAggregateOutputType = {
    id: string | null
    service: string | null
    date: Date | null
    avgCpu: number | null
    avgMemory: number | null
    failures: number | null
    anomalies: number | null
    createdAt: Date | null
  }

  export type ServiceDailyStatsMaxAggregateOutputType = {
    id: string | null
    service: string | null
    date: Date | null
    avgCpu: number | null
    avgMemory: number | null
    failures: number | null
    anomalies: number | null
    createdAt: Date | null
  }

  export type ServiceDailyStatsCountAggregateOutputType = {
    id: number
    service: number
    date: number
    avgCpu: number
    avgMemory: number
    failures: number
    anomalies: number
    createdAt: number
    _all: number
  }


  export type ServiceDailyStatsAvgAggregateInputType = {
    avgCpu?: true
    avgMemory?: true
    failures?: true
    anomalies?: true
  }

  export type ServiceDailyStatsSumAggregateInputType = {
    avgCpu?: true
    avgMemory?: true
    failures?: true
    anomalies?: true
  }

  export type ServiceDailyStatsMinAggregateInputType = {
    id?: true
    service?: true
    date?: true
    avgCpu?: true
    avgMemory?: true
    failures?: true
    anomalies?: true
    createdAt?: true
  }

  export type ServiceDailyStatsMaxAggregateInputType = {
    id?: true
    service?: true
    date?: true
    avgCpu?: true
    avgMemory?: true
    failures?: true
    anomalies?: true
    createdAt?: true
  }

  export type ServiceDailyStatsCountAggregateInputType = {
    id?: true
    service?: true
    date?: true
    avgCpu?: true
    avgMemory?: true
    failures?: true
    anomalies?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceDailyStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceDailyStats to aggregate.
     */
    where?: ServiceDailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceDailyStats to fetch.
     */
    orderBy?: ServiceDailyStatsOrderByWithRelationInput | ServiceDailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceDailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceDailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceDailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceDailyStats
    **/
    _count?: true | ServiceDailyStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceDailyStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceDailyStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceDailyStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceDailyStatsMaxAggregateInputType
  }

  export type GetServiceDailyStatsAggregateType<T extends ServiceDailyStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceDailyStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceDailyStats[P]>
      : GetScalarType<T[P], AggregateServiceDailyStats[P]>
  }




  export type ServiceDailyStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceDailyStatsWhereInput
    orderBy?: ServiceDailyStatsOrderByWithAggregationInput | ServiceDailyStatsOrderByWithAggregationInput[]
    by: ServiceDailyStatsScalarFieldEnum[] | ServiceDailyStatsScalarFieldEnum
    having?: ServiceDailyStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceDailyStatsCountAggregateInputType | true
    _avg?: ServiceDailyStatsAvgAggregateInputType
    _sum?: ServiceDailyStatsSumAggregateInputType
    _min?: ServiceDailyStatsMinAggregateInputType
    _max?: ServiceDailyStatsMaxAggregateInputType
  }

  export type ServiceDailyStatsGroupByOutputType = {
    id: string
    service: string
    date: Date
    avgCpu: number
    avgMemory: number
    failures: number
    anomalies: number
    createdAt: Date
    _count: ServiceDailyStatsCountAggregateOutputType | null
    _avg: ServiceDailyStatsAvgAggregateOutputType | null
    _sum: ServiceDailyStatsSumAggregateOutputType | null
    _min: ServiceDailyStatsMinAggregateOutputType | null
    _max: ServiceDailyStatsMaxAggregateOutputType | null
  }

  type GetServiceDailyStatsGroupByPayload<T extends ServiceDailyStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceDailyStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceDailyStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceDailyStatsGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceDailyStatsGroupByOutputType[P]>
        }
      >
    >


  export type ServiceDailyStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    date?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    failures?: boolean
    anomalies?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceDailyStats"]>

  export type ServiceDailyStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    date?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    failures?: boolean
    anomalies?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceDailyStats"]>

  export type ServiceDailyStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    date?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    failures?: boolean
    anomalies?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceDailyStats"]>

  export type ServiceDailyStatsSelectScalar = {
    id?: boolean
    service?: boolean
    date?: boolean
    avgCpu?: boolean
    avgMemory?: boolean
    failures?: boolean
    anomalies?: boolean
    createdAt?: boolean
  }

  export type ServiceDailyStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "date" | "avgCpu" | "avgMemory" | "failures" | "anomalies" | "createdAt", ExtArgs["result"]["serviceDailyStats"]>

  export type $ServiceDailyStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceDailyStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      date: Date
      avgCpu: number
      avgMemory: number
      failures: number
      anomalies: number
      createdAt: Date
    }, ExtArgs["result"]["serviceDailyStats"]>
    composites: {}
  }

  type ServiceDailyStatsGetPayload<S extends boolean | null | undefined | ServiceDailyStatsDefaultArgs> = $Result.GetResult<Prisma.$ServiceDailyStatsPayload, S>

  type ServiceDailyStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceDailyStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceDailyStatsCountAggregateInputType | true
    }

  export interface ServiceDailyStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceDailyStats'], meta: { name: 'ServiceDailyStats' } }
    /**
     * Find zero or one ServiceDailyStats that matches the filter.
     * @param {ServiceDailyStatsFindUniqueArgs} args - Arguments to find a ServiceDailyStats
     * @example
     * // Get one ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceDailyStatsFindUniqueArgs>(args: SelectSubset<T, ServiceDailyStatsFindUniqueArgs<ExtArgs>>): Prisma__ServiceDailyStatsClient<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceDailyStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceDailyStatsFindUniqueOrThrowArgs} args - Arguments to find a ServiceDailyStats
     * @example
     * // Get one ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceDailyStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceDailyStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceDailyStatsClient<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceDailyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDailyStatsFindFirstArgs} args - Arguments to find a ServiceDailyStats
     * @example
     * // Get one ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceDailyStatsFindFirstArgs>(args?: SelectSubset<T, ServiceDailyStatsFindFirstArgs<ExtArgs>>): Prisma__ServiceDailyStatsClient<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceDailyStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDailyStatsFindFirstOrThrowArgs} args - Arguments to find a ServiceDailyStats
     * @example
     * // Get one ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceDailyStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceDailyStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceDailyStatsClient<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceDailyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDailyStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.findMany()
     * 
     * // Get first 10 ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceDailyStatsWithIdOnly = await prisma.serviceDailyStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceDailyStatsFindManyArgs>(args?: SelectSubset<T, ServiceDailyStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceDailyStats.
     * @param {ServiceDailyStatsCreateArgs} args - Arguments to create a ServiceDailyStats.
     * @example
     * // Create one ServiceDailyStats
     * const ServiceDailyStats = await prisma.serviceDailyStats.create({
     *   data: {
     *     // ... data to create a ServiceDailyStats
     *   }
     * })
     * 
     */
    create<T extends ServiceDailyStatsCreateArgs>(args: SelectSubset<T, ServiceDailyStatsCreateArgs<ExtArgs>>): Prisma__ServiceDailyStatsClient<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceDailyStats.
     * @param {ServiceDailyStatsCreateManyArgs} args - Arguments to create many ServiceDailyStats.
     * @example
     * // Create many ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceDailyStatsCreateManyArgs>(args?: SelectSubset<T, ServiceDailyStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceDailyStats and returns the data saved in the database.
     * @param {ServiceDailyStatsCreateManyAndReturnArgs} args - Arguments to create many ServiceDailyStats.
     * @example
     * // Create many ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceDailyStats and only return the `id`
     * const serviceDailyStatsWithIdOnly = await prisma.serviceDailyStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceDailyStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceDailyStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceDailyStats.
     * @param {ServiceDailyStatsDeleteArgs} args - Arguments to delete one ServiceDailyStats.
     * @example
     * // Delete one ServiceDailyStats
     * const ServiceDailyStats = await prisma.serviceDailyStats.delete({
     *   where: {
     *     // ... filter to delete one ServiceDailyStats
     *   }
     * })
     * 
     */
    delete<T extends ServiceDailyStatsDeleteArgs>(args: SelectSubset<T, ServiceDailyStatsDeleteArgs<ExtArgs>>): Prisma__ServiceDailyStatsClient<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceDailyStats.
     * @param {ServiceDailyStatsUpdateArgs} args - Arguments to update one ServiceDailyStats.
     * @example
     * // Update one ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceDailyStatsUpdateArgs>(args: SelectSubset<T, ServiceDailyStatsUpdateArgs<ExtArgs>>): Prisma__ServiceDailyStatsClient<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceDailyStats.
     * @param {ServiceDailyStatsDeleteManyArgs} args - Arguments to filter ServiceDailyStats to delete.
     * @example
     * // Delete a few ServiceDailyStats
     * const { count } = await prisma.serviceDailyStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDailyStatsDeleteManyArgs>(args?: SelectSubset<T, ServiceDailyStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceDailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDailyStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceDailyStatsUpdateManyArgs>(args: SelectSubset<T, ServiceDailyStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceDailyStats and returns the data updated in the database.
     * @param {ServiceDailyStatsUpdateManyAndReturnArgs} args - Arguments to update many ServiceDailyStats.
     * @example
     * // Update many ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceDailyStats and only return the `id`
     * const serviceDailyStatsWithIdOnly = await prisma.serviceDailyStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceDailyStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceDailyStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceDailyStats.
     * @param {ServiceDailyStatsUpsertArgs} args - Arguments to update or create a ServiceDailyStats.
     * @example
     * // Update or create a ServiceDailyStats
     * const serviceDailyStats = await prisma.serviceDailyStats.upsert({
     *   create: {
     *     // ... data to create a ServiceDailyStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceDailyStats we want to update
     *   }
     * })
     */
    upsert<T extends ServiceDailyStatsUpsertArgs>(args: SelectSubset<T, ServiceDailyStatsUpsertArgs<ExtArgs>>): Prisma__ServiceDailyStatsClient<$Result.GetResult<Prisma.$ServiceDailyStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceDailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDailyStatsCountArgs} args - Arguments to filter ServiceDailyStats to count.
     * @example
     * // Count the number of ServiceDailyStats
     * const count = await prisma.serviceDailyStats.count({
     *   where: {
     *     // ... the filter for the ServiceDailyStats we want to count
     *   }
     * })
    **/
    count<T extends ServiceDailyStatsCountArgs>(
      args?: Subset<T, ServiceDailyStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceDailyStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceDailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDailyStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceDailyStatsAggregateArgs>(args: Subset<T, ServiceDailyStatsAggregateArgs>): Prisma.PrismaPromise<GetServiceDailyStatsAggregateType<T>>

    /**
     * Group by ServiceDailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceDailyStatsGroupByArgs} args - Group by arguments.
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
      T extends ServiceDailyStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceDailyStatsGroupByArgs['orderBy'] }
        : { orderBy?: ServiceDailyStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceDailyStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceDailyStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceDailyStats model
   */
  readonly fields: ServiceDailyStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceDailyStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceDailyStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ServiceDailyStats model
   */
  interface ServiceDailyStatsFieldRefs {
    readonly id: FieldRef<"ServiceDailyStats", 'String'>
    readonly service: FieldRef<"ServiceDailyStats", 'String'>
    readonly date: FieldRef<"ServiceDailyStats", 'DateTime'>
    readonly avgCpu: FieldRef<"ServiceDailyStats", 'Float'>
    readonly avgMemory: FieldRef<"ServiceDailyStats", 'Float'>
    readonly failures: FieldRef<"ServiceDailyStats", 'Int'>
    readonly anomalies: FieldRef<"ServiceDailyStats", 'Int'>
    readonly createdAt: FieldRef<"ServiceDailyStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceDailyStats findUnique
   */
  export type ServiceDailyStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which ServiceDailyStats to fetch.
     */
    where: ServiceDailyStatsWhereUniqueInput
  }

  /**
   * ServiceDailyStats findUniqueOrThrow
   */
  export type ServiceDailyStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which ServiceDailyStats to fetch.
     */
    where: ServiceDailyStatsWhereUniqueInput
  }

  /**
   * ServiceDailyStats findFirst
   */
  export type ServiceDailyStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which ServiceDailyStats to fetch.
     */
    where?: ServiceDailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceDailyStats to fetch.
     */
    orderBy?: ServiceDailyStatsOrderByWithRelationInput | ServiceDailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceDailyStats.
     */
    cursor?: ServiceDailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceDailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceDailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceDailyStats.
     */
    distinct?: ServiceDailyStatsScalarFieldEnum | ServiceDailyStatsScalarFieldEnum[]
  }

  /**
   * ServiceDailyStats findFirstOrThrow
   */
  export type ServiceDailyStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which ServiceDailyStats to fetch.
     */
    where?: ServiceDailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceDailyStats to fetch.
     */
    orderBy?: ServiceDailyStatsOrderByWithRelationInput | ServiceDailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceDailyStats.
     */
    cursor?: ServiceDailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceDailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceDailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceDailyStats.
     */
    distinct?: ServiceDailyStatsScalarFieldEnum | ServiceDailyStatsScalarFieldEnum[]
  }

  /**
   * ServiceDailyStats findMany
   */
  export type ServiceDailyStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * Filter, which ServiceDailyStats to fetch.
     */
    where?: ServiceDailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceDailyStats to fetch.
     */
    orderBy?: ServiceDailyStatsOrderByWithRelationInput | ServiceDailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceDailyStats.
     */
    cursor?: ServiceDailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceDailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceDailyStats.
     */
    skip?: number
    distinct?: ServiceDailyStatsScalarFieldEnum | ServiceDailyStatsScalarFieldEnum[]
  }

  /**
   * ServiceDailyStats create
   */
  export type ServiceDailyStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceDailyStats.
     */
    data: XOR<ServiceDailyStatsCreateInput, ServiceDailyStatsUncheckedCreateInput>
  }

  /**
   * ServiceDailyStats createMany
   */
  export type ServiceDailyStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceDailyStats.
     */
    data: ServiceDailyStatsCreateManyInput | ServiceDailyStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceDailyStats createManyAndReturn
   */
  export type ServiceDailyStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceDailyStats.
     */
    data: ServiceDailyStatsCreateManyInput | ServiceDailyStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceDailyStats update
   */
  export type ServiceDailyStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceDailyStats.
     */
    data: XOR<ServiceDailyStatsUpdateInput, ServiceDailyStatsUncheckedUpdateInput>
    /**
     * Choose, which ServiceDailyStats to update.
     */
    where: ServiceDailyStatsWhereUniqueInput
  }

  /**
   * ServiceDailyStats updateMany
   */
  export type ServiceDailyStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceDailyStats.
     */
    data: XOR<ServiceDailyStatsUpdateManyMutationInput, ServiceDailyStatsUncheckedUpdateManyInput>
    /**
     * Filter which ServiceDailyStats to update
     */
    where?: ServiceDailyStatsWhereInput
    /**
     * Limit how many ServiceDailyStats to update.
     */
    limit?: number
  }

  /**
   * ServiceDailyStats updateManyAndReturn
   */
  export type ServiceDailyStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * The data used to update ServiceDailyStats.
     */
    data: XOR<ServiceDailyStatsUpdateManyMutationInput, ServiceDailyStatsUncheckedUpdateManyInput>
    /**
     * Filter which ServiceDailyStats to update
     */
    where?: ServiceDailyStatsWhereInput
    /**
     * Limit how many ServiceDailyStats to update.
     */
    limit?: number
  }

  /**
   * ServiceDailyStats upsert
   */
  export type ServiceDailyStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceDailyStats to update in case it exists.
     */
    where: ServiceDailyStatsWhereUniqueInput
    /**
     * In case the ServiceDailyStats found by the `where` argument doesn't exist, create a new ServiceDailyStats with this data.
     */
    create: XOR<ServiceDailyStatsCreateInput, ServiceDailyStatsUncheckedCreateInput>
    /**
     * In case the ServiceDailyStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceDailyStatsUpdateInput, ServiceDailyStatsUncheckedUpdateInput>
  }

  /**
   * ServiceDailyStats delete
   */
  export type ServiceDailyStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
    /**
     * Filter which ServiceDailyStats to delete.
     */
    where: ServiceDailyStatsWhereUniqueInput
  }

  /**
   * ServiceDailyStats deleteMany
   */
  export type ServiceDailyStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceDailyStats to delete
     */
    where?: ServiceDailyStatsWhereInput
    /**
     * Limit how many ServiceDailyStats to delete.
     */
    limit?: number
  }

  /**
   * ServiceDailyStats without action
   */
  export type ServiceDailyStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceDailyStats
     */
    select?: ServiceDailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceDailyStats
     */
    omit?: ServiceDailyStatsOmit<ExtArgs> | null
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


  export const LogEntryScalarFieldEnum: {
    id: 'id',
    logHash: 'logHash',
    service: 'service',
    level: 'level',
    message: 'message',
    context: 'context',
    traceId: 'traceId',
    spanId: 'spanId',
    host: 'host',
    source: 'source',
    pod: 'pod',
    namespace: 'namespace',
    image: 'image',
    timestamp: 'timestamp',
    createdAt: 'createdAt'
  };

  export type LogEntryScalarFieldEnum = (typeof LogEntryScalarFieldEnum)[keyof typeof LogEntryScalarFieldEnum]


  export const LogIngestionTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    service: 'service',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type LogIngestionTokenScalarFieldEnum = (typeof LogIngestionTokenScalarFieldEnum)[keyof typeof LogIngestionTokenScalarFieldEnum]


  export const StatisticsHourlyScalarFieldEnum: {
    id: 'id',
    service: 'service',
    hour: 'hour',
    avgCpu: 'avgCpu',
    avgMemory: 'avgMemory',
    peakCpu: 'peakCpu',
    peakMemory: 'peakMemory',
    logsErrors: 'logsErrors',
    logsWarnings: 'logsWarnings',
    logsInfo: 'logsInfo',
    failures: 'failures',
    recoveries: 'recoveries',
    crashLoops: 'crashLoops',
    anomalies: 'anomalies',
    createdAt: 'createdAt'
  };

  export type StatisticsHourlyScalarFieldEnum = (typeof StatisticsHourlyScalarFieldEnum)[keyof typeof StatisticsHourlyScalarFieldEnum]


  export const StatisticsDailyScalarFieldEnum: {
    id: 'id',
    service: 'service',
    day: 'day',
    avgCpu: 'avgCpu',
    avgMemory: 'avgMemory',
    errors: 'errors',
    warnings: 'warnings',
    info: 'info',
    failures: 'failures',
    recoveries: 'recoveries',
    crashLoops: 'crashLoops',
    uptimePercentage: 'uptimePercentage',
    anomalyCount: 'anomalyCount',
    createdAt: 'createdAt'
  };

  export type StatisticsDailyScalarFieldEnum = (typeof StatisticsDailyScalarFieldEnum)[keyof typeof StatisticsDailyScalarFieldEnum]


  export const ServiceRiskScalarFieldEnum: {
    id: 'id',
    service: 'service',
    riskScore: 'riskScore',
    level: 'level',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type ServiceRiskScalarFieldEnum = (typeof ServiceRiskScalarFieldEnum)[keyof typeof ServiceRiskScalarFieldEnum]


  export const RootCauseReportScalarFieldEnum: {
    id: 'id',
    service: 'service',
    cause: 'cause',
    confidence: 'confidence',
    createdAt: 'createdAt'
  };

  export type RootCauseReportScalarFieldEnum = (typeof RootCauseReportScalarFieldEnum)[keyof typeof RootCauseReportScalarFieldEnum]


  export const FailurePredictionScalarFieldEnum: {
    id: 'id',
    service: 'service',
    windowHours: 'windowHours',
    probability: 'probability',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type FailurePredictionScalarFieldEnum = (typeof FailurePredictionScalarFieldEnum)[keyof typeof FailurePredictionScalarFieldEnum]


  export const ServiceDailyStatsScalarFieldEnum: {
    id: 'id',
    service: 'service',
    date: 'date',
    avgCpu: 'avgCpu',
    avgMemory: 'avgMemory',
    failures: 'failures',
    anomalies: 'anomalies',
    createdAt: 'createdAt'
  };

  export type ServiceDailyStatsScalarFieldEnum = (typeof ServiceDailyStatsScalarFieldEnum)[keyof typeof ServiceDailyStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
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

  export type LogEntryWhereInput = {
    AND?: LogEntryWhereInput | LogEntryWhereInput[]
    OR?: LogEntryWhereInput[]
    NOT?: LogEntryWhereInput | LogEntryWhereInput[]
    id?: StringFilter<"LogEntry"> | string
    logHash?: StringNullableFilter<"LogEntry"> | string | null
    service?: StringFilter<"LogEntry"> | string
    level?: StringFilter<"LogEntry"> | string
    message?: StringFilter<"LogEntry"> | string
    context?: JsonNullableFilter<"LogEntry">
    traceId?: StringNullableFilter<"LogEntry"> | string | null
    spanId?: StringNullableFilter<"LogEntry"> | string | null
    host?: StringNullableFilter<"LogEntry"> | string | null
    source?: StringNullableFilter<"LogEntry"> | string | null
    pod?: StringNullableFilter<"LogEntry"> | string | null
    namespace?: StringNullableFilter<"LogEntry"> | string | null
    image?: StringNullableFilter<"LogEntry"> | string | null
    timestamp?: DateTimeFilter<"LogEntry"> | Date | string
    createdAt?: DateTimeFilter<"LogEntry"> | Date | string
  }

  export type LogEntryOrderByWithRelationInput = {
    id?: SortOrder
    logHash?: SortOrderInput | SortOrder
    service?: SortOrder
    level?: SortOrder
    message?: SortOrder
    context?: SortOrderInput | SortOrder
    traceId?: SortOrderInput | SortOrder
    spanId?: SortOrderInput | SortOrder
    host?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    pod?: SortOrderInput | SortOrder
    namespace?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LogEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    logHash?: string
    AND?: LogEntryWhereInput | LogEntryWhereInput[]
    OR?: LogEntryWhereInput[]
    NOT?: LogEntryWhereInput | LogEntryWhereInput[]
    service?: StringFilter<"LogEntry"> | string
    level?: StringFilter<"LogEntry"> | string
    message?: StringFilter<"LogEntry"> | string
    context?: JsonNullableFilter<"LogEntry">
    traceId?: StringNullableFilter<"LogEntry"> | string | null
    spanId?: StringNullableFilter<"LogEntry"> | string | null
    host?: StringNullableFilter<"LogEntry"> | string | null
    source?: StringNullableFilter<"LogEntry"> | string | null
    pod?: StringNullableFilter<"LogEntry"> | string | null
    namespace?: StringNullableFilter<"LogEntry"> | string | null
    image?: StringNullableFilter<"LogEntry"> | string | null
    timestamp?: DateTimeFilter<"LogEntry"> | Date | string
    createdAt?: DateTimeFilter<"LogEntry"> | Date | string
  }, "id" | "logHash">

  export type LogEntryOrderByWithAggregationInput = {
    id?: SortOrder
    logHash?: SortOrderInput | SortOrder
    service?: SortOrder
    level?: SortOrder
    message?: SortOrder
    context?: SortOrderInput | SortOrder
    traceId?: SortOrderInput | SortOrder
    spanId?: SortOrderInput | SortOrder
    host?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    pod?: SortOrderInput | SortOrder
    namespace?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    _count?: LogEntryCountOrderByAggregateInput
    _max?: LogEntryMaxOrderByAggregateInput
    _min?: LogEntryMinOrderByAggregateInput
  }

  export type LogEntryScalarWhereWithAggregatesInput = {
    AND?: LogEntryScalarWhereWithAggregatesInput | LogEntryScalarWhereWithAggregatesInput[]
    OR?: LogEntryScalarWhereWithAggregatesInput[]
    NOT?: LogEntryScalarWhereWithAggregatesInput | LogEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogEntry"> | string
    logHash?: StringNullableWithAggregatesFilter<"LogEntry"> | string | null
    service?: StringWithAggregatesFilter<"LogEntry"> | string
    level?: StringWithAggregatesFilter<"LogEntry"> | string
    message?: StringWithAggregatesFilter<"LogEntry"> | string
    context?: JsonNullableWithAggregatesFilter<"LogEntry">
    traceId?: StringNullableWithAggregatesFilter<"LogEntry"> | string | null
    spanId?: StringNullableWithAggregatesFilter<"LogEntry"> | string | null
    host?: StringNullableWithAggregatesFilter<"LogEntry"> | string | null
    source?: StringNullableWithAggregatesFilter<"LogEntry"> | string | null
    pod?: StringNullableWithAggregatesFilter<"LogEntry"> | string | null
    namespace?: StringNullableWithAggregatesFilter<"LogEntry"> | string | null
    image?: StringNullableWithAggregatesFilter<"LogEntry"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"LogEntry"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LogEntry"> | Date | string
  }

  export type LogIngestionTokenWhereInput = {
    AND?: LogIngestionTokenWhereInput | LogIngestionTokenWhereInput[]
    OR?: LogIngestionTokenWhereInput[]
    NOT?: LogIngestionTokenWhereInput | LogIngestionTokenWhereInput[]
    id?: StringFilter<"LogIngestionToken"> | string
    token?: StringFilter<"LogIngestionToken"> | string
    service?: StringFilter<"LogIngestionToken"> | string
    active?: BoolFilter<"LogIngestionToken"> | boolean
    createdAt?: DateTimeFilter<"LogIngestionToken"> | Date | string
  }

  export type LogIngestionTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    service?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type LogIngestionTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: LogIngestionTokenWhereInput | LogIngestionTokenWhereInput[]
    OR?: LogIngestionTokenWhereInput[]
    NOT?: LogIngestionTokenWhereInput | LogIngestionTokenWhereInput[]
    service?: StringFilter<"LogIngestionToken"> | string
    active?: BoolFilter<"LogIngestionToken"> | boolean
    createdAt?: DateTimeFilter<"LogIngestionToken"> | Date | string
  }, "id" | "token">

  export type LogIngestionTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    service?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: LogIngestionTokenCountOrderByAggregateInput
    _max?: LogIngestionTokenMaxOrderByAggregateInput
    _min?: LogIngestionTokenMinOrderByAggregateInput
  }

  export type LogIngestionTokenScalarWhereWithAggregatesInput = {
    AND?: LogIngestionTokenScalarWhereWithAggregatesInput | LogIngestionTokenScalarWhereWithAggregatesInput[]
    OR?: LogIngestionTokenScalarWhereWithAggregatesInput[]
    NOT?: LogIngestionTokenScalarWhereWithAggregatesInput | LogIngestionTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogIngestionToken"> | string
    token?: StringWithAggregatesFilter<"LogIngestionToken"> | string
    service?: StringWithAggregatesFilter<"LogIngestionToken"> | string
    active?: BoolWithAggregatesFilter<"LogIngestionToken"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LogIngestionToken"> | Date | string
  }

  export type StatisticsHourlyWhereInput = {
    AND?: StatisticsHourlyWhereInput | StatisticsHourlyWhereInput[]
    OR?: StatisticsHourlyWhereInput[]
    NOT?: StatisticsHourlyWhereInput | StatisticsHourlyWhereInput[]
    id?: StringFilter<"StatisticsHourly"> | string
    service?: StringFilter<"StatisticsHourly"> | string
    hour?: DateTimeFilter<"StatisticsHourly"> | Date | string
    avgCpu?: FloatFilter<"StatisticsHourly"> | number
    avgMemory?: FloatFilter<"StatisticsHourly"> | number
    peakCpu?: FloatFilter<"StatisticsHourly"> | number
    peakMemory?: FloatFilter<"StatisticsHourly"> | number
    logsErrors?: IntFilter<"StatisticsHourly"> | number
    logsWarnings?: IntFilter<"StatisticsHourly"> | number
    logsInfo?: IntFilter<"StatisticsHourly"> | number
    failures?: IntFilter<"StatisticsHourly"> | number
    recoveries?: IntFilter<"StatisticsHourly"> | number
    crashLoops?: IntFilter<"StatisticsHourly"> | number
    anomalies?: IntFilter<"StatisticsHourly"> | number
    createdAt?: DateTimeFilter<"StatisticsHourly"> | Date | string
  }

  export type StatisticsHourlyOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    hour?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    peakCpu?: SortOrder
    peakMemory?: SortOrder
    logsErrors?: SortOrder
    logsWarnings?: SortOrder
    logsInfo?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticsHourlyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatisticsHourlyWhereInput | StatisticsHourlyWhereInput[]
    OR?: StatisticsHourlyWhereInput[]
    NOT?: StatisticsHourlyWhereInput | StatisticsHourlyWhereInput[]
    service?: StringFilter<"StatisticsHourly"> | string
    hour?: DateTimeFilter<"StatisticsHourly"> | Date | string
    avgCpu?: FloatFilter<"StatisticsHourly"> | number
    avgMemory?: FloatFilter<"StatisticsHourly"> | number
    peakCpu?: FloatFilter<"StatisticsHourly"> | number
    peakMemory?: FloatFilter<"StatisticsHourly"> | number
    logsErrors?: IntFilter<"StatisticsHourly"> | number
    logsWarnings?: IntFilter<"StatisticsHourly"> | number
    logsInfo?: IntFilter<"StatisticsHourly"> | number
    failures?: IntFilter<"StatisticsHourly"> | number
    recoveries?: IntFilter<"StatisticsHourly"> | number
    crashLoops?: IntFilter<"StatisticsHourly"> | number
    anomalies?: IntFilter<"StatisticsHourly"> | number
    createdAt?: DateTimeFilter<"StatisticsHourly"> | Date | string
  }, "id">

  export type StatisticsHourlyOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    hour?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    peakCpu?: SortOrder
    peakMemory?: SortOrder
    logsErrors?: SortOrder
    logsWarnings?: SortOrder
    logsInfo?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
    _count?: StatisticsHourlyCountOrderByAggregateInput
    _avg?: StatisticsHourlyAvgOrderByAggregateInput
    _max?: StatisticsHourlyMaxOrderByAggregateInput
    _min?: StatisticsHourlyMinOrderByAggregateInput
    _sum?: StatisticsHourlySumOrderByAggregateInput
  }

  export type StatisticsHourlyScalarWhereWithAggregatesInput = {
    AND?: StatisticsHourlyScalarWhereWithAggregatesInput | StatisticsHourlyScalarWhereWithAggregatesInput[]
    OR?: StatisticsHourlyScalarWhereWithAggregatesInput[]
    NOT?: StatisticsHourlyScalarWhereWithAggregatesInput | StatisticsHourlyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatisticsHourly"> | string
    service?: StringWithAggregatesFilter<"StatisticsHourly"> | string
    hour?: DateTimeWithAggregatesFilter<"StatisticsHourly"> | Date | string
    avgCpu?: FloatWithAggregatesFilter<"StatisticsHourly"> | number
    avgMemory?: FloatWithAggregatesFilter<"StatisticsHourly"> | number
    peakCpu?: FloatWithAggregatesFilter<"StatisticsHourly"> | number
    peakMemory?: FloatWithAggregatesFilter<"StatisticsHourly"> | number
    logsErrors?: IntWithAggregatesFilter<"StatisticsHourly"> | number
    logsWarnings?: IntWithAggregatesFilter<"StatisticsHourly"> | number
    logsInfo?: IntWithAggregatesFilter<"StatisticsHourly"> | number
    failures?: IntWithAggregatesFilter<"StatisticsHourly"> | number
    recoveries?: IntWithAggregatesFilter<"StatisticsHourly"> | number
    crashLoops?: IntWithAggregatesFilter<"StatisticsHourly"> | number
    anomalies?: IntWithAggregatesFilter<"StatisticsHourly"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StatisticsHourly"> | Date | string
  }

  export type StatisticsDailyWhereInput = {
    AND?: StatisticsDailyWhereInput | StatisticsDailyWhereInput[]
    OR?: StatisticsDailyWhereInput[]
    NOT?: StatisticsDailyWhereInput | StatisticsDailyWhereInput[]
    id?: StringFilter<"StatisticsDaily"> | string
    service?: StringFilter<"StatisticsDaily"> | string
    day?: DateTimeFilter<"StatisticsDaily"> | Date | string
    avgCpu?: FloatFilter<"StatisticsDaily"> | number
    avgMemory?: FloatFilter<"StatisticsDaily"> | number
    errors?: IntFilter<"StatisticsDaily"> | number
    warnings?: IntFilter<"StatisticsDaily"> | number
    info?: IntFilter<"StatisticsDaily"> | number
    failures?: IntFilter<"StatisticsDaily"> | number
    recoveries?: IntFilter<"StatisticsDaily"> | number
    crashLoops?: IntFilter<"StatisticsDaily"> | number
    uptimePercentage?: FloatFilter<"StatisticsDaily"> | number
    anomalyCount?: IntFilter<"StatisticsDaily"> | number
    createdAt?: DateTimeFilter<"StatisticsDaily"> | Date | string
  }

  export type StatisticsDailyOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    day?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    info?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    uptimePercentage?: SortOrder
    anomalyCount?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticsDailyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatisticsDailyWhereInput | StatisticsDailyWhereInput[]
    OR?: StatisticsDailyWhereInput[]
    NOT?: StatisticsDailyWhereInput | StatisticsDailyWhereInput[]
    service?: StringFilter<"StatisticsDaily"> | string
    day?: DateTimeFilter<"StatisticsDaily"> | Date | string
    avgCpu?: FloatFilter<"StatisticsDaily"> | number
    avgMemory?: FloatFilter<"StatisticsDaily"> | number
    errors?: IntFilter<"StatisticsDaily"> | number
    warnings?: IntFilter<"StatisticsDaily"> | number
    info?: IntFilter<"StatisticsDaily"> | number
    failures?: IntFilter<"StatisticsDaily"> | number
    recoveries?: IntFilter<"StatisticsDaily"> | number
    crashLoops?: IntFilter<"StatisticsDaily"> | number
    uptimePercentage?: FloatFilter<"StatisticsDaily"> | number
    anomalyCount?: IntFilter<"StatisticsDaily"> | number
    createdAt?: DateTimeFilter<"StatisticsDaily"> | Date | string
  }, "id">

  export type StatisticsDailyOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    day?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    info?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    uptimePercentage?: SortOrder
    anomalyCount?: SortOrder
    createdAt?: SortOrder
    _count?: StatisticsDailyCountOrderByAggregateInput
    _avg?: StatisticsDailyAvgOrderByAggregateInput
    _max?: StatisticsDailyMaxOrderByAggregateInput
    _min?: StatisticsDailyMinOrderByAggregateInput
    _sum?: StatisticsDailySumOrderByAggregateInput
  }

  export type StatisticsDailyScalarWhereWithAggregatesInput = {
    AND?: StatisticsDailyScalarWhereWithAggregatesInput | StatisticsDailyScalarWhereWithAggregatesInput[]
    OR?: StatisticsDailyScalarWhereWithAggregatesInput[]
    NOT?: StatisticsDailyScalarWhereWithAggregatesInput | StatisticsDailyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatisticsDaily"> | string
    service?: StringWithAggregatesFilter<"StatisticsDaily"> | string
    day?: DateTimeWithAggregatesFilter<"StatisticsDaily"> | Date | string
    avgCpu?: FloatWithAggregatesFilter<"StatisticsDaily"> | number
    avgMemory?: FloatWithAggregatesFilter<"StatisticsDaily"> | number
    errors?: IntWithAggregatesFilter<"StatisticsDaily"> | number
    warnings?: IntWithAggregatesFilter<"StatisticsDaily"> | number
    info?: IntWithAggregatesFilter<"StatisticsDaily"> | number
    failures?: IntWithAggregatesFilter<"StatisticsDaily"> | number
    recoveries?: IntWithAggregatesFilter<"StatisticsDaily"> | number
    crashLoops?: IntWithAggregatesFilter<"StatisticsDaily"> | number
    uptimePercentage?: FloatWithAggregatesFilter<"StatisticsDaily"> | number
    anomalyCount?: IntWithAggregatesFilter<"StatisticsDaily"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StatisticsDaily"> | Date | string
  }

  export type ServiceRiskWhereInput = {
    AND?: ServiceRiskWhereInput | ServiceRiskWhereInput[]
    OR?: ServiceRiskWhereInput[]
    NOT?: ServiceRiskWhereInput | ServiceRiskWhereInput[]
    id?: StringFilter<"ServiceRisk"> | string
    service?: StringFilter<"ServiceRisk"> | string
    riskScore?: IntFilter<"ServiceRisk"> | number
    level?: StringFilter<"ServiceRisk"> | string
    reason?: StringNullableFilter<"ServiceRisk"> | string | null
    createdAt?: DateTimeFilter<"ServiceRisk"> | Date | string
  }

  export type ServiceRiskOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    riskScore?: SortOrder
    level?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ServiceRiskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceRiskWhereInput | ServiceRiskWhereInput[]
    OR?: ServiceRiskWhereInput[]
    NOT?: ServiceRiskWhereInput | ServiceRiskWhereInput[]
    service?: StringFilter<"ServiceRisk"> | string
    riskScore?: IntFilter<"ServiceRisk"> | number
    level?: StringFilter<"ServiceRisk"> | string
    reason?: StringNullableFilter<"ServiceRisk"> | string | null
    createdAt?: DateTimeFilter<"ServiceRisk"> | Date | string
  }, "id">

  export type ServiceRiskOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    riskScore?: SortOrder
    level?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ServiceRiskCountOrderByAggregateInput
    _avg?: ServiceRiskAvgOrderByAggregateInput
    _max?: ServiceRiskMaxOrderByAggregateInput
    _min?: ServiceRiskMinOrderByAggregateInput
    _sum?: ServiceRiskSumOrderByAggregateInput
  }

  export type ServiceRiskScalarWhereWithAggregatesInput = {
    AND?: ServiceRiskScalarWhereWithAggregatesInput | ServiceRiskScalarWhereWithAggregatesInput[]
    OR?: ServiceRiskScalarWhereWithAggregatesInput[]
    NOT?: ServiceRiskScalarWhereWithAggregatesInput | ServiceRiskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceRisk"> | string
    service?: StringWithAggregatesFilter<"ServiceRisk"> | string
    riskScore?: IntWithAggregatesFilter<"ServiceRisk"> | number
    level?: StringWithAggregatesFilter<"ServiceRisk"> | string
    reason?: StringNullableWithAggregatesFilter<"ServiceRisk"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ServiceRisk"> | Date | string
  }

  export type RootCauseReportWhereInput = {
    AND?: RootCauseReportWhereInput | RootCauseReportWhereInput[]
    OR?: RootCauseReportWhereInput[]
    NOT?: RootCauseReportWhereInput | RootCauseReportWhereInput[]
    id?: StringFilter<"RootCauseReport"> | string
    service?: StringFilter<"RootCauseReport"> | string
    cause?: StringFilter<"RootCauseReport"> | string
    confidence?: IntFilter<"RootCauseReport"> | number
    createdAt?: DateTimeFilter<"RootCauseReport"> | Date | string
  }

  export type RootCauseReportOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    cause?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type RootCauseReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RootCauseReportWhereInput | RootCauseReportWhereInput[]
    OR?: RootCauseReportWhereInput[]
    NOT?: RootCauseReportWhereInput | RootCauseReportWhereInput[]
    service?: StringFilter<"RootCauseReport"> | string
    cause?: StringFilter<"RootCauseReport"> | string
    confidence?: IntFilter<"RootCauseReport"> | number
    createdAt?: DateTimeFilter<"RootCauseReport"> | Date | string
  }, "id">

  export type RootCauseReportOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    cause?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    _count?: RootCauseReportCountOrderByAggregateInput
    _avg?: RootCauseReportAvgOrderByAggregateInput
    _max?: RootCauseReportMaxOrderByAggregateInput
    _min?: RootCauseReportMinOrderByAggregateInput
    _sum?: RootCauseReportSumOrderByAggregateInput
  }

  export type RootCauseReportScalarWhereWithAggregatesInput = {
    AND?: RootCauseReportScalarWhereWithAggregatesInput | RootCauseReportScalarWhereWithAggregatesInput[]
    OR?: RootCauseReportScalarWhereWithAggregatesInput[]
    NOT?: RootCauseReportScalarWhereWithAggregatesInput | RootCauseReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RootCauseReport"> | string
    service?: StringWithAggregatesFilter<"RootCauseReport"> | string
    cause?: StringWithAggregatesFilter<"RootCauseReport"> | string
    confidence?: IntWithAggregatesFilter<"RootCauseReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RootCauseReport"> | Date | string
  }

  export type FailurePredictionWhereInput = {
    AND?: FailurePredictionWhereInput | FailurePredictionWhereInput[]
    OR?: FailurePredictionWhereInput[]
    NOT?: FailurePredictionWhereInput | FailurePredictionWhereInput[]
    id?: StringFilter<"FailurePrediction"> | string
    service?: StringFilter<"FailurePrediction"> | string
    windowHours?: IntFilter<"FailurePrediction"> | number
    probability?: FloatFilter<"FailurePrediction"> | number
    reason?: StringNullableFilter<"FailurePrediction"> | string | null
    createdAt?: DateTimeFilter<"FailurePrediction"> | Date | string
  }

  export type FailurePredictionOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    windowHours?: SortOrder
    probability?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type FailurePredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FailurePredictionWhereInput | FailurePredictionWhereInput[]
    OR?: FailurePredictionWhereInput[]
    NOT?: FailurePredictionWhereInput | FailurePredictionWhereInput[]
    service?: StringFilter<"FailurePrediction"> | string
    windowHours?: IntFilter<"FailurePrediction"> | number
    probability?: FloatFilter<"FailurePrediction"> | number
    reason?: StringNullableFilter<"FailurePrediction"> | string | null
    createdAt?: DateTimeFilter<"FailurePrediction"> | Date | string
  }, "id">

  export type FailurePredictionOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    windowHours?: SortOrder
    probability?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FailurePredictionCountOrderByAggregateInput
    _avg?: FailurePredictionAvgOrderByAggregateInput
    _max?: FailurePredictionMaxOrderByAggregateInput
    _min?: FailurePredictionMinOrderByAggregateInput
    _sum?: FailurePredictionSumOrderByAggregateInput
  }

  export type FailurePredictionScalarWhereWithAggregatesInput = {
    AND?: FailurePredictionScalarWhereWithAggregatesInput | FailurePredictionScalarWhereWithAggregatesInput[]
    OR?: FailurePredictionScalarWhereWithAggregatesInput[]
    NOT?: FailurePredictionScalarWhereWithAggregatesInput | FailurePredictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FailurePrediction"> | string
    service?: StringWithAggregatesFilter<"FailurePrediction"> | string
    windowHours?: IntWithAggregatesFilter<"FailurePrediction"> | number
    probability?: FloatWithAggregatesFilter<"FailurePrediction"> | number
    reason?: StringNullableWithAggregatesFilter<"FailurePrediction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FailurePrediction"> | Date | string
  }

  export type ServiceDailyStatsWhereInput = {
    AND?: ServiceDailyStatsWhereInput | ServiceDailyStatsWhereInput[]
    OR?: ServiceDailyStatsWhereInput[]
    NOT?: ServiceDailyStatsWhereInput | ServiceDailyStatsWhereInput[]
    id?: StringFilter<"ServiceDailyStats"> | string
    service?: StringFilter<"ServiceDailyStats"> | string
    date?: DateTimeFilter<"ServiceDailyStats"> | Date | string
    avgCpu?: FloatFilter<"ServiceDailyStats"> | number
    avgMemory?: FloatFilter<"ServiceDailyStats"> | number
    failures?: IntFilter<"ServiceDailyStats"> | number
    anomalies?: IntFilter<"ServiceDailyStats"> | number
    createdAt?: DateTimeFilter<"ServiceDailyStats"> | Date | string
  }

  export type ServiceDailyStatsOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    date?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    failures?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceDailyStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceDailyStatsWhereInput | ServiceDailyStatsWhereInput[]
    OR?: ServiceDailyStatsWhereInput[]
    NOT?: ServiceDailyStatsWhereInput | ServiceDailyStatsWhereInput[]
    service?: StringFilter<"ServiceDailyStats"> | string
    date?: DateTimeFilter<"ServiceDailyStats"> | Date | string
    avgCpu?: FloatFilter<"ServiceDailyStats"> | number
    avgMemory?: FloatFilter<"ServiceDailyStats"> | number
    failures?: IntFilter<"ServiceDailyStats"> | number
    anomalies?: IntFilter<"ServiceDailyStats"> | number
    createdAt?: DateTimeFilter<"ServiceDailyStats"> | Date | string
  }, "id">

  export type ServiceDailyStatsOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    date?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    failures?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceDailyStatsCountOrderByAggregateInput
    _avg?: ServiceDailyStatsAvgOrderByAggregateInput
    _max?: ServiceDailyStatsMaxOrderByAggregateInput
    _min?: ServiceDailyStatsMinOrderByAggregateInput
    _sum?: ServiceDailyStatsSumOrderByAggregateInput
  }

  export type ServiceDailyStatsScalarWhereWithAggregatesInput = {
    AND?: ServiceDailyStatsScalarWhereWithAggregatesInput | ServiceDailyStatsScalarWhereWithAggregatesInput[]
    OR?: ServiceDailyStatsScalarWhereWithAggregatesInput[]
    NOT?: ServiceDailyStatsScalarWhereWithAggregatesInput | ServiceDailyStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceDailyStats"> | string
    service?: StringWithAggregatesFilter<"ServiceDailyStats"> | string
    date?: DateTimeWithAggregatesFilter<"ServiceDailyStats"> | Date | string
    avgCpu?: FloatWithAggregatesFilter<"ServiceDailyStats"> | number
    avgMemory?: FloatWithAggregatesFilter<"ServiceDailyStats"> | number
    failures?: IntWithAggregatesFilter<"ServiceDailyStats"> | number
    anomalies?: IntWithAggregatesFilter<"ServiceDailyStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ServiceDailyStats"> | Date | string
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

  export type LogEntryCreateInput = {
    id?: string
    logHash?: string | null
    service: string
    level: string
    message: string
    context?: NullableJsonNullValueInput | InputJsonValue
    traceId?: string | null
    spanId?: string | null
    host?: string | null
    source?: string | null
    pod?: string | null
    namespace?: string | null
    image?: string | null
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LogEntryUncheckedCreateInput = {
    id?: string
    logHash?: string | null
    service: string
    level: string
    message: string
    context?: NullableJsonNullValueInput | InputJsonValue
    traceId?: string | null
    spanId?: string | null
    host?: string | null
    source?: string | null
    pod?: string | null
    namespace?: string | null
    image?: string | null
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LogEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: NullableStringFieldUpdateOperationsInput | string | null
    host?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    pod?: NullableStringFieldUpdateOperationsInput | string | null
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: NullableStringFieldUpdateOperationsInput | string | null
    host?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    pod?: NullableStringFieldUpdateOperationsInput | string | null
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogEntryCreateManyInput = {
    id?: string
    logHash?: string | null
    service: string
    level: string
    message: string
    context?: NullableJsonNullValueInput | InputJsonValue
    traceId?: string | null
    spanId?: string | null
    host?: string | null
    source?: string | null
    pod?: string | null
    namespace?: string | null
    image?: string | null
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LogEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: NullableStringFieldUpdateOperationsInput | string | null
    host?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    pod?: NullableStringFieldUpdateOperationsInput | string | null
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logHash?: NullableStringFieldUpdateOperationsInput | string | null
    service?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    traceId?: NullableStringFieldUpdateOperationsInput | string | null
    spanId?: NullableStringFieldUpdateOperationsInput | string | null
    host?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    pod?: NullableStringFieldUpdateOperationsInput | string | null
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogIngestionTokenCreateInput = {
    id?: string
    token: string
    service: string
    active?: boolean
    createdAt?: Date | string
  }

  export type LogIngestionTokenUncheckedCreateInput = {
    id?: string
    token: string
    service: string
    active?: boolean
    createdAt?: Date | string
  }

  export type LogIngestionTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogIngestionTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogIngestionTokenCreateManyInput = {
    id?: string
    token: string
    service: string
    active?: boolean
    createdAt?: Date | string
  }

  export type LogIngestionTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogIngestionTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticsHourlyCreateInput = {
    id?: string
    service: string
    hour: Date | string
    avgCpu: number
    avgMemory: number
    peakCpu: number
    peakMemory: number
    logsErrors: number
    logsWarnings: number
    logsInfo: number
    failures: number
    recoveries: number
    crashLoops: number
    anomalies: number
    createdAt?: Date | string
  }

  export type StatisticsHourlyUncheckedCreateInput = {
    id?: string
    service: string
    hour: Date | string
    avgCpu: number
    avgMemory: number
    peakCpu: number
    peakMemory: number
    logsErrors: number
    logsWarnings: number
    logsInfo: number
    failures: number
    recoveries: number
    crashLoops: number
    anomalies: number
    createdAt?: Date | string
  }

  export type StatisticsHourlyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    hour?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    peakCpu?: FloatFieldUpdateOperationsInput | number
    peakMemory?: FloatFieldUpdateOperationsInput | number
    logsErrors?: IntFieldUpdateOperationsInput | number
    logsWarnings?: IntFieldUpdateOperationsInput | number
    logsInfo?: IntFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    recoveries?: IntFieldUpdateOperationsInput | number
    crashLoops?: IntFieldUpdateOperationsInput | number
    anomalies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticsHourlyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    hour?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    peakCpu?: FloatFieldUpdateOperationsInput | number
    peakMemory?: FloatFieldUpdateOperationsInput | number
    logsErrors?: IntFieldUpdateOperationsInput | number
    logsWarnings?: IntFieldUpdateOperationsInput | number
    logsInfo?: IntFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    recoveries?: IntFieldUpdateOperationsInput | number
    crashLoops?: IntFieldUpdateOperationsInput | number
    anomalies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticsHourlyCreateManyInput = {
    id?: string
    service: string
    hour: Date | string
    avgCpu: number
    avgMemory: number
    peakCpu: number
    peakMemory: number
    logsErrors: number
    logsWarnings: number
    logsInfo: number
    failures: number
    recoveries: number
    crashLoops: number
    anomalies: number
    createdAt?: Date | string
  }

  export type StatisticsHourlyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    hour?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    peakCpu?: FloatFieldUpdateOperationsInput | number
    peakMemory?: FloatFieldUpdateOperationsInput | number
    logsErrors?: IntFieldUpdateOperationsInput | number
    logsWarnings?: IntFieldUpdateOperationsInput | number
    logsInfo?: IntFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    recoveries?: IntFieldUpdateOperationsInput | number
    crashLoops?: IntFieldUpdateOperationsInput | number
    anomalies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticsHourlyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    hour?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    peakCpu?: FloatFieldUpdateOperationsInput | number
    peakMemory?: FloatFieldUpdateOperationsInput | number
    logsErrors?: IntFieldUpdateOperationsInput | number
    logsWarnings?: IntFieldUpdateOperationsInput | number
    logsInfo?: IntFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    recoveries?: IntFieldUpdateOperationsInput | number
    crashLoops?: IntFieldUpdateOperationsInput | number
    anomalies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticsDailyCreateInput = {
    id?: string
    service: string
    day: Date | string
    avgCpu: number
    avgMemory: number
    errors: number
    warnings: number
    info: number
    failures: number
    recoveries: number
    crashLoops: number
    uptimePercentage: number
    anomalyCount: number
    createdAt?: Date | string
  }

  export type StatisticsDailyUncheckedCreateInput = {
    id?: string
    service: string
    day: Date | string
    avgCpu: number
    avgMemory: number
    errors: number
    warnings: number
    info: number
    failures: number
    recoveries: number
    crashLoops: number
    uptimePercentage: number
    anomalyCount: number
    createdAt?: Date | string
  }

  export type StatisticsDailyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    warnings?: IntFieldUpdateOperationsInput | number
    info?: IntFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    recoveries?: IntFieldUpdateOperationsInput | number
    crashLoops?: IntFieldUpdateOperationsInput | number
    uptimePercentage?: FloatFieldUpdateOperationsInput | number
    anomalyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticsDailyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    warnings?: IntFieldUpdateOperationsInput | number
    info?: IntFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    recoveries?: IntFieldUpdateOperationsInput | number
    crashLoops?: IntFieldUpdateOperationsInput | number
    uptimePercentage?: FloatFieldUpdateOperationsInput | number
    anomalyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticsDailyCreateManyInput = {
    id?: string
    service: string
    day: Date | string
    avgCpu: number
    avgMemory: number
    errors: number
    warnings: number
    info: number
    failures: number
    recoveries: number
    crashLoops: number
    uptimePercentage: number
    anomalyCount: number
    createdAt?: Date | string
  }

  export type StatisticsDailyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    warnings?: IntFieldUpdateOperationsInput | number
    info?: IntFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    recoveries?: IntFieldUpdateOperationsInput | number
    crashLoops?: IntFieldUpdateOperationsInput | number
    uptimePercentage?: FloatFieldUpdateOperationsInput | number
    anomalyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticsDailyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    warnings?: IntFieldUpdateOperationsInput | number
    info?: IntFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    recoveries?: IntFieldUpdateOperationsInput | number
    crashLoops?: IntFieldUpdateOperationsInput | number
    uptimePercentage?: FloatFieldUpdateOperationsInput | number
    anomalyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRiskCreateInput = {
    id?: string
    service: string
    riskScore: number
    level: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ServiceRiskUncheckedCreateInput = {
    id?: string
    service: string
    riskScore: number
    level: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ServiceRiskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    riskScore?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRiskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    riskScore?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRiskCreateManyInput = {
    id?: string
    service: string
    riskScore: number
    level: string
    reason?: string | null
    createdAt?: Date | string
  }

  export type ServiceRiskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    riskScore?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRiskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    riskScore?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RootCauseReportCreateInput = {
    id?: string
    service: string
    cause: string
    confidence: number
    createdAt?: Date | string
  }

  export type RootCauseReportUncheckedCreateInput = {
    id?: string
    service: string
    cause: string
    confidence: number
    createdAt?: Date | string
  }

  export type RootCauseReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cause?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RootCauseReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cause?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RootCauseReportCreateManyInput = {
    id?: string
    service: string
    cause: string
    confidence: number
    createdAt?: Date | string
  }

  export type RootCauseReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cause?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RootCauseReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    cause?: StringFieldUpdateOperationsInput | string
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailurePredictionCreateInput = {
    id?: string
    service: string
    windowHours: number
    probability: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type FailurePredictionUncheckedCreateInput = {
    id?: string
    service: string
    windowHours: number
    probability: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type FailurePredictionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    windowHours?: IntFieldUpdateOperationsInput | number
    probability?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailurePredictionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    windowHours?: IntFieldUpdateOperationsInput | number
    probability?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailurePredictionCreateManyInput = {
    id?: string
    service: string
    windowHours: number
    probability: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type FailurePredictionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    windowHours?: IntFieldUpdateOperationsInput | number
    probability?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailurePredictionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    windowHours?: IntFieldUpdateOperationsInput | number
    probability?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDailyStatsCreateInput = {
    id?: string
    service: string
    date: Date | string
    avgCpu: number
    avgMemory: number
    failures: number
    anomalies: number
    createdAt?: Date | string
  }

  export type ServiceDailyStatsUncheckedCreateInput = {
    id?: string
    service: string
    date: Date | string
    avgCpu: number
    avgMemory: number
    failures: number
    anomalies: number
    createdAt?: Date | string
  }

  export type ServiceDailyStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    anomalies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDailyStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    anomalies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDailyStatsCreateManyInput = {
    id?: string
    service: string
    date: Date | string
    avgCpu: number
    avgMemory: number
    failures: number
    anomalies: number
    createdAt?: Date | string
  }

  export type ServiceDailyStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    anomalies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceDailyStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    avgCpu?: FloatFieldUpdateOperationsInput | number
    avgMemory?: FloatFieldUpdateOperationsInput | number
    failures?: IntFieldUpdateOperationsInput | number
    anomalies?: IntFieldUpdateOperationsInput | number
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type LogEntryCountOrderByAggregateInput = {
    id?: SortOrder
    logHash?: SortOrder
    service?: SortOrder
    level?: SortOrder
    message?: SortOrder
    context?: SortOrder
    traceId?: SortOrder
    spanId?: SortOrder
    host?: SortOrder
    source?: SortOrder
    pod?: SortOrder
    namespace?: SortOrder
    image?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LogEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    logHash?: SortOrder
    service?: SortOrder
    level?: SortOrder
    message?: SortOrder
    traceId?: SortOrder
    spanId?: SortOrder
    host?: SortOrder
    source?: SortOrder
    pod?: SortOrder
    namespace?: SortOrder
    image?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LogEntryMinOrderByAggregateInput = {
    id?: SortOrder
    logHash?: SortOrder
    service?: SortOrder
    level?: SortOrder
    message?: SortOrder
    traceId?: SortOrder
    spanId?: SortOrder
    host?: SortOrder
    source?: SortOrder
    pod?: SortOrder
    namespace?: SortOrder
    image?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LogIngestionTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    service?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type LogIngestionTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    service?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type LogIngestionTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    service?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StatisticsHourlyCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    hour?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    peakCpu?: SortOrder
    peakMemory?: SortOrder
    logsErrors?: SortOrder
    logsWarnings?: SortOrder
    logsInfo?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticsHourlyAvgOrderByAggregateInput = {
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    peakCpu?: SortOrder
    peakMemory?: SortOrder
    logsErrors?: SortOrder
    logsWarnings?: SortOrder
    logsInfo?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    anomalies?: SortOrder
  }

  export type StatisticsHourlyMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    hour?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    peakCpu?: SortOrder
    peakMemory?: SortOrder
    logsErrors?: SortOrder
    logsWarnings?: SortOrder
    logsInfo?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticsHourlyMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    hour?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    peakCpu?: SortOrder
    peakMemory?: SortOrder
    logsErrors?: SortOrder
    logsWarnings?: SortOrder
    logsInfo?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticsHourlySumOrderByAggregateInput = {
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    peakCpu?: SortOrder
    peakMemory?: SortOrder
    logsErrors?: SortOrder
    logsWarnings?: SortOrder
    logsInfo?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    anomalies?: SortOrder
  }

  export type StatisticsDailyCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    day?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    info?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    uptimePercentage?: SortOrder
    anomalyCount?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticsDailyAvgOrderByAggregateInput = {
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    info?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    uptimePercentage?: SortOrder
    anomalyCount?: SortOrder
  }

  export type StatisticsDailyMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    day?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    info?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    uptimePercentage?: SortOrder
    anomalyCount?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticsDailyMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    day?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    info?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    uptimePercentage?: SortOrder
    anomalyCount?: SortOrder
    createdAt?: SortOrder
  }

  export type StatisticsDailySumOrderByAggregateInput = {
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    info?: SortOrder
    failures?: SortOrder
    recoveries?: SortOrder
    crashLoops?: SortOrder
    uptimePercentage?: SortOrder
    anomalyCount?: SortOrder
  }

  export type ServiceRiskCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    riskScore?: SortOrder
    level?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceRiskAvgOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type ServiceRiskMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    riskScore?: SortOrder
    level?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceRiskMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    riskScore?: SortOrder
    level?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceRiskSumOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type RootCauseReportCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    cause?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type RootCauseReportAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type RootCauseReportMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    cause?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type RootCauseReportMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    cause?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type RootCauseReportSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FailurePredictionCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    windowHours?: SortOrder
    probability?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type FailurePredictionAvgOrderByAggregateInput = {
    windowHours?: SortOrder
    probability?: SortOrder
  }

  export type FailurePredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    windowHours?: SortOrder
    probability?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type FailurePredictionMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    windowHours?: SortOrder
    probability?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type FailurePredictionSumOrderByAggregateInput = {
    windowHours?: SortOrder
    probability?: SortOrder
  }

  export type ServiceDailyStatsCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    date?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    failures?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceDailyStatsAvgOrderByAggregateInput = {
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    failures?: SortOrder
    anomalies?: SortOrder
  }

  export type ServiceDailyStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    date?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    failures?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceDailyStatsMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    date?: SortOrder
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    failures?: SortOrder
    anomalies?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceDailyStatsSumOrderByAggregateInput = {
    avgCpu?: SortOrder
    avgMemory?: SortOrder
    failures?: SortOrder
    anomalies?: SortOrder
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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