$(document).ready(function(){
	$.get('./form.html', function( data ) {
		$('#form').html( data );
		$('#send').click(function(){
			var err = '';
			if ($('#form_name').val()==''){
				err+='請填入姓名！\n';
			}
			if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test($('#form_email').val())){
				err+='請填入正確的Email！\n';
			}
			if (!/^09.\d/.test($('#form_mobile').val()) || $('#form_mobile').val().length!=10){
				err+='請填入正確的手機號碼，不含任何符號！(ex: 0912456789)\n';
			}
			if (typeof $('.gender[type="radio"]:checked').val()=='undefined'){
				err+='請選擇性別！\n';
			}
			if ($('#check_1:checked').length==0){
				err+='請勾選個資同意聲明！\n';
			}
			if ($('#check_2:checked').length==0){
				$('#openAccountOrNot').val('無');
			} else {
				$('#openAccountOrNot').val('有');
			}
			if (err!=''){
				alert(err);
				return;
			}
			$('#name').val($('#form_name').val());
			$('#email').val($('#form_email').val());
			var m = $('#form_mobile').val();
			$('#mobile').val(m.slice(0, 4) + "-" + m.slice(4));
			$('#gender').val($('.gender[type="radio"]:checked').val());
			
			$('#gForm').submit();
			$('#form_name,#form_email,#form_mobile').val('');
			$('.gender[type="radio"]:checked,#check_1:checked,#check_2:checked').attr('checked',false);
		});
		$('.lottery_go').click(function(){
			$('#gPostIframe').load(function(){
				alert('已收到您的資料！謝謝。');
			});
		});
	});
	
});