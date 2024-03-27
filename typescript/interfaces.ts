interface Point {
    x: number;
    y: number;
}

function printCoord(pt: Point): void{
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's value is " + pt.y)
}

printCoord({ x: 100, y: 100});