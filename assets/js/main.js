let a;
let date;
let time;
    const option = {weekday : 'long', year : 'numeric', month: 'long', day:'numeric'};
    setInterval(() =>
        {
            a = new Date();
            a.getHours();
            let date = a.toLocaleDateString(undefined,option);
            let time = a.getHours()+ ':' + a.getMinutes() + ':' + a.getSeconds() ;
        document.getElementById('time').innerHTML = time + '<br> on ' + date;
        }, 1000);