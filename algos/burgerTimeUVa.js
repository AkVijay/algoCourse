/**
 * Created by ishanarora on 24/11/18.
 */

const stdin = process.openStdin();
let content = ``;
stdin.addListener('data', d => {
  content += d.toString();
});

stdin.addListener('end', () => {


    console.log(content);

   // burgerTime(length, element)


});





function burgerTime(length, element) {

    let prevDrugstore = -1;
    let prevRestaurant = -1;
    let diff = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i < length; i++) {

        var value = element.charAt(i);

        if (value === '.') {
            continue;
        }

        if (value === 'D') {
            prevDrugstore = i;
            if (prevRestaurant !== -1) {
                diff = Math.min(diff, Math.abs(prevDrugstore - prevRestaurant))
            }
        }

        if (value === 'R') {
            prevRestaurant = i;
            if (prevDrugstore !== -1) {
                diff = Math.min(diff, Math.abs(prevDrugstore - prevRestaurant))
            }
        }

        if (value === 'Z') {
            return 0;
        }
    }

    return diff;
}


//console.log(burgerTime(25 , '..D...R.RR...DD...D.R...R'));









