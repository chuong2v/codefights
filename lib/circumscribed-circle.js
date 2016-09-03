/**
For any given triangle, a circle can be circumscribed around it:

Given the three (x, y) coordinates of a triangle, find the (x, y) coordinates of the center of the circumscribed circle and its radius.

It is guaranteed that all tests have an integer solution.

Example

For

triangle = [[3,2],
            [1,4],
            [5,4]]

the output should be
circumcircle(triangle) = [3, 4, 2].

The circumscribed circle is centered at (3, 4) and has a radius of 2.

Input/Ouput

    [time limit] 4000ms (js)

    [input] array.array.integer triangle

    Array of three arrays of length 2, where each array represents (x, y) coordinates of triangle's vertices.

    It is guaranteed that all three points don't lie on the same line.

    Constraints:
    triangle.length = 3,
    triangle[i].length = 2,
    -100 ≤ triangle[i][j] ≤ 100.

    [output] array.integer

    Array of three elements: the first two elements are the (x, y) coordinates of the circumscribed triangle, and the last element is its radius.
*/

function circumcircle(triangle) {
    var a = triangle[0][0]
    var b = triangle[0][1]
    var c = triangle[1][0]
    var d = triangle[1][1] 
    var e = triangle[2][0]
    var f = triangle[2][1]
    var D = 2*(a-c)*(b-f) - 2*(b-d)*(a-e)
    var Dx = (a*a-c*c+b*b-d*d)*(b-f) -(a*a-e*e+b*b-f*f)*(b-d)
    var Dy = (a*a-e*e+b*b-f*f)*(a-c) -(a*a-c*c+b*b-d*d)*(a-e)
    var x, y, r;
    try{
        x = Dx/D;
        y = Dy/D;
        r = Math.sqrt((x-a)*(x-a)+(y-b)*(y-b))
    }catch(error){
        console.log(error)
    }
    return [x,y,r];
}

/**
//Awful brute force
//Using two facts:
//  - There's always an answer
//  - All answers are integers
//Check every possible point until the distance to each vertex is the same

j = i = 99
circumcircle = t => {
    while(t.map(e => d = Math.hypot(e[0] - i, e[1] - j)).some(e => e != d))
        j = j-- + 99 ? j : !i-- - j
    return [i, j, d]
}
*/