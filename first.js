"use strict";
// ***** 2nd question
var p_name = "aTiSaM aKhTaR";
console.log(`Hi ${p_name}! its nice to meet you.`);
// ***** 3rd question
console.log("To Lower Case : ", p_name.toLowerCase());
console.log("To Upper Case : ", p_name.toUpperCase());
let splited_name = p_name.split(" ");
let title_case = "";
splited_name.forEach((word) => {
    title_case += word[0].toUpperCase() + word.substring(1).toLowerCase() + " ";
});
console.log(splited_name);
console.log(p_name);
console.log("To title case : ", title_case);
// ***** 4th question
const author = "Rich Dad";
const quote = "Financial struggle is often the result of people working all their lives for someone else";
console.log(`${author} once said, "${quote}" `);
// ***** 5th question
let famous_person = "Robert Toru Kiyosaki";
const message = `${famous_person} once said, "${quote}"`;
console.log(message);
