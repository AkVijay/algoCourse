/**
 * Created by ishanarora on 30/11/18.
 */

const stdin = process.openStdin();
let content = ``;
stdin.addListener('data', d => {
  content += d.toString();
});

stdin.addListener('end', () => {
    content = content.split("\n");
    console.log(countrySide(parseInt(content[0]), (content[1])));
});




function countrySide(count, samples) {

    samples.map(Number)

    let lastElement = samples.pop();

    if (lastElement == 0) {
        return 'UP'
    }

    if (lastElement == 15) {
        return 'DOWN'
    }

    let secondLast = samples.pop();
    if (secondLast === undefined) {
        return -1;
    }

    let initialDecision = 'DOWN'

    if (lastElement > secondLast) {
        initialDecision = 'UP';
    }

    return initialDecision;
}


