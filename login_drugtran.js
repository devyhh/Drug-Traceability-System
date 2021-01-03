var loc = location.href;
  var n1 = loc.length;//地址的总长度
  var n2 = loc.indexOf("=");//取得=号的位置
  var id = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  web3.eth.defaultAccount=id;
$("#qq").val(id);
	
						//发送药品交易（卖方，买方，药名，批号，价格）
	$("#ii").click(function() 
	{

	if($("#dd").val()=="")
	alert("内容不能为空")
	else if($("#ee").val()=="")
	alert("内容不能为空")
	else if($("#cc").val()=="")
	alert("内容不能为空")
	else if($("#ff").val()=="")
	alert("内容不能为空")
	else
         { 
	var sendinfo=drug.transaction.sendTransaction(web3.eth.defaultAccount,$("#dd").val(),$("#cc").val(),$("#ff").val(),$("#ee").val(),{from: web3.eth.defaultAccount,gas:300000})
	   alert("已提交交易申请")}
            });

var myevent=drug.transaction_key();
	myevent.watch(function(error, result) {
        if (!error)
            {
		if(result.args.key)
		{
		alert("操作成功")
		
		}
		else
		 alert("无此权限或仓库中无此药品")
		
            } else {
                console.log(error);
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

$("#jj").val(timeString);