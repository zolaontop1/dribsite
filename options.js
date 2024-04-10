let optionStatus1 = false;
let optionStatus2 = false;
let optionStatus3 = false;


let toggleIt1 = function () {
    let getCard = document.querySelector(".card-1");
    let getCardImg = document.querySelector(".card-1 img");
    let getCardPara = document.querySelector(".card-1 p");
    let getCardSelect = document.querySelector(".card-1 .select");

    if (optionStatus1 === false) {
        getCard.style.border = "2px solid #ff69b4"
        getCardPara.style.display = "block";
        getCardImg.style.margin = "-100px auto 0px"
        getCardSelect.style.background = "#ff69b4"
        getCardSelect.style.border = "1px solid #ff69b4"
    
        optionStatus1 = true;
    }else if (optionStatus1 === true){

        getCard.style.border = "2px solid #2525251f"
        getCardPara.style.display = "none";
        getCardImg.style.margin = "-20px auto 0px"
        getCardSelect.style.background = "#fff"
        getCardSelect.style.border = "1px solid #25252563"
    
        optionStatus1 = false;
    }
}


let toggleIt2 = function () {
    let getCard = document.querySelector(".card-2");
    let getCardImg = document.querySelector(".card-2 img");
    let getCardPara = document.querySelector(".card-2 p");
    let getCardSelect = document.querySelector(".card-2 .select");

    if (optionStatus2 === false) {
        getCard.style.border = "2px solid #ff69b4"
        getCardPara.style.display = "block";
        getCardImg.style.margin = "-100px auto 0px";
        getCardSelect.style.background = "#ff69b4";
        getCardSelect.style.border = "1px solid #ff69b4";
        
    
        optionStatus2 = true;
    }else if (optionStatus2 === true){

        getCard.style.border = "2px solid #2525251f";
        getCardPara.style.display = "none";
        getCardImg.style.margin = "-20px auto 0px";
        getCardSelect.style.background = "#fff";
        getCardSelect.style.border = "1px solid #25252563";
        
    
        optionStatus2 = false;
    }
}


let toggleIt3 = function () {
    let getCard = document.querySelector(".card-3");
    let getCardImg = document.querySelector(".card-3 img");
    let getCardPara = document.querySelector(".card-3 p");
    let getCardSelect = document.querySelector(".card-3 .select");

    if (optionStatus3 === false) {
        getCard.style.border = "2px solid #ff69b4"
        getCardPara.style.display = "block";
        getCardImg.style.margin = "-100px auto 0px"
        getCardSelect.style.background = "#ff69b4"
        getCardSelect.style.border = "1px solid #ff69b4"
        
    
        optionStatus3 = true;
    }else if (optionStatus3 === true){

        getCard.style.border = "2px solid #2525251f"
        getCardPara.style.display = "none";
        getCardImg.style.margin = "-20px auto 0px"
        getCardSelect.style.background = "#fff"
        getCardSelect.style.border = "1px solid #25252563"
        
    
        optionStatus3 = false;
    }
}