  var loc = location.href;
  var n1 = loc.length;//��ַ���ܳ���
  var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
  var id = decodeURI(loc.substr(n2+1, n1-n2));//��=�ź��������
 web3.eth.defaultAccount=id;
var myrole=drug.role(web3.eth.defaultAccount);
if(myrole[1]!=4)
$("#pp").val(web3.eth.defaultAccount);

$("#vv").click(function() 
	{

	if($("#pp").val()!==""){
          mydrug_from=drug.inquire($("#pp").val(),$("#tt").val());
	$("#drug_from").val("�����\n"+mydrug_from);
	}
            });
