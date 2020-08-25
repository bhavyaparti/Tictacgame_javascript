window.addEventListener('load',bindEvent);
function bindEvent()
{
    document.querySelector("#b1").addEventListener('click',show);
    document.querySelector("#b2").addEventListener('click',show);
    document.querySelector("#b3").addEventListener('click',show);
    document.querySelector("#b4").addEventListener('click',show);
    document.querySelector("#b5").addEventListener('click',show);
    document.querySelector("#b6").addEventListener('click',show);
    document.querySelector("#b7").addEventListener('click',show);
    document.querySelector("#b8").addEventListener('click',show);
    document.querySelector("#b9").addEventListener('click',show);

}
var flag=0;
function show()
{
    var b=this;
     var a=b.value;
    console.log(a);
    if(flag==0)
    {
        this.innerText="O";
        flag=1;
    }
    else{
        this.innerText="X";
        flag=0;
    }
    check("b1","b2","b3");
    check("b4","b5","b6");
    check("b7","b8","b9");
    check("b1","b5","b9");
    check("b3","b5","b6");
    check("b1","b4","b7");
    check("b2","b5","b8");
    check("b3","b6","b9");
}
function check(a,b,c)
{

    if(document.querySelector(`#${a}`).innerText == "X" && document.querySelector(`#${b}`).innerText == "X" && document.querySelector(`#${c}`).innerText == "X")
    {
        document.querySelector("#result").innerText="X is Winner";
    }
    else if(document.querySelector(`#${a}`).innerText == "O" && document.querySelector(`#${b}`).innerText == "O" && document.querySelector(`#${c}`).innerText == "O")
    {
        document.querySelector("#result").innerText="O is Winner";
    }
}