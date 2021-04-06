$(function () {
    $('#btnAdd').click(addProduct);
});

function addProduct() {
    var name = $('#name').val();
    var price = $('#price').val();
    var color = $('#color').val();
    var department = $('#department').val();
    var description = $('#description').val();
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/products",
        method: "POST",
        data: {name, price, color, department, description},
        success: function() {
           // ('#products').append('<div>RANA SOBAAN</div>')
            readProduct();
        }
    });

}

function readProduct() {
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/products",
        method: "GET",
        success: function(response) {
            console.log(response);
            
            var products = $('#products');
            products.empty();

            for(var i; i<response.length ; i++) {
                var p = response[i];
                products.append(`<div> <> Name : ${p.name} Price : ${p.price} Color : ${p.color}, Department = ${p.department} : , Description : ${p.description}</p>`)
            }
        }
    });
}
