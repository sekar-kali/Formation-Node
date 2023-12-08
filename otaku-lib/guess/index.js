console.log('Guess a number from 1 to 10:');

// let tryLeft = 1;
// let random = Math.floor(Math.random() * 10) + 1;
// process.stdin.on('data', (chunk) => {
// let userNumber = chunk.toString();
// while (userNumber!== random && tryLeft <10)
//     userNumber;
//     random;
//   tryLeft ++;
//   if (Number(userNumber) === random) {
//     process.stdout.write(`Vous avez trouvé ${random}`);
//   } else {
//     process.stderr.write('Guess a number from 1 to 10: \n');
//   }

// });

let tryLeft = 10;
let random = Math.floor(Math.random() * 10) + 1;
process.stdin.on('data', (chunk) => {
let userNumber = chunk.toString();
if (tryLeft === 0) {
    userNumber=chunk.toString();
    random;
    tryLeft --;
  if (Number(userNumber) === random) {
    process.stdout.write(`Vous avez trouvé ${random}\n`);
    tryLeft=0;
  } else {
    process.stderr.write(`Vous avez ${tryLeft} tentative\n`);
    if(userNumber > random)
    process.stderr.write('Votre nombre est plus grand \n'); 
  else { process.stderr.write('Votre nombre est plus petit \n') }} 
}
process.stderr.write('Trouvé le nombre: \n'); 
console.log(random)
});


// function guessNumber() {

//     // generating a random integer from 1 to 10
//     const random = Math.floor(Math.random() * 10) + 1;

//     // take input from the user
    
//     console.log('Guess a number from 1 to 10:');
//     process.stdin.on('data', (chunk) => {
//     let number = chunk.parseInt().trim();
    
//     // take the input until the guess is correct
//     while(number !== random) {
//         console.log('Guess a number from 1 to 10:');
//     number = chunk.parseInt().trim();;
//     }

//     // check if the guess is correct
//     if(number == random) {
//         console.log('You guessed the correct number.');
//     }
