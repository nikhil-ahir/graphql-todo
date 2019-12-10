import { IContext } from "../../interfaces/IContext"
import { Todo } from "../../generated/prisma"

const todos = {
    todos: async (parent, args, ctx: IContext, info):Promise<Array<Todo | null>> => {
      return await ctx.db.query.todoes({}, info)
    }
}

export default todos;
