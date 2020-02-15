let app = {
    devourBurger: function (id) {
        $.ajax({
            url: `/api/burger/${id}`,
            type: "PUT",
            success: function () {
                window.location.reload();
            }
        })
    },

    deleteBurger: function(id) {
        $.ajax({
            url: `/api/burger/${id}`,
            type: "DELETE",
            success: function() {
                window.location.reload();
            }
        })
    },

    userActions: function () {
        $(".devour-btn").on("click", function () {
            let id = $(this).attr("data-burger");
            app.devourBurger(id);
        });

        $(".delete-btn").on("click", function (){
            let id = $(this).data("id");
            app.deleteBurger(id)
        });


        $("#addBurger").on("click", function (event) {  
            event.preventDefault();
            const data = {
                name: $("#burgerName").val()
            };
            $.ajax({
                type: "POST",
                url: "api/burger",
                data: data,
                success: function (result) {
                    console.log(result);
                    window.location.reload();
                }
            });
        });

    },

    init: function () {
        this.userActions();
    }
};

$(document).ready(function() {
   app.init();
});