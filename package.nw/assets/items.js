Game.ItemRepository = new Game.Repository('items', Game.Item);

Game.ItemRepository.define('apple', {
    name: 'apple',
    character: '%',
    foreground: 'red',
    foodValue: 50,
    mixins: [Game.ItemMixins.Edible]
});

Game.ItemRepository.define('Bottle Of Water', {
	name: 'Water bottle',
	character: 'W',
	foreground: 'blue',
	thirstValue: 25,
	consumptions: 10,
	isPoison: false,
	mixins: [Game.ItemMixins.Drinkable]
});
Game.ItemRepository.define('Bleach', {
	name: 'Bleach',
	character: 'B',
	foreground: 'lightblue',
	thirstValue: 25,
	consumptions: 10,
	isPoison: true,
	mixins: [Game.ItemMixins.Drinkable]
});
Game.ItemRepository.define('melon', {
    name: 'Melon',
    character: 'M',
    foreground: 'lightGreen',
    foodValue: 35,
    consumptions: 4,
    mixins: [Game.ItemMixins.Edible]
});

Game.ItemRepository.define('pumpkin', {
    name: 'pumpkin',
    character: '%',
    foreground: 'orange',
    foodValue: 50,
    attackValue: 2,
    defenseValue: 2,
    wearable: true,
    wieldable: true,
    mixins: [Game.ItemMixins.Edible, Game.ItemMixins.Equippable]
});

Game.ItemRepository.define('corpse', {
    name: 'corpse',
    character: '%',
    foodValue: 75,
    consumptions: 1,
    mixins: [Game.ItemMixins.Edible]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('rock', {
    name: 'rock',
    character: '*',
    foreground: 'white'
});

// Weapons
Game.ItemRepository.define('dagger', {
    name: 'dagger',
    character: 'ᵻ',
    foreground: 'gray',
    attackValue: 5,
    wieldable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('whip', {
   name: 'whip',
   character: 'ƾ',
	foreground: 'brown',
	attackValue: 4.5,
	wieldable: true,
	mixins: [Game.ItemMixins.Equippable]
}, {
	disableRandomCreation: false
});

Game.ItemRepository.define('sword', {
    name: 'sword',
    character: '!',
    foreground: 'white',
    attackValue: 10,
    wieldable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('staff', {
    name: 'staff',
     character: '}',
    foreground: 'yellow',
    attackValue: 5,
    defenseValue: 3,
    wieldable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

// Wearables
Game.ItemRepository.define('tunic', {
    name: 'tunic',
    character: '[',
    foreground: 'green',
    defenseValue: 2,
    wearable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('chainmail', {
    name: 'chainmail',
     character: '{',
    foreground: 'white',
    defenseValue: 4,
    wearable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});

Game.ItemRepository.define('platemail', {
    name: 'platemail',
    character: '&',
    foreground: 'aliceblue',
    defenseValue: 6,
    wearable: true,
    mixins: [Game.ItemMixins.Equippable]
}, {
    disableRandomCreation: true
});
