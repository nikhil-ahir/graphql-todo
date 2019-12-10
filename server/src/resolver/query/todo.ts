import { IContext } from "../../interfaces/IContext"
import { Todo } from "../../generated/prisma"
import { FatalError } from "../../errors"

const todos = {
    todos: async (parent, args, ctx: IContext, info):Promise<Array<Todo | null>> => {
        try {
            return await ctx.db.query.todoes({}, info)
        } catch {
            throw new FatalError()
        }
    }
}

export default todos;
