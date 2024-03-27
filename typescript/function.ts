function add( x: number, y: number): number {
    return x+y;
}

var myAdd = function( x: number, y: number): number { return x + y;}

//Optional Parameters
function add2(a: number, b: number, c?: number): number{
    if(c) {
        return a + b + c
    }
    return a + b
}

add2(1,2)
add2(1,2,3)

//Default parameters
function add3(a: number, b: number, c:number = 10):number {
    return a + b + c
}


