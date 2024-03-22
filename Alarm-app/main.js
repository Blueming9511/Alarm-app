function showDate () {
  setInterval(() => {
    let Currentdate = new Date()
    console.log(Currentdate)
    let date = document.querySelector('.date')
    let month = document.querySelector('.month')
    let year = document.querySelector('.year')

    month.textContent =
      Currentdate.getMonth() + 1 < 10
        ? '0' + (Currentdate.getMonth() + 1)
        : Currentdate.getMonth() + 1 // Month is zero-indexed (January is 0)
    date.textContent =
      Currentdate.getDate() < 10
        ? '0' + Currentdate.getDate()
        : Currentdate.getDate()
    year.textContent = Currentdate.getFullYear()
  }, 1000)
}

function showTime () {
  setInterval(() => {
    let Currentime = new Date()

    let hrs = document.querySelector('.hrs')
    let mins = document.querySelector('.mins')
    let sec = document.querySelector('.sec')

    hrs.textContent =
      Currentime.getHours() < 10
        ? '0' + Currentime.getHours()
        : Currentime.getHours()
    mins.textContent =
      Currentime.getMinutes() < 10
        ? '0' + Currentime.getMinutes()
        : Currentime.getMinutes()
    sec.textContent =
      Currentime.getSeconds() < 10
        ? '0' + Currentime.getSeconds()
        : Currentime.getSeconds()
  }, 1000)
}

showDate()
showTime()


// append the value to option  in dropdown menu
let hours = document.querySelector('#hours')
for (let hour = 0; hour <= 24; hour++) {
  let optionHour = document.createElement('option')
  optionHour.setValue = hour
  if (hour < 10) {
    optionHour.textContent = '0' + hour
  } else {
    optionHour.textContent = hour
  }
  hours.appendChild(optionHour)
}
let mins = document.querySelector('#mins')
for (let min = 0; min <= 60; min++) {
  let optionMins = document.createElement('option')
  optionMins.setValue = min
  if (min < 10) {
    optionMins.textContent = '0' + min
  } else {
    optionMins.textContent = min
  }
  mins.appendChild(optionMins)
}
