
a = new Date();
a.getHours();
let time = a.getHours()+ ':' + a.getMinutes() + ':' + a.getSeconds();
let timeid = document.getElementById('time');

timeid.append('time');