// function create with Es-6 Method
const squareIt = num => num * num;
const result = squareIt(3);
console.log(result);

const multiParemiter = (a, b) => a + b;
const result2 = multiParemiter(10, 10);
console.log(result2);

const Math = (p, q) => {
    const sum = p + q;
    const diff = p - q;
    const result3 = sum * diff;
    return result3;
}
const result4 = Math(12, 10);
console.log(result4);