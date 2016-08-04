var languages = ["English", "Azerbaijan", "Arabic", "Basque", "Spanish", "German", "Italian", "Japanese", "Irish", "Portuguese", "Punjabi", "Nepali", "Serbian", "Hindi", "", "Czech", "Estonian", "Swedish"];
var languageCodeArray =["en", "az", "ar", "eu", "es", "de", "it", "ja", "ga", "pt", "pa", "ne", "sr", "hi", "cs", "et", "sv"]
//Copy and paste to add more languages [, "", "", "", "", "", ""]
var apiKey = require('./../.env').apiKey;

function Telephone () {
  this.translationCount;
}

Telephone.prototype.translate = function(text, languageCode, displayFunction) {
  var nextLanguage = Math.floor(Math.random() * languageCodeArray.length);
  if (this.translationCount === 0) {
    nextLanguage = 0;
  }
  this.translationCount --;
  console.log("translation count=" + this.translationCount);
  console.log("language length" + languageCodeArray.length);
  console.log(nextLanguage);
  console.log(languageCodeArray[nextLanguage]);
  $.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + apiKey + '&text=' + text + '&lang='+ languageCode + '-' + languageCodeArray[nextLanguage] + '&[format=plain]&[options=1]').then(function(response) {
    console.log(response.text[0]);
    displayFunction(response.text[0], languages[nextLanguage], languageCodeArray[nextLanguage]);
  });
}

exports.telephoneModule = Telephone;
