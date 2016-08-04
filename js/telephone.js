var languages = ["English", "Azerbaijan", "Arabic", "Basque", "Spanish", "German", "Italian", "Japanese", "Irish", "Portuguese", "Punjabi", "Nepali", "Serbian", "Hindi", "Czech", "Estonian", "Swedish", "Macedonian", "Russian", "Albanian", "Armenian", "Afrikaans", "Bashkir", "Belarusian", "Bengali", "Bulgarian", "Bosnian", "Welsh", "Hungarian", "Vietnamese", "Haitian", "Galician", "Dutch", "Greek", "Georgian", "Gujarati", "Danish", "Hebrew", "Yiddish", "Indonesian", "Icelandic", "Kazakh", "Kannada", "Catalan", "Kyrgyz", "Chinese", "Korean", "Latin", "Latvian", "Lithuanian", "Malagasay", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian", "Norwegian", "Persian", "Polish", "Romanian", "Cebuano", "Sinhala", "Telugu"];
var languageCodeArray =["en", "az", "ar", "eu", "es", "de", "it", "ja", "ga", "pt", "pa", "ne", "sr", "hi", "cs", "et", "sv", "mk", "ru", "sq", "hy", "af", "ba", "ba", "bn", "bg", "bs", "cy", "hu", "vi", "ht", "gl", "nl", "el", "ka", "gu", "da", "he", "yi", "id", "is", "kk", "kn", "ca", "ky", "zh", "ko", "la", "ly", "lt", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "no", "fa", "pl", "ro", "ceb", "si", "te"]
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
