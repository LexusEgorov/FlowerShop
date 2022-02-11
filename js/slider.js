let sliderItems = [
    { 
        src: "images/shop/slider/img/1.jpg",
        name: "Суккуленты",
        text: "Это неприхотливое растение может в течение длительного времени жить без воды. Отлично подойдет для людей, которые не особенно любят ухаживать за растениями. Растения создают располагающую атмосферу в доме.",
        shortText: "Суккуленты"
    },
    { 
        src: "images/shop/slider/img/2.jpg",
        name: "Грёнскан",
        text: "Украсьте дом растениями в подходящих для вашего интерьера кашпо.",
        shortText: "Грёнскан"
    },
    { 
        src: "images/shop/slider/img/3.jpg",
        name: "Хамедорея Элеганс",
        text: "Растения дарят ощущение комфорта и создают более приятную атмосферу в доме. Это легкое в уходе растение прекрасно подходит для офисов: оно увлажняет воздух и создает более расслабленную, творческую рабочую атмосферу.",
        shortText: "Хамедорея"
    },
    { 
        src: "images/shop/slider/img/4.jpg",
        name: "Хедера Хеликс",
        text: "Это быстрорастущее растение можно поставить в помещении и на улице, пока не похолодает. Домашние растения способствуют улучшению вашего самочувствия и делают дом ярче и уютнее.",
        shortText: "Хедера"
    },
    { 
        src: "images/shop/slider/img/5.jpg",
        name: "Бладверк",
        text: "Флорариум — простой и эффектный способ украсить интерьер живыми растениями. Закройте крышку, чтобы создать естественный влажный микроклимат, при котором растению не требуется частый полив. Открытая банка выглядит как обычное кашпо.",
        shortText: "Бладверк"
    },
];


let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

let slide = document.querySelector(".image");
let currentImg = slide.firstElementChild;

let textColumn = document.querySelector(".description");

let slideName = textColumn.querySelector("h2");
let slideDesc = textColumn.querySelector("p");

let currentItem = 0;

let checkForUnavailable = function(nextButton, prevButton, currentItem){
    if(currentItem === 0){
        prevButton.classList.add("unavailable");
        prevButton.querySelector("h3").textContent = "";
        nextButton.querySelector("h3").textContent = sliderItems[currentItem + 1].shortText;
    }
    else if(currentItem === sliderItems.length - 1){
        nextButton.classList.add("unavailable");
        nextButton.querySelector("h3").textContent = "";
        prevButton.querySelector("h3").textContent = sliderItems[currentItem - 1].shortText;
    }
    else{
        prevButton.classList.remove("unavailable");
        prevButton.querySelector("h3").textContent = sliderItems[currentItem - 1].shortText;
        nextButton.classList.remove("unavailable");
        nextButton.querySelector("h3").textContent = sliderItems[currentItem + 1].shortText;
    }
    console.log(currentItem);
}

let changeText = function(header, paragraph, item){
    textColumn.classList.add("change-text");
    setTimeout(function(){
        header.textContent = sliderItems[item].name;
        paragraph.textContent = sliderItems[item].text;
    }, 250);
};

let showNextImg = function(slide, img, indexOfItem){
    img.classList.add("next-image");
    changeText(slideName, slideDesc, indexOfItem);
    slide.style.backgroundImage = "url(\"" + sliderItems[indexOfItem].src + "\")";
    setTimeout(function(){
        img.src = sliderItems[indexOfItem].src;
        img.classList.remove("next-image");
        textColumn.classList.remove("change-text");
    }, 490);
};

let showPrevImg = function(slide, img, indexOfItem){
    img.classList.add("prev-image");
    changeText(slideName, slideDesc, indexOfItem);
    img.src = sliderItems[indexOfItem].src;
    setTimeout(function(){
        img.classList.remove("prev-image");
        slide.style.backgroundImage = "url(\"" + sliderItems[indexOfItem].src + "\")";
        textColumn.classList.remove("change-text");
    }, 490);
};

nextButton.addEventListener("click", function(evt){
    evt.preventDefault();
    currentItem++;
    checkForUnavailable(nextButton, prevButton, currentItem);
    showNextImg(slide, currentImg, currentItem);
});

prevButton.addEventListener("click", function(evt){
    evt.preventDefault();
    currentItem--;
    checkForUnavailable(nextButton, prevButton, currentItem);
    showPrevImg(slide, currentImg, currentItem);
});

































