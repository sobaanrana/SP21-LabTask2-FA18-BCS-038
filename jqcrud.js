$(function () {
    readProduct();
    $('#btnAdd').click(addProduct);
});

function addProduct() {
    var name = $('#name').val();
    var price = $('#price').val();
    var color = $('#color').val();
    var department = $('#department').val();
    var description = $('#description').val();
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/products/",
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

            for(var i=0 ; i<response.length ; i++) {
                var p = response[i];
                products.append(
                    `<div class="product"> Name : ${p.name} <br> Price : ${p.price} <br> Color : ${p.color} <br> Department : ${p.department} <br> Description : ${p.description} <br></div>`
                    );
            }
        }
    });
}
