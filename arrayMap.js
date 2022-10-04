let array = [6,8,2,4,9]

let newArr = array.map((e, i, a) => e * a[i+1] || e )
console.log(newArr)
