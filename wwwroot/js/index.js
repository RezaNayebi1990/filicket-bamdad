

cards=[
    {
        img1:"img/DOG-HUSKY_23JUL00.jpg",
        img2:"img/german-529202089-e1701095552546.webp",
        img3:"img/Bulldog_inglese.jpg",
        title1:"huski",
        title2:"german",
        title3:"bulldog",
    }

]
function fillcards() {
    var cardshtml ="";
    for (var i =0 ;i< cards.length; i++) {
        
    
        cardshtml+= `<div class="col-sm-12 col-md-6 col-lg-3 border border-2">
        <img src=${cards[0].img1} width="200" height="200">
            <h3 class="card.title">${cards[i].title1}</h3>
            <p>leo</p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 border border-2">
        <img src=${cards[0].img2} width="200" height="200">
        <h3 class="card.title">${cards[i].title2}</h3>
            <p>agita</p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 border border-2">
        <img src=${cards[0].img3} width="200" height="200">
        <h3 class="card.title">${cards[i].title3}</h3>
            <p>bobby</p>
        </div>
    </div>`;
}
$("#cards").html(cardshtml);
}


