function* chooseYourAdventure() {
	// console.log(yield adventure.say('Hey there!'));
	// console.log(yield adventure.say('Woah', 'This is cool'));
	// console.log(yield adventure.ask('Woah', 'This is cool'));
	// console.log(yield adventure.choose('Woah', 'This is cool', 'Hello world'));
	// console.log(yield adventure.say('That\'s all folks!', 'THE END'));

yield adventure.say("Welcome to Candy Mountain!");

var myName = yield adventure.ask("Before we begin, what is your name?");

yield adventure.say("Hello "+myName+", let's go on an adventure!");

var myCandy = yield adventure.choose("What type of candy do you like?", "Chocolate", "Gumdrops", "Lollipops", "Sour Bites");

yield adventure.say("You chose "+myCandy);

var location = yield adventure.choose("Where would you like to go?", "Chocolate River", "Gumdrop Fields", "Lollipop Forest", "Sour Patch");

if (location === "Chocolate River") {
	yield adventure.say("Uh oh, you need to swim across the river!")
} 
else if (location === "Lollipop Forest") {
	yield adventure.say("Welcome to the forest!")
}
else if (location === "Sour Patch") {
	yield adventure.say("Watch out for the Sour Patch Kids!")
}
else {
	yield adventure.say("You can frolic in the field!");
}

}