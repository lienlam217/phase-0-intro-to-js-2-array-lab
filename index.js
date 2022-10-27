// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
 
cats;

function destructivelyAppendCat(n) {
    cats.push(n);
}
function destructivelyPrependCat(n) {
    cats.unshift(n);
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift() 
}


function appendCat(name) {
   return ([...cats, name])

}
 
function prependCat(name) {
    return ([name, ...cats])
}

function removeLastCat() {
    return (cats.slice(0, 2))
}

function removeFirstCat() {
    return (cats.slice(1))
}