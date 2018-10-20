
var studentsList = localStorage.getItem("studentsList")
//console.log(studentsList)

$(document).ready(function(){
    updateTable();
})

$( "#student-birthdate" ).datepicker({
     dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ]
});

if (!studentsList) {
    var alumnos = [{
        "Nombre": "Edwin",
        "Edad": 20,
        "Ciudad": "Puerto Vallarta",
        "FechaNacimiento":"N/A",
        "Foto":"img/aqua.png"
    }, {
        "Nombre": "Kevin",
        "Edad": 28,
        "Ciudad": "Puerto Vallarta",
        "FechaNacimiento":"N/A",
        "Foto":"img/flash.jpg"
    }, {
        "Nombre": "Edgar",
        "Edad": 28,
        "Ciudad": "Coahuila",
        "FechaNacimiento":"N/A",
        "Foto":"img/scorpion.png"
    }, {
        "Nombre": "Alfredo",
        "Edad": 21,
        "Ciudad": "CDMX",
        "FechaNacimiento":"N/A",
        "Foto":"img/ajolote.jpg"
    }];
} else {
	var alumnos = JSON.parse(studentsList);
}

/*función para eliminar un usuario*/
const deleteStudent = (e) => {
    let selectedRow = $(e.target).closest("tr").index();
    alumnos.splice(selectedRow,1);
    $(e.target).closest("tr").remove();
    localStorage.setItem("studentsList", JSON.stringify(alumnos));
}

const showStudent = (e) => {
    let selectedRow = $(e.target).closest("tr").index();
    let selectedStudend = alumnos[selectedRow];
    $('#img-wrapper').html('');
    $('#name-wrapper').html('');
    $('#age-wrapper').html('');
    $('#city-wrapper').html('');
    $('#birthday-wrapper').html('');

    $('#img-wrapper').append(`	<img src="${selectedStudend.Foto}" alt="">`)
    $('#name-wrapper').append(selectedStudend.Nombre)
    $('#age-wrapper').append(selectedStudend.Edad)
    $('#city-wrapper').append(selectedStudend.Ciudad)
    $('#birthday-wrapper').append(selectedStudend.FechaNacimiento)
    console.log(selectedStudend);
    // $(e.target).closest("tr").remove();
    // localStorage.setItem("studentsList", JSON.stringify(alumnos));
}



const updateTable = () => {
    $("#alumnos-table").empty();
    /*llena la tabla con los registros actuales*/
    $.each(alumnos, (index, value) => {
        $("#alumnos-table").append(`
            <tr>
                <td>${value.Nombre}</td>
                <td>${value.Edad}</td>
                <td>${value.Ciudad}</td>
                <td>${value.FechaNacimiento}</td>
                <td><div class="btn btn-delete">Eliminar</div>
                <td><div class="btn btn-show">Mostrar</div>
            </tr>`);
    });
    $(".btn-delete").on("click", (e) => {
        deleteStudent(e)
    })
    $(".btn-show").on("click", (e) => {
        showStudent(e)
    })


}

$(".nav-button").on("click", function(e) {
    let selectedButton = e.target;
    let currentSection = $(e.target).data("controls"); /*obtenemos la sección a mostrar*/
    /*oculta las secciones*/
    $("section").hide();
    /*muestra la sección seleccionada*/
    $(currentSection).show();
    switch (currentSection) {
        case '#alumnos':
            updateTable()
            break;
        default:
            break;
    }
});

/*(crear funcion que se ejecute al dar click en el boton y que extraiga los datos del formulario)
 */

$("#add-student").on("click", function(e) {
    let studentName = $("#student-name").val(),
        studentAge = $("#student-age").val(),
        studentCity = $("#student-city").val(),
        studentBirthdate = $("#student-birthdate").val();
    let newStudent = {
        "Nombre": studentName,
        "Edad": studentAge,
        "Ciudad": studentCity,
        "FechaNacimiento": studentBirthdate
    };
    alumnos.push(newStudent);
    $("input").val("");
    updateTable();
    localStorage.setItem("studentsList", JSON.stringify(alumnos));
})

//$(".btn-delete").closest("tr")
//$("table").children("tr")/*selecciona todos los tr que son descendientes inmediatos de table*/
//$("table").find("tr")/*selecciona todos los tr que son descendietnes de table*/
//$("td").siblings("")
