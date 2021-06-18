function swapTiles(cell1,cell2){
    var temp= document.getElementById(cell1).className;
    document.getElementById(cell1).className=document.getElementById(cell2).className;
    document.getElementById(cell2).className=temp;
}

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
    document.getElementById("result").innerText=``;
}


function clickTile(row,column){
    var cell=document.getElementById("cell"+row+column);
    var tile=cell.className;
  
    if(tile!="tile16"){
        if(row<4){
            if(document.getElementById("cell"+(row+1)+column).className=="tile16"){
                swapTiles("cell"+row+column,"cell"+(row+1)+column);
                moves++; displaymoves();
                return;
            }
        }

        if(row>1){
            if(document.getElementById("cell"+(row-1)+column).className=="tile16"){
                swapTiles("cell"+row+column,"cell"+(row-1)+column);
                moves++; displaymoves();
                return;
            }
        }

        if(column<4){
            if(document.getElementById("cell"+row+(column+1)).className=="tile16"){
                swapTiles("cell"+row+column,"cell"+row+(column+1));
                moves++; displaymoves();
                return;
            }
        }

        if(column>1){
            if(document.getElementById("cell"+row+(column-1)).className=="tile16"){
                swapTiles("cell"+row+column,"cell"+row+(column-1));
                moves++; displaymoves();
                return;
            }
        }
    }
    check1();    
}

function clickTiles(row,column){    //for 3*3 matrix
    var cells=document.getElementById("cells"+row+column);
    var tile=cells.className;
    if(tile!="tiles9"){
        if(row<3){
            if(document.getElementById("cells"+(row+1)+column).className=="tiles9"){
                swapTiles("cells"+row+column,"cells"+(row+1)+column);
                moves++; displaymoves();
                return;
            }
        }

        if(row>1){
            if(document.getElementById("cells"+(row-1)+column).className=="tiles9"){
                swapTiles("cells"+row+column,"cells"+(row-1)+column);
                moves++; displaymoves();
                return;
            }
        }

        if(column<3){
            if(document.getElementById("cells"+row+(column+1)).className=="tiles9"){
                swapTiles("cells"+row+column,"cells"+row+(column+1));
                moves++; displaymoves();
                return;
            }
        }

        if(column>1){
            if(document.getElementById("cells"+row+(column-1)).className=="tiles9"){
                swapTiles("cells"+row+column,"cells"+row+(column-1));
                moves++; displaymoves();
                return;
            }
        }
    }
    check2();
    
}
var timer=document.getElementById("timer");
let clock;
let counttimer=0;

function displaytime(){
    counttimer=0;
    clock=setInterval(()=>{      //clock = setInterval(()=>{},1000); same as clock = setInterval(function,1000);
        counttimer++;
        let sec=counttimer%60;
        let min=parseInt(counttimer/60);
        timer.innerText=`  ${min} : ${sec} `;
    },1000);
}

displaytime();    //displaytime is automatically runned in function after starting

let moves=0;

var move=document.getElementById("movement");

function displaymoves(){
    move.innerText=`${moves}`;
}
displaymoves();

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
        item.innerText=`YOU WON!!`;
        setTimeout(blank,2000);
    }
}

function check2(){
    let b=0;
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++){
            let item=document.getElementById("cell"+i+j).className;
            let s=(i-1)*3+j;
            if(item!="tile"+s){
                b=1;
            }
        }
    }
    if(b==0){
        //alert("YOU WIN!!. Press reset to play again");
        let item=document.getElementById("result");
        item.innerText=`YOU WON!!`;
        setTimeout(blank,2000);
    }
}

function blank(){
    let item=document.getElementById("result");
    item.innerText=`Click RESET`;
}
