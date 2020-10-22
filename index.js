console.log('test')

// <div class="card">
// <div class="card-inner">
//     <div class="card-front">
    
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

            if (mushroom.effect === "deadly") {
                const deadlyName = document.createElement('h2')
                deadlyName.innerHTML = `<p class="back-name">${mushroom.name}</p>`;
                mushroomCardBack.append(deadlyName)
            } else if (mushroom.effect === "psychedelic") {
                const psychedelicName = document.createElement('h2')
                psychedelicName.innerHTML = `<p class="back-name">${mushroom.name}</p>`;
                mushroomCardBack.append(psychedelicName)
            } else if (mushroom.effect === "delicious") {
                const deliciousName = document.createElement('h2')
                deliciousName.innerHTML = `<p class="back-name">${mushroom.name}</p>`;
                mushroomCardBack.append(deliciousName)
                }
            })
        })


    // function flipCard() {
    //     cardContent.classList.toggle('is-flipped')
    // }