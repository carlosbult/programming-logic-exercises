function timeConversion(s) {
  let hour = s.substring(0, 2) * 1;
  let time = s.substring(8);

  let newHour = '';

  if (time == 'PM' && hour < '12') {
    newHour = hour + 12;
  } else if (time == 'AM' && hour == '12') {
    newHour = '00';
  } else if (time == 'AM' && hour < '10') {
    newHour = `0${hour}`;
  } else {
    newHour = hour;
  }

  hour = s.substring(0, 2);

  let complete = s.replace(hour, newHour).slice(0, 8);

  console.log(complete);
  return complete;
}

let time_one = '07:05:45PM';
let time_two = '12:00:00AM';
let time_three = '12:00:00PM';
let time_four = '01:57:00AM';
let time_five = '01:57:00PM';
let time_six = '03:57:00PM';

timeConversion(time_one);
timeConversion(time_two);
timeConversion(time_three);
timeConversion(time_four);
timeConversion(time_five);
timeConversion(time_six);
