var apiKey = require('./../.env').apiKey;
var Telephone = require('./../js/telephone.js').telephoneModule;
var ourTelephone = new Telephone()

var displayTranslation = function(text, language, languageCode) {
  $(".results").append("<li>" + language + " | " + text);
  if (ourTelephone.translationCount >= 0) {
    ourTelephone.translate(text, languageCode, displayTranslation);
  }
};

$(document).ready(function() {
  $("#telephone").submit(function() {
    event.preventDefault();
    $(".results").empty();
    console.log("Yo, submit happened");
    var input = $("#user-input").val();
    ourTelephone.translationCount = $("#translation-number").val();

    ourTelephone.translate(input, "en", displayTranslation);
  });

  console.log("Hi!")
  $.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + apiKey + '&text=hello&lang=en-ru&[format=plain]&[options=1]').then(function(response) {
    console.log(JSON.stringify(response));
    console.log(response.text[0]);
  });
});
