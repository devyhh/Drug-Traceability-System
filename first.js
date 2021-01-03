  var loc = location.href;
  var n1 = loc.length;//地址的总长度
 var n2 = loc.indexOf("=");//取得=号的位置
  var id = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  web3.eth.defaultAccount=id;
var myrole=drug.role(web3.eth.defaultAccount);
console.log("role :"+myrole);
if(myrole[1]==0)
mytype="制药厂";
else if(myrole[1]==1)
mytype="批发商";
else if(myrole[1]==2)
mytype="药店";
else if(myrole[1]==3)
mytype="消费者";
else if(myrole[1]==4)
mytype="监管部门";

if(myrole[2]==1)
mypower="正常";
else
mypower="被封停";

var balance = web3.eth.getBalance(web3.eth.defaultAccount);
var value = web3.fromWei(balance,"ether");
	console.log("Wei :"+value.toString())


$("#now").val("当前账户: "+web3.eth.defaultAccount+" ;\n"+"账户名称: "+myrole[0]+" ;\n"+"账户类别: "+mytype+" ;\n"+"账户状态: "+mypower+" ;\n"+"账户余额: "+value.toString()+" ;\n");

for(var i=0;i<myrole[3];i++)
{
drug.buyer_inquire_ware(i,function(error, result){

            if(!error)

                {

                  $("#home").val($("#home").val()+"药品名："+result[0]+" 批号："+result[1]+" 数量："+result[2]+" 价格："+result[3]+"\n");

                 }

            else
               console.error(error);

		   });
}
$("#history").val("交易明细");
for(var j=0;j<myrole[4];j++)
{
drug.buyer_inquire_mess(j,function(error, result){

            if(!error)

                {

                  $("#history").val($("#history").val()+"\n卖方："+result[0]+"\n买方："+result[1]+"\n时间："+result[2]+"\n数量："+result[3]+"\n批号："+result[4]+"\n");

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
         alert("权限不够");
	});
$("#button4").click(function() 
	{

	if(myrole[1]==0)
           window.open("login_druginfo.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	else
	 alert("权限不够");
	});
$("#button5").click(function() 
	{

	if(myrole[1]==3)
	alert("不能进行此操作");
		else if(myrole[1]==4)
		   alert("不能进行此操作");
	else
	  window.open("login_drugtran.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	
	});
$("#button6").click(function() 
	{


		if(myrole[1]==4)
		   alert("不能进行此操作");
	else          
	 window.open("login_drugreport.html?"+"txt="+encodeURI(web3.eth.defaultAccount));
	});
