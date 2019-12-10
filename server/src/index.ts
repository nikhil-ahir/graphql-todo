import { GraphQLServer } from 'graphql-yoga'
import * as path from 'path'
import { Prisma } from './generated/prisma'
const { default: costAnalysis } = require('graphql-cost-analysis')
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from "./resolver"
import { formatError } from "apollo-errors";

const prisma = new Prisma({
    endpoint: "http://localhost:4467",
    // secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
    debug: false, // log all GraphQL queries & mutations
});

// const resolvers = {
//     Query: {
//         todos: async (parent, args, ctx, info) => {
//           console.log("args::", args)
//           return await ctx.db.query.todoes({}, info)
//         },
//     },
// }

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql')) 
const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new GraphQLServer({
    // typeDefs: path.join(__dirname, 'schema.graphql'), //use makeExecutableSchema instead
    // resolvers, //use makeExecutableSchema instead,
    schema,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    },
    context: request => ({
        request,
        db: prisma,
    }),
});

server.start({
    formatError,
    validationRules: (req) => [
      costAnalysis({
        variables: req.query.variables,
        maximumCost: 50,
        defaultCost: 1,
        onComplete(cost) {
          if (cost > 1) {
            console.log(`Cost analysis score: ${cost} ${JSON.stringify(req.query)}`)
          }
        },
      })
    ]
  }).then(() => {
    console.log('Server is running on http://localhost:4000')
  }).catch((err) => {
    console.error('Server start failed', err)
    process.exit(1)
  })
