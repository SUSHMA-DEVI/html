/*var a=10;
var b=20;
var c=30;
document.write(a)
console.log(b);
document.write("hello iam sushma</br>");
document.write("the value c is ",+c);
alert(a)*/

/*length of the value*/
/*var n='sushma';
document.write(n.length +"</br>");
n +=' devi'
document.write(n.length+"</br>");


/*if we remove the + symbol it comes exact number
or else both the value numbers*/
/*var n='sushma';
document.write(n.length +"</br>");
n =' devi'
document.write(n.length);
*/
/*var name='sushma';
name+=' devi';
name+=',deepika'
document.write(name);*/


/*TYPE OF 
*/
/*var a=10;
document.write(typeof(a)+"</br>");
var a=10.22;
document.write(typeof(a)+"</br>");
var a='s'
document.write(typeof(a));*/


/*<DEFAULT VALUE >
var a;
document.write(a);*/


/*Array

var arr=['sushma','devi','deepika'];
document.write(arr);*/


/*var arr=['devi','sushma','deepika','mounika'];
console.log(arr);
document.write(arr[1]+"  ",arr[2]);*/



//OBJECT 
/*var obj=[{
	'name':'sushma',
	'rollnum':'1',
	'college':'acoe',
	'branch':'AIML'

},
//console.log(obj.name,obj.rollnum,obj.college,obj.branch);
//console.log(obj['name'],obj['rollnum'],obj['college'],obj['branch']);


//var t =
{
	'name':'deepika',
	'rollnum':'2',
	'college':'acoe',
	'branch':'aiml'
}]
console.log(obj)
console.log(obj[0].name);
console.log(obj[1].name);
console.log(obj[0].rollnum);
console.log(obj[1].rollnum);
console.log(obj[0].college);
console.log(obj[1].college);
console.log(obj[0].branch);
console.log(obj[1].branch);*/

/*5 STUDENTS RECORD*/
/*var obj=[{
	'name':'sushma',
	'rollnum':'1',
	'college':'acoe',
	'branch':'AIML'

},
{
	'name':'deepika',
	'rollnum':'2',
	'college':'acoe',
	'branch':'aiml'
},
{
	'name':'deepika',
	'rollnum':'2',
	'college':'acoe',
	'branch':'aiml'
}]*/

const obj=["sushma",1,"acoe","AIML"];
let text=" ";
for(i=0;i<obj.length;i++)
{
	text =obj[i];
}
document.write(text);
document.getElementById("demo").innerHTML = text;


