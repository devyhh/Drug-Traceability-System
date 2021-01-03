if (typeof web3 !== 'undefined')  
	web3 = new Web3(web3.currentProvider);  
else
{	
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
 }    
if(!web3.isConnected()) 
{
    	console.log("UnConected")
	$("#accounts").val("连接失败!\n请确认打开了geth.");
}
else 
{
    	console.log("Conected")
	var accounts_list = web3.eth.accounts;
	$("#accounts").val("下列当前节点可选账号:\n"+accounts_list);
}

$("#login_button").click(function() 
	{

	    account_input=$("#login").val();
	    if(account_input!=="")
		{
	    var isAddress = web3.isAddress(account_input);
		if(isAddress)
		{	
            web3.eth.defaultAccount = account_input;
		alert("登陆"+account_input)
		location.href="regist.html?"+"txt="+encodeURI(account_input);
		}
		else
	    alert("错误的地址!\n")
		}
	    else
		{
		alert("内容不能为空!\n")
		}
   	 });
	  