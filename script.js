$("#sendMail").on("click", function() {
	let name = $("#name").val();
	let email = $("#email").val();
	let subject = $("#subject").val();
	let message = $("#message").val();

    if(name == "") {
        alert("Введите ваше имя.");
    	return false;
    } else if (email == "") {
    	alert("Введите ваш e-mail.");
    	return false;
    } 
$.ajax({
url: '../ajax/mail.php',
type: 'POST',
cache: false,
data: { 'name': name, 'email': email, 'subject': subject, 'message': message },
dataType: 'html',
beforeSend: function() {
    $("sendMail").prop("disabled", true);
},
success: function() {
    alert('Данные успешно отправлены');
    $("#sendPoll").prop("disabled", false);
}
});
});