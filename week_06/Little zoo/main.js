const animalSimple = [
  "Fox",
  "Bear",
  "Cat",
  "Dog",
  "Lion",
  "Dolphin",
  "Penguin",
  "Dinosaurs",
  "Shark",
  "Zebra",
  "Otter",
];

const animalList = document.getElementById("animalList");
const addAnimalBtn = document.getElementById("addAnimal");

const searchInput = document.getElementById("searchAnimal");
const sortAnimalsBtn = document.getElementById("sortAnimals");

const displayAnimal = (animalArray) => {
  animalList.innerHTML = "";

  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal}`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  const nameInput = document.getElementById("newAnimalName").value.trim();

  animalSimple.push(nameInput);
  displayAnimal(animalSimple);

  document.getElementById("newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredAnimals = animalSimple.filter((animal) =>
    animal.toLowerCase().includes(searchText)
  );

  displayAnimal(filteredAnimals);
};

const sortAnimal = () => {
  animalSimple.sort();

  displayAnimal(animalSimple);
};

addAnimalBtn.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
sortAnimalsBtn.addEventListener("click", sortAnimal);

displayAnimal(animalSimple);
