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


