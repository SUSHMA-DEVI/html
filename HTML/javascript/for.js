var obj=[{
	'name':' sushma',
	'rollnum':' 1',
	'college':' acoe',
	'branch':' AIML',
	'email':' sushma@gmail.com'

},
{
	'name':' deepika',
	'rollnum':' 2',
	'college':' acoe',
	'branch':' aiml',
	'email':' deepika@gmail.com'
},
{
	'name':' mounika',
	'rollnum':' 3',
	'college':' aec',
	'branch':' cse',
	'email':' mounika@gmail.com'
},
{
	'name':' anjali',
	'rollnum':' 4',
	'college':' aec',
	'branch':' civil',
	'email':' anjali@gmail.com'
}]
/*for(var i=0;i<obj.length;i++)
{
	//console.log(i+1,obj[i].name,obj[i].rollnum,obj[i].college,obj[i].branch);
}*/
for (var i=0;i<obj.length;i++){
      for (var key in obj[i]){
        document.write(obj[i][key])
      }
document.write("<br>");
    }