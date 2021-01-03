 var loc = location.href;
  var n1 = loc.length;//地址的总长度
  var n2 = loc.indexOf("=");//取得=号的位置
  var id = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  web3.eth.defaultAccount=id;

$("#one").val(id);

$("#three").click(function() 
	{

	if($("#xx").val()=="")
	alert("内容不能为空")
	else if($("#two").val()=="")
	alert("内容不能为空")
	else if($("#yy").val()=="")
	alert("内容不能为空")
	else
         { drug.drug_production.sendTransaction($("#xx").val(),$("#two").val(),$("#yy").val(),web3.eth.defaultAccount,{from: web3.eth.defaultAccount,gas:300000});
					//药品生产（药品名，数量，批号，生产者,{}）
	   alert("已提交申请")
	  
	  }
	
            });

var myEvent = drug.drug_production_key();
	  myEvent.watch(function(err, result) {
    	  if (!err) {
		if(result.args.key){
		alert("操作成功")
		}
		else
		 alert("药品批号已存在或无此权限")
		
    	 	    } else {
           	 	console.log(err);
           		 }
 		
	  	 });

var years,months,days,hours, minutes, seconds;
var intYears,intMonths,intDays,intHours, intMinutes, intSeconds;
var today;
today = new Date(); //系统当前时间
intYears = today.getFullYear(); //得到年份,getFullYear()比getYear()更普适
intMonths = today.getMonth() + 1; //得到月份，要加1
intDays = today.getDate(); //得到日期
intHours = today.getHours(); //得到小时 
intMinutes = today.getMinutes(); //得到分钟
intSeconds = today.getSeconds(); //得到秒钟
years = intYears + "-"; 

if(intMonths < 10 ){
months = "0" + intMonths +"-";
} else {
months = intMonths +"-";
}
if(intDays < 10 ){
days = "0" + intDays +" ";
} else {
days = intDays + " ";
}
if (intHours == 0) {
hours = "00:";
} else if (intHours < 10) {
hours = "0" + intHours+":";
} else {
hours = intHours + ":";
}
if (intMinutes < 10) {
minutes = "0"+intMinutes+":";
} else {
minutes = intMinutes+":";
}
if (intSeconds < 10) {
seconds = "0"+intSeconds+" ";
} else {
seconds = intSeconds+" ";
}
timeString = years+months+days+hours+minutes+seconds;

$("#zz").val(timeString);