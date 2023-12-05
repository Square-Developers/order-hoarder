
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SquareData
 * 
 */
export type SquareData = $Result.DefaultSelection<Prisma.$SquareDataPayload>
/**
 * Model MetaData
 * 
 */
export type MetaData = $Result.DefaultSelection<Prisma.$MetaDataPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.squareData`: Exposes CRUD operations for the **SquareData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SquareData
    * const squareData = await prisma.squareData.findMany()
    * ```
    */
  get squareData(): Prisma.SquareDataDelegate<ExtArgs>;

  /**
   * `prisma.metaData`: Exposes CRUD operations for the **MetaData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaData
    * const metaData = await prisma.metaData.findMany()
    * ```
    */
  get metaData(): Prisma.MetaDataDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    SquareData: 'SquareData',
    MetaData: 'MetaData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'squareData' | 'metaData'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SquareData: {
        payload: Prisma.$SquareDataPayload<ExtArgs>
        fields: Prisma.SquareDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SquareDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SquareDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload>
          }
          findFirst: {
            args: Prisma.SquareDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SquareDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload>
          }
          findMany: {
            args: Prisma.SquareDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload>[]
          }
          create: {
            args: Prisma.SquareDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload>
          }
          delete: {
            args: Prisma.SquareDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload>
          }
          update: {
            args: Prisma.SquareDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload>
          }
          deleteMany: {
            args: Prisma.SquareDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SquareDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SquareDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SquareDataPayload>
          }
          aggregate: {
            args: Prisma.SquareDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSquareData>
          }
          groupBy: {
            args: Prisma.SquareDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SquareDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SquareDataCountArgs<ExtArgs>,
            result: $Utils.Optional<SquareDataCountAggregateOutputType> | number
          }
        }
      }
      MetaData: {
        payload: Prisma.$MetaDataPayload<ExtArgs>
        fields: Prisma.MetaDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          findFirst: {
            args: Prisma.MetaDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          findMany: {
            args: Prisma.MetaDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>[]
          }
          create: {
            args: Prisma.MetaDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          delete: {
            args: Prisma.MetaDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          update: {
            args: Prisma.MetaDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          deleteMany: {
            args: Prisma.MetaDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MetaDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MetaDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          aggregate: {
            args: Prisma.MetaDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMetaData>
          }
          groupBy: {
            args: Prisma.MetaDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MetaDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaDataCountArgs<ExtArgs>,
            result: $Utils.Optional<MetaDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    userDeniedSquare: boolean | null
    firstName: string | null
    lastName: string | null
    salt: string | null
    avatar: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    userDeniedSquare: boolean | null
    firstName: string | null
    lastName: string | null
    salt: string | null
    avatar: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    userDeniedSquare: number
    firstName: number
    lastName: number
    salt: number
    avatar: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    userDeniedSquare?: true
    firstName?: true
    lastName?: true
    salt?: true
    avatar?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    userDeniedSquare?: true
    firstName?: true
    lastName?: true
    salt?: true
    avatar?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    userDeniedSquare?: true
    firstName?: true
    lastName?: true
    salt?: true
    avatar?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    userDeniedSquare: boolean
    firstName: string | null
    lastName: string | null
    salt: string
    avatar: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    userDeniedSquare?: boolean
    firstName?: boolean
    lastName?: boolean
    salt?: boolean
    avatar?: boolean
    createdAt?: boolean
    metaData?: boolean | User$metaDataArgs<ExtArgs>
    squareData?: boolean | User$squareDataArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    userDeniedSquare?: boolean
    firstName?: boolean
    lastName?: boolean
    salt?: boolean
    avatar?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metaData?: boolean | User$metaDataArgs<ExtArgs>
    squareData?: boolean | User$squareDataArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      metaData: Prisma.$MetaDataPayload<ExtArgs> | null
      squareData: Prisma.$SquareDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      userDeniedSquare: boolean
      firstName: string | null
      lastName: string | null
      salt: string
      avatar: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    metaData<T extends User$metaDataArgs<ExtArgs> = {}>(args?: Subset<T, User$metaDataArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    squareData<T extends User$squareDataArgs<ExtArgs> = {}>(args?: Subset<T, User$squareDataArgs<ExtArgs>>): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userDeniedSquare: FieldRef<"User", 'Boolean'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.metaData
   */
  export type User$metaDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    where?: MetaDataWhereInput
  }


  /**
   * User.squareData
   */
  export type User$squareDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    where?: SquareDataWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model SquareData
   */

  export type AggregateSquareData = {
    _count: SquareDataCountAggregateOutputType | null
    _min: SquareDataMinAggregateOutputType | null
    _max: SquareDataMaxAggregateOutputType | null
  }

  export type SquareDataMinAggregateOutputType = {
    id: string | null
    tokens: string | null
    expiresAt: string | null
    merchantId: string | null
    userId: string | null
  }

  export type SquareDataMaxAggregateOutputType = {
    id: string | null
    tokens: string | null
    expiresAt: string | null
    merchantId: string | null
    userId: string | null
  }

  export type SquareDataCountAggregateOutputType = {
    id: number
    tokens: number
    expiresAt: number
    merchantId: number
    userId: number
    _all: number
  }


  export type SquareDataMinAggregateInputType = {
    id?: true
    tokens?: true
    expiresAt?: true
    merchantId?: true
    userId?: true
  }

  export type SquareDataMaxAggregateInputType = {
    id?: true
    tokens?: true
    expiresAt?: true
    merchantId?: true
    userId?: true
  }

  export type SquareDataCountAggregateInputType = {
    id?: true
    tokens?: true
    expiresAt?: true
    merchantId?: true
    userId?: true
    _all?: true
  }

  export type SquareDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SquareData to aggregate.
     */
    where?: SquareDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SquareData to fetch.
     */
    orderBy?: SquareDataOrderByWithRelationInput | SquareDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SquareDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SquareData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SquareData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SquareData
    **/
    _count?: true | SquareDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SquareDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SquareDataMaxAggregateInputType
  }

  export type GetSquareDataAggregateType<T extends SquareDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSquareData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSquareData[P]>
      : GetScalarType<T[P], AggregateSquareData[P]>
  }




  export type SquareDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SquareDataWhereInput
    orderBy?: SquareDataOrderByWithAggregationInput | SquareDataOrderByWithAggregationInput[]
    by: SquareDataScalarFieldEnum[] | SquareDataScalarFieldEnum
    having?: SquareDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SquareDataCountAggregateInputType | true
    _min?: SquareDataMinAggregateInputType
    _max?: SquareDataMaxAggregateInputType
  }

  export type SquareDataGroupByOutputType = {
    id: string
    tokens: string
    expiresAt: string
    merchantId: string
    userId: string
    _count: SquareDataCountAggregateOutputType | null
    _min: SquareDataMinAggregateOutputType | null
    _max: SquareDataMaxAggregateOutputType | null
  }

  type GetSquareDataGroupByPayload<T extends SquareDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SquareDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SquareDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SquareDataGroupByOutputType[P]>
            : GetScalarType<T[P], SquareDataGroupByOutputType[P]>
        }
      >
    >


  export type SquareDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokens?: boolean
    expiresAt?: boolean
    merchantId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["squareData"]>

  export type SquareDataSelectScalar = {
    id?: boolean
    tokens?: boolean
    expiresAt?: boolean
    merchantId?: boolean
    userId?: boolean
  }

  export type SquareDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SquareDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SquareData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokens: string
      expiresAt: string
      merchantId: string
      userId: string
    }, ExtArgs["result"]["squareData"]>
    composites: {}
  }


  type SquareDataGetPayload<S extends boolean | null | undefined | SquareDataDefaultArgs> = $Result.GetResult<Prisma.$SquareDataPayload, S>

  type SquareDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SquareDataFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SquareDataCountAggregateInputType | true
    }

  export interface SquareDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SquareData'], meta: { name: 'SquareData' } }
    /**
     * Find zero or one SquareData that matches the filter.
     * @param {SquareDataFindUniqueArgs} args - Arguments to find a SquareData
     * @example
     * // Get one SquareData
     * const squareData = await prisma.squareData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SquareDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SquareDataFindUniqueArgs<ExtArgs>>
    ): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SquareData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SquareDataFindUniqueOrThrowArgs} args - Arguments to find a SquareData
     * @example
     * // Get one SquareData
     * const squareData = await prisma.squareData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SquareDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SquareDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SquareData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquareDataFindFirstArgs} args - Arguments to find a SquareData
     * @example
     * // Get one SquareData
     * const squareData = await prisma.squareData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SquareDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SquareDataFindFirstArgs<ExtArgs>>
    ): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SquareData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquareDataFindFirstOrThrowArgs} args - Arguments to find a SquareData
     * @example
     * // Get one SquareData
     * const squareData = await prisma.squareData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SquareDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SquareDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SquareData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquareDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SquareData
     * const squareData = await prisma.squareData.findMany()
     * 
     * // Get first 10 SquareData
     * const squareData = await prisma.squareData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const squareDataWithIdOnly = await prisma.squareData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SquareDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SquareDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SquareData.
     * @param {SquareDataCreateArgs} args - Arguments to create a SquareData.
     * @example
     * // Create one SquareData
     * const SquareData = await prisma.squareData.create({
     *   data: {
     *     // ... data to create a SquareData
     *   }
     * })
     * 
    **/
    create<T extends SquareDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SquareDataCreateArgs<ExtArgs>>
    ): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a SquareData.
     * @param {SquareDataDeleteArgs} args - Arguments to delete one SquareData.
     * @example
     * // Delete one SquareData
     * const SquareData = await prisma.squareData.delete({
     *   where: {
     *     // ... filter to delete one SquareData
     *   }
     * })
     * 
    **/
    delete<T extends SquareDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SquareDataDeleteArgs<ExtArgs>>
    ): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SquareData.
     * @param {SquareDataUpdateArgs} args - Arguments to update one SquareData.
     * @example
     * // Update one SquareData
     * const squareData = await prisma.squareData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SquareDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SquareDataUpdateArgs<ExtArgs>>
    ): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SquareData.
     * @param {SquareDataDeleteManyArgs} args - Arguments to filter SquareData to delete.
     * @example
     * // Delete a few SquareData
     * const { count } = await prisma.squareData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SquareDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SquareDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SquareData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquareDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SquareData
     * const squareData = await prisma.squareData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SquareDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SquareDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SquareData.
     * @param {SquareDataUpsertArgs} args - Arguments to update or create a SquareData.
     * @example
     * // Update or create a SquareData
     * const squareData = await prisma.squareData.upsert({
     *   create: {
     *     // ... data to create a SquareData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SquareData we want to update
     *   }
     * })
    **/
    upsert<T extends SquareDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SquareDataUpsertArgs<ExtArgs>>
    ): Prisma__SquareDataClient<$Result.GetResult<Prisma.$SquareDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SquareData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquareDataCountArgs} args - Arguments to filter SquareData to count.
     * @example
     * // Count the number of SquareData
     * const count = await prisma.squareData.count({
     *   where: {
     *     // ... the filter for the SquareData we want to count
     *   }
     * })
    **/
    count<T extends SquareDataCountArgs>(
      args?: Subset<T, SquareDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SquareDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SquareData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquareDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SquareDataAggregateArgs>(args: Subset<T, SquareDataAggregateArgs>): Prisma.PrismaPromise<GetSquareDataAggregateType<T>>

    /**
     * Group by SquareData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SquareDataGroupByArgs} args - Group by arguments.
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
      T extends SquareDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SquareDataGroupByArgs['orderBy'] }
        : { orderBy?: SquareDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SquareDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSquareDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SquareData model
   */
  readonly fields: SquareDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SquareData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SquareDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SquareData model
   */ 
  interface SquareDataFieldRefs {
    readonly id: FieldRef<"SquareData", 'String'>
    readonly tokens: FieldRef<"SquareData", 'String'>
    readonly expiresAt: FieldRef<"SquareData", 'String'>
    readonly merchantId: FieldRef<"SquareData", 'String'>
    readonly userId: FieldRef<"SquareData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SquareData findUnique
   */
  export type SquareDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * Filter, which SquareData to fetch.
     */
    where: SquareDataWhereUniqueInput
  }


  /**
   * SquareData findUniqueOrThrow
   */
  export type SquareDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * Filter, which SquareData to fetch.
     */
    where: SquareDataWhereUniqueInput
  }


  /**
   * SquareData findFirst
   */
  export type SquareDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * Filter, which SquareData to fetch.
     */
    where?: SquareDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SquareData to fetch.
     */
    orderBy?: SquareDataOrderByWithRelationInput | SquareDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SquareData.
     */
    cursor?: SquareDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SquareData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SquareData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SquareData.
     */
    distinct?: SquareDataScalarFieldEnum | SquareDataScalarFieldEnum[]
  }


  /**
   * SquareData findFirstOrThrow
   */
  export type SquareDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * Filter, which SquareData to fetch.
     */
    where?: SquareDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SquareData to fetch.
     */
    orderBy?: SquareDataOrderByWithRelationInput | SquareDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SquareData.
     */
    cursor?: SquareDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SquareData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SquareData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SquareData.
     */
    distinct?: SquareDataScalarFieldEnum | SquareDataScalarFieldEnum[]
  }


  /**
   * SquareData findMany
   */
  export type SquareDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * Filter, which SquareData to fetch.
     */
    where?: SquareDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SquareData to fetch.
     */
    orderBy?: SquareDataOrderByWithRelationInput | SquareDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SquareData.
     */
    cursor?: SquareDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SquareData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SquareData.
     */
    skip?: number
    distinct?: SquareDataScalarFieldEnum | SquareDataScalarFieldEnum[]
  }


  /**
   * SquareData create
   */
  export type SquareDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SquareData.
     */
    data: XOR<SquareDataCreateInput, SquareDataUncheckedCreateInput>
  }


  /**
   * SquareData update
   */
  export type SquareDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SquareData.
     */
    data: XOR<SquareDataUpdateInput, SquareDataUncheckedUpdateInput>
    /**
     * Choose, which SquareData to update.
     */
    where: SquareDataWhereUniqueInput
  }


  /**
   * SquareData updateMany
   */
  export type SquareDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SquareData.
     */
    data: XOR<SquareDataUpdateManyMutationInput, SquareDataUncheckedUpdateManyInput>
    /**
     * Filter which SquareData to update
     */
    where?: SquareDataWhereInput
  }


  /**
   * SquareData upsert
   */
  export type SquareDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SquareData to update in case it exists.
     */
    where: SquareDataWhereUniqueInput
    /**
     * In case the SquareData found by the `where` argument doesn't exist, create a new SquareData with this data.
     */
    create: XOR<SquareDataCreateInput, SquareDataUncheckedCreateInput>
    /**
     * In case the SquareData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SquareDataUpdateInput, SquareDataUncheckedUpdateInput>
  }


  /**
   * SquareData delete
   */
  export type SquareDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
    /**
     * Filter which SquareData to delete.
     */
    where: SquareDataWhereUniqueInput
  }


  /**
   * SquareData deleteMany
   */
  export type SquareDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SquareData to delete
     */
    where?: SquareDataWhereInput
  }


  /**
   * SquareData without action
   */
  export type SquareDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SquareData
     */
    select?: SquareDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SquareDataInclude<ExtArgs> | null
  }



  /**
   * Model MetaData
   */

  export type AggregateMetaData = {
    _count: MetaDataCountAggregateOutputType | null
    _min: MetaDataMinAggregateOutputType | null
    _max: MetaDataMaxAggregateOutputType | null
  }

  export type MetaDataMinAggregateOutputType = {
    id: string | null
    userId: string | null
    iv: string | null
    scopes: string | null
    squareTokenLastUpdated: Date | null
  }

  export type MetaDataMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    iv: string | null
    scopes: string | null
    squareTokenLastUpdated: Date | null
  }

  export type MetaDataCountAggregateOutputType = {
    id: number
    userId: number
    iv: number
    scopes: number
    squareTokenLastUpdated: number
    _all: number
  }


  export type MetaDataMinAggregateInputType = {
    id?: true
    userId?: true
    iv?: true
    scopes?: true
    squareTokenLastUpdated?: true
  }

  export type MetaDataMaxAggregateInputType = {
    id?: true
    userId?: true
    iv?: true
    scopes?: true
    squareTokenLastUpdated?: true
  }

  export type MetaDataCountAggregateInputType = {
    id?: true
    userId?: true
    iv?: true
    scopes?: true
    squareTokenLastUpdated?: true
    _all?: true
  }

  export type MetaDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaData to aggregate.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaData
    **/
    _count?: true | MetaDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaDataMaxAggregateInputType
  }

  export type GetMetaDataAggregateType<T extends MetaDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaData[P]>
      : GetScalarType<T[P], AggregateMetaData[P]>
  }




  export type MetaDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaDataWhereInput
    orderBy?: MetaDataOrderByWithAggregationInput | MetaDataOrderByWithAggregationInput[]
    by: MetaDataScalarFieldEnum[] | MetaDataScalarFieldEnum
    having?: MetaDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaDataCountAggregateInputType | true
    _min?: MetaDataMinAggregateInputType
    _max?: MetaDataMaxAggregateInputType
  }

  export type MetaDataGroupByOutputType = {
    id: string
    userId: string
    iv: string
    scopes: string
    squareTokenLastUpdated: Date
    _count: MetaDataCountAggregateOutputType | null
    _min: MetaDataMinAggregateOutputType | null
    _max: MetaDataMaxAggregateOutputType | null
  }

  type GetMetaDataGroupByPayload<T extends MetaDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaDataGroupByOutputType[P]>
            : GetScalarType<T[P], MetaDataGroupByOutputType[P]>
        }
      >
    >


  export type MetaDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    iv?: boolean
    scopes?: boolean
    squareTokenLastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaData"]>

  export type MetaDataSelectScalar = {
    id?: boolean
    userId?: boolean
    iv?: boolean
    scopes?: boolean
    squareTokenLastUpdated?: boolean
  }

  export type MetaDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MetaDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetaData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      iv: string
      scopes: string
      squareTokenLastUpdated: Date
    }, ExtArgs["result"]["metaData"]>
    composites: {}
  }


  type MetaDataGetPayload<S extends boolean | null | undefined | MetaDataDefaultArgs> = $Result.GetResult<Prisma.$MetaDataPayload, S>

  type MetaDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MetaDataFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MetaDataCountAggregateInputType | true
    }

  export interface MetaDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetaData'], meta: { name: 'MetaData' } }
    /**
     * Find zero or one MetaData that matches the filter.
     * @param {MetaDataFindUniqueArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MetaDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataFindUniqueArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MetaData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MetaDataFindUniqueOrThrowArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MetaDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MetaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindFirstArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MetaDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataFindFirstArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MetaData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindFirstOrThrowArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MetaDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MetaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaData
     * const metaData = await prisma.metaData.findMany()
     * 
     * // Get first 10 MetaData
     * const metaData = await prisma.metaData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaDataWithIdOnly = await prisma.metaData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MetaDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MetaData.
     * @param {MetaDataCreateArgs} args - Arguments to create a MetaData.
     * @example
     * // Create one MetaData
     * const MetaData = await prisma.metaData.create({
     *   data: {
     *     // ... data to create a MetaData
     *   }
     * })
     * 
    **/
    create<T extends MetaDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataCreateArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MetaData.
     * @param {MetaDataDeleteArgs} args - Arguments to delete one MetaData.
     * @example
     * // Delete one MetaData
     * const MetaData = await prisma.metaData.delete({
     *   where: {
     *     // ... filter to delete one MetaData
     *   }
     * })
     * 
    **/
    delete<T extends MetaDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataDeleteArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MetaData.
     * @param {MetaDataUpdateArgs} args - Arguments to update one MetaData.
     * @example
     * // Update one MetaData
     * const metaData = await prisma.metaData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MetaDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataUpdateArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MetaData.
     * @param {MetaDataDeleteManyArgs} args - Arguments to filter MetaData to delete.
     * @example
     * // Delete a few MetaData
     * const { count } = await prisma.metaData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MetaDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaData
     * const metaData = await prisma.metaData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MetaDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MetaData.
     * @param {MetaDataUpsertArgs} args - Arguments to update or create a MetaData.
     * @example
     * // Update or create a MetaData
     * const metaData = await prisma.metaData.upsert({
     *   create: {
     *     // ... data to create a MetaData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaData we want to update
     *   }
     * })
    **/
    upsert<T extends MetaDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataUpsertArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataCountArgs} args - Arguments to filter MetaData to count.
     * @example
     * // Count the number of MetaData
     * const count = await prisma.metaData.count({
     *   where: {
     *     // ... the filter for the MetaData we want to count
     *   }
     * })
    **/
    count<T extends MetaDataCountArgs>(
      args?: Subset<T, MetaDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetaDataAggregateArgs>(args: Subset<T, MetaDataAggregateArgs>): Prisma.PrismaPromise<GetMetaDataAggregateType<T>>

    /**
     * Group by MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataGroupByArgs} args - Group by arguments.
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
      T extends MetaDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaDataGroupByArgs['orderBy'] }
        : { orderBy?: MetaDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetaDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetaData model
   */
  readonly fields: MetaDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MetaData model
   */ 
  interface MetaDataFieldRefs {
    readonly id: FieldRef<"MetaData", 'String'>
    readonly userId: FieldRef<"MetaData", 'String'>
    readonly iv: FieldRef<"MetaData", 'String'>
    readonly scopes: FieldRef<"MetaData", 'String'>
    readonly squareTokenLastUpdated: FieldRef<"MetaData", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MetaData findUnique
   */
  export type MetaDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where: MetaDataWhereUniqueInput
  }


  /**
   * MetaData findUniqueOrThrow
   */
  export type MetaDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where: MetaDataWhereUniqueInput
  }


  /**
   * MetaData findFirst
   */
  export type MetaDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaData.
     */
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
  }


  /**
   * MetaData findFirstOrThrow
   */
  export type MetaDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaData.
     */
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
  }


  /**
   * MetaData findMany
   */
  export type MetaDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
  }


  /**
   * MetaData create
   */
  export type MetaDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MetaData.
     */
    data: XOR<MetaDataCreateInput, MetaDataUncheckedCreateInput>
  }


  /**
   * MetaData update
   */
  export type MetaDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MetaData.
     */
    data: XOR<MetaDataUpdateInput, MetaDataUncheckedUpdateInput>
    /**
     * Choose, which MetaData to update.
     */
    where: MetaDataWhereUniqueInput
  }


  /**
   * MetaData updateMany
   */
  export type MetaDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetaData.
     */
    data: XOR<MetaDataUpdateManyMutationInput, MetaDataUncheckedUpdateManyInput>
    /**
     * Filter which MetaData to update
     */
    where?: MetaDataWhereInput
  }


  /**
   * MetaData upsert
   */
  export type MetaDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MetaData to update in case it exists.
     */
    where: MetaDataWhereUniqueInput
    /**
     * In case the MetaData found by the `where` argument doesn't exist, create a new MetaData with this data.
     */
    create: XOR<MetaDataCreateInput, MetaDataUncheckedCreateInput>
    /**
     * In case the MetaData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaDataUpdateInput, MetaDataUncheckedUpdateInput>
  }


  /**
   * MetaData delete
   */
  export type MetaDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter which MetaData to delete.
     */
    where: MetaDataWhereUniqueInput
  }


  /**
   * MetaData deleteMany
   */
  export type MetaDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaData to delete
     */
    where?: MetaDataWhereInput
  }


  /**
   * MetaData without action
   */
  export type MetaDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    userDeniedSquare: 'userDeniedSquare',
    firstName: 'firstName',
    lastName: 'lastName',
    salt: 'salt',
    avatar: 'avatar',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SquareDataScalarFieldEnum: {
    id: 'id',
    tokens: 'tokens',
    expiresAt: 'expiresAt',
    merchantId: 'merchantId',
    userId: 'userId'
  };

  export type SquareDataScalarFieldEnum = (typeof SquareDataScalarFieldEnum)[keyof typeof SquareDataScalarFieldEnum]


  export const MetaDataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    iv: 'iv',
    scopes: 'scopes',
    squareTokenLastUpdated: 'squareTokenLastUpdated'
  };

  export type MetaDataScalarFieldEnum = (typeof MetaDataScalarFieldEnum)[keyof typeof MetaDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userDeniedSquare?: BoolFilter<"User"> | boolean
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    salt?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    metaData?: XOR<MetaDataNullableRelationFilter, MetaDataWhereInput> | null
    squareData?: XOR<SquareDataNullableRelationFilter, SquareDataWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userDeniedSquare?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    salt?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    metaData?: MetaDataOrderByWithRelationInput
    squareData?: SquareDataOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    userDeniedSquare?: BoolFilter<"User"> | boolean
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    salt?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    metaData?: XOR<MetaDataNullableRelationFilter, MetaDataWhereInput> | null
    squareData?: XOR<SquareDataNullableRelationFilter, SquareDataWhereInput> | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userDeniedSquare?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    salt?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    userDeniedSquare?: BoolWithAggregatesFilter<"User"> | boolean
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    salt?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SquareDataWhereInput = {
    AND?: SquareDataWhereInput | SquareDataWhereInput[]
    OR?: SquareDataWhereInput[]
    NOT?: SquareDataWhereInput | SquareDataWhereInput[]
    id?: StringFilter<"SquareData"> | string
    tokens?: StringFilter<"SquareData"> | string
    expiresAt?: StringFilter<"SquareData"> | string
    merchantId?: StringFilter<"SquareData"> | string
    userId?: StringFilter<"SquareData"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SquareDataOrderByWithRelationInput = {
    id?: SortOrder
    tokens?: SortOrder
    expiresAt?: SortOrder
    merchantId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SquareDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SquareDataWhereInput | SquareDataWhereInput[]
    OR?: SquareDataWhereInput[]
    NOT?: SquareDataWhereInput | SquareDataWhereInput[]
    tokens?: StringFilter<"SquareData"> | string
    expiresAt?: StringFilter<"SquareData"> | string
    merchantId?: StringFilter<"SquareData"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SquareDataOrderByWithAggregationInput = {
    id?: SortOrder
    tokens?: SortOrder
    expiresAt?: SortOrder
    merchantId?: SortOrder
    userId?: SortOrder
    _count?: SquareDataCountOrderByAggregateInput
    _max?: SquareDataMaxOrderByAggregateInput
    _min?: SquareDataMinOrderByAggregateInput
  }

  export type SquareDataScalarWhereWithAggregatesInput = {
    AND?: SquareDataScalarWhereWithAggregatesInput | SquareDataScalarWhereWithAggregatesInput[]
    OR?: SquareDataScalarWhereWithAggregatesInput[]
    NOT?: SquareDataScalarWhereWithAggregatesInput | SquareDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SquareData"> | string
    tokens?: StringWithAggregatesFilter<"SquareData"> | string
    expiresAt?: StringWithAggregatesFilter<"SquareData"> | string
    merchantId?: StringWithAggregatesFilter<"SquareData"> | string
    userId?: StringWithAggregatesFilter<"SquareData"> | string
  }

  export type MetaDataWhereInput = {
    AND?: MetaDataWhereInput | MetaDataWhereInput[]
    OR?: MetaDataWhereInput[]
    NOT?: MetaDataWhereInput | MetaDataWhereInput[]
    id?: StringFilter<"MetaData"> | string
    userId?: StringFilter<"MetaData"> | string
    iv?: StringFilter<"MetaData"> | string
    scopes?: StringFilter<"MetaData"> | string
    squareTokenLastUpdated?: DateTimeFilter<"MetaData"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MetaDataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    iv?: SortOrder
    scopes?: SortOrder
    squareTokenLastUpdated?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MetaDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MetaDataWhereInput | MetaDataWhereInput[]
    OR?: MetaDataWhereInput[]
    NOT?: MetaDataWhereInput | MetaDataWhereInput[]
    iv?: StringFilter<"MetaData"> | string
    scopes?: StringFilter<"MetaData"> | string
    squareTokenLastUpdated?: DateTimeFilter<"MetaData"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MetaDataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    iv?: SortOrder
    scopes?: SortOrder
    squareTokenLastUpdated?: SortOrder
    _count?: MetaDataCountOrderByAggregateInput
    _max?: MetaDataMaxOrderByAggregateInput
    _min?: MetaDataMinOrderByAggregateInput
  }

  export type MetaDataScalarWhereWithAggregatesInput = {
    AND?: MetaDataScalarWhereWithAggregatesInput | MetaDataScalarWhereWithAggregatesInput[]
    OR?: MetaDataScalarWhereWithAggregatesInput[]
    NOT?: MetaDataScalarWhereWithAggregatesInput | MetaDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetaData"> | string
    userId?: StringWithAggregatesFilter<"MetaData"> | string
    iv?: StringWithAggregatesFilter<"MetaData"> | string
    scopes?: StringWithAggregatesFilter<"MetaData"> | string
    squareTokenLastUpdated?: DateTimeWithAggregatesFilter<"MetaData"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    userDeniedSquare?: boolean
    firstName?: string | null
    lastName?: string | null
    salt: string
    avatar: string
    createdAt?: Date | string
    metaData?: MetaDataCreateNestedOneWithoutUserInput
    squareData?: SquareDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    userDeniedSquare?: boolean
    firstName?: string | null
    lastName?: string | null
    salt: string
    avatar: string
    createdAt?: Date | string
    metaData?: MetaDataUncheckedCreateNestedOneWithoutUserInput
    squareData?: SquareDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userDeniedSquare?: BoolFieldUpdateOperationsInput | boolean
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: MetaDataUpdateOneWithoutUserNestedInput
    squareData?: SquareDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userDeniedSquare?: BoolFieldUpdateOperationsInput | boolean
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: MetaDataUncheckedUpdateOneWithoutUserNestedInput
    squareData?: SquareDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userDeniedSquare?: BoolFieldUpdateOperationsInput | boolean
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userDeniedSquare?: BoolFieldUpdateOperationsInput | boolean
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SquareDataCreateInput = {
    id?: string
    tokens: string
    expiresAt: string
    merchantId: string
    user: UserCreateNestedOneWithoutSquareDataInput
  }

  export type SquareDataUncheckedCreateInput = {
    id?: string
    tokens: string
    expiresAt: string
    merchantId: string
    userId: string
  }

  export type SquareDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSquareDataNestedInput
  }

  export type SquareDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SquareDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type SquareDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MetaDataCreateInput = {
    id?: string
    iv: string
    scopes: string
    squareTokenLastUpdated?: Date | string
    user: UserCreateNestedOneWithoutMetaDataInput
  }

  export type MetaDataUncheckedCreateInput = {
    id?: string
    userId: string
    iv: string
    scopes: string
    squareTokenLastUpdated?: Date | string
  }

  export type MetaDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    squareTokenLastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMetaDataNestedInput
  }

  export type MetaDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    squareTokenLastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    squareTokenLastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    squareTokenLastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MetaDataNullableRelationFilter = {
    is?: MetaDataWhereInput | null
    isNot?: MetaDataWhereInput | null
  }

  export type SquareDataNullableRelationFilter = {
    is?: SquareDataWhereInput | null
    isNot?: SquareDataWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userDeniedSquare?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    salt?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userDeniedSquare?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    salt?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userDeniedSquare?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    salt?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SquareDataCountOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    expiresAt?: SortOrder
    merchantId?: SortOrder
    userId?: SortOrder
  }

  export type SquareDataMaxOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    expiresAt?: SortOrder
    merchantId?: SortOrder
    userId?: SortOrder
  }

  export type SquareDataMinOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    expiresAt?: SortOrder
    merchantId?: SortOrder
    userId?: SortOrder
  }

  export type MetaDataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    iv?: SortOrder
    scopes?: SortOrder
    squareTokenLastUpdated?: SortOrder
  }

  export type MetaDataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    iv?: SortOrder
    scopes?: SortOrder
    squareTokenLastUpdated?: SortOrder
  }

  export type MetaDataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    iv?: SortOrder
    scopes?: SortOrder
    squareTokenLastUpdated?: SortOrder
  }

  export type MetaDataCreateNestedOneWithoutUserInput = {
    create?: XOR<MetaDataCreateWithoutUserInput, MetaDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: MetaDataCreateOrConnectWithoutUserInput
    connect?: MetaDataWhereUniqueInput
  }

  export type SquareDataCreateNestedOneWithoutUserInput = {
    create?: XOR<SquareDataCreateWithoutUserInput, SquareDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: SquareDataCreateOrConnectWithoutUserInput
    connect?: SquareDataWhereUniqueInput
  }

  export type MetaDataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MetaDataCreateWithoutUserInput, MetaDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: MetaDataCreateOrConnectWithoutUserInput
    connect?: MetaDataWhereUniqueInput
  }

  export type SquareDataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SquareDataCreateWithoutUserInput, SquareDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: SquareDataCreateOrConnectWithoutUserInput
    connect?: SquareDataWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MetaDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<MetaDataCreateWithoutUserInput, MetaDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: MetaDataCreateOrConnectWithoutUserInput
    upsert?: MetaDataUpsertWithoutUserInput
    disconnect?: MetaDataWhereInput | boolean
    delete?: MetaDataWhereInput | boolean
    connect?: MetaDataWhereUniqueInput
    update?: XOR<XOR<MetaDataUpdateToOneWithWhereWithoutUserInput, MetaDataUpdateWithoutUserInput>, MetaDataUncheckedUpdateWithoutUserInput>
  }

  export type SquareDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<SquareDataCreateWithoutUserInput, SquareDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: SquareDataCreateOrConnectWithoutUserInput
    upsert?: SquareDataUpsertWithoutUserInput
    disconnect?: SquareDataWhereInput | boolean
    delete?: SquareDataWhereInput | boolean
    connect?: SquareDataWhereUniqueInput
    update?: XOR<XOR<SquareDataUpdateToOneWithWhereWithoutUserInput, SquareDataUpdateWithoutUserInput>, SquareDataUncheckedUpdateWithoutUserInput>
  }

  export type MetaDataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MetaDataCreateWithoutUserInput, MetaDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: MetaDataCreateOrConnectWithoutUserInput
    upsert?: MetaDataUpsertWithoutUserInput
    disconnect?: MetaDataWhereInput | boolean
    delete?: MetaDataWhereInput | boolean
    connect?: MetaDataWhereUniqueInput
    update?: XOR<XOR<MetaDataUpdateToOneWithWhereWithoutUserInput, MetaDataUpdateWithoutUserInput>, MetaDataUncheckedUpdateWithoutUserInput>
  }

  export type SquareDataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SquareDataCreateWithoutUserInput, SquareDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: SquareDataCreateOrConnectWithoutUserInput
    upsert?: SquareDataUpsertWithoutUserInput
    disconnect?: SquareDataWhereInput | boolean
    delete?: SquareDataWhereInput | boolean
    connect?: SquareDataWhereUniqueInput
    update?: XOR<XOR<SquareDataUpdateToOneWithWhereWithoutUserInput, SquareDataUpdateWithoutUserInput>, SquareDataUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSquareDataInput = {
    create?: XOR<UserCreateWithoutSquareDataInput, UserUncheckedCreateWithoutSquareDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutSquareDataInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSquareDataNestedInput = {
    create?: XOR<UserCreateWithoutSquareDataInput, UserUncheckedCreateWithoutSquareDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutSquareDataInput
    upsert?: UserUpsertWithoutSquareDataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSquareDataInput, UserUpdateWithoutSquareDataInput>, UserUncheckedUpdateWithoutSquareDataInput>
  }

  export type UserCreateNestedOneWithoutMetaDataInput = {
    create?: XOR<UserCreateWithoutMetaDataInput, UserUncheckedCreateWithoutMetaDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetaDataInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMetaDataNestedInput = {
    create?: XOR<UserCreateWithoutMetaDataInput, UserUncheckedCreateWithoutMetaDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetaDataInput
    upsert?: UserUpsertWithoutMetaDataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMetaDataInput, UserUpdateWithoutMetaDataInput>, UserUncheckedUpdateWithoutMetaDataInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MetaDataCreateWithoutUserInput = {
    id?: string
    iv: string
    scopes: string
    squareTokenLastUpdated?: Date | string
  }

  export type MetaDataUncheckedCreateWithoutUserInput = {
    id?: string
    iv: string
    scopes: string
    squareTokenLastUpdated?: Date | string
  }

  export type MetaDataCreateOrConnectWithoutUserInput = {
    where: MetaDataWhereUniqueInput
    create: XOR<MetaDataCreateWithoutUserInput, MetaDataUncheckedCreateWithoutUserInput>
  }

  export type SquareDataCreateWithoutUserInput = {
    id?: string
    tokens: string
    expiresAt: string
    merchantId: string
  }

  export type SquareDataUncheckedCreateWithoutUserInput = {
    id?: string
    tokens: string
    expiresAt: string
    merchantId: string
  }

  export type SquareDataCreateOrConnectWithoutUserInput = {
    where: SquareDataWhereUniqueInput
    create: XOR<SquareDataCreateWithoutUserInput, SquareDataUncheckedCreateWithoutUserInput>
  }

  export type MetaDataUpsertWithoutUserInput = {
    update: XOR<MetaDataUpdateWithoutUserInput, MetaDataUncheckedUpdateWithoutUserInput>
    create: XOR<MetaDataCreateWithoutUserInput, MetaDataUncheckedCreateWithoutUserInput>
    where?: MetaDataWhereInput
  }

  export type MetaDataUpdateToOneWithWhereWithoutUserInput = {
    where?: MetaDataWhereInput
    data: XOR<MetaDataUpdateWithoutUserInput, MetaDataUncheckedUpdateWithoutUserInput>
  }

  export type MetaDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    squareTokenLastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    scopes?: StringFieldUpdateOperationsInput | string
    squareTokenLastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SquareDataUpsertWithoutUserInput = {
    update: XOR<SquareDataUpdateWithoutUserInput, SquareDataUncheckedUpdateWithoutUserInput>
    create: XOR<SquareDataCreateWithoutUserInput, SquareDataUncheckedCreateWithoutUserInput>
    where?: SquareDataWhereInput
  }

  export type SquareDataUpdateToOneWithWhereWithoutUserInput = {
    where?: SquareDataWhereInput
    data: XOR<SquareDataUpdateWithoutUserInput, SquareDataUncheckedUpdateWithoutUserInput>
  }

  export type SquareDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type SquareDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: StringFieldUpdateOperationsInput | string
    expiresAt?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutSquareDataInput = {
    id?: string
    username: string
    password: string
    userDeniedSquare?: boolean
    firstName?: string | null
    lastName?: string | null
    salt: string
    avatar: string
    createdAt?: Date | string
    metaData?: MetaDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSquareDataInput = {
    id?: string
    username: string
    password: string
    userDeniedSquare?: boolean
    firstName?: string | null
    lastName?: string | null
    salt: string
    avatar: string
    createdAt?: Date | string
    metaData?: MetaDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSquareDataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSquareDataInput, UserUncheckedCreateWithoutSquareDataInput>
  }

  export type UserUpsertWithoutSquareDataInput = {
    update: XOR<UserUpdateWithoutSquareDataInput, UserUncheckedUpdateWithoutSquareDataInput>
    create: XOR<UserCreateWithoutSquareDataInput, UserUncheckedCreateWithoutSquareDataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSquareDataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSquareDataInput, UserUncheckedUpdateWithoutSquareDataInput>
  }

  export type UserUpdateWithoutSquareDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userDeniedSquare?: BoolFieldUpdateOperationsInput | boolean
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: MetaDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSquareDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userDeniedSquare?: BoolFieldUpdateOperationsInput | boolean
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: MetaDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutMetaDataInput = {
    id?: string
    username: string
    password: string
    userDeniedSquare?: boolean
    firstName?: string | null
    lastName?: string | null
    salt: string
    avatar: string
    createdAt?: Date | string
    squareData?: SquareDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMetaDataInput = {
    id?: string
    username: string
    password: string
    userDeniedSquare?: boolean
    firstName?: string | null
    lastName?: string | null
    salt: string
    avatar: string
    createdAt?: Date | string
    squareData?: SquareDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMetaDataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMetaDataInput, UserUncheckedCreateWithoutMetaDataInput>
  }

  export type UserUpsertWithoutMetaDataInput = {
    update: XOR<UserUpdateWithoutMetaDataInput, UserUncheckedUpdateWithoutMetaDataInput>
    create: XOR<UserCreateWithoutMetaDataInput, UserUncheckedCreateWithoutMetaDataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMetaDataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMetaDataInput, UserUncheckedUpdateWithoutMetaDataInput>
  }

  export type UserUpdateWithoutMetaDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userDeniedSquare?: BoolFieldUpdateOperationsInput | boolean
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    squareData?: SquareDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMetaDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userDeniedSquare?: BoolFieldUpdateOperationsInput | boolean
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    squareData?: SquareDataUncheckedUpdateOneWithoutUserNestedInput
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SquareDataDefaultArgs instead
     */
    export type SquareDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SquareDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MetaDataDefaultArgs instead
     */
    export type MetaDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MetaDataDefaultArgs<ExtArgs>

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