function swapTiles(cell1,cell2){
    var temp= document.getElementById(cell1).className;
    document.getElementById(cell1).className=document.getElementById(cell2).className;
    document.getElementById(cell2).className=temp;
}

alert("By pressing the 'moon' icon at the right-corner, You can switch to dark mode");

function shuffle(){
    for(var row=1;row<=4;row++){
        for(var column=1;column<=4;column++){
            var row2= Math.floor(Math.random()*4+1);
            var column2= Math.floor(Math.random()*4+1);

            swapTiles("cell"+row+column,"cell"+row2+column2);
        }
    }
    for(var row=1;row<=3;row++){
        for(var column=1;column<=3;column++){
            var row2= Math.floor(Math.random()*3+1);
            var column2= Math.floor(Math.random()*3+1);

            swapTiles("cells"+row+column,"cells"+row2+column2);
        }
    }
    clearInterval(clock);
    displaytime();
    moves=0;
    displaymoves();
    document.getElementById("result").innerText=``;

}

function togglehide1(){   //display 4*4
    let table=document.getElementById('table');   //4*4
    let table2=document.getElementById('table2');   //3*3
    if(table2.style.display!='none'){
        table2.style.display='none';
    }
    table.style.display='block';
    clearInterval(clock);
    displaytime();
    moves=0;
    displaymoves();
    shuffle();
    document.getElementById("result").innerText=``;
}

function togglehide2(){   //display 3*3
    let table=document.getElementById('table');   //4*4
    let table2=document.getElementById('table2');   //3*3
    if(table.style.display!='none'){
        table.style.display='none';
    }
    table2.style.display='block';
    clearInterval(clock);   //we directly say to clear the setinterval clock
    displaytime();     //we again start displaytime
    moves=0;
    displaymoves();
    shuffle();
    document.getElementById("result").innerText=``;
}


function clickTile(row,column){
   

    if(clicked==true){    //challange portion. If value is true/ challange mode is on
        time=setInterval(()=>{
            rowf= Math.floor(Math.random()*4+1);
            columnf= Math.floor(Math.random()*4+1);
        },6000);
        if((row!=rowf)||(column!=columnf)){
            for1(row,column);   //function called
        }
    }
    else{
        for1(row,column);
    }    
}
function for1(row,column){          //for 4*4 matrix
    var cell=document.getElementById("cell"+row+column);
    var tile=cell.className;
    if(tile!="tile16"){
        if(row<4){
                for(let i=1;i<=4-row;i++){
                if(document.getElementById("cell"+(row+i)+column).className=="tile16"){
                    for(let j=i;j>=1;j--){
                        swapTiles("cell"+(row+j)+column,"cell"+(row+j-1)+column);
                        moves++; displaymoves();
                        //return;
                    }
                }
                }
        
        }

        if(row>1){
            for(let i=row-1;i>=1;i--){
            if(document.getElementById("cell"+(row-i)+column).className=="tile16"){
                for(let j=i;j>=1;j--){
                    swapTiles("cell"+(row-j)+column,"cell"+(row-j+1)+column);
                    moves++; displaymoves();
                    //return;
                }
            }
        }
            
        }

        if(column<4){
            for(let i=1;i<=4-column;i++){
                if(document.getElementById("cell"+row+(column+i)).className=="tile16"){
                    for(let j=i;j>=1;j--){
                        swapTiles("cell"+row+(column+j),"cell"+row+(column+j-1));
                        moves++; displaymoves();
                        //return;
                    }
                }
            }
        }

        if(column>1){
            for(let i=column-1;i>=1;i--){
                if(document.getElementById("cell"+row+(column-i)).className=="tile16"){
                    for(let j=i;j>=1;j--){
                        swapTiles("cell"+row+(column-j),"cell"+row+(column-j+1));
                        moves++; displaymoves();
                        //return;
                    }
                }
            }

        }
    }   
}

function clickTiles(row,column){    //for 3*3 matrix
    if(clicked==true){    //challange portion
        time=setInterval(()=>{
            rowf1= Math.floor(Math.random()*3+1);   //get a random 3*3 cell
            columnf1= Math.floor(Math.random()*3+1);
        },6000);
        if((row!=rowf1)||(column!=columnf1)){
            for2(row,column);   //function called
        }
    }
    else{
        for2(row,column);
    }
    
}

function for2(row,column){        //for 3*3 matrix
    var cells=document.getElementById("cells"+row+column);
    var tile=cells.className;
    if(tile!="tiles9"){
        if(row<3){
            for(let i=1;i<=3-row;i++){
                if(document.getElementById("cells"+(row+i)+column).className=="tiles9"){
                    for(let j=i;j>=1;j--){
                        swapTiles("cells"+(row+j)+column,"cells"+(row+j-1)+column);
                        moves++; displaymoves();
                        //return;
                    }
                }
            }
        }

        if(row>1){
            for(let i=row-1;i>=1;i--){
                if(document.getElementById("cells"+(row-i)+column).className=="tiles9"){
                    for(let j=i;j>=1;j--){
                        swapTiles("cells"+(row-j)+column,"cells"+(row-j+1)+column);
                        moves++; displaymoves();
                        //return;
                    }
                }
            }

        }

        if(column<3){
            for(let i=1;i<=3-column;i++){
                if(document.getElementById("cells"+row+(column+i)).className=="tiles9"){
                    for(let j=i;j>=1;j--){
                        swapTiles("cells"+row+(column+j),"cells"+row+(column+j-1));
                        moves++; displaymoves();
                        //return;
                    }
                }
            }
        }

        if(column>1){
            for(let i=column-1;i>=1;i--){
                if(document.getElementById("cells"+row+(column-i)).className=="tiles9"){
                    for(let j=i;j>=1;j--){
                        swapTiles("cells"+row+(column-j),"cells"+row+(column-j+1));
                        moves++; displaymoves();
                        //return;
                    }
                }
            }
        }
    }
}
var timer=document.getElementById("timer");
let clock;
let counttimer=0;
let sec;
let min;

