var target1 = document.getElementById("leftBtn");
var target2 = document.getElementById("rightBtn");
var btnDiv = document.getElementById("buttons");
var infoDiv = document.getElementById("info");
var date1 = 0;
var date2 = 0;
var diff = 0;
var array = new Array();
var count  = 0;
target1.onclick = function(){
    date1 = new Date();
};

target2.onclick = function(){
    date2 = new Date();
    diff = (date2 - date1)/1000;
    writeInfo();
};
function writeInfo() {
    var width = target1.offsetWidth;
    const style = window.getComputedStyle(btnDiv);
    var gap = parseInt(style.columnGap);
    var distance = width + gap *2 ;
    if( distance <= 1760){
    var newP = document.createElement("p");
    var id = Math.log2(2*distance/ width);
    newP.innerText = "Width in pixels = " + width + ", Distance in pixels = " + distance + ", Movement time = " + diff + " seconds." + ", ID = " + id.toFixed(3);
    infoDiv.appendChild(newP);
    array[count++] = id.toFixed(3);
    array[count] = diff;
    btnDiv.style.columnGap =  (gap + 60) + "px" ;
    target1.style.width = (width - 5)  + "px";
    target2.style.width = (width - 5)  + "px";
    count++;
    }
    else
    {
        var arr = ""
        for(i=0; i<array.length; i++)
        {
            arr = arr + " " + array[i];
        }
        console.log(arr);
    }
}
