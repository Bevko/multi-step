<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "6342102589:AAFThP450exwpM6QngYiR-QhAbmhGYCmIls";

//Сюда вставляем chat_id
$chat_id = "6342102589";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['Company Name']);
	$userName = ($_POST['User Name']);
	$phone = ($_POST['Phone Number']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Company Name:' => $name,
		'User Name:' => $userName,
		'Phone Number:' => $phone,
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "".$key." ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Все добре');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Переконайтесь, що всі дані ведені коректно');
    }
}

?>


