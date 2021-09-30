const initialIp = document.querySelector("#input-initial");
const quantityIp = document.querySelector("#input-quantity");
const currentIp = document.querySelector("#input-current");
const btnCalculate = document.querySelector("#btn-calculate");
const outputEle = document.querySelector("#output-element");

function calProfit(){
    let profitAmt = Number(currentIp.value) - Number(initialIp.value)
    return profitAmt
}
function calProfitPercent(profit){
    let profitPercent = (profit/Number(initialIp.value))*100
    return profitPercent
}
function calLoss(){
    let loss = Number(initialIp.value) - Number(currentIp.value)
    return loss
}
function calLossPercent(loss){
    let lossPercent = (loss/Number(initialIp.value))*100
    return lossPercent
}

function calculateProfitAndLoss(){
    if(Number(currentIp.value)>Number(initialIp.value)){
        var profitEarned = calProfit()
        var profitPercentEarned = calProfitPercent(profitEarned)
        outputEle.innerText= "profit is "+profitEarned+" and the percent is "+ profitPercentEarned
    } else if (Number(initialIp.value)>Number(currentIp.value)){
        var lossEarned = calLoss()
        var lossPercentEarned = calLossPercent()
        outputEle.innerText = "loss is "+lossEarned+" and the percent is "+ lossPercentEarned
    }
}

function submitHandler(){
    var costPrice = Number(initialIp.value)
    var sellPrice = Number(currentIp.value)
    calculateProfitAndLoss()
}

btnCalculate.addEventListener("click", submitHandler)