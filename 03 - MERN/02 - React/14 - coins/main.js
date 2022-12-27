
function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

// Sync
function fiveHeadsSync() {
  let headsCount = 0;
  let attempts = 0;
  while(headsCount < 5) {
    attempts++;
    let result = tossCoin();
    console.log(`${result} was flipped`);
    if(result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  return `Sync =>  It took ${attempts} tries to flip five "heads"`;
}

console.log( fiveHeadsSync() );
console.log( "Sync => This is run after the fiveHeadsSync function completes" );

// ASync
function fiveHeads() {
  return new Promise( (resolve, reject) => {

    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5 && attempts <= 100) {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if(result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    if(attempts >= 100) {
      return reject("Rejected, fiveHeads will take more than 100 attemps");
    } else {
      return resolve(`It took ${attempts} tries to flip five "heads"`);
    }
  });
}

fiveHeads()
  .then( res => console.log("resolved", res) )
  .catch( err => console.log("error", err) );
console.log( "When does this run now?" );
console.log( "ASync => This is run before the fiveHeads function completes" );