var locations = [":בי''ח בילינסון, פתח תקווה", ":בי''ח איכילוב, תל אביב-יפו", ":בי''ח שיבא תל-השומר", ":מרכז רפואי וולפסון, חולון"];
var days = ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי","יום שישי "];

window.onload = function(){
    var nav = document.getElementById("addmark");
    nav.innerHTML = "<";
    new append();
}

function append(){
    var futureNode = document.createElement("div");
    futureNode.className=("future");
    var content = document.getElementById("mainContentTable");
    content.insertBefore(futureNode, content.childNodes[0]);
    for(var i = 0; i < 30; i++)
    {
        var contentElement = document.createElement("div");
        contentElement.className=("contentElement");

            var btn = document.createElement("a");
            btn.href="http://se.shenkar.ac.il/students/2020-2021/web1/dev_227/form.html";
            btn.innerHTML ="הזמן";
            contentElement.appendChild(btn);

                var location = document.createElement("div");
                location.className=("location");
                location.innerHTML = locations[Math.floor((Math.random() * 4))];
                contentElement.appendChild(location);

                    var date = document.createElement("div");
                    date.className =("date");
                    date.innerHTML = days[Math.floor((Math.random() * 5))] + ", " + generateDate();
                    contentElement.appendChild(date);

        content.appendChild(contentElement);
    }
}


function generateDate(){
    var day_date = (Math.floor((Math.random() * 2) +0 ))+""+ (Math.floor((Math.random() * 6) +0 ))+":" +(Math.floor((Math.random() * 5) + 0))
     +"0"+" "+ Math.floor((Math.random() * 30) + 1) +"." + Math.floor((Math.random() * 12) + 1)+".2021 "; 
    return day_date;
}