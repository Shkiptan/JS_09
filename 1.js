$ (document).ready (function(){
	$('#one').on ('click', myFunction);
	$('#two').on ('click', myAge);
	$('#weight').on ('click', myWeight);
	$('#weight_t').on ('click', myWeightt);
	$('#info').on ('click', myInfo);
	$('#heightr').on('input',function() {
    i1.value = heightr.value;
	});
	$('#Show').on('click', f1);

})

//Задание 1. Передайте на сервер два числа методом POST. 
//Имена чисел – num1 и num2. Цель — файл a1.php. Если 
//все выполнено верно, то будет возвращена строка с 
//суммой чисел, если нет – ошибка. Способ передачи – AJAX.

function myFunction () {
	
	$.post (
		"a1.php",
		{
			'num1': 5,
			'num2': 5
		},
		function(data){
			console.log (data);
		}

	);

}
//Задание 2. Передайте на сервер свой год рождения в формате XXXX. 
//Передачу осуществляйте методом POST, имя переменной year, 
//имя целевого файла – a2.php. Если все выполнено верно, то 
//сервер вернет строку в которой будет количество прожитых лет, 
//если нет – ошибку. Способ передачи – AJAX.

function myAge () {
	
	$.post (
		"a2.php",
		{
			'year': 1988
		},
		function(data){
			console.log (data);
		}

	);


}

//Задание 3. Создайте форму с radiobutton для выбора пола (мужчина или женщина). 
//Добавьте поле для ввода роста (в сантиметрах). По нажатию кнопки “Идеальный 
//вес”, пошлите запрос на файл a3.php. На сервер передается параметр пол – имя 
//параметра sex, значения man или woman и рост ( имя height). Передача 
//осуществляется методом AJAX, с помощью POST.
function myWeight () {
	
	$.post (
		"a3.php",
		{
			'sex': $('input[name=sex]:checked').val(),
			'height': $('#height').val ()
		},
		function(data){
			console.log (data);
		}

	);


}
//Задание 4. Измените предыдущее значение,
// чтобы рост задавался с помощью ползунка range.
function myWeightt () {
	
	$.post (
		"a3.php",
		{
			'sex': $('input[name=sex]:checked').val(),
			'height': $('#heightr').val ()
		},
		function(data){
			console.log (data);
		}

	);

}

$('#heightr').on('input',function() {
    i1.value = heightr.value;
});



//Задание 5. Создайте форму с полями:
// fio – поле ввода для имени и фамилии;
// email – поле ввода для email адреса
// phone – поле ввода для телефона
// По нажатию кнопки передайте данные из полей ввода на сервер (mail.php) посредством POST (AJAX). Имена переменных – такие,
// как указано в списке. Если все сделано верно,
// то по адресу указанному в файле mail.php в переменной $to будет отправлено письмо, если нет – выведена ошибка.
// Возвращаемый формат – строка.

function myInfo () {
	
	$.post (
		"mail.php",
		{
			'fio': $('#fio').val(),
			'email': $('#mail').val (),
			'phone': $('#tel').val ()
		},
		function(data){
			console.log (data);
		}

	);


}
//Задание 6. Пошлите на сервер (goods.php) методом GET артикул 
//товара (art). Сервер реагирует только на 2 артикула (1 или 2). 
//Если все выполнено верно то сервер пришлет вам JSON строку с 
//описанием товара. После раскодировки (JSON.parse) вы сможете 
//вывести поля:

function f1(){
	$.getJSON('good1.json', function(data){
		var out = " ";

	
for (var key in data) {
out+= data[key].name + "<br>";
out+=data[key].cost + "<br>";
out+=data[key].power + "<br>";
out+=data[key].weight + "<br>";
out += ` <p> <img src = "${data[key].img}"></p>`;
			}	
	$('#out').html (out);	
		
	});
	}


