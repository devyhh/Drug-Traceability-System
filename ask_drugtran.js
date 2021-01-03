  var loc = location.href;
  var n1 = loc.length;//地址的总长度
  var n2 = loc.indexOf("=");//取得=号的位置
  var id = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
 web3.eth.defaultAccount=id;
var myrole=drug.role(web3.eth.defaultAccount);
if(myrole[1]!=4)
$("#pp").val(web3.eth.defaultAccount);

$("#vv").click(function() 
	{

	if($("#pp").val()!==""){
          mydrug_from=drug.inquire($("#pp").val(),$("#tt").val());
	$("#drug_from").val("结果：\n"+mydrug_from);
	}
            });
