/**
 * Created by techmaster on 5/17/15.
 */
function factorial(n) {
    if (typeof(n) != "number") {
        return NaN;
    }

    if (n === parseInt(n)) {
        if (n <= 1) {
            return 1;
        } else {
            var result = 1;
            for (var i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    } else {
        return NaN;
    }
}

function fact(n) {
    if (typeof(n) != "number") {
        return NaN;
    }

    if (n === parseInt(n)) {
        if (n <= 1) {
            return 1;
        } else {
            return n * fact(n-1);
        }
    } else {
        return NaN;
    }
}

console.log(factorial(5));
console.log(fact(5));