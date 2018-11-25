/**
 * Created by ishanarora on 25/11/18.
 */

function factors(elem1, elem2) {
    
    let count = 0;
    for (var i = elem1; i > Math.sqrt(elem1); i--) {
        if (elem2 % i == 0) {
            count += 2;
        }
    }
    return count;
}

console.log(factors(5,13));