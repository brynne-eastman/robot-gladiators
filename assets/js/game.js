//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this 
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    while (enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 

    if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttach variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaing."
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died.");
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    if (playerHealth <= 0) {
        window.alert(playerName + " has died.");
        break;
        while (playerHealth > 0 && enemyHealth > 0);
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");

    }
    if (promptFight == "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?"); 
    }
     
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);

    } else {
        fight();
    

}; 

for (var i = 0; i< enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}


