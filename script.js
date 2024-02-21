
// function for calculate age

function getAge() {

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let nowDate = new Date();

    let nowDay = nowDate.getDate();
    let nowMonth = nowDate.getMonth() + 1;
    let nowYear = nowDate.getFullYear();

    checkValid();



    document.getElementById('dayBorn').innerHTML = Math.abs(day - nowDay);
    document.getElementById('monthBorn').innerHTML = Math.abs(month - nowMonth);
    document.getElementById('yearBorn').innerHTML = Math.abs(year - nowYear);

}

// function for valid input

function checkValid() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let fields = document.querySelectorAll('input');
    let errors = document.querySelectorAll('.error');
    let dayText = document.getElementById('day-text');
    let monthText = document.getElementById('month-text');
    let yearText = document.getElementById('year-text');

    if (day == 0 || month == 0 || year == 0) {
        fields.forEach((field) => {
            field.style.borderColor = 'red'
        })
        dayText.style.color = 'red';
        monthText.style.color = 'red';
        yearText.style.color = 'red';
        errors.forEach((error) => {
            error.innerHTML = 'invalid input'
        })
    } else {
        fields.forEach((field) => {
            field.style.borderColor = '#707070'
        })

        dayText.style.color = '#707070';
        monthText.style.color = '#707070';
        yearText.style.color = '#707070';

        errors.forEach((error) => {
            error.innerHTML = ''
        })
    }
    if (day < 0 || day > 31) {
        fields[0].style.borderColor = 'red';
        errors[0].innerHTML = 'invalid input';
        dayText.style.color = 'red';
        return
    } else if (month < 0 || month > 12) {
        fields[1].style.borderColor = 'red';
        errors[1].innerHTML = 'invalid input';
        monthText.style.color = 'red';
        return
    } else if (year > 9999) {
        fields[2].style.borderColor = 'red';
        errors[2].innerHTML = 'invalid input';
        return
    }
    document.getElementById('dayBorn').innerHTML = '--';
    document.getElementById('monthBorn').innerHTML = '--';
    document.getElementById('yearBorn').innerHTML = '--';
}

// function for max length on input field

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}