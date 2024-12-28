class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce((accu, side) => accu += side, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        return (a + b > c && c + b > a && c + a > b)
    }
}

class Square extends Polygon {
    get area() {
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        const d = this.sides[3]
        return a * b
    }
    get isValid() {
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]
        const d = this.sides[3]
        return (a === b && c === d && a === c)
    }
}