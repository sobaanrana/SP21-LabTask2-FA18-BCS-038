$(function () {
    $('#btnAdd').click(addProduct)
});

function addProduct() {
    var name = $('#name');
    var price = $('#price');
    $.ajax({
        url: "https://sp21-labtask2-fa18-bcs-038.herokuapp.com/",
        method: "POST",
        data: {name, price},
        success: function(response) {
            //$('#products').append(`<div> <h4> Name : ${name} </h4> <h3> Price : ${price}</h3>`)
            $('#products').append('<div>RANA SOBAAN</div>')
        }
    });

}