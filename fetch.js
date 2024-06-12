(async function(){

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=New%20York%20City&appid=c9b912c51393e3f71c33f19362ba4255'
    const res = await fetch(url);
    const data = await res.text();
    console.log(data);
})();
