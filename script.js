const initialIp = document.querySelector("#input-initial");
const quantityIp = document.querySelector("#input-quantity");
const currentIp = document.querySelector("#input-current");
const btnCalculate = document.querySelector("#btn-calculate");
const outputEle = document.querySelector("#output-element");
const imgStonk = document.querySelector("#img-stonk");
const imgPanik = document.querySelector("#img-panik");
const body = document.querySelector("body")

function showStonk(){
    imgStonk.style.display="block";
    imgPanik.style.display="none";
    body.style.backgroundImage = "linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)";
}
function showPanik(){
    imgPanik.style.display="block";
    imgStonk.style.display="none";
    body.style.backgroundImage = "linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)";
}
function hideBoth(){
    imgPanik.style.display="none";
    imgStonk.style.display="none";
    body.style.backgroundImage = "radial-gradient( circle 1224px at 10.6% 8.8%,  rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2% )";
}

function calculateProfitAndLoss(cost, sell, qty){
    if(sell>cost){
        var profit = (sell - cost)*qty
        var profitPercent = (profit/cost)*100
        outputEle.innerText= "profit is "+profit+" and the percent is "+ profitPercent
        showStonk();
    } else if (cost>sell){
        var loss = (cost - sell)*qty
        var lossPercent = (loss/cost)*100
        outputEle.innerText = "loss is "+loss+" and the percent is "+ lossPercent
        showPanik();
    } else{
        hideBoth();
        outputEle.innerText= "Your Portfolio is as it is."
    }
}

function submitHandler(){
    var initial = Number(initialIp.value);
    var current = Number(currentIp.value);
    var quantity = Number(quantityIp.value);
    calculateProfitAndLoss(initial, current, quantity);
}

btnCalculate.addEventListener("click", submitHandler)