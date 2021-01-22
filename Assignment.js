
function kilometerToMeter(){
    var meter = kilometer / 1000;
    return meter;
}


function budgetCalculator(){
    if((clock >= 0) && (mobile >= 0) && (laptop >= 0)){
        var clockPrice = clock * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
        var total = (clockPrice + mobilePrice + laptopPrice)
        return total;
    }
  
}


function hotelCost(remainingDays){
    if(remainingDays <= 10){
        totalCost = remainingDays * 100;
    }
    else if(remainingDays <=20){
         var costFor10Days = 10 * 100;
         var remainingFrom20Days = remainingDays - 10;
         var costOnly10To20Days = remainingFrom20Days * 80;
         totalCost = costFor10Days + costOnly10To20Days;
    }
    else{
        var costFor10Days = 10 * 100;
        var costFor10To20Days = 10 * 80;
        var remainigUpTo20Days = remainingDays - 20;
        var costOnlyUpTo20Days = remainigUpTo20Days * 50;
        totalCost = costFor10Days + costFor10To20Days + costOnlyUpTo20Days;
    }
    return totalCost;
}




function megaFriend(friendsName){
        var maxName = friendsName[0];
    for(var i = 0; i < friendsName.length; i++){
        var element = friendsName[i];
        var elementLength = element.length;
        var itemLength = friendsName[0].length;
        if(elementLength>itemLength){
        var maxName = element;
        }
    }
    return maxName;
}


     
