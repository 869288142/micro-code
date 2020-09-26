// 函数，标注入参和返回值即可
function add(x: number, y: number): number {
  return x + y
}

const myAdd = function (x: number, y: number): number {
  return x + y
}
// 可选函数，默认参数
function buildName(firstName?: string, lastName = 'Smith') {
  return `${firstName} ${lastName}`
}

// 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(' ')}`
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
const employeeName = buildName2('Joseph', 'Samuel', 'Lucas', 'MacKinzie')

// 函数this
function f(this: void) {
  // make sure `this` is unusable in this standalone function
}

// 函数重载
const suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string; card: number }
function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == 'object') {
    const pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  }
  // Otherwise just let them pick the card
  else if (typeof x == 'number') {
    const pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

const myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
]

const pickedCard1 = myDeck[pickCard(myDeck)]
alert(`card: ${pickedCard1.card} of ${pickedCard1.suit}`)

const pickedCard2 = pickCard(15)
alert(`card: ${pickedCard2.card} of ${pickedCard2.suit}`)

// 接口中的函数
interface SearchFunc {
  (source: string, subString: string): boolean
}
