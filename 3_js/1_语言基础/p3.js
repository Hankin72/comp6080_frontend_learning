/*
* 幂函数
*/
function power_function(base, pow) {
    if (pow == 1) {
        return base;
    }
    if (pow == 0) {
        return 1;
    }
    let res = base;
    for (let i = 0; i < pow - 1; i++) {
        res = res * base;
    }
    return res;
}


/*
取复利
* */
function fuli(rate, year) {
    let res = 0;
    for (let i = year; i > 0; i--) {
        res += power_function(rate, i);
    }
    return res;

}

function compute() {
    const start_capital = getNumberValue("start-capital");
    const rate = getNumberValue("rate") + 0.0;
    const years = getNumberValue("years");
    const additional_funds_per_year = getNumberValue("additional-funds-per-year");

    let principle_sum = (years - 1) * additional_funds_per_year + start_capital;
    let principle_interest_sum = additional_funds_per_year * fuli((1 + rate / 100), (years - 1)) + start_capital * power_function((1 + rate / 100), years);

    let interest_sum = principle_interest_sum - principle_sum;

    setValue("principle-sum", principle_sum);
    setValue("interest-sum", interest_sum);
    setValue("principle-interest-sum", principle_interest_sum);
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}

function getNumberValue(id) {
    return parseFloat(document.getElementById(id).value)
}


function get() {
    var i = document.getElementById("m").value;
    var value1 = i * i;
    var p = document.getElementById("kg").value;
    var result = p / value1;
    var _1 = "偏瘦";
    var _2 = "正常";
    var _3 = "超重";
    var _4 = "1度肥胖";
    var _5 = "2度肥胖";
    var _6 = "3度肥胖";
    var ss = result;
    if (ss < 18.5) {
        s = _1;
    } else if (ss <= 25) {
        s = _2;
    } else if (ss <= 30) {
        s = _3;
    } else if (ss <= 35) {
        s = _4;
    } else if (ss <= 40) {
        s = _5;
    } else if (ss > 40) {
        s = _6;
    }
    document.getElementById("good").value = s;
    document.getElementById("bmi").value = result;
}