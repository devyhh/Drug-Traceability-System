var loc = location.href;
  var n1 = loc.length;//地址的总长度
  var n2 = loc.indexOf("=");//取得=号的位置
  var id = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  web3.eth.defaultAccount=id;
$("#ten").click(function() 
	{

	if($("#nine").val()=="")
	alert("内容不能为空")
	else
         { 
	drug.reporting.sendTransaction(web3.eth.defaultAccount,$("#nine").val(),{from: web3.eth.defaultAccount,gas:300000});   
						//发送消费者举报(举报人，举报药瓶批号)
	   alert("已提交举报申请")}
            });

var myevent=drug.reporting_key();
	myevent.watch(function(error, result) {
        if (!error)
            {
		if(result.args.key)
		alert("操作成功")
		else
		alert("操作失败");
		
            } else {
                console.log(error);
            }
   	 });