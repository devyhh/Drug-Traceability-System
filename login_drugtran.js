var loc = location.href;
  var n1 = loc.length;//��ַ���ܳ���
  var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
  var id = decodeURI(loc.substr(n2+1, n1-n2));//��=�ź��������
  web3.eth.defaultAccount=id;
$("#qq").val(id);
	
						//����ҩƷ���ף��������򷽣�ҩ�������ţ��۸�
	$("#ii").click(function() 
	{

	if($("#dd").val()=="")
	alert("���ݲ���Ϊ��")
	else if($("#ee").val()=="")
	alert("���ݲ���Ϊ��")
	else if($("#cc").val()=="")
	alert("���ݲ���Ϊ��")
	else if($("#ff").val()=="")
	alert("���ݲ���Ϊ��")
	else
         { 
	var sendinfo=drug.transaction.sendTransaction(web3.eth.defaultAccount,$("#dd").val(),$("#cc").val(),$("#ff").val(),$("#ee").val(),{from: web3.eth.defaultAccount,gas:300000})
	   alert("���ύ��������")}
            });

var myevent=drug.transaction_key();
	myevent.watch(function(error, result) {
        if (!error)
            {
		if(result.args.key)
		{
		alert("�����ɹ�")
		
		}
		else
		 alert("�޴�Ȩ�޻�ֿ����޴�ҩƷ")
		
            } else {
                console.log(error);
            }
   	 });

var years,months,days,hours, minutes, seconds;
var intYears,intMonths,intDays,intHours, intMinutes, intSeconds;
var today;
today = new Date(); //ϵͳ��ǰʱ��
intYears = today.getFullYear(); //�õ����,getFullYear()��getYear()������
intMonths = today.getMonth() + 1; //�õ��·ݣ�Ҫ��1
intDays = today.getDate(); //�õ�����
intHours = today.getHours(); //�õ�Сʱ 
intMinutes = today.getMinutes(); //�õ�����
intSeconds = today.getSeconds(); //�õ�����
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