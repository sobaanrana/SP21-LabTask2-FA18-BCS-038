$(function () {
    readProduct();
    $("#products").on("click","#deleteBtn",deleteProduct);
    $('#products').on('click',".btn-info",editProduct); //this refers to btn-info
    $('#addBtn').click(addProduct);
    $('#editBtn').click(function() {
        var id = $('#updateId').val();
        var name = $('#updateName').val();
        var price = $('#updatePrice').val();
        var color= $('#updateColor').val();
        var department = $('#updateDepartment').val();
        var description = $('#updateDescription').val();
        
        $.ajax({
            url: "https://usman-recipes.herokuapp.com/api/products/" + id,
            data: {name,price,color,department,description},
            method: 'PUT',
            success: function(response) {
                readProduct();
                $("#editModal").modal("hide");
            }
        });
    });
    
});

function readProduct() {
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/products",
        method: "GET",
        error: function(responseponse){
            //document.getElementById('#products').innerHTML('Error : Products not found!')
            $('#products').html('Error : Products not found!')
        },
        success: function(responseponse) {
            console.log(responseponse);
            
            var products = $('#products');
            products.empty();

            for(var i=0 ; i<responseponse.length ; i++) {
                var p = responseponse[i];
                products.append(
                    `<div class="product" data-id="${p._id}"> <h2> ${p.name} </h2>  <button class = "btn btn-danger btn-sm float-right" id="deleteBtn">Delete</button><button class = "btn btn-info btn-sm float-right" data-toggle="modal" data-target="#editModal">Edit</button> <b>Price</b> : $ ${p.price} <br> <b>Color</b> : ${p.color} <br> <b>Department</b> : ${p.department} <br> <b>Description</b> : ${p.description} <br></div>`
                    );
            }
        }
    });
}

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
        success: function(responseponse) {
            //console.log(responseponse);
           // ('#products').append('<div>RANA SOBAAN</div>')
            $('#name').val("");
            $('#price').val("");
            $('#color').val("");
            $('#department').val("");
            $('#description').val("");
            readProduct();
            $("#addModal").modal("hide");
        }
    });

}

function deleteProduct() {
    var btn = $(this);
    var pDiv = btn.closest('.product');
    let id = pDiv.attr('data-id');
    console.log(id);
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/products/" + id,
        method: "DELETE",
        success: function() {
            readProduct();
        }

    });
}

function editProduct() {
    var btn = $(this);
    var pDiv = btn.closest('.product');
    let id = pDiv.attr('data-id');
    console.log(id)
    $.get("https://usman-recipes.herokuapp.com/api/products/" + id, function(response) {
        $("#updateId").val(response._id);
        $('#updateName').val(response.name);
        $('#updatePrice').val(response.price);
        $('#updateColor').val(response.color);
        $('#updateDepartment').val(response.department);
        $('#updateDescription').val(response.description);
        //$("#editModal").modal("show");
    }
    );
}