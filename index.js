// Pro trick to calculate the total costs of items

const TAX_RATE = 1.1 
const SHIPPING_DEFAULT = 5

function calculateTotal(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = 0 ){
  if ( items == null || items.length === 0) return

  const itemCost = items.reduce((total, item)=>{
    return total + item.price * item.quantity
  }, 0)

  const discountRate = 1 - discount

  return itemCost * discountRate * TAX_RATE + shipping
}

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 }
]

console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, { shipping : 0 }))
console.log(calculateTotal(testItems, { discount : .75 }))
console.log(calculateTotal(testItems, { shipping : 12 }))

// a function that returns the number converted to string
function numberToAccountingString(number) {
  if ( number == null ) return
  if ( number < 0 ) return `(${Math.abs(number)})`
  return number.toString()
}

console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(0))
console.log(numberToAccountingString(10))
console.log(numberToAccountingString(-5))


//higher order function
//--------------------------------------------------
const radius = [1, 2, 3, 4]
const add = (rad) => {
    return rad + 1
} 
Array.prototype.calculate = function (logic) {
    const output = []
    for (let i = 0; i < this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}
const calculate = (rad, logic) => {
    const output = []
    for (let i = 0; i < rad.length; i++){
        output.push(logic(rad[i]))
    }
    return output
}
console.log(calculate(radius,add))
console.log(radius.calculate(add))
console.log(radius.map(add))
//--------------------------------------------------
