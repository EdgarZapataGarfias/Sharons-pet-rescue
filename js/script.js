const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    //sleep method: property sleep with function no parameters
    sleep: function () {
      console.log(`${this.name} needs a nap. ZzZzZz`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
        this.sleep();
      } else {
        console.log(`Yay! ${name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  //if not returned pet will be undefined once used outside
  //createPet function
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

clover.isTired = 8;
francine.isTired = 9;
//just checking if objects were created correctly with nextline
//console.log(sora, clover, baxter, cleo, francine);

//verifying objects and values
// console.log(clover.sleep());
// console.log(baxter.play());
//console.log(clover, francine); //isTired changes to 1 and 6

const allPets = [sora, clover, baxter, cleo, francine];

const showPets = function (petArray) {
  pets.innerText = "";
  for (const pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
