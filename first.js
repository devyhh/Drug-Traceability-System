  var loc = location.href;
  var n1 = loc.length;//��ַ���ܳ���
 var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
  var id = decodeURI(loc.substr(n2+1, n1-n2));//��=�ź��������
  web3.eth.defaultAccount=id;
var myrole=drug.role(web3.eth.defaultAccount);
console.log("role :"+myrole);
if(myrole[1]==0)
mytype="��ҩ��";
else if(myrole[1]==1)
mytype="������";
else if(myrole[1]==2)
mytype="ҩ��";
else if(myrole[1]==3)
mytype="������";
else if(myrole[1]==4)
mytype="��ܲ���";

if(myrole[2]==1)
mypower="����";
else
mypower="����ͣ";

var balance = web3.eth.getBalance(web3.eth.defaultAccount);
var value = web3.fromWei(balance,"ether");
	console.log("Wei :"+value.toString())


$("#now").val("��ǰ�˻�: "+web3.eth.defaultAccount+" ;\n"+"�˻�����: "+myrole[0]+" ;\n"+"�˻����: "+mytype+" ;\n"+"�˻�״̬: "+mypower+" ;\n"+"�˻����: "+value.toString()+" ;\n");

for(var i=0;i<myrole[3];i++)
{
drug.buyer_inquire_ware(i,function(error, result){

            if(!error)

                {

                  $("#home").val($("#home").val()+"ҩƷ����"+result[0]+" ���ţ�"+result[1]+" ������"+result[2]+" �۸�"+result[3]+"\n");

                 }

            else
               console.error(error);

		   });
}
$("#history").val("������ϸ");
for(var j=0;j<myrole[4];j++)
{
drug.buyer_inquire_mess(j,function(error, result){

            if(!error)

                {

                  $("#history").val($("#history").val()+"\n������"+result[0]+"\n�򷽣�"+result[1]+"\nʱ�䣺"+result[2]+"\n������"+result[3]+"\n���ţ�"+result[4]+"\n");

                 }

            else
               console.error(error);

		   });
}

$("#button1").click(function() 
	{

           window.open("ask_druginfo.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	});

$("#button2").click(function() 
	{

	   
           window.open("ask_drugtran.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	});
$("#button3").click(function() 
	{

	if(myrole[1]==4)
           window.open("ask_drugreport.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	else
         alert("Ȩ�޲���");
	});
$("#button4").click(function() 
	{

	if(myrole[1]==0)
           window.open("login_druginfo.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	else
	 alert("Ȩ�޲���");
	});
$("#button5").click(function() 
	{

	if(myrole[1]==3)
	alert("���ܽ��д˲���");
		else if(myrole[1]==4)
		   alert("���ܽ��д˲���");
	else
	  window.open("login_drugtran.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	
	});
$("#button6").click(function() 
	{


		if(myrole[1]==4)
		   alert("���ܽ��д˲���");
	else          
	 window.open("login_drugreport.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	});
