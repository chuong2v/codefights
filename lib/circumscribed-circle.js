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