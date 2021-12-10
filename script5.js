function insert(number) {
    document.form1.display.value = document.form1.display.value + number;
}

function insert(sign) {
    document.form1.display.value = document.form1.display.value + sign;
}

function equal() {
    var solu = document.form1.display.value
    if(solu)
    {
        document.form1.display.value = eval(solu);
    }
}

function clear() {
    var solu = document.form1.display.value;
    document.form1.display.value = exp.substring(0, solu.length - 1)
}

function back() {
    var value = document.form1.display.value
    document.form1.display.value = form1.display.value.substr(0, form1.display.value.length - 1)
}