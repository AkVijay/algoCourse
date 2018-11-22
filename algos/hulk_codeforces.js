const stdin = process.openStdin();
let content = ``;
stdin.addListener('data', d => {
  content += d.toString();
});

stdin.addListener('end', () => {
 console.log(hulkCodeforces(parseInt(content)));
});


function hulkCodeforces(input) {

    const hate = 'I hate';
    const love = 'I love';

    const output_array = [];
    for (var i = 1; i <= input; i++) {
        if (i % 2 == 0) {
            output_array.push(love);
        } else {
            output_array.push(hate);
        }
    }

    const output = output_array.join(' that ');

    return output + " it";
}


