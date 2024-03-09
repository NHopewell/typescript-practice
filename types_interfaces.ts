// types from array constants
const bloodTypes = ["Warm", "Cold"] as const;
type BloodType = (typeof bloodTypes)[number];

const inhabitLocations = ["Land", "Sea", "Sky"] as const;
type Loc = (typeof inhabitLocations)[number];

// interfaces using these types
interface Animal {
    animalGroup: String
    hasFur: Boolean
    blooded: BloodType
    inhabits: Loc
};

// implementing the interface
const lizard: Animal = {
    animalGroup: 'lizardians',
    hasFur: false,
    blooded: "Cold",
    inhabits: "Land"
};

const monkey: Animal = {
    animalGroup: 'mamal',
    hasFur: true,
    blooded: "Warm",
    inhabits: "Land"

};

// mapping over an array of animals
const animals: Animal[] = [lizard, monkey];
animals.forEach(animal => {
    console.log(animal.inhabits);
});

// updating animal objects with unpacking
const alteredAnimals = animals.map(animal => {
    return {...animal, inhabits: "Sky"};
});
alteredAnimals.forEach(animal => {
    console.log(animal.inhabits);
});
