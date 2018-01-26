$(".form-reload").click(function() {
  location.reload();
});

$(document).ready(function() {
  $(".form-size").submit(function(event) {
    event.preventDefault();
    var operator = $("input:radio[name=pizzaSize]:checked").val();
    alert(operator);
  });
});
