/**
 * Created by ishanarora on 20/11/18.
 */


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + "," + this.y + ")"
    }

    static distance(a,b) {
        return ((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
    }

}

const point1 = new Point(12, 23);
const point2 = new Point(12, 11);


function calculateSquare(point1, point2, point3, point4) {

    let d1 = Point.distance(point1, point2);
    let d2 = Point.distance(point1, point3);
    let d3 = Point.distance(point1, point4);

    if(d1 === d2 && d1 * 2 === d3 && d2 * 2 === Point.distance(point2, point3)) {
        

    }







}
