  var loc = location.href;
  var n1 = loc.length;//��ַ���ܳ���
  var n2 = loc.indexOf("=");//ȡ��=�ŵ�λ��
  var id = decodeURI(loc.substr(n2+1, n1-n2));//��=�ź��������
  web3.eth.defaultAccount=id;

var myrole=drug.role(web3.eth.defaultAccount);
console.log("role :"+myrole);

if(myrole[0]!=="")
{
alert("Hello !Dear "+myrole[0]+": Welcome to DrugSystem!");
location.href="first.html?"+"txt="+encodeURI(web3.eth.defaultAccount);
}

  $("#bb").click(function() 
	{

		console.log($("#selectone").val());
		if($("#selectone").val()=="��ҩ��")
		     chart_num=0;
		if($("#selectone").val()=="������")
		     chart_num=1;	
                if($("#selectone").val()=="ҩ��")
		     chart_num=2;
                if($("#selectone").val()=="������")
		     chart_num=3;
	        if($("#selectone").val()=="��ܲ���")
		     chart_num=4;
	    if($("#aa").val()!=="")
	    {
		alert("�Ե�.�����ѷ���");
            drug.enroll.sendTransaction($("#aa").val(),chart_num,{from: web3.eth.defaultAccount,gas:300000});
	      }
	    else
	    	alert("���ֲ���Ϊ��!");
		
		
   	 });
	var myevent=drug.enroll_key();
	myevent.watch(function(error, result) {
        if (!error)
            {
		if(result.args.key)
		alert("�����ɹ�")
		else
		alert("�ǳƲ����ظ����˻��Ѵ���");
		location.reload();
            } else {
                console.log(error);
            }
   	 });
	 
		

