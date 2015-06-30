$(function(){

	$('#submit').click(function(){
    	validateForm();   
	});
	
	function validateForm(){
		var email = $('#email').val();	
		var inputVal = new Array(email, password);
		var inputMessage = new Array("name", "password");
		$('#errors').hide();


        if(inputVal[0] == ""){
            $('#email').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
        } 
        else if(!emailReg.test(email)){
            $('#email').after('<span class="error"> Please enter a valid email address</span>');
        }
        
        if(inputVal[1] == ""){
            $('#password').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
        }
 
	}	
	
		
});