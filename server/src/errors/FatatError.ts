import { createError } from "apollo-errors"

const FatalError = createError("FatalError", {
    message: "A Fatal error has occured"
})

export default FatalError;