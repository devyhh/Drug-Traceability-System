 var loc = location.href;
  var n1 = loc.length;//��ַ���ܳ���
  var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
  var id = decodeURI(loc.substr(n2+1, n1-n2));//��=�ź��������
  web3.eth.defaultAccount=id;

$("#one").val(id);

$("#three").click(function() 
	{

	if($("#xx").val()=="")
	alert("���ݲ���Ϊ��")
	else if($("#two").val()=="")
	alert("���ݲ���Ϊ��")
	else if($("#yy").val()=="")
	alert("���ݲ���Ϊ��")
	else
         { drug.drug_production.sendTransaction($("#xx").val(),$("#two").val(),$("#yy").val(),web3.eth.defaultAccount,{from: web3.eth.defaultAccount,gas:300000});
					//ҩƷ������ҩƷ�������������ţ�������,{}��
	   alert("���ύ����")
	  
	  }
	
            });

var myEvent = drug.drug_production_key();
	  myEvent.watch(function(err, result) {
    	  if (!err) {
		if(result.args.key){
		alert("�����ɹ�")
		}
		else
		 alert("ҩƷ�����Ѵ��ڻ��޴�Ȩ��")
		
    	 	    } else {
           	 	console.log(err);
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

$("#zz").val(timeString);