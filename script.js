function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

function getAge() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let text = document.getElementById('top-text');
    let fields = document.querySelectorAll('input');

    let nowDate = new Date();

    let nowDay = nowDate.getDate();
    let nowMonth = nowDate.getMonth() + 1;
    let nowYear = nowDate.getFullYear();

    if (day == "" || month == "" || year == "") {
        fields.forEach((field) => {
            field.style.borderColor = 'red'
        })
        text.style.color = 'red';
        alert("Please fill all fields");
    } else {
        fields.forEach((field) => {
            field.style.borderColor = '#707070'
        })
        text.style.color = '#707070';
        document.getElementById('dayBorn').innerHTML = Math.abs(day - nowDay);
        document.getElementById('monthBorn').innerHTML = Math.abs(month - nowMonth);
        document.getElementById('yearBorn').innerHTML = Math.abs(year - nowYear);
    }
}