var loc = location.href;
  var n1 = loc.length;//��ַ���ܳ���
  var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
  var id = decodeURI(loc.substr(n2+1, n1-n2));//��=�ź��������
  web3.eth.defaultAccount=id;
$("#ten").click(function() 
	{

	if($("#nine").val()=="")
	alert("���ݲ���Ϊ��")
	else
         { 
	drug.reporting.sendTransaction(web3.eth.defaultAccount,$("#nine").val(),{from: web3.eth.defaultAccount,gas:300000});   
						//���������߾ٱ�(�ٱ��ˣ��ٱ�ҩƿ����)
	   alert("���ύ�ٱ�����")}
            });

var myevent=drug.reporting_key();
	myevent.watch(function(error, result) {
        if (!error)
            {
		if(result.args.key)
		alert("�����ɹ�")
		else
		alert("����ʧ��");
		
            } else {
                console.log(error);
            }
   	 });