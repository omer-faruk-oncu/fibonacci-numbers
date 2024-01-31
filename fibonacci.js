
let n = +prompt("Enter a number 'n' :")

function fibonacci(n){
    let num1 = 0
    let num2 = 1
    let sum

    console.log(num1);
    console.log(num2);

    for(let i = 0; i <= n  ; i++){
        
        
        sum = num1 + num2
        num1 = num2
        num2 = sum
        console.log(sum);
    }
}

fibonacci(n)
