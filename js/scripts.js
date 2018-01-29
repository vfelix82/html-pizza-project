//back-end//
function Pizza(size, ingredients) {
  this.size = size;
  this.ingredients = ingredients;
}

Pizza.prototype.sizeText = function() {
  return " " + this.size;
}

Pizza.prototype.ingredientsText = function() {
  return " " + this.ingredients;
}

Pizza.prototype.sizePrice = function() {
  var sizetotal = 0;
  if(this.size == "small") {
    sizetotal += 10;
  } else if(this.size == "medium") {
    sizetotal += 15;
  } else if(this.size == "large") {
    sizetotal += 20;
  } if(this.ingredients.length == 1) {
    sizetotal += 2;
  } else if(this.ingredients.length == 2) {
    sizetotal += 4;
  } else if(this.ingredients.length == 3) {
    sizetotal += 6;
  } else if(this.ingredients.length == 4) {
    sizetotal += 8;
  } else if(this.ingredients.length == 5) {
    sizetotal += 10;
  } else if(this.ingredients.length == 6) {
    sizetotal += 12;
  } else if(this.ingredients.length == 7) {
    sizetotal += 14;
  } else if(this.ingredients.length == 8) {
    sizetotal += 16;
  } return sizetotal;
}

//front-end//
$(".form-reload").click(function() {
  location.reload();
});

$(document).ready(function() {
      $(".form-size").submit(function(event) {
          event.preventDefault();
          var pizzasizeinput = $("input:radio[name=pizzaSize]:checked").val();
          var ingredientsArray = [];
          $('input:checkbox[name=ingredients]:checked').each(function() {
            ingredientsArray.push(this.value);
          var newPizza = new Pizza(pizzasizeinput, ingredientsArray);

          $(".sizeresults").text(newPizza.sizeText());
          $(".ingredientsresults").text(newPizza.ingredientsText());
          $(".total").text(newPizza.sizePrice());
          });
        });
      });
