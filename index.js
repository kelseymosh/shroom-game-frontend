console.log('test')


const cardContent = document.querySelector('.card')



fetch('http://localhost:3000/mushroomsrandom')
    .then(response => response.json())
    .then(mushrooms => {
        mushrooms.forEach (mushroom =>{ 

           const imgCard = document.createElement('img')
           imgCard.src = `${mushroom.img_url}`

           cardContent.append(imgCard)
           
           
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