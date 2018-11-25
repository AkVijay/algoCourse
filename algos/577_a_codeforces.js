/**
 * Created by ishanarora on 25/11/18.
 */

const stdin = process.openStdin();
let content = ``;
stdin.addListener('data', d => {
  content += d.toString();
});

stdin.addListener('end', () => {
  content = content.split(" ");
 console.log(factors(parseInt(content[0]), parseInt(content[1])));
});



function factors(elem1, elem2) {
    let count = 0;
    for (var i = 1; i <= elem1; i++) {
        if (elem2 % i == 0 && elem2 / i <= elem1) {
            count += 1;
        }
    }
    return count;
}

