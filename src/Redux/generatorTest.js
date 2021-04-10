
function *g1() {
    console.log('Sup bro')
    yield 'Yield 1 Ran..'
    console.log('World')
    yield 'Yield 2 Ran..'
}

var g = g1()

console.log(g.next)