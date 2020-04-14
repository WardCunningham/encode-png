import * as png from "./encode-png.mjs"

let data = new Array(8*8*4)
let result = await png.encode(data, 8, 8, {})
console.log(data, result)