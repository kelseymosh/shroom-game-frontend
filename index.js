console.log('test')

const mainGamePage = document.getElementById("main-game-page")
const cardContent = document.querySelector('.card');

fetch('http://localhost:3000/mushroomsrandom')
    .then(response => response.json())
    .then(mushrooms => {
        mushrooms.forEach (mushroom =>{ 
            const flipCard1 = document.getElementById('flip-card-1').setAttribute("src", `${mushroom.img_url}`)
            const flipCard2 = document.getElementById('flip-card-2').setAttribute("src", `${mushroom.img_url}`)
            const flipCard3 = document.getElementById('flip-card-3').setAttribute("src", `${mushroom.img_url}`)
            
    })
})
    




    // function flipCard() {
    //     cardContent.classList.toggle('is-flipped')
    // }
    
    
    // const backCard1 = document.querySelector("#back1")
    // const backCard2 = document.querySelector("#back2")
    // const backCard3 = document.querySelector("#back3")
    
    
    // function shroomResults(event) {
    //     event.preventDefault();
    //     let mushroomEffect = (mushroom) => {
    //         if  (mushroom.effect === "deadly") {
    //             backCard1.classList.add('display');
    //         } else if ( mushroom.effect === "psycheldelic") {
    //             backCard2.classList.add('display')
    //         } else if (mushroom.effect === "delicious") {
    //             backCard3.classList.add('display')
    //         }
    
    //         flipCard()