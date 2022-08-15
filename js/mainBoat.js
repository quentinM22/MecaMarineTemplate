
let table = []
let boat1 = new Boat ( 'Voilier 12m', "Jolie petit voilier idéal pour les balades cotière", "12 000", "In-Bord (diesel)" ,"Voilier", true )
let boat2 = new Boat ( 'Vedette 13m', "Vedette parfait pour les croisière cotière", "50 000", "In-bord (diesel)" ,"Vedette", false)
let boat3 = new Boat ( 'Semi-Rigide 6m', "Embarcation fait pour la pêche sportive", "10 000", "Hors-bord" ,"semi-rigide", true)
let boat4 = new Boat ( 'Pêche Promenade 6m', "Mixte entre pêche et promenade parfait pour les balade en famille ou les partie de pêche", "9 000", "Hors-bord" ,false)
table.push(boat1, boat2, boat3, boat4)

const containerAchat = document.querySelector('.container-achat')

for (let index = 0; index < table.length; index++) {
    // console.log(table[index].title)
    containerAchat.appendChild.innerHTML = table[index].title
    
    
}