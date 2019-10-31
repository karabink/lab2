task1 ={
    firstOfTask1: function (request, response)
    {
    let a = request.query["a"] ||1;
    let b = request.query["b"] ||1;
    let c = request.query["c"] ||1;
    if(a>=b){
        if (b>=c){
        a=a*2;
        b=b*2;
        c=c*2;
        response.send("a="+a+",b="+b+",c="+c)
        }
    }
    else{
        response.send("a="+b+",b="+a+",c="+c)
    }
    }
}
module.exports=task1;