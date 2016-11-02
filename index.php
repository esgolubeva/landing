<?php

if (isset($_POST['name'])) {$name = $_POST['name'];}

$mail = "lena19948@yandex.ru";

$headers = "Content-type: text/plain; charset = utf-8";

$subject = "Тема письма";

$message = "Сообщение от пользователя: $name";

$send = mail($mail, $subject, $message, $headers);

if ($send == 'true') {
	echo  "ok";
} else {
	echo "error";
}

?>
