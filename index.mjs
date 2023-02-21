/**
 * @param {string} name
 * @param {(greeting: string) => void} cb
 */
function greet(name, cb) {
    cb(`Hello, ${name}!`)
}

let name = "Name Nameson"

greet(name, function(greeting) {
    console.log(greeting)
})
