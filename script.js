
//prompt the user for a list of froyo flavors (their order)
let flavors = prompt(
  "Please enter a list of froyo flavors, separated by commas"
);

//that will return a string; we need to make it an array
//parse input into an array of flavors by splitting it
const inputFlavors = flavors.split(",").map(flavor => flavor.trim());

//build object to track the flavors observed
const froyo = {};

//loop through the array and count each flavor
for (let i = 0; i < inputFlavors.length; i++) {
  const flavor = inputFlavors[i];

  if (froyo[flavor]) {
    //incrementing the count if the key exists
    froyo[flavor]++;
  } else {
    froyo[flavor] = 1;
  }
}

console.table(froyo);