var loc = location.href;
  var n1 = loc.length;//地址的总长度
  var n2 = loc.indexOf("=");//取得=号的位置
  var id = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  web3.eth.defaultAccount=id;

$("#sevens").click(function() 
	{

	if($("#fives").val()=="")
	alert("输入不能为空")
	else
	{
	$("#drug_ask").val("查找结果");
         for( i=0;;i++)
		{
	var mydrug=drug.drug(i);
	console.log(mydrug)
	if(mydrug[2]=="")
	break;
	if($("#fives").val()==mydrug[2])
         $("#drug_ask").val($("#drug_ask").val()+"\n药品名："+mydrug[0]+" 数量："+mydrug[1]+"\n批号："+mydrug[2]+" 生产时间："+mydrug[3]+"\n厂家："+mydrug[4]+"\n");

                
		}
	}
	
 });
	