function sudoku(puzzle)
{
var npos={},impos,empsp=81;

while(empsp>0)
{
	//every single line we will find empty space line
empsp=0;
for(var ver=0;ver<puzzle.length;ver++)
{
for(var hor=0;hor<puzzle.length;hor++)
{
	//zeros are taking empty space
if(puzzle[ver][hor]===0)
{
npos={};
for(var i=0;i<9;i++)
{
if(puzzle[ver][i]>0)
{
npos[puzzle[ver][i]]=true;
}
if(puzzle[i][hor]>0)
{
npos[puzzle[i][hor]]=true;
}
}
for(var vbox=Math.floor(ver/3)*3;vbox<Math.floor(ver/3)*3;vbox++)
{
for(var hbox=Math.floor(hor/3)*3;hbox<Math.floor(hor/3)*3;hbox++)
{
if(puzzle[vbox][hbox])
{
npos[puzzle[vbox][hbox]]=true;
}
}
}

impos=Object.keys(npos);
if(impos===8)
{
for(var i=1;i<10;i++)
{
if(impos.indexOf(i.tostring())<0)
{
console.log(ver,hor);
puzzle[ver][hor]=i;
}
}
}
else
{
empsp++;
}
return puzzle;
}
}
}
}
}

var puzzle=[
           [5,3,0,0,7,0,0,0,0],
           [6,0,0,1,9,5,0,0,0],
           [0,9,8,0,0,0,0,6,0],
           [8,0,0,0,6,0,0,0,3],
           [4,0,0,8,0,3,0,0,1],
           [7,0,0,0,2,0,0,0,6],
           [0,6,0,0,0,0,2,8,0],
           [0,0,0,4,1,9,0,0,5],
           [0,0,0,0,8,0,0,7,9]];
console.log((sudoku(puzzle)));