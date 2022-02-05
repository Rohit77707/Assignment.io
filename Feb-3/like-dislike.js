var sum=0;
res.innerText=sum;
function myFunction(a)
{
    if(a==1)
    {
        var num1=document.getElementById(a);
        sum=num1+1+sum;
        res.innerText=sum;
    }
    else if(sum>0)
    {
        var num1=document.getElementById(a);
        sum=sum-num1-1;
        res.innerText=sum;
    }
     

}