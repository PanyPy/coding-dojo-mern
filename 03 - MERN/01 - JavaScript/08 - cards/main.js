const STAT = {
  Resilience: 'Resilience',
  Power: 'Power'
};

class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  showStat() {
    console.log(`${this.name} = Power: ${this.power}, Res: ${this.res}`);
  }

  attack(target) { //target -> another Unit
    if( target instanceof Unit ) {
      target.res -= this.power;
    } else {
      throw new Error( "Target must be a unit!" );
    }
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) { //target -> Unit
    if( target instanceof Unit ) {
      switch(this.stat){
        case STAT.Power:
          target.power += this.magnitude;
          break;
        case STAT.Resilience:
          target.res += this.magnitude;
          break;
        default:
          console.log("Invalid stat");
      }
    } else {
        throw new Error( "Target must be a unit!" );
    }
  }
}

// Setup unit cards
const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);
// Setup effect cards
const hardAlgo = new Effect("Hard Algorithm", 2, "Increate target's resilience by 3.", STAT.Resilience, 3);
const rejectedPromise = new Effect("Rejected Promise not handled", 1, "Decrease target's resilience by 2.", STAT.Resilience, -2);
const pairProg = new Effect("Pair Programming", 3, "Increate target's power by 2.", STAT.Power, 2);


// PLAY
console.log("TIME TO DUEL");
redNinja.showStat();
blackNinja.showStat();

console.log("\n1st movement");
console.log(`Player 1 plays '${hardAlgo.name}' agains ${redNinja.name}`);
hardAlgo.play(redNinja);
redNinja.showStat();
blackNinja.showStat();

console.log("\n2nd movement");
console.log(`Player 2 plays '${rejectedPromise.name}' against ${redNinja.name}`);
rejectedPromise.play(redNinja);
redNinja.showStat();
blackNinja.showStat();

console.log("\n3rd movement");
console.log(`Player 1 plays '${pairProg.name}' against '${redNinja.name}'`);
pairProg.play(redNinja);
redNinja.showStat();
blackNinja.showStat();

console.log(`\nPlayer 1 attacks '${redNinja.name}'`);
redNinja.attack(blackNinja);
redNinja.showStat();
blackNinja.showStat();
console.log(`GAME OVER ${redNinja.name} WINS!`);