const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const getHourAngle = () => {
  // 30 degrees per hour (30*12 => 360 degrees)
  const currentHour = new Date().getHours();
  return (30 * currentHour) + 180;
}

const getMinutesAngle = () => {
  // 6 degrees per minute (6*60 => 360 degrees)
  const currentMinute = new Date().getMinutes();
  return (6 * currentMinute) + 180;
}

const getSecondsAngle = () => {
  // 6 degrees per seconds (6*60 => 360 degrees)
  const currentSecond = new Date().getSeconds();
  return (6 * currentSecond) + 180;
}

setInterval( function() {
  seconds.style.transform = `rotate(${getSecondsAngle()}deg)`;
  minutes.style.transform = `rotate(${getMinutesAngle()}deg)`;
  hour.style.transform = `rotate(${getHourAngle()}deg)`;
}, 1000);