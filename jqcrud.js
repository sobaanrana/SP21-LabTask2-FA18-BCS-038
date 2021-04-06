$(function () {
    $('#btnAdd').click(addProduct);
});

function addProduct() {
    var name = $('#name').val();
    var price = $('#price').val();
    $.ajax({
        url: "https://sp21-labtask2-fa18-bcs-038.herokuapp.com/",
        method: "POST",
        data: {name, price},
        success: function() {
           // ('#products').append('<div>RANA SOBAAN</div>')
            readProduct();
        }
    });

}

function readProduct() {
    $.ajax({
        url: "https://sp21-labtask2-fa18-bcs-038.herokuapp.com/",
        method: "GET",
        success: function(response) {
            console.log(response);
            
            var products = $('#products');
            products.empty();

            for(var i; i<response.length ; i++) {
                var p = response[i];
                products.append(`<div> <h4> Name : ${p.name} </h4> <h3> Price : ${p.price}</h3>`)
            }
        }
    });
}
