$(function () {
    readProduct();
    $('#addBtn').click(addProduct);
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
        success: function(response) {
            //console.log(response);
           // ('#products').append('<div>RANA SOBAAN</div>')
            $('#name').val("");
            readProduct();
            $("#addModal").modal("hide");
        }
    });

}

function readProduct() {
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/products",
        method: "GET",
        success: function(response) {
            //console.log(response);
            
            var products = $('#products');
            products.empty();

            for(var i=0 ; i<response.length ; i++) {
                var p = response[i];
                products.append(
                    `<div class="product"> <h2> ${p.name} </h2>  <button class = "btn btn-danger btn-sm float-right">Delete</button><button class = "btn btn-info btn-sm float-right">Edit</button> <b>Price</b> : $ ${p.price} <br> <b>Color</b> : ${p.color} <br> <b>Department</b> : ${p.department} <br> <b>Description</b> : ${p.description} <br></div>`
                    );
            }
        }
    });
}
