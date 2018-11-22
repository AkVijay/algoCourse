/**
 * Created by ishanarora on 22/11/18.
 */

const stdin = process.openStdin();
let content = ``;
stdin.addListener('data', d => {
  content += d.toString();
});

stdin.addListener('end', () => {
 content =  content.split("\n");
content[0] = (parseInt(content[0]));
content[1] = content[1].split(" ");
content[1] = content[1].map(elem => parseInt(elem));

console.log(wetShark(content[0], content[1]))

});

function wetShark(count , elems) {

    let sum = 0;
    let deduct = Number.MAX_SAFE_INTEGER;
    for (var i = count - 1; i >= 0; i--) {
        sum += elems[i];
        if (elems[i] % 2 != 0) {
            deduct = Math.min(deduct, elems[i]);
        }
    }

    if (sum % 2 != 0) {
        sum -= deduct;
    }

    return sum;
}

