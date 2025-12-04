import {askRiddle} from "./ridelAsk.js"
import r4 from "../riddles/r4.js"


export const measureSolveTime = (fn) => {
    const start = Date.now();
    fn()
    const end = Date.now();
    return (end - start) / 1000
}