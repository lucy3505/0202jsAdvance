//求和  reduce
let sum = [1, 2, 3, 4].reduce((a, b) => a + b)
console.log(sum)
function sum(...args) {
  if (args.length === 0) {
    return 0
  }
  return args.pop() + sum(...args)
  // return args.length === 0 ? 0 : args.pop() + sum(...args)
  console.log(args)
}

console.log(sum(1, 2, 3, 4))