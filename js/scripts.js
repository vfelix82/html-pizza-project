$(".form-reload").click(function() {
  location.reload();
});

$(document).ready(function() {
  $(".form-size").submit(function(event) {
    event.preventDefault();
    var pizzasizeinput = $("input:radio[name=pizzaSize]:checked").val();
    var ingredientsinput = $("input:checkbox[name=ingredients]:checked").val();
    alert(ingredientsinput);
  });
});
