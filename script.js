console.log("scooby dooby doo");
console.log(document);

let snacksCounter = 0;
let snacksPerSecond = 1;

const scoobySnackCounter = document.getElementById("scooby-snack-counter");
const scoobySnacksPerSecond = document.getElementById("snacks-per-second");
const scoobySnackButton = document.getElementById("scooby-snack-button");
const upgradeShopContainer = document.getElementById("upgrade-shop-container");
const shopUpgrade = document.getElementById("shop-upgrade");

let shopUpgrades = [];

async function getShopUpgrades() {
  //the url is the from the api resources
  // use the const to be able to play around with the api data later on in code
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}
getShopUpgrades();

//This code below took me an age to work out - the problem i had initially was that i had mispelled my naming convention for the 'snacksCounter' element I was trying to target with my eventHandler. Once I had identified this issue the console still wasn't displaying the incrememental increase, because I hadn't console logged the 'scoobySnackCounter.innerText = `${snacksCounter}`; declaration. I think I have stuggled to understand where and when I should console.log some code.  So, although this took a while to find the problem and solutiion I think I'm becoming more aware of the logic of why I do this and under what conditions.  In future I will try this out more and see what happens in the console. It feels epic just to have worked this part of the assignment out.  My missus thought I had won the lottery with my outburst of 'fiero'.
scoobySnackButton.addEventListener("click", handleClick);
function handleClick() {
  snacksCounter++;
  console.log(snacksCounter);
  //i need to display the value into the snack counter
  scoobySnackCounter.innerText = `${snacksCounter}`;
  console.log(scoobySnackCounter);
}

//I tried to create a  TIMER function specifically using the setInterval method so that the 'snacksCounter' goes up by one Scooby snack every second (1000ms) and that this is stored in the local server. The code below doesn't show the counter increasing automatically but it does increase but only when I hit the  snack button.  I will need to look at my logic a bit more carefully here.
let mySnacksCounter = setInterval(function () {
  snacksCounter++;
  snacksCounter.innerText = `${snacksCounter}`;
}, 1000);
console.log(snacksCounter);
// I am haven't completed anything else here in the coding of javascript from this point as I was stuck on this particular bug above.

// I have a feeling that my naming convention is causing a few issues too. In future I will be more thoughtful about the naming conventions of IDs to hopefully avoid confusion later on.
