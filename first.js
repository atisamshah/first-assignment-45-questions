// ***** 2nd question
var p_name = "aTiSaM aKhTaR";
console.log("Hi ".concat(p_name, "! its nice to meet you."));
// ***** 3rd question
console.log("To Lower Case : ", p_name.toLowerCase());
console.log("To Upper Case : ", p_name.toUpperCase());
var splited_name = p_name.split(" ");
var title_case = "";
splited_name.forEach(function (word) {
    title_case += word[0].toUpperCase() + word.substring(1).toLowerCase() + " ";
});
console.log(splited_name);
console.log(p_name);
console.log("To title case : ", title_case);
// ***** 4th question
var author = "Rich Dad";
var quote = "Financial struggle is often the result of people working all their lives for someone else";
console.log("".concat(author, " once said, \"").concat(quote, "\" "));
// ***** 5th question
var famous_person = "Robert Toru Kiyosaki";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
