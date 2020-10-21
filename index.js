console.log('test')

// <div class="card">
// <div class="card-inner">
//     <div id="card-front1" class="card-front">
    
//     </div>
//     <div class="card-back">
        
//     </div>
// </div>
// </div>

fetch('http://localhost:3000/mushroomsrandom')
    .then(response => response.json())
    .then(mushrooms => {
        mushrooms.forEach (mushroom =>{ 
            const mushroomCard = document.createElement('div')
            mushroomCard.className = "card"

            const mushroomCardInner = document.createElement('div')
            mushroomCardInner.className = "card-inner"

            const mushroomCardFront = document.createElement('div') 
            mushroomCardFront.className = "card-front"
            
            const mushroomCardBack = document.createElement('div')
            mushroomCardBack.className = "card-back"
            
            const imgCard = document.createElement('img')
            imgCard.src = `${mushroom.img_url}`

            mushroomCardFront.append(imgCard)

            mushroomCardInner.append(mushroomCardFront, mushroomCardBack)

            mushroomCard.append(mushroomCardInner)
    
            const mushroomsContainer = document.getElementById('container')
            mushroomsContainer.append(mushroomCard)


        })

    })
    




    // function flipCard() {
    //     cardContent.classList.toggle('is-flipped')
    // }
    
    
    const backCard1 = document.getElementById("flip-back-1")
    // const backCard2 = document.getElementById("flip-back-2")
    // const backCard3 = document.getElementById("flip-back-3")
    
    
    function shroomResults(mushroom) {
            if  (mushroom.effect === "deadly") {
                const deadlyName = document.createElement('h2')
                deadlyName.innerHTML = `${mushroom.name}`;
                backCard1.append(deadlyName)
            } else if (mushroom.effect === "psycheldelic") {
                const psychedelicName = document.createElement('h2')
                psychedelicName.innerHTML = `${mushroom.name}`;
                backCard1.append(psychedelicName)
            } else if (mushroom.effect === "delicious") {
                const deliciousName = document.createElement('h2')
                deliciousName.innerHTML = `${mushroom.name}`
                backCard1.append(deliciousName)
            }

        
        }