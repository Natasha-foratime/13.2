let result = document.getElementById("result");
let yourDayB = document.getElementById("addDate");
let yourDayBirth = new Date(yourDayB);
let nowDate = new Date();
let numberNowYear = nowDate.getFullYear();
let numberMonth = yourDayBirth.getMonth();
let numberDay = yourDayBirth.getDate();
let createDate = new Date(numberNowYear, numberMonth, numberDay);
let fullnowDate = Date.parse(nowDate);
let fullcreateDate = Date.parse(createDate);

function clickMe() {
    if (yourDayB.textContent = "") {
        alert("Add date")
    }
    else if (fullcreateDate < fullnowDate) {
        createDate = new Date(numberNowYear + 1);
        fullcreateDate = Date.parse(createDate);
        let diference = fullcreateDate - fullnowDate;
        result.textContent = new Date(diference).getDate();
    }
    else if (fullcreateDate > fullnowDate) {
        let fullcreateDate = Date.parse(createDate);
        let diference = fullcreateDate - fullnowDate;
        result.textContent = new Date(diference).getDate();
    }
}