var loc = location.href;
  var n1 = loc.length;//��ַ���ܳ���
  var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
  var id = decodeURI(loc.substr(n2+1, n1-n2));//��=�ź��������
  web3.eth.defaultAccount=id;

$("#report").val("���ҽ��:");
         for( i=0;;i++)
	{
	var myreport=drug.report(i);
	if(myreport[1]=="")
	break;
	$("#report").val($("#report").val()+"\n�ٱ��ˣ�"+myreport[0]+"\nҩƷ���ţ�"+myreport[1]+"\n");
	}

$("#seven").click(function() 
	{

	if($("#six").val()=="")
	alert("���벻��Ϊ��")
	else
	{
	 toaddress=drug.name_address($("#six").val());
         var myprocess=drug.process_account.sendTransaction(toaddress,{from: web3.eth.defaultAccount,gas:300000});
	alert("����������ִ��")}
	//����Υ���˺�
	location.reload();
            });
	
$("#sevens").click(function() 
	{

	if($("#sixs").val()=="")
	alert("���벻��Ϊ��")
	else
	{
	toaddress=drug.name_address($("#sixs").val());
         var myhuifu=drug.huifu_account.sendTransaction(toaddress,{from: web3.eth.defaultAccount,gas:300000});
	alert("����������ִ��")}
	//�ָ�Υ���˺�
	location.reload();
            });

var myevent=drug.process_account_key();
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

var myevent=drug.huifu_account_key();
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
	