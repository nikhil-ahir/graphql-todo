import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    todoes: <T = Array<Todo | null>>(args: { where?: TodoWhereInput | null, orderBy?: TodoOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    todo: <T = Todo | null>(args: { where: TodoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    todoesConnection: <T = TodoConnection>(args: { where?: TodoWhereInput | null, orderBy?: TodoOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createTodo: <T = Todo>(args: { data: TodoCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTodo: <T = Todo | null>(args: { data: TodoUpdateInput, where: TodoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTodo: <T = Todo | null>(args: { where: TodoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertTodo: <T = Todo>(args: { where: TodoWhereUniqueInput, create: TodoCreateInput, update: TodoUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTodoes: <T = BatchPayload>(args: { data: TodoUpdateManyMutationInput, where?: TodoWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTodoes: <T = BatchPayload>(args: { where?: TodoWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    todo: <T = TodoSubscriptionPayload | null>(args: { where?: TodoSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Todo: (where?: TodoWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateTodo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createTodo(data: TodoCreateInput!): Todo!
  createUser(data: UserCreateInput!): User!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteUser(where: UserWhereUniqueInput!): User
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  todo(where: TodoWhereUniqueInput!): Todo
  user(where: UserWhereUniqueInput!): User
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Todo implements Node {
  id: ID!
  description: String!
  isCompleted: Boolean!
  user: User!
}

"""A connection to a list of items."""
type TodoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  id: ID
  description: String!
  isCompleted: Boolean!
  user: UserCreateOneWithoutTodoInput!
}

input TodoCreateManyWithoutUserInput {
  create: [TodoCreateWithoutUserInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateWithoutUserInput {
  id: ID
  description: String!
  isCompleted: Boolean!
}

"""An edge in a connection."""
type TodoEdge {
  """The item at the end of the edge."""
  node: Todo!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  isCompleted_ASC
  isCompleted_DESC
}

type TodoPreviousValues {
  id: ID!
  description: String!
  isCompleted: Boolean!
}

input TodoScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TodoScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TodoScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TodoScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  isCompleted: Boolean

  """All values that are not equal to given value."""
  isCompleted_not: Boolean
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TodoSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TodoSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TodoSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
}

input TodoUpdateInput {
  description: String
  isCompleted: Boolean
  user: UserUpdateOneRequiredWithoutTodoInput
}

input TodoUpdateManyDataInput {
  description: String
  isCompleted: Boolean
}

input TodoUpdateManyMutationInput {
  description: String
  isCompleted: Boolean
}

input TodoUpdateManyWithoutUserInput {
  create: [TodoCreateWithoutUserInput!]
  connect: [TodoWhereUniqueInput!]
  set: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  delete: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
  deleteMany: [TodoScalarWhereInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutUserInput!]
}

input TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput!
  data: TodoUpdateManyDataInput!
}

input TodoUpdateWithoutUserDataInput {
  description: String
  isCompleted: Boolean
}

input TodoUpdateWithWhereUniqueWithoutUserInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutUserDataInput!
}

input TodoUpsertWithWhereUniqueWithoutUserInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutUserDataInput!
  create: TodoCreateWithoutUserInput!
}

input TodoWhereInput {
  """Logical AND on all given filters."""
  AND: [TodoWhereInput!]

  """Logical OR on all given filters."""
  OR: [TodoWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TodoWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  isCompleted: Boolean

  """All values that are not equal to given value."""
  isCompleted_not: Boolean
  user: UserWhereInput
}

input TodoWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  name: String!
  todo(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  todo: TodoCreateManyWithoutUserInput
}

input UserCreateOneWithoutTodoInput {
  create: UserCreateWithoutTodoInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTodoInput {
  id: ID
  name: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  todo: TodoUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredWithoutTodoInput {
  create: UserCreateWithoutTodoInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutTodoDataInput
  upsert: UserUpsertWithoutTodoInput
}

input UserUpdateWithoutTodoDataInput {
  name: String
}

input UserUpsertWithoutTodoInput {
  update: UserUpdateWithoutTodoDataInput!
  create: UserCreateWithoutTodoInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  todo_every: TodoWhereInput
  todo_some: TodoWhereInput
  todo_none: TodoWhereInput
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type TodoOrderByInput =   'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'isCompleted_ASC' |
  'isCompleted_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

export interface TodoCreateInput {
  id?: ID_Input | null
  description: String
  isCompleted: Boolean
  user: UserCreateOneWithoutTodoInput
}

export interface TodoCreateManyWithoutUserInput {
  create?: TodoCreateWithoutUserInput[] | TodoCreateWithoutUserInput | null
  connect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput | null
}

export interface TodoCreateWithoutUserInput {
  id?: ID_Input | null
  description: String
  isCompleted: Boolean
}

export interface TodoScalarWhereInput {
  AND?: TodoScalarWhereInput[] | TodoScalarWhereInput | null
  OR?: TodoScalarWhereInput[] | TodoScalarWhereInput | null
  NOT?: TodoScalarWhereInput[] | TodoScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  isCompleted?: Boolean | null
  isCompleted_not?: Boolean | null
}

export interface TodoSubscriptionWhereInput {
  AND?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput | null
  OR?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput | null
  NOT?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TodoWhereInput | null
}

export interface TodoUpdateInput {
  description?: String | null
  isCompleted?: Boolean | null
  user?: UserUpdateOneRequiredWithoutTodoInput | null
}

export interface TodoUpdateManyDataInput {
  description?: String | null
  isCompleted?: Boolean | null
}

export interface TodoUpdateManyMutationInput {
  description?: String | null
  isCompleted?: Boolean | null
}

export interface TodoUpdateManyWithoutUserInput {
  create?: TodoCreateWithoutUserInput[] | TodoCreateWithoutUserInput | null
  connect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput | null
  set?: TodoWhereUniqueInput[] | TodoWhereUniqueInput | null
  disconnect?: TodoWhereUniqueInput[] | TodoWhereUniqueInput | null
  delete?: TodoWhereUniqueInput[] | TodoWhereUniqueInput | null
  update?: TodoUpdateWithWhereUniqueWithoutUserInput[] | TodoUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: TodoUpdateManyWithWhereNestedInput[] | TodoUpdateManyWithWhereNestedInput | null
  deleteMany?: TodoScalarWhereInput[] | TodoScalarWhereInput | null
  upsert?: TodoUpsertWithWhereUniqueWithoutUserInput[] | TodoUpsertWithWhereUniqueWithoutUserInput | null
}

export interface TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput
  data: TodoUpdateManyDataInput
}

export interface TodoUpdateWithoutUserDataInput {
  description?: String | null
  isCompleted?: Boolean | null
}

export interface TodoUpdateWithWhereUniqueWithoutUserInput {
  where: TodoWhereUniqueInput
  data: TodoUpdateWithoutUserDataInput
}

export interface TodoUpsertWithWhereUniqueWithoutUserInput {
  where: TodoWhereUniqueInput
  update: TodoUpdateWithoutUserDataInput
  create: TodoCreateWithoutUserInput
}

export interface TodoWhereInput {
  AND?: TodoWhereInput[] | TodoWhereInput | null
  OR?: TodoWhereInput[] | TodoWhereInput | null
  NOT?: TodoWhereInput[] | TodoWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  isCompleted?: Boolean | null
  isCompleted_not?: Boolean | null
  user?: UserWhereInput | null
}

export interface TodoWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  name: String
  todo?: TodoCreateManyWithoutUserInput | null
}

export interface UserCreateOneWithoutTodoInput {
  create?: UserCreateWithoutTodoInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutTodoInput {
  id?: ID_Input | null
  name: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  name?: String | null
  todo?: TodoUpdateManyWithoutUserInput | null
}

export interface UserUpdateManyMutationInput {
  name?: String | null
}

export interface UserUpdateOneRequiredWithoutTodoInput {
  create?: UserCreateWithoutTodoInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutTodoDataInput | null
  upsert?: UserUpsertWithoutTodoInput | null
}

export interface UserUpdateWithoutTodoDataInput {
  name?: String | null
}

export interface UserUpsertWithoutTodoInput {
  update: UserUpdateWithoutTodoDataInput
  create: UserCreateWithoutTodoInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  todo_every?: TodoWhereInput | null
  todo_some?: TodoWhereInput | null
  todo_none?: TodoWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateTodo {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Todo extends Node {
  id: ID_Output
  description: String
  isCompleted: Boolean
  user: User
}

/*
 * A connection to a list of items.

 */
export interface TodoConnection {
  pageInfo: PageInfo
  edges: Array<TodoEdge | null>
  aggregate: AggregateTodo
}

/*
 * An edge in a connection.

 */
export interface TodoEdge {
  node: Todo
  cursor: String
}

export interface TodoPreviousValues {
  id: ID_Output
  description: String
  isCompleted: Boolean
}

export interface TodoSubscriptionPayload {
  mutation: MutationType
  node?: Todo | null
  updatedFields?: Array<String> | null
  previousValues?: TodoPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  name: String
  todo?: Array<Todo> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string