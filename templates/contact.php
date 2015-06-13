<?php
$field_name = $_POST['mc_name'];
$field_email = $_POST['mc_email'];
$field_message = $_POST['mc_message'];

$mail_to = 'hello@michaelcattell.com';
$subject = 'Message from michaelcattell.com'.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";

$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		window.location = 'contact_sent.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Oh whaaaat? Message failed. Do me a favour, send an email to hello@michaelcattell.com instead of using this broken thing and I will beat up the person who is responsible..which turns out to be me.');
		window.location = 'contact_error.html';
	</script>
<?php
}
?>