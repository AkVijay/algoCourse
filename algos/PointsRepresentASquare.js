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


function calculateSquare(point1, point2, point3, point4) {

    let d1 = Point.distance(point1, point2);
    let d2 = Point.distance(point1, point3);
    let d3 = Point.distance(point1, point4);

    if (d1 === d2 && d1 * 2 === d3 && d2 * 2 === Point.distance(point2, point3)) {
        const d = Point.distance(point2, point4);
        return (d === Point.distance(point2, point4) && d === d1);
    }


    if (d2 === d3 && d2 * 2 === d1 && d2 * 2 === Point.distance(point3, point4)) {
        const d = Point.distance(point2, point4);
        return (d === Point.distance(point2, point3) && d === d2);
    }


    if (d1 === d3 && d1 * 2 === d2 && d1 * 2 === Point.distance(point2, point4)) {
        const d = Point.distance(point2, point3);
        return (d === Point.distance(point3, point4) && d === d1);
    }


    return 0;
}

