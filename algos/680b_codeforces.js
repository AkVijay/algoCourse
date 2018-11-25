/**
 * Created by ishanarora on 25/11/18.
 */

const stdin = process.openStdin();
let content = ``;
stdin.addListener('data', d => {
  content += d.toString();
});

stdin.addListener('end', () => {
  content = content.split("\n");
  let content_one = content[0].split(" ");
  let total_cities = parseInt(content_one[0]);
  let a = parseInt(content_one[1]);
  let array = content[1].split(" ");
  console.log(totalCriminalCatch(total_cities, a, array));
});




function totalCriminalCatch(totalCities, a, ti) {

    ti = ti.map(Number);
    let count = 0;

    for (var i = 0; i < 100; i++) {

        let a1 = (a - 1 - i >= 0 && ti[a - 1 - i] > 0) || a - 1 - i < 0;
        let a2 = (a - 1 + i < totalCities && ti[a - 1 + i] > 0) || a - 1 + i >= totalCities

        if (a1 && a2) {
            if (i == 0) {
                count += 1;
            } else {

                if ((a - 1 - i >= 0 && ti[a - 1 - i] > 0)) {
                    count++;
                }

                if ((a - 1 + i < totalCities && ti[a - 1 + i] > 0)) {
                    count++;
                }
            }
        }
    }

    return count;
}
