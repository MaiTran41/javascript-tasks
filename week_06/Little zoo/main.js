const animals = [
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

const animalsListDisplay = document.getElementById("animalList");
const addAnimalBtn = document.getElementById("addAnimal");
const animalsInput = document.getElementById("newAnimalName");

animals.forEach((animalName) => {
  const element = document.createElement("li");
  element.textContent = animalName;
  animalsListDisplay.appendChild(element);
});

// animalsListDisplay.innerHTML = "";

const addAnimalHandler = () => {
  const newAnimalName = animalsInput.value;

  //   animalsListDisplay.appendChild(newAnimalName);
};

addAnimalBtn.addEventListener("click", addAnimalHandler);
