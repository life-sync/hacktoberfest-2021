//img product slider
const prod = document.querySelector('.prod');
const prod1 = document.querySelector('.prod1');
const prod2 = document.querySelector('.prod2');
function changeProdImg(image){
    prod.src = image.src;
}
function changeProdImg1(image){
    prod1.src = image.src;
}
function changeProdImg2(image){
    prod2.src = image.src;
}
//game slider
// fetch("games.json").then(function (response) {
//     return response.json
// }).then( function (data){
// appendGames(game=data)
// }).catch( function (err) {
//     console.log(err);
// })
const data = [
    {
        "id": "1",
        "name": "CyberPunk 2077",
        "pub": "Microsoft Corporation",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/cyberpunk.jpg",
    },
    {
        "id": "2",
        "name": "The Last of Us Part 2",
        "pub": "Peterson",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/last.png",
    },
    {
        "id": "3",
        "name": "Spider Man",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/spiderman.jpeg",

    },
    {
        "id": "4",
        "name": "Assasin's Creed: Vaholla",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/creed.jpeg",

    },
    {
        "id": "5",
        "name": "Imortals Fenyx Rising",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/imortals.jpeg",

    },
    {
        "id": "6",
        "name": "Call of Duty: Cold War",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/cod.jpeg",

    },
    {
        "id": "7",
        "name": "Call of Duty: Cold War",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/cod.jpeg",

    },
    {
        "id": "8",
        "name": "Call of Duty: Cold War",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/cod.jpeg",

    },
    {
        "id": "9",
        "name": "Call of Duty: Cold War",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/cod.jpeg",

    },
    {
        "id": "10",
        "name": "Call of Duty: Cold War",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/cod.jpeg",

    },
    {
        "id": "11",
        "name": "Call of Duty: Cold War",
        "pub": "Hansen",
        "categories": "RPC,ACTION",
        "price": "$49.99",
        "image": "./assets/cod.jpeg",

    },

]
appendGames(data)
function appendGames(game){
var gameContainer = document.getElementById('gameCards')
for (i=0; i<game.length; i++) {
    var div = document.createElement('div');
    div.innerHTML= `
    <div class="game-card ">
    <div class="game-content swiper-slide">
    <div class="game-img"style="background-image: url('${data[i].image}');"></div>
                        <div class="game-name">${data[i].name}
                        </div>
                        <div class="game-rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div class="game-pub">${data[i].pub}</div>
                        <div class="game-type">${data[i].categories}</div>
                        <div class="game-price">${data[i].price}</div>
                    </div>
                    </div>
    </div>
    `
    gameContainer.appendChild(div);
}
}
Swiper
var swiper = new Swiper(".swiper-container  ", {
    direction: 'horizontal',
    loop: false,
    speed:300,
    slidesperView: 1,
    freemode: false,
    createElements: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });

const square = document.querySelector('.square');
const svgBlob = document.createElement('div');
svgBlob.innerHTML=`
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg%22%3E">
        <path fill="#D0E2FF" d="M36.5,22.2C22.3,45.7,-31.4,47.5,-44.1,24.8C-56.8,2.2,-28.4,-44.9,-1.5,-45.7C25.4,-46.6,50.7,-1.3,36.5,22.2Z" transform="translate(100 100)" />
    </svg>
`;
svgBlob.classList.add('svg-blob');
square.appendChild(svgBlob);
const userSvgNinja = document.querySelector('.svg-user-review');
const userSvg = document.createElement('div');
userSvg.innerHTML= `
    <div class="col-sm-6" >
        <img src="./assets/user-review-3.png" alt="" >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#A7F0BA" d="M60.8,-49.6C73.7,-32.2,75.8,-7.2,70.2,15.6C64.7,38.5,51.6,59.3,32.9,68.2C14.2,77.2,-10.2,74.4,-28.9,63.9C-47.7,53.4,-60.8,35.1,-67.1,13.6C-73.4,-7.9,-72.8,-32.8,-60.5,-50C-48.1,-67.2,-24.1,-76.8,-0.1,-76.8C23.9,-76.7,47.8,-66.9,60.8,-49.6Z" transform="translate(100 100)" />
        </svg>
    </div>
    <div class="col-sm-5">
        <i class="fa fa-quote-left"></i>
        <p>
            Video games feel different on the <br> 
            PlayStation 5 and that’s a good thing 
        </p>
        <i class="fa fa-quote-right"></i>
    </div>
    `
;
userSvg.classList.add('row');
userSvgNinja.appendChild(userSvg);
//counter trigger on scroll
$(document).ready(function(){
    $('.counter-value').counterUp({
        delay: 10,
        time: 1200.
    })
})
//landing explore modal
const exploreBtn = document.querySelector('.xp-btn');
const modalDiv = document.createElement('div');
const exploreDiv = document.createElement('div');
const landingDiv = document.querySelector('.landing-div');
modalDiv.classList.add('explore-modal');
exploreDiv.classList.add('explore-modal-div');
exploreDiv.innerHTML = `
    <div class='row'>
        <div class='col-sm-6'>
            <h3 class='modal-close'>+</h3>
            <h3>
                New Gen
                New Cool
            </h3>
            <p>
                Lorem ipsum dolor, si harum maxime inventore maiores blanditiis  <br>         
                inventore maiores blanditiis Lorem ipsum dolor, si harum maxime  <br>
                inventore maiores blanditiis
            </p>

        </div>
        <div class='col-sm-4'>
            <img src='https://media.discordapp.net/attachments/741244174736556076/872162977929891850/unknown.png'>
            <img src='https://media.discordapp.net/attachments/741244174736556076/872163171295698974/unknown.png'>
            <video src = './assets/ps5-disc.mp4' autoplay loop></video>
            <img src='./assets/motion-stick.png' class='stick'>
            <img src='./assets/ps5-cam.png' class='ps-cam' >
        </div>
    </div>
`;
modalDiv.appendChild(exploreDiv);
landingDiv.appendChild(modalDiv);
const closeExploreBtn = document.querySelector('.modal-close');
exploreBtn.addEventListener('click',()=>{
    modalDiv.style.display='block';
})
closeExploreBtn.addEventListener('click',()=>{
    modalDiv.style.display ='none';
})
