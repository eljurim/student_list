//var firstValue = document.getElementById('first-input').value;
var firstValue = $("#first-input").val();

var someVar = "#some-other-id";

$("#some-id")/*selecciòn por id*/
$(".some-class")/*selección por clase*/
$("some-tag")/*selección por tag*/
$(someVar)/*selección por valor de variable*/
$("#some-id .some-class") /*selecciona el hijo .some-class de #some-id*/
/*
	<div id="some-id"><div class="some-class">
	*/
$("#some-id.some-class") /*selecciona #some-id que tenga .some-class*/
/* <div id="some-id" class="some-class">*/
$("#some-id[value='some-value']")/*selección por atributo*/

$("input[value='']")

$(".some-class>.some-other-class")/*selección por anidación inmediato*/

$(".form-group:eq(1)") /*selección por índice*/


/*if ($(some-selector).val() == "value 1" || $(some-selector).val() == "value 2" || $(some-selector).val() == "value 3" )
*/

