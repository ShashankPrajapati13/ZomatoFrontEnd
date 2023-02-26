var arr = [
    { name: "Pizza Hut", status: "Free Delivery", time: 35, cprog: 100, pprog: 10, dprog: 0 },
    { name: "Burger king", status: "Free Delivery", time: 47, cprog: 100, pprog: 100, dprog: 20 },
    { name: "Subway", status: "Free Delivery", time: 20, cprog: 90, pprog: 0, dprog: 0 }
]

var clutter = ""
var clutter2 = ""
arr.forEach(function (elem, index) {
    if (index < 3) {
        clutter += ` <div id="prog${index}" class="UCards">
        <div id="Utop">
            <h4>${elem.name}</h4>
            <h5 id="free">${elem.status}</h5>
        </div>
        <div id="Umid">
                <i id="midL" class="ri-time-line"></i>
            <div id="midM">
                <h5>Estimated arrival</h5>
                <h3>${elem.time} min</h3>
            </div>
            <button id="midR">TRACK</button>
        </div>
        <div id="Ubot">
            <div id="odC">
                <div id="ctag">Order Confirmed</div>
                <div id="cprog"></div>
            </div>
            <div id="odP"><div id="ptag">Order Packed</div><div id="pprog"></div></div>
            <div id="odD"><div id="dtag">On the way</div><div id="dprog"></div></div>
        </div>
    </div>`
        // document.querySelector(`#prog${index} #cprog`).style.width = `${elem.cprog}%`

    }
    else if (index > 2 && index < 7) {
        clutter2 += `<div class="UCards">
        <div id="Utop">
            <h4>${elem.name}</h4>
            <h5 id="free">${elem.status}</h5>
        </div>
        
        <div id="Umid">
                <i id="midL" class="ri-time-line"></i>
                
            <div id="midM">
                <h5>Estimated arrival</h5>
                <h3>${elem.time} min</h3>
            </div>
            <button id="midR">TRACK</button>
        </div>
        <div id="Ubot">
            <div id="odC">
                <div id="ctag">Order Confirmed</div>
                <div id="cprog"></div>
            </div>
            <div id="odP"><div id="ptag">Order Packed</div><div id="pprog"></div></div>
            <div id="odD"><div id="dtag">On the way</div><div id="dprog"></div></div>
        </div>
    </div> `
    }
})
document.querySelector("#featCards #ffirst").innerHTML = clutter;
document.querySelector("#featCards #fsec").innerHTML = clutter2;

document.querySelector("#prog").html