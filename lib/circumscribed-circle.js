function circumcircle(triangle) {
    var a = triangle[0][0]
    var b = triangle[0][1]
    var c = triangle[1][0]
    var d = triangle[1][1] 
    var e = triangle[2][0]
    var f = triangle[2][1]
    var D = -(b-d)*(a-e) + (a-c)*(b-f)
    var Dx = -(b*c-a*d)*(a-e) + (b*e-a*f)*(a-c)
    var Dy = (b*e-a*f)*(b-d)-(b*c-a*d)*(b-f) 
    var x, y, r;
    try{
        x = Dx/D
        y = Dy/D
        r = Math.sqrt((x-a)*(x-a)+(y-b)*(y-b))
    }catch(error){
        console.log(error)
    }
    return [x,y,r]
}
