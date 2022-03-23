// chiedere al utente il suo nome, cognome e colore preferito, 
// generare la password in base alle risposte





// chiedere il suo nome
const first_name = prompt(`come ti chiami?`);
console.log(first_name)


// chiedere il suo cognome
const last_name = prompt(`qual'è il tuo cognome`)
console.log(last_name)

// chiedere il suo colore preferito

const favorite_color = prompt(`qual'è il tuo colore preferito`)
console.log(favorite_color)

// number random

let number_random = '55'
console.log(number_random)

// per fare numberi random (visto su google)
// var rand = Math.random();
// console.log(rand);



// psw generator 


document.getElementById('pswgen').innerHTML = `${first_name}${last_name}${favorite_color}${number_random}`


