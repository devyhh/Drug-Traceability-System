var loc = location.href;
  var n1 = loc.length;//��ַ���ܳ���
  var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
  var id = decodeURI(loc.substr(n2+1, n1-n2));//��=�ź��������
  web3.eth.defaultAccount=id;

$("#sevens").click(function() 
	{

	if($("#fives").val()=="")
	alert("���벻��Ϊ��")
	else
	{
	$("#drug_ask").val("���ҽ��");
         for( i=0;;i++)
		{
	var mydrug=drug.drug(i);
	console.log(mydrug)
	if(mydrug[2]=="")
	break;
	if($("#fives").val()==mydrug[2])
         $("#drug_ask").val($("#drug_ask").val()+"\nҩƷ����"+mydrug[0]+" ������"+mydrug[1]+"\n���ţ�"+mydrug[2]+" ����ʱ�䣺"+mydrug[3]+"\n���ң�"+mydrug[4]+"\n");

                
		}
	}
	
 });
	