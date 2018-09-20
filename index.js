//put any page initialization/handlebars initialization here

function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li>' + ingredient + '</li>');
  })
}

function createRecipe() {
  const name = document.getElementById("recipeName").value;
  const description = document.getElementById("recipeDescription").value;
  const ingredients = document.getElementById("recipeIngredients").value;

  const recipe = 

  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  const result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
  createRecipe();
}

function displayEditForm() {
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
