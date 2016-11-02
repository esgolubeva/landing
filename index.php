<?php

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}

$mail = "ya@ya.ru";

$headers = "Content-type: text/plain; charset = utf-8";

$subject = "Тема письма";

$message = "Тело письма - Заявка\nИмя: $name\nТелефон: $phone\nEmail: $email";

$send = mail ($mail, $subject, $message, $headers);

if ($send == 'true')
{
echo  "ok";
}
else
{
echo "error";
}

?>