function displaytime(){
    counttimer=0;
    clock=setInterval(()=>{      //clock = setInterval(()=>{},1000); same as clock = setInterval(function,1000);
        counttimer++;
        sec=counttimer%60;
        min=parseInt(counttimer/60);
        timer.innerText=`  ${min} : ${sec} `;
    },1000);
}

displaytime();    //displaytime is automatically runned in function after starting

let moves=0;

var move=document.getElementById("movement");

function displaymoves(){
    move.innerText=`${moves}`;
    check1();
    check2();
}
displaymoves();

let i=100000000;

/*if(localStorage.getItem("key").length()!=0){
    document.getElementById("highscore").innerHTML=localStorage.getItem("key");    //to store previous timer string
}*/


function check1(){
    let a=0;
    for(let i=1;i<=4;i++){
        for(let j=1;j<=4;j++){
            let item=document.getElementById("cell"+i+j).className;
            let s=(i-1)*4+j;
            if(item!="tile"+s){
                a=1;
            }
        }
    }
    if(a==0){
        //alert("YOU WIN!!. Press reset to play again");
        let item=document.getElementById("result");
        item.innerText=`YOU WIN!!`;
        setTimeout(blank,2000);

        if(i>counttimer){
            i=counttimer;        //i is minimum time
            localStorage.setItem("key",` ${min} m : ${sec} s`);
            document.getElementById("highscore").innerHTML=localStorage.getItem("key");
        }
        clearInterval(clock);
    }
}

function check2(){
    let b=0;
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++){
            let item1=document.getElementById("cells"+i+j).className;
            let s=(i-1)*3+j;
            if(item1!="tiles"+s){
                b=1;
            }
        }
    }
    if(b==0){
        //alert("YOU WIN!! Press reset to play again");
        let item2=document.getElementById("result");
        item2.innerText=`YOU WIN!!`;
        setTimeout(blank,2000);
        
        if(i>counttimer){
            i=counttimer;        //i is minimum time
            localStorage.setItem("key",` ${min} m ${sec} s`);
            document.getElementById("highscore").innerHTML=localStorage.getItem("key");
        }
        clearInterval(clock);
    }
}

function blank(){
    let item=document.getElementById("result");
    item.innerText=`Click RESET`;
}

var colormode=document.getElementById("mode");
colormode.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        colormode.src="https://img.icons8.com/emoji/48/000000/sun-emoji.png";
    }
    else{
        colormode.src="https://img.icons8.com/ios-filled/50/000000/crescent-moon.png";
    }
}

var clicked=false;
let time;
let rowf;
let columnf;
let rowf1;
let columnf1;

function change(){
    let challange=document.getElementById("challange");
    if(!clicked){
        clicked=true;
        alert("NOTE: CHALLENGE MODE activated!! Here, a random box is freezed for 6 seconds, disabling the user to move that particuler box. Press 'ok' to continue");
        //challange.innerText="Challange mode:- ON";
    }
    else{
        clicked=false;
        clearInterval(time);
        //challange.innerText="Challange mode:- OFF";
    }
}


/*---------------TEST CODES------------*/

/*if(row<4){
     if(document.getElementById("cell"+(row+1)+column).className=="tile16"){
         swapTiles("cell"+row+column,"cell"+(row+1)+column);
         moves++; displaymoves();
         return;
     }*/

/*if(row>1){
        if(document.getElementById("cell"+(row-1)+column).className=="tile16"){
            swapTiles("cell"+row+column,"cell"+(row-1)+column);
            moves++; displaymoves();
            return;
    }*/

/*if(column<4){
        if(document.getElementById("cell"+row+(column+1)).className=="tile16"){
            swapTiles("cell"+row+column,"cell"+row+(column+1));
            moves++; displaymoves();
            return;
        }*/

/*if(column>1){
            if(document.getElementById("cell"+row+(column-1)).className=="tile16"){
            swapTiles("cell"+row+column,"cell"+row+(column-1));
            moves++; displaymoves();
            return;
    }*/

    /*if(row<3){
        if(document.getElementById("cells"+(row+1)+column).className=="tiles9"){
            swapTiles("cells"+row+column,"cells"+(row+1)+column);
            moves++; displaymoves();
            return;
        }*/

    /*if(row>1){
            /*if(document.getElementById("cells"+(row-1)+column).className=="tiles9"){
                swapTiles("cells"+row+column,"cells"+(row-1)+column);
                moves++; displaymoves();
                return;
        }*/

    /*if(column<3){
            if(document.getElementById("cells"+row+(column+1)).className=="tiles9"){
                swapTiles("cells"+row+column,"cells"+row+(column+1));
                moves++; displaymoves();
                return;
        }*/

     /*if(column>1){
                if(document.getElementById("cell"+row+(column-1)).className=="tile16"){
                    swapTiles("cell"+row+column,"cell"+row+(column-1));
                    moves++; displaymoves();
                    return;
        }*/