function showTime(){
    
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let day = date.getDay();
    let dayString;

    // gün numarasını, gün adına çeviren switch-case bloğu
    switch(day){
        case 1:
            dayString = "Pazar";
            break;
        case 2:
            dayString = "Pazartesi";
            break;
        case 3:
            dayString = "Salı";
            break;
        case 4:
            dayString = "Çarşamba";
            break;
        case 5:
            dayString = "Perşembe";
            break;
        case 6:
            dayString = "Cuma";
            break;
        case 7:
            dayString = "Cumartesi";
            break;
        default:
            break;
    }

    // gerçek zamanlı saat ayarı
    setTimeout(showTime, 1000);

    document.querySelector("#myClock").innerHTML = `${h}:${m}:${s} ${dayString}`;

}


showTime();