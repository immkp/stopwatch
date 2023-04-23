const swHrs = $(".stopwatch-hrs")
const swMin = $(".stopwatch-min")
const swSec = $(".stopwatch-sec")

const swStart = $(".stopwatch-start")
const swStop = $(".stopwatch-stop")
const swReset = $(".stopwatch-reset")

let timer = true
let sec = 0
let min = 0
let hrs = 0

swStart.click(function () {
  if (timer == true) {
    timer = false
    swTimer()
  }
})

swStop.click(function () {
  timer = true
})

swReset.click(function () {
  if (timer == false) {
    timer = true
  }

  sec = 00
  min = 00
  hrs = 00

  swHrs.html("0" + hrs)
  swMin.html("0" + min)
  swSec.html("0" + sec)
})

//function stopwatchtimer

function swTimer() {
  if (timer == false) {
    sec = parseInt(sec)
    min = parseInt(min)
    hrs = parseInt(hrs)

    sec = sec + 1
    if (sec == 60) {
      min = min + 1
      sec = 0
    }

    if (min == 60) {
      hrs = hrs + 1
      min = 0
      sec = 0
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec
    }
    if (min < 10 || min == 0) {
      min = "0" + min
    }
    if (hrs < 10 || hrs == 0) {
      hrs = "0" + hrs
    }

    console.log(hrs + " " + min + " " + sec)

    swHrs.html(hrs)
    swMin.html(min)
    swSec.html(sec)

    setTimeout("swTimer()", 1000)
  }
}
