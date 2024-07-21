// ================================================== Question 2 =======================================================

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be
// simple, such as, “Hello Eric, would you like to learn some Python today?”

// const person1 = "Jamshed";

// console.log(`Hello ${person1}, how are you doing`);

// ================================================== Question 3 =======================================================

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase.

// const person2 = "Junaid";

// console.log(person2.toUpperCase());
// console.log(person2.toLocaleLowerCase());
// console.log(person2.charAt(0).toUpperCase() + person2.slice(1).toLowerCase());

// ================================================== Question 4 =======================================================

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks: Albert Einstein once said,
// “A person who never made a mistake never tried anything new.”

// console.log(`Dr.Allama Iqbal poetry lines, "As you have earned a good name by selling graves
// Will you not sell if idols of stone you get?"`);

// ================================================== Question 5 =======================================================

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

// const famous_poet = "Dr.Allama Iqbal";
// console.log(`${famous_poet} poetry lines,
// "mohabbat ka junuu.N baaqii nahii.n hai
// musalamaano.n me.n Khuun baaqii nahii.n hai

// safe.n kaj, dil pareshan, sajdaa bezuuk
// ke jazabaa-e-a.ndruun baaqii nahii.n hai

// rago.n me.n lahuu baaqii nahii.n hai
// wo dil, wo aawaaz baaqii nahii.n hai

// namaaz-o-rozaa-o-qurbaanii-o-haj
// ye sab baaqii hai tuu baaqii nahii.n hai"`);

// ================================================== Question 6 =======================================================

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, " " and " ", at least once. Print the name once, so the whitespace
// around the name is displayed. Then print the name after striping the white spaces.

// const myName = "\t\n Arslan \t\n";

// console.log(myName);
// console.log(myName.trim());

// ================================================== Question 7 =======================================================

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.

// const addition = 4 + 4;
// const subtraction = 16 - 8;
// const multiplication = 4 * 2;
// const division = 64 / 8;

// console.log(addition);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);

// ================================================== Question 8 =======================================================

// You should create four lines that look like this: console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

// console.log(5 + 3); // Addition

// console.log(10 - 2); // Subtraction

// console.log(4 * 2); // Multiplication

// console.log(16 / 2); // Division

// ================================================== Question 9 =======================================================

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that
// reveals your favorite number. Print that message.

// const number = 0;

// console.log(`My favorite Number is ${number}`);

// ================================================== Question 10 =======================================================

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. Then write one sentence describing
// what the program does.

// // ----------------------------------------------I wrote it on 09/07/24-------------------------------------------
// const addition1 = 4 + 4;
// const subtraction1 = 16 - 8;
// const multiplication1 = 4 * 2;
// const division1 = 64 / 8;

// console.log(addition1);
// console.log(subtraction1);
// console.log(multiplication1);
// console.log(division1);

// ================================================== Question 11 =======================================================

// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each
// element in the list, one at a time.

// const friendsNames = ["Daniyal", "Jamshed", "Aakash"];

// // -----------------first way-----------------
// for (let i = 0; friendsNames.length; i++) {
//   console.log(friendsNames[i]);
// }

// // -----------------second way-----------------

// for (let names of friendsNames) {
//   console.log(names);
// }

// ================================================== Question 12 =======================================================

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.

// const friendsNames = ["Daniyal", "Jamshed", "Aakash"]

// for (let names of friendsNames) {
//   console.log(`Hello ${names}, how is your day going.`);
// }

// ================================================== Question 13 =======================================================

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
// that stores several examples. Use your list to print a series of statements about these items, such as
// “I would like to own a Honda motorcycle.”

// const vehicles = ["Honda Bike", "Civic", "Tesla","Ford Mustang"]

// for (const vehicle of vehicles) {
//     console.log(`I would like to have my own ${vehicle}`);
// }

// ================================================== Question 14 =======================================================

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person,
// inviting them to dinner.

// const guests:string[] = ["Daniyal", "Jamshed", "Aakash"]

// guests.forEach(guest => {
//     console.log(`${guest} I would like to invite you to dinner at my place this Saturday at 7 pm.`);

// })

// ================================================== Question 15 =======================================================

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set
// of invitations. You’ll have to think of someone else to invite, full-question

// const guests:string[] = ["Daniyal", "Jamshed", "Aakash"]

// // Unable to Attend
// let cantAttend = "Aakash"
// // Replace The Guest
// let newguest = "Asadullah"

// guests[guests.indexOf(cantAttend)] = newguest

// guests.forEach(guest => {
//         console.log(`${guest} I would like to invite you to dinner at my place this Saturday at 7 pm.`);

//     })

// ================================================== Question 16 =======================================================

// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner, full-question

// const guests:string[] = ["Daniyal", "Jamshed", "Aakash"]

// // -----------------------adding more guest----------------
// guests.push (...["Sanaullah", "Junaid", "Atta-u-llah"])

// for (const guest of guests) {
//     console.log(`Dear ${guest}, I would like to invite you at dinner today`);
// }

// ================================================== Question 17 =======================================================

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests, full-question

// const guests:string[] = ["Daniyal", "Jamshed", "Aakash"]

// // -----------------------adding more guest----------------
// guests.push (...["Sanaullah", "Junaid", "Atta-u-llah"])

// while (guests.length > 2) {
//     let removedGuest = guests.pop()
//     console.log(`${removedGuest} Sorry i can't in you.`)
// }

// guests.length = 2

// for (const guest of guests) {
//         console.log(`Dear ${guest}, I would like to invite you at dinner today`);
//     }

// ================================================== Question 18 =======================================================

// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order, full-question

// let places: string[] = ["Makkah", "Madina", "Switzerland", "Palestine"];

// console.log("Original order:", places);

// console.log("Alphabetical order:", [...places].sort());

// console.log("Original order:", places);

// console.log("Reverse alphabetical order:", [...places].sort().reverse());

// console.log("Original order:", places);

// places.reverse();
// console.log("Reversed order:", places);

// places.reverse();
// console.log("Original order:", places);

// ================================================== Question 19 =======================================================

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

// const guests:string[] = ["Daniyal", "Jamshed", "Aakash"]

// // -----------------------adding more guest----------------
// guests.push (...["Sanaullah", "Junaid", "Atta-u-llah"])

// console.log(`I am inviting ${guests.length} friends at my dinner party.`);

// ================================================== Question 20 =======================================================

// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
//  cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// const languages = ["Urdu","Arbic","Farsi","English","Punjabi"]

// console.log("I want to learn",languages);

// ================================================== Question 21 =======================================================

// Think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

// const myMobile = {
//     name: "Samsung A5",
//     yearModel: 2017,
//     ram: "3GB",
//     storage: "32GB",
// }

// console.log(`My Mobile specifications:- Name:${myMobile.name} YearModel:${myMobile.yearModel} Ram:${myMobile.ram} Storage:${myMobile.storage}`)

// ================================================== Question 22 =======================================================

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// const languages = ["Urdu","Arbic","Farsi","English","Punjabi"]

// // --------------Making index error by wrong index number---------------
// console.log(languages[5]);

// // -----------------accessing array index and changing it----------------------
//  languages[3] = "Sindhi"

//  console.log(languages[3]);

// ================================================== Question 23 =======================================================

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction
// for the results of each test. Your code should look something like this, full-question

// let car:string = "TOYOTA"

// console.log(`this condition is true because predicted value is  ${car === "TOYOTA"}`);
// console.log(`this condition is false because JavaScript is case-sensitive ${car == "Toyota"}`)
// console.log(`this condition is false because predicted value is ${car == "Ford"}`)
// console.log(`this condition is true because ! is used to not equal ${car !== "Tesla"}`)
// console.log(`this condition is false because ! is used to not equal ${car !== "TOYOTA"}`)
// console.log(`this condition is false because car is "TOYOTA " (with a trailing space)${car === "TOYOTA "} `);
// console.log(`this condition is true because predicted value is start with (TO)  ${car.startsWith("TO")}`);

// // Create at least 10 tests. Have at least 5 tests evaluate to
// // True and another 5 tests evaluate to False.

// ================================================== Question 24 =======================================================

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following, full-question

// // Equality with strings
// console.log("Testing equality with strings:");
// console.log("apple" == "apple"); // True
// // console.log("apple" == "Apple"); // False

// // Using the lower case function
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase() == "apple"); // True

// // Numerical tests
// console.log("Numerical tests:");
// console.log(10 > 5); // True
// console.log(2 < 1); // False

// // Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True

// // Test whether an item is in a array
// let fruits = ["apple", "banana", "cherry"];
// console.log("Is 'apple' in fruits?");
// console.log(fruits.includes("apple")); // True

// // Test whether an item is not in a array
// console.log("Is 'mango' not in fruits?");
// console.log(!fruits.includes("mango")); // True

// ================================================== Question 25 =======================================================

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a
// value of 'green', 'yellow', or 'red'.

//  Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just
// earned 5 points.Write one version of this program that passes the if test and another that fails. (The version that
// fails will have no output.)

// const alienColor = "green";

// if (alienColor === "green") {
//   console.log("you have earned 5 points");
// }

// const alienColor = "green"

// if (alienColor == "blue") {
//     console.log("you have earned 5 points");
// }

// ================================================== Question 26 =======================================================

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// 1 If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// 2 If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// 3 Write one version of this program that runs the if block and another that runs the else block.

// const alien_color = "green"

// if (alien_color === "green") {
//     console.log("player just earned 5 points for shooting the alien.")
// }
// else {
//     console.log("the player just earned 10 points");
// }

// ================================================== Question 27 =======================================================

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// If the alien is green, print a message that the player earned 5 points.

// If the alien is yellow, print a message that the player earned 10 points.

// If the alien is red, print a message that the player earned 15 points.

// Write three versions of this program, making sure each message is printed for the appropriate color alien.

// const alien: string = "green";
// if (alien === "green") {
//   console.log("The player earned 5 points.");
// } else if (alien === "yellow") {
//   console.log("The player earned 10 points.");
// } else if (alien === "red") {
//   console.log("The player earned 15 points.");
// }

// const alien1: string = "yellow";
// if (alien1 === "green") {
//   console.log("The player earned 5 points.");
// } else if (alien1 === "yellow") {
//   console.log("The player earned 10 points.");
// } else if (alien1 === "red") {
//   console.log("The player earned 15 points.");
// }

// const alien2: string = "red";
// if (alien2 === "green") {
//   console.log("The player earned 5 points.");
// } else if (alien2 === "yellow") {
//   console.log("The player earned 10 points.");
// } else if (alien2 === "red") {
//   console.log("The player earned 15 points.");
// }

// ================================================== Question 28 =======================================================

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// If the person is age 65 or older, print a message that the person is an elder

// const person: number = 23;

// if (person < 2) {
//   console.log("The person is a baby.");
// } else if (person == 2 || person <= 4) {
//   console.log("The person is a toddler.");
// } else if (person == 4 || person <= 13) {
//   console.log("The person is a kid.");
// } else if (person == 13 || person <= 20) {
//   console.log("The person is a teenager.");
// } else if (person == 20 || person <= 65) {
//   console.log("The person is an adult.");
// } else if (person >= 65) {
//   console.log("The person is an elder.");
// }

// ================================================== Question 29 =======================================================

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check
// for certain fruits in your array.

// 1 Make a array of your three favorite fruits and call it favorite_fruits.
// 2 Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your
//   array, the if block should print a statement, such as You really like bananas!

// const favoriteFruits: string[] = ["Mango", "Orange", "Strawberry"];

// if (favoriteFruits.includes("Mango")) {
//   console.log("I love to eat Mango");
// }
// if (favoriteFruits.includes("Orange")) {
//   console.log("I love to eat Orange");
// }
// if (favoriteFruits.includes("Strawberry")) {
//   console.log("I love to eat Strawberry");
// }

// ================================================== Question 30 =======================================================

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will
// print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// 1 If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// 2 Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// const userName = ["Admin", "Arslan", "Adnan", "Zeeshan", "Awais"];

// for (let user of userName) {
//   if (user === "Admin") {
//     console.log(`Hello admin, would you like to see a status report?`);
//   } else {
//     console.log(`Hello ${user} thank you for logging in again.`);
//   }
// }

// ================================================== Question 31 =======================================================

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.

// const userName1 = ["Admin", "Arslan", "Adnan", "Zeeshan", "Awais"];

// while (userName1.length > 0) {
//   userName1.pop();
// }

// if (userName1.length == 0) {
//   console.log(`We need to find some users!`);
// }

// ================================================== Question 32 =======================================================

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// 1 Make a list of five or more usernames called current_users.
// 2 Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// 3 Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will
// need to enter a new username. If a username has not been used, print a message saying that the username is available.

// const currentUsers: string[] = ["Arslan", "Adnan", "Zeeshan", "Awais"];

// const newUsers: string[] = ["Daniyal", "Aakash", "Asadullah", "Adnan", "Awais"];

// newUsers.forEach((new_user) => {
//   if (
//     currentUsers.some(
//       (currentUsers) => currentUsers.toLowerCase() === new_user.toLowerCase()
//     )
//   ) {
//     console.log(`${new_user} need to enter a new username`);
//   } else {
//     console.log(`${new_user} is available`);
//   }
// });

// // Example 2: Using some() with strings
// const fruit1: string[] = ["apple", "banana", "orange", "kiwi"];

// let fruit2: string[] = ["kiwi", "mango"];

// fruit2.forEach((val1) => {
//   if (fruit1.some((val2) => val1 === val2)) {
//     console.log(`${val1} is available`);
//   } else {
//     console.log(`${val1} is not available`);
//   }
// });

// ================================================== Question 33 =======================================================

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// 1 Store the numbers 1 through 9 in a array.
// 2 Loop through the array.
// 3 Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read
// "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// const numbers = [1,2,3,4,5,6,7,8,9]

// numbers.forEach((number)=>{
//   let suffix = 'th'
//   if(number === 1)
//     {suffix = "st"
//   }else if (number === 2){
//     suffix = "nd"
//   }else if (number === 3){
//     suffix = "rd"
// }console.log(`${number}${suffix}`);
// })

// // Define the array of numbers from 1 to 9
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Loop through the array
// for (let num of numbers) {
//   let ordinal = "";
//   // Determine the ordinal suffix based on the last digit
//   if (num === 1) {
//     ordinal = "st";
//   } else if (num === 2) {
//     ordinal = "nd";
//   } else if (num === 3) {
//     ordinal = "rd";
//   }else{ordinal = 'th'}
//   console.log(num+ordinal);
// }

// ================================================== Question 34 =======================================================

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop
// to print the name of each pizza.

// 1 Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// 2 Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should
// consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// const pizzas = ["Indian Pizza", "Turkey Pizza", "California Pizza"];

// for (let dish of pizzas) {
//   console.log(`I like ${dish}`);
// }
// console.log(`I really love pizza!`);

// ================================================== Question 35 =======================================================

// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
// and then use a for loop to print out the name of each animal.

// 1 Modify your program to print a statement about each animal, such as A dog would make a great pet.
// 2 Add a line at the end of your program stating what these animals have in common. You could print a
//   sentence such as Any of these animals would make a great pet!

// const animals = ["Chimpanzee", "Elephant", "Dolphin"];

// for (let animal of animals) {
//   if (animal === "Dolphin") {
//     console.log(
//       `Dolphins: Dolphins are highly intelligent marine mammals known for their playful behavior, social nature, and echolocation abilities.`
//     );
//   } else if (animal === "Elephant") {
//     console.log(
//       `Elephants: Elephants are large mammals known for their long trunks, tusks, and highly developed social structures. They are also known for their intelligence, memory, and complex communication.`
//     );
//   } else if (animal === "Chimpanzee") {
//     console.log(
//       `Chimpanzees: Chimpanzees are primates closely related to humans, known for their advanced cognitive abilities, tool use, and social behaviors such as cooperation and communication.`
//     );
//   }
// }
// console.log("These animals are not pet!");

// ================================================== Question 36 =======================================================

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function make_shirt(size:number,message:string) {
//   console.log(`T-Shirt ${size} message ${message}`);
// }
// make_shirt(32, `don't stop until you are proud`)

// ================================================== Question 37 =======================================================

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// function make_shirt(size:string = "Large" ,message:string = "I love TypeScript.") {
//   console.log(`(T-Shirt) ${size} (Message) ${message}`);
// }
// make_shirt()
// make_shirt("medium")
// make_shirt('small', "Happy")

// ================================================== Question 38 =======================================================

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print
// a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function
// for three different cities, at least one of which is not in the default country.

// function describe_city(city:string,country:string = "Pakistan") {
//   console.log(`${city} is in ${country}`)
// }

// describe_city("Dadu")
// describe_city("Sindh")
// describe_city("Delhi","India")

// ================================================== Question 39 =======================================================

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should
// return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

// function city_country(city: string, country: string): string {
//   return `${city}, ${country}`;
// }

// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Delhi", "India"));
// console.log(city_country("Dhaka", "Bangladesh"));

// ================================================== Question 40 =======================================================

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an
// artist name and an album title, and it should return a Object containing these two pieces of information. Use the function
// to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album
// information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

// interface MyObject {
//   artist: string;
//   album: string;
//   // Optional key based on a condition
//   track?: number;
// }

// function make_album(artist: string, album: string, track?: number): MyObject {
//   let obj: MyObject = {
//     artist,
//     album,
//   };

//   if (track !== undefined) {
//     obj.track = track;
//   }

//   return obj;
// }

// // Example usage:
// let obj1 = make_album("Nusrat Fateh Ali Khan", "Dil");
// let obj2 = make_album("Nusrat Fateh", "Dust to Gold", 12);
// console.log(obj1);
// console.log(obj2);

// ================================================== Question 41 =======================================================

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

// const magicians = ['David Blaine', 'Tommy Cooper', 'Dynamo']

// function show_magicians (){
//   for (let magician of magicians){
//     console.log(magician);
//   }
// }
// show_magicians()

// ================================================== Question 42 =======================================================

// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies
// the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list
//  has actually been modified.

// const magicians = ["David Blaine", "Tommy Cooper", "Dynamo"];

// function show_magicians() {
//   for (let magician of magicians) {
//     console.log(magician);
//   }
// }
// // --------Modifying Array------------
// function make_great() {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + ` The Great`;
//   }
// }
// make_great();
// show_magicians();
// console.log(magicians);

// for (let name of magicians) {
//   console.log(name);
// }

// ================================================== Question 43 =======================================================

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each
// array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// const magicians:string[] = ["David Blaine", "Tommy Cooper", "Dynamo"];

// function copy_arr (arr:string[]) {
//   return [...arr]
// }

// let copy = copy_arr(magicians)

// function make_great(arr:string[]) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i] + ` The Great`;
//     }
//   }
//   make_great(copy)

//   function show_magicians(arr:string[]){
//     return arr
//   }

//   console.log("Original:- "+ show_magicians(magicians));
//   console.log("Modified:- "+ show_magicians(copy));

// ================================================== Practice =======================================================

// const names = ["Arslan", "Daniyal", "Aakash"];

// function arr_copy(arr: string[]) {
//   return [...arr];
// }
// let copy_arr = arr_copy(names);

// function add(arr: string[]) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + " Ali";
//   }
// }
// add(copy_arr);

// function show_names (arr:string[]) {
//   return arr
// }

// console.log("Original:- " + show_names(names));
// console.log("Modified:- " + show_names(copy_arr));

// ================================================== Question 44 =======================================================

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter
// that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.

// function sandwich (...items:string[]) {
//   console.log(`Making a sandwich with ${items}`);
// }

// sandwich( 'Bread', 'ham', 'tomatoes')
// sandwich('turkey', 'cheese')
// sandwich('lettuce', 'tomatoes','cheese')

// ================================================== Question 45 =======================================================

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and
// a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information
// and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the
// information was stored correctly.

// function car(manufacturer: string, model: string, ...arg: any[]) {
//   let car_obj = {
//     manufacturer: manufacturer,
//     model: model,
//   };
// }

// ================================================== Question 46 =======================================================

// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs
// a sentence about the laptop.

// let laptop = {
//   make: "hp",
//   model: "Elitebook",
//   year: 2022,
//   describe() {
//     // console.log(`This laptop is ${this.make} ${this.model} from ${this.year}`);
//     return `This laptop is ${this.make} ${this.model} from ${this.year}`;
//   }
// }
// console.log(laptop.describe());

// ================================================== Question 47 =======================================================

// Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`,
// use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// let laptop = [
//   {make: "hp", model: "Elitebook", year: 2022},
//   {make: "acer", model: "Aspire", year: 2021},
// ]

// let [first, second] = laptop
// console.log(first, second)

// ================================================== Question 48 =======================================================

// Combining Arrays with Spread Operator: Suppose you are comparing prices of two different sets of laptops. Use the spread
// operator to combine these arrays into a single array sorted in ascending order, then log the result.

// let prices1 = [1000, 4000, 2000, 3000, 9000];
// let prices2 = [6000, 7000, 8000, 5000, 10000];

// let prices = [...prices1, ...prices2].sort((a, b) => a - b);
// console.log(prices);

// ================================================== Question 49 =======================================================

// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.

// // ---------------with for loop--------------
// function hobby(...hobbies: string[]) {
//   for (let i = 0; i < hobbies.length; i++) {
//     console.log(`I enjoy ${hobbies[i]}`);
//   }
//   return hobbies;
// }
// hobby("reading", "learning");

// // ----------------with of loop-------------------
// function hobbies(...hobbies: string[]) {
//   // Loops through each hobby in the array
//   for (let hobby of hobbies){
//     console.log(`I enjoy ${hobby}.`);
//   }}
// // Calls the function with three hobbies
// hobbies("reading", "coding", "cycling");

// ================================================== Question 50 =======================================================

// : Use template literals to create a multiline string that describes your ideal day. Include
//   at least three different activities.

// // Using// Multiline template literal describing an ideal day
// let idealDay = `
// My Ideal Day:

// Morning:
// - Start with a refreshing jog in the park.
// - Enjoy a healthy breakfast with fresh fruits and yogurt.

// Afternoon:
// - Spend a few hours reading a captivating novel.
// - Have a delicious lunch outdoors with friends.

// Evening:
// - Practice meditation to unwind and relax.
// - Cook a homemade dinner while listening to soothing music.
// `;

// console.log(idealDay);

// ================================================== Question 51 =======================================================

// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
// and refactor it into an arrow function.

// function calculatesRectangleArea (hight:number,width:number){
//   return hight * width
// }
// // Arrow function to calculate the area of a rectangle
// const calculateRectangleArea = (width: number, height: number): number => width * height;

// // Example usage:
// let width = 5;
// let height = 10;
// let area = calculateRectangleArea(width, height);

// console.log(calculateRectangleArea(width, height),`The area of the rectangle with width ${width} and height ${height} is ${area}`);

// ================================================== Question 52 =======================================================

// Make a Smartphone Object: Create a simple way to keep track of a smartphones details. Include its brand, model,
// and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

// const smartphones = {
//   brand:'Samsung',
//   model:'A5 2017',
//   detail: {
//     storage: "32GB",
//     screenSize: "5.0 inches",
//     batteryLife: "6 hours",
//   }}

// console.log(smartphones);

// ================================================== Question 53 =======================================================

// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
// like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// let person = {
//   name: ["Adnan", "Arslan", "Zeeshan"],
//   age: [23, 25, 27],
//   maritalStatus: ["Single", "Married"],
// };

// let { name, age, maritalStatus } = person;
// console.log(person);

// let me = [
//   "Name: " + name[1],
//   "Age: " + age[0],
//   "marital Status: " + maritalStatus[0],
// ];

// console.log(me);

// ================================================== Question 54 =======================================================

// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you
// need at that moment, like adjusting labels based on user choices.

// function dynamicObjectKeys(key:string,value:string) {
//   let dynamicObject:any = {}
//   dynamicObject[key] = value
//   return dynamicObject
// }

// let Choose = dynamicObjectKeys("color","white")
// console.log(Choose);

// ================================================== Question 55 =======================================================

// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a
// new list where each number is twice its original value

// const numbers:number[] = [1,2,3,4,5,6,7,8,9]

// let double = numbers.map((num) => num*2)
// console.log(double);

// ================================================== Question 56 =======================================================

// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// const mixItem = [1,'a',true,'apple',3]

// let string = mixItem.filter((val) =>typeof val === "string")
// console.log(string);

// ================================================== Question 57 =======================================================

// Find the Average Grade: Given a list of grades, calculate the average grade.
// // A list of grades
// let grades = [88, 94, 72, 99, 53, 77];

// // Calculates the average grade
// let averageGrade =
//   grades.reduce((total, grade) => total + grade, 0) / grades.length;

// console.log(grades.length);

// // Shows the average grade
// console.log(averageGrade);

// // First, we add up all the grades. Then, we divide by how
// // many grades there are to get the average.

// ================================================== Question 58 =======================================================

// Write a simple program that can take lots of scores and find their average.

// function scores(...score: number[]) {

//       let average = score.reduce((sum, score) => sum + score, 0)/score.length;
//     return average
//   }

//   console.log('Average: '+ scores(40, 67, 34, 67, 85, 36) );

//   // ---------------by loop-----------------
//   for (let score of scores) {
//   }
//   return scores;
// }

// // Calls the function with three hobbies
// let score = scores(40, 67, 34, 67, 85, 36);
// let average = score.reduce((total, grade) => total + grade, 0) / score.length;
// console.log(average);

// ================================================== Question 59 =======================================================

// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any
// other number you give them later.

// // This program makes a function that adds a specific number
// function makeAdder(valueToAdd: number): (number: number) => number {
//   // It takes a number and adds your special number to it
//   return function (number: number): number {
//     return number + valueToAdd;
//   };
// }

// // Making a magic box that adds 5
// let addFive = makeAdder(5);

// console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// // We made a function (magic box) that adds 5 to any number.

// function adder(toAdd: number): (number: number) => number {
//   return function (number: number): number {
//     return number + toAdd;
//   };
// }

// let add = adder(7);
// console.log(add(10));

// ================================================== Question 60 =======================================================

// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the users name and age.
// let user = (function () {
//   let name = "Arslan";
//   let age = 23;

//   return {
//     display: function () {
//       console.log(`Name: ${name} Age: ${age}`);
//     },
//   };
// })();
// user.display()

// const profile = {
//   name: 'Arslan',
//   age: 23,
//   user: function (){
//     console.log(`Name: ${this.name} Age: ${this.age}`);

//   }
// }
// profile.user()

// ================================================== Question 61 =======================================================

// Making Enums for Vehicles: Lets create categories for vehicles like cars, trucks,
// and motorcycles using enums, and show one example.

// enum vehicle {
//   car,
//   truck,
//   motorcycle,
//   bus,
//   van,
//   dom,
// }
// let vehicles: vehicle = vehicle.car;
// console.log(vehicles);

// ================================================== Question 62 =======================================================

// Making a Student Template: Create a blueprint for student information, including their name, age,
// and the classes they are taking, and then fill in this blueprint with an example student.

// interface Student {
//   name:string;
//   age:number;
//   class:number|string
//   course:string[]
// }

// let student:Student = {
//   name: 'Arslan',
//   age: 23,
//   class:8,
//   course:['Science','Math','English']
// }

// console.log(student);

// ================================================== Question 63 =======================================================

// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
// including properties unique to each shape.

// type shape = {
//   kind: "circle" | "rectangle";
//   radius?: number; // Only for circles
//   width?: number; // Only for rectangles
//   height?: number; // Only for rectangles
// };

// let rectangle: shape = {
//   kind: "rectangle",
//   width: 5,
//   height: 2,
// };

// let circle: shape = {
//   kind: "circle",
//   radius: 9,
// };

// console.log(rectangle);
// console.log(circle);

// ================================================== Question 64 =======================================================

// Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example,
// if provided with Age: and 30, it should give back Age: 30.
// function mirage (text:string,number:number){
//   return text + number
// }
// console.log(mirage('Age: ',30));

// ================================================== Question 65 =======================================================

// Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing
// them using the `%` sign. For example, `remainder(5, 2)` should give `1`.

// function remainder (num1:number,num2:number){
//   return num1 % num2
// }
// console.log(remainder(17,2));

// ================================================== Question 66 =======================================================

// Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say `true`
// if both are true, using the `&&` operator. For instance, `checkBothTrue(true, false)` should be `false`.

// function boolean(num1: boolean, num2: boolean): boolean {
//   return num1 && num2;
// }
// console.log(boolean(true, false));
// console.log(boolean(6 > 4, 8 < 24));
// console.log(boolean(4 > 0, 8 < 4));

// ================================================== Question 67 =======================================================

// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string
// that represents a number (e.g., `5`). Return their sum as a number.

// function mixType (text:string,number:number){
//   return number + Number(text) // type string convert to number => {Number(text)}
// }
// console.log(mixType('8',8));

// ================================================== Question 68 =======================================================

// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
// Round the result to two decimal places.

// function decimal(num1: number, num2: number) {
//   return (num1 * num2).toFixed(3);
// }
// console.log(decimal(34.46, 639.333));

// ---------------second way--------------------
// let result = (decimal(44.55,33.5)).toFixed(2)
// console.log(result);

// ================================================== Question 69 =======================================================

// This function divides two numbers and finds the quotient and remainder
// function divideAndReminder (dividend:number,divisor:number):{quotient:number,reminder:number}{
//   let quotient = Math.floor(dividend / divisor)
//   let reminder = dividend % divisor
// return {quotient , reminder}
// }
// console.log(divideAndReminder(100,33));

// ================================================== Question 70 =======================================================

// Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
// Explain how the let keyword affects the visibility of the loop variable.

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// ================================================== Question 71 =======================================================
// Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` does not.
// Try to reassign a `const`-declared variable and catch the error.

// let num = 100;
// const lightSpeed_Min_Sec = 299792458;

// num = 5;
// lightSpeed_Min_Sec = 354323656;

// ================================================== Question 72 =======================================================

// Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with {}
// that uses both `let` and `const`. Show how variables declared inside the block are not accessible outside of it.

// {
//   let myName = "Arslan";
//   console.log(myName);

//   const cast = "Channa";
//   console.log(cast);
// }

// console.log(myName);//Cannot find name 'myName' because it's a block scope statement
// console.log(cast);//Cannot find name 'cast' because it's also a block scope statement

// ================================================== Question 73 =======================================================

// Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value.
// Then, update its value within the same function and log both the initial and updated values.

// // This function shows how to assign and update variable values
// function updateVariable() {
//   let number = 10; // Initially assigns the value 10
//   console.log("Initial value:", number); // Logs the initial value
//   number = 20; // Updates the value to 20
//   console.log("Updated value:", number); // Logs the updated value
// }
// updateVariable();
// // We assign a value to a variable and then update it,
// // showing how values can change.

// ================================================== Question 74 =======================================================

// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables `a = 5` and `b = 10`,
// then swap their values so that `a` becomes `10` and `b` becomes `5`.

// let a = 5;
// let b = 10;
// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);

// ================================================== Question 75 =======================================================

// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with `x = 4`
// and perform a series of operations (addition, subtraction, multiplication, division) on `x` using compound operators.

// // This function uses compound assignment operators for operations
// function useCompoundOperators() {
//   let x = 4; // Starts with x equal to 4
//   console.log("Initial x:", x);

//   x += 2; // Adds 2 to x
//   console.log("After addition:", x); // Shows x after addition

//   x -= 1; // Subtracts 1 from x
//   console.log("After subtraction:", x); // Shows x after subtraction

//   x *= 3; // Multiplies x by 3
//   console.log("After multiplication:", x); // Shows x after multiplication

//   x /= 2; // Divides x by 2
//   console.log("After division:", x); // Shows x after division
// }

// useCompoundOperators();
// // We simplify arithmetic operations on x using
// // compound assignment operators.

// ================================================== Question 76 =======================================================

// Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together,
// and returns the result. Show how you can call this function and log the result.

// function add (num1:number,num2:number):number{
//   return num1 + num2
// }
// console.log(add(6,6));

// ================================================== Question 77 =======================================================

// Default Parameters: Write a function that greets a user. It should take the users name as a parameter and say hello.
// If no name is given, it should greet an anonymous user.

// function defaultParameter(name: string = "user") {
//   return console.log(`Hello ${name}`);
// }
// defaultParameter('Arslan');

// ================================================== Question 78 =======================================================

// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating
// one of each that performs the same task, such as squaring a number.

// // Function declaration for squaring a number
// function squareDeclaration(number: number): number {
//   return number * number;
// }

// // Function expression for squaring a number
// const squareExpression = function (number: number): number {
//   return number * number;
// };

// // Using both functions to square the number 4
// console.log(squareDeclaration(4)); // Outputs: 16
// console.log(squareExpression(4)); // Outputs: 16
// // Both methods give us the same result, showing two
// // different ways to create functions that do the same thing.

// ================================================== Question 79 =======================================================

// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year.
// Then, show how you can access the model property of the car.

// let car = {
//   make: "TOYOTA",
//   Model: "Corolla",
//   year: 2020,
//   detail: function () {
//     console.log(
//       `Company: ${this.make} Model: ${this.Model} Year: ${this.year}`
//     );
//   },
// };
// console.log(car.make);
// console.log(car.Model);
// console.log(car["year"]);
// car.detail();

// ================================================== Question 80 =======================================================
// Updating Object Properties: Add a property named `color` to the existing car object,
// and then update the `year` property to `2021`. Show how to perform these operations.
// type car = {
//   make: string;
//   Model: string;
//   year: number;
//   [key:string]:any
// };
// let car1:car = {
//   make: "TOYOTA",
//   Model: "Corolla",
//   year: 2020,
//   detail: function () {
//     console.log(
//       `Company: ${this.make} Model: ${this.Model} Year: ${this.year}`
//     );
//   },
// };
// console.log(car1.make);
// console.log(car1.Model);
// console.log(car1["year"]);
// car1.detail();
// car1["color"]="blue"
// console.log(car1.color);

// ================================================== Question 81 =======================================================

// function logObjectProperties(obj: { [key: string]: any }): void {
//   for (let key in obj)
//       console.log(`${key}: ${obj[key]}`);
//     }

// // Example usage
// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2021,
// };

// logObjectProperties(car);
// // Output:
// // make: Toyota
// // model: Camry
// // year: 2021

// ================================================== Question 82 =======================================================

// Find the Length of a String: Write a function that takes a string as
// an argument and returns the number of characters in the string.

// function findLength (text:string) {
//   return console.log(text.length);
// }
// findLength('Arslan')

// ================================================== Question 83 =======================================================

// Converting to Upper and Lower Case: Create a function that takes a string, converts it to
// uppercase, then to lowercase, and logs both.

// function convertUpperAndLower(text: string) {
//   let lowerCase = text.toLowerCase();
//   let upperCase = text.toUpperCase();
//   console.log("LowerCase: ", lowerCase, "UpperCase: ", upperCase);
// }

// convertUpperAndLower("Arslan")

// ================================================== Question 84 =======================================================

// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word `JavaScript` with `TypeScript`.

// function replaceWord(word: string): string {
//   return word.replace(/JavaScript/g, "TypeScript");
// }
// console.log(replaceWord("I like JavaScript and Next.js"));

// ================================================== Question 85 =======================================================

// Finding the Position of a Substring: Write a function that locates the first occurrence of
// the word `code` within any given string and returns its position.

// function findIndex(word:string) {
//   return word.indexOf("code")
// }
// console.log(findIndex("I am learning code and find it difficult"));

// ================================================== Question 86 =======================================================

// Checking for Text Presence: Create a function that checks if the word `JavaScript` is present in a given string.
// It should return `true` if found, otherwise `false`.

// function findWord(word: string) {
//   return word.includes("TypeScript");
// }
// console.log(findWord("I am learning TypeScript for four month"));

// ================================================== Question 87 =======================================================

// function subtracts(word: string) {
//   return word.substring(0, 13);
// }
// console.log(subtracts("I am learning TypeScript for four month"));

// ================================================== Question 88 =======================================================

// Converting Strings to Numbers: Write a function that takes a string representation of a number
// (e.g., `123`) and converts it into an actual number type.

// function convert (text:string):number{
//   return Number(text)
// }
// console.log(convert('8')+1)

// ================================================== Question 89 =======================================================

// Rounding Numbers: Create a function that takes a number with decimals (e.g., `3.14159`) and rounds it to two decimal places.

// function roundDecimal (num:number){
//   return num.toFixed(2)
// }
// console.log(roundDecimal(44.23235));

// ================================================== Question 90 =======================================================

// Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.
// function randomNumber(){
//    return Math.floor(Math.random()*10)+1
// }
// console.log(randomNumber());

// ================================================== Question 91 =======================================================

// Create an array of your three favorite fruits and add a new fruit to the end of the array.

// let fruit = ["Apple","Banana","Orange"]
// fruit.push('Mango')
// console.log(fruit);

// ================================================== Question 92 =======================================================

// Write a function to remove the last element from an array and return the removed element.

// let fruit = ["Apple","Banana","Orange","Mango"]
// fruit.pop()
// console.log(fruit);

// ================================================== Question 93 =======================================================

// Find the index of `Banana` in an array of fruits and replace it with `Mango`.

// let fruit = ["Apple","Mango","Orange","Banana"]
// let index = fruit.indexOf('Banana')
//  if (index !== -1){
//   fruit[index]="kiwi"
//  }
// console.log(fruit);

// ================================================== Question 94 =======================================================

// Use the .map() method to create a new array that contains the length of each word from an array of words.

// let arr = ["Apple","Mango","Orange","Banana"]
// let fruits = arr.map((fruit)=>arr.length)
// console.log(fruits);
// // console.log(arr);

// ================================================== Question 95 =======================================================

// Write a function that uses the .filter() method to return an array of numbers greater than 10.

// function filter(numbers: number[]): number[] {
//   return numbers.filter((number) => number > 10);
// }
// console.log(filter([1, 4, 6, 8, 13, 45, 86, 36]));

// ================================================== Question 96 =======================================================

// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let calculate = numbers.reduce((pervious, current) => pervious + current);
// console.log(calculate);

// ================================================== Question 97 =======================================================

// function tarikh() {
//   const time = new Date();
//   const day = String(time.getDate()).padStart(2, "0");
//   const month = String(time.getMonth() + 1).padStart(2, "0");
//   const year = time.getFullYear();
//   return `${day}-${month}-${year}`;
// }

// ================================================== Question 98 =======================================================

// Create a JavaScript snippet that calculates and logs how many days are left until New Year.

// // Calculates how many days are left until New Year's Day
// function daysUntilNewYear(): number {
//   const today = new Date();

//   // January 1st of next year
//   const newYear = new Date(today.getFullYear() + 1, 0, 1);

//   // Difference in milliseconds
//   const diff = newYear.getTime() - today.getTime();

//   // Converts to days
//   const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//   return days;
// }

// console.log(daysUntilNewYear() + " days until New Year.");
// // Tells us how many days there are until the next New Year's Day.
// console.log(new Date().getFullYear() + 1, 0, 1);

// ----------------------------------ChatGpt-------------------------
// function daysUntilNewYear(): void {
//   // Get the current date
//   const currentDate = new Date();

//   // Create a date object for the next New Year's Day
//   const nextYear = currentDate.getFullYear() + 1;
//   const newYearDate = new Date(nextYear, 0, 1); // January 1 of the next year

//   // Calculate the difference in time between the two dates in milliseconds
//   const timeDifference = newYearDate.getTime() - currentDate.getTime();

//   // Convert the difference from milliseconds to days
//   const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//   console.log(`There are ${daysDifference} days left until New Year.`);
// }

// // Call the function
// daysUntilNewYear();
// -----------------------------practice--------------------------
// function newYear(): void {
//   // Get the current date
//   const today = new Date();

//   // Create a date object for the next New Year's Day
//   const nextYear = today.getFullYear() + 1;
//   const newYearDate = new Date(nextYear, 0, 1);
//   const diff = newYearDate.getTime() - today.getTime();
//   const timeDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
//   console.log(`There are ${timeDiff} days left until New Year.`);
// }
// newYear()

// ================================================== Question 99 =======================================================

// Generate a date object representing your next birthday and log it to the console.

// // Generates a Date object for the next occurrence of a specific birthday
// function getNextBirthday(month: number, day: number): Date {
//   const today = new Date();
//   let year = today.getFullYear();

//   // Months are 0-indexed
//   const birthday = new Date(year, month - 1, day);
//   if (birthday < today) {
//     // If the birthday this year has already passed, use next year's date
//     birthday.setFullYear(year + 1);
//   }
//   return birthday;
// }

// // Replace with your birth month and day
// const nextBirthday = getNextBirthday(12, 25);
// console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// // Shows the date of the next birthday.

// ================================================== Question 100 =======================================================

// Use the JavaScript Math object to find the square root of 144.

// const squareRoot = Math.sqrt(144)
// console.log(squareRoot);

// ================================================== Question 101 =======================================================

// Generate a random integer between 1 and 10.

// const number = Math.floor(Math.random() * 10) + 1;
// console.log(number);

// ================================================== Question 102 =======================================================

// Calculate and log the absolute difference between the number -5 and 5.

// let num = Math.abs(-5+5)
// console.log(num);

// ================================================== Question 103 =======================================================

// Write a function that returns a random boolean value, true or false.

// function booleanValue(): boolean {
//   return Math.random()*10 > 1.5;
// }
// console.log(booleanValue());

// ================================================== Question 104 =======================================================

// Create a function that generates a random hexadecimal color code.

// // This function generates a random hexadecimal color code
// function getRandomHexColor(): string {
//   const color =
//     "#" +
//     Math.floor(Math.random() * 0xffffff)
//       .toString(16)
//       .padStart(6, "0");
//   return color; // Returns the random color code
// }

// console.log(getRandomHexColor());
// // Outputs a random hex color code like #ff3e12

// // We generate a random number, convert it to hexadecimal,
// // and ensure it's 6 characters long.

// // ----------------------------practice-------------------------
// function hexadecimalColor() {
//   const color =
//     "#" +
//     Math.floor(Math.random() * (255 * 255 * 255))
//       .toString(16)
//       .padStart(6, "0");
//   return color;
// }
// console.log(hexadecimalColor());

// ================================================== Question 105 =======================================================

// // Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

// function dice() {
//   let num = Math.floor(Math.random() * 6) + 1;
//   return console.log(num);
// }
// dice();

// ================================================== Question 106 =======================================================

// Determine if a given year is a leap year using comparison operators.

// // This function checks if a year is a leap year
// function isLeapYear(year: number): boolean {
//   // Checks the conditions for a leap year
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// console.log(isLeapYear(2020)); // Outputs: true
// console.log(isLeapYear(1900)); // Outputs: false
// // By using comparison operators,
// we can easily determine if a year is a leap year or not.

// ================================================== Question 107 =======================================================

// Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

// function division(num: number) {
//   if (num % 2 === 0 && num % 3 === 0) {
//     return console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// division(12)
// // --------------------second way-----------------
// function divisor (num:number):boolean {
//   return num % 2 === 0 && num % 3 === 0
// }
// console.log(divisor(16));

// ================================================== Question 108 =======================================================
// Compare two strings to check if they are identical, ignoring case sensitivity.

// function compareStrings(str1: string, str2: string): boolean {
//   return str1.toLowerCase() === str2.toLowerCase();
// }
// console.log(compareStrings("Hello", "heLLo"));
// console.log(compareStrings("Hello", "HI"));

// ================================================== Question 109 =======================================================

// // Write an if statement that logs `Good Evening` if the current time is before 16 PM.
// let currentTime = new Date();
// if (currentTime.getHours() > 16) {
//   console.log("Good Evening");
// }

// // ================================================== Question 110 =======================================================

// function assignGrade(score: number): string {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// console.log(assignGrade(85)); // Outputs: B
// console.log(assignGrade(55)); // Outputs: F

// // ================================================== Question 111 =======================================================

// // This function categorizes a person's age group
// function categorizeAge(age: number): string {
//   if (age < 13) {
//     return "child";
//   } else if (age <= 19) {
//     return "teenager";
//   } else {
//     return "adult";
//   }
// }

// console.log(categorizeAge(12)); // Outputs: child
// console.log(categorizeAge(18)); // Outputs: teenager
// console.log(categorizeAge(25)); // Outputs: adult
// // Based on the age provided, we log the corresponding age group.

// // ================================================== Question 112 =======================================================

// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// // Creates a new Map to store countries and their capitals
// const countries = new Map<string, string>();
// countries.set("USA", "Washington, D.C."); // Adds USA to the Map
// countries.set("France", "Paris"); // Adds France to the Map
// countries.set("Japan", "Tokyo"); // Adds Japan to the Map
// countries.set("Pakistan","Islamabad")

// console.log(countries);
// // Logs the Map with the countries and their capitals.

// // ================================================== Question 113 =======================================================

// Write a function that checks if a Map contains a key for `Iran` and logs the capital if it exists.

// // Creates a new Map to store countries and their capitals
// const countries = new Map<string, string>();
// countries.set("Pakistan", "Islamabad");
// countries.set("India", "New Delhi");
// countries.set("Bangladesh", "Dhaka");
// countries.set("Iran", "Tehran");

// function hasCountry(countries: Map<string, string>) {
//   if (countries.has("Iran")) {
//     console.log(`The Capital city of Iran is ${countries.get("Iran")}`);
//   }
// }
// hasCountry(countries);

// // ================================================== Question 114 =======================================================

// // Creates a Map to store student IDs (keys) and names (values)
// const students = new Map<number, string>();
// students.set(1, "Alice");
// students.set(2, "Bob");
// students.set(3, "Charlie");

// // Iterates over the Map and logs each student ID and name
// students.forEach((name, id) => {
//   console.log(`Student ID: ${id}, Name: ${name}`);
// });

// // ================================================== Question 115 =======================================================

// Use a switch statement to log the days of the week based on a number (1-7).

// function days(dayNumber: number) {
//   switch (dayNumber) {
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log("Monday");
//       break;
//     case 3:
//       console.log("Tuesday");
//       break;
//     case 4:
//       console.log("Wednesday");
//       break;
//     case 5:
//       console.log("Thursday");
//       break;
//     case 6:
//       console.log("Friday");
//       break;
//     case 7:
//       console.log("Saturday");
//       break;
//     default:
//       break;
//   }
//   return dayNumber;
// }
// days(1);

// // ================================================== Question 116 =======================================================

// This function logs the season based on the month
// function logSeason(month: number): void {
//   switch (month) {
//     case 12:
//     case 1:
//     case 2:
//       console.log("Winter");
//       break;
//     case 3:
//     case 4:
//     case 5:
//       console.log("Spring");
//       break;
//     case 6:
//     case 7:
//     case 8:
//       console.log("Summer");
//       break;
//     case 9:
//     case 10:
//     case 11:
//       console.log("Fall");
//       break;
//     default:
//       console.log("Invalid month");
//       break;
//   }
// }

// logSeason(13); // Outputs: Spring
// Multiple cases share the same code block to represent each season.

// // ================================================== Question 117 =======================================================

// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// let now = new Date().getHours();
// let hour: number = now;

// switch (hour) {
//   case 0: // Midnight (12 AM)
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//     console.log("Good Morning");
//     break;
//   case 12: // Noon (12 PM)
//     console.log("Good Afternoon");
//     break;
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//     console.log("Good Afternoon");
//     break;
//   case 18:
//   case 19:
//   case 20:
//   case 21:
//   case 22:
//   case 23:
//     console.log("Good Evening");
//     break;
//   default:
//     console.log("Invalid Hour"); // Handle invalid hours
// }

// // ================================================== Question 118 =======================================================

// Write a loop that logs numbers from 1 to 10 to the console.

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// // ================================================== Question 119 =======================================================

// Create a while loop that logs `Hello, World!` 5 times.

// for (let i = 1; i <= 5; i++) {
//   console.log('Hello World');
// }

// // ================================================== Question 120 =======================================================

// Use a for...of loop to iterate through an array of your favorite movies and log each one.

// const favoriteMovies = [
//   "Western World",
//   "End Game",
//   "Tenet",
//   "Naruto",
//   "Death Note",
// ];

// for (let movie of favoriteMovies) {
//   console.log(movie);
// }

// // ================================================== Question 121 =======================================================

// Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

// for (let i = 1; i <= 10; i++){
//   if (i === 5){
//     continue
//   }console.log(i);
// }

// // ================================================== Question 122 =======================================================

// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

// // Initializes the counter at 10
// let counter: number = 10;
// // This while loop counts down from 10 to 1 and stops at 5
// while (counter > 0) {
//   if (counter === 5) {
//     break; // Exits the loop when counter reaches 5
//   }
//   console.log(counter);
//   counter--; // Decrements the counter
// }
// // Logs the countdown from 10 but stops abruptly when it hits 5.

// // ================================================== Question 123 =======================================================

// Create a loop that iterates through a string and stops when it finds the first vowel.

// This function iterates through a string and logs each character
// until it finds a vowel

// function logUntilVowel(str: string): void {
//   const vowels = "aeiouAEIOU";
//   for (const char of str) {
//     if (vowels.includes(char)) {
//       console.log(`First vowel found: ${char}`);
//       break; // Stops the loop at the first vowel found
//     }
//     console.log(char);
//     // Logs each character until a vowel is encountered
//   }
// }
// logUntilVowel("Daniyal");

// // ================================================== Question 124 =======================================================

// Create a function inside an object that returns the objects own name property using the this keyword.

// const obj = {
//   name: "Arslan",
//   age: 23,
//   getName: function () {
//     return this.name;
//   },
// };
// console.log(obj.getName());

// // ================================================== Question 125 =======================================================

// Modify a method in an object to use the this keyword to access another property in the same object.

// // An object with multiple properties and a method that
// // interacts with them using 'this'
// const rectangle = {
//   length: 4,
//   width: 5,
//   calculateArea: function () {
//     return this.length * this.width;
//     // 'this' accesses 'length' and 'width' properties of the object
//   },
// };

// console.log(rectangle.calculateArea()); // Outputs: 20
// // The 'calculateArea' method uses 'this' to compute
// // the area based on the object's own dimensions.

// // ================================================== Question 126 =======================================================

// Explain how the this keyword changes its value when used inside a nested function within a method.

// // Demonstrates 'this' behavior change in a nested function
// const myObject = {
//   property: "Value",
//   outerMethod: function () {
//     console.log(this.property);
//     // Works as expected, logs "Value"

//     const innerMethod = () => {
//       console.log(this.property);
//       // Still accesses myObject's 'property' due to
//       // arrow function capturing 'this' from outer scope
//     };

//     innerMethod();
//   },
// };

// myObject.outerMethod();
// // This example shows that using an arrow function for
// // the inner method preserves the 'this' context from the
// // outer method.

// // ================================================== Question 127 =======================================================

// Convert a traditional function expression to an arrow function.

// function traditional (num1:number,num2:number){
//   return num1 + num2
// }
// console.log(traditional(4,5));

// const arrowFunction = (a:number,b:number) => a * b
// console.log(arrowFunction(2,8));

// // ================================================== Question 128 =======================================================

// Create an arrow function that takes multiple parameters and returns the product of all parameters.

// // Arrow function that calculates the product of all its parameters
// const multiplyParameters = (...numbers: number[]) =>
//   numbers.reduce((previous, current) => previous * current, 1);

// console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
// // This function uses the rest parameter syntax to take
// // any number of arguments, then multiplies them together.

// // ================================================== Question 129 =======================================================

// Explain how this behaves differently in arrow functions compared to traditional functions.

// // Demonstrating 'this' in traditional vs. arrow functions
// const traditionalVsArrow = {
//   value: "traditionalVsArrow value",
//   traditionalFunction: function () {
//     console.log("Traditional function:", this.value);
//     // 'this' refers to traditionalVsArrow object
//   },
//   arrowFunction: () => {
//     console.log("Arrow function:", this.value);
//     // 'this' is not bound to traditionalVsArrow object
//     //  but to the scope in which traditionalVsArrow was defined
//   },
// };

// traditionalVsArrow.traditionalFunction();
// // Logs "traditionalVsArrow value"

// traditionalVsArrow.arrowFunction();
// // Likely undefined, depending on the outer scope's 'this.value'
// // This code snippet illustrates the difference in how
// // 'this' is determined in traditional functions versus arrow functions.

// // ================================================== Question 130 =======================================================

// Explain how to export a function from one JavaScript file and import it into another file.

// // In file: mathFunctions.ts
// export const add = (a: number, b: number): number => a + b;
// // This line exports an add function from mathFunctions.ts

// // In another file where you want to use the add function:
// import { add } from "./mathFunction";

// console.log(add(2, 3)); // Outputs: 5
// // Demonstrates importing the add function
// // from mathFunctions.ts and using it.

// // ================================================== Question 131 =======================================================

// Create two modules; one that exports a class, and another that imports the class and creates an instance.

// export class aboutMe {
//     name:string;
//     age:number;
//     hobby:string;
//     constructor(name:string,age:number,hobby:string){
//         this.name = name,
//         this.age = age
//         this.hobby = hobby
//     }
//     detail(){
//         return `Name: ${this.name} Age: ${this.age} Hobby: ${this.hobby}`
//        }
// }

// // ================================================== Question 132 =======================================================

// Discuss the difference between default and named exports in JavaScript modules.

// // Importing named exports:
// import { utilOne, utilTwo } from "./utils";

// // Importing a default export:
// import Calculator from "./Calculator";

// // This code illustrates the syntax and usage differences
// // between default and named exports.

// export default class Calculator {
//   // Class definition
// }

// // Named export example in file: utils.ts
// export const utilOne = () => {
//   /*...*/
// };
// export const utilTwo = () => {
//   /*...*/
// };

// // ================================================== Question 133 =======================================================

// Write a JavaScript object and convert it into a JSON string.

// // Defines a JavaScript object
// const person = {
//   name: "Alice",
//   age: 30,
//   city: "Wonderland",
// };

// // Converts the object into a JSON string
// const jsonString = JSON.stringify(person);

// console.log(jsonString);
// // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
// // Demonstrates converting an object to a JSON string,
// //  making it easy to store or transmit.

// // ================================================== Question 134 =======================================================

// Take a JSON string and parse it into a JavaScript object.

// // Defines a JSON string
// const jsonString = '{"name":"Alice","age":30,"city":"Wonderland"}';

// console.log(typeof jsonString);

// // Parses the JSON string back into a JavaScript object
// const person = JSON.parse(jsonString);

// console.log(typeof person); // Outputs the original object
// // This snippet shows how to take a JSON string and
// convert it back into a JavaScript object.

// // ================================================== Question 135 =======================================================

// Reusing the person object from Question 133
// const person = {
//   name: "Alice",
//   age: 30,
//   city: "Wonderland",
// };

// // Converts the object into a JSON string with indentation
// const jsonString = JSON.stringify(person, null, 2);
// // The '2' specifies the number of spaces to use as white space

// console.log(jsonString);
/* Outputs:
  {
    "name": "Alice",
    "age": 30,
    "city": "Wonderland"
  }
  */
// Shows how adding indentation to the JSON string
// makes it easier to read.

// // ================================================== Question 136 =======================================================

// // Demonstrates using console.log() inside a loop to track
// // variable values

// for (let i = 1; i <= 5; i++) {
//   console.log(`Iteration ${i}, i value: ${i}`);
//   // Logs the current iteration number and the value of i
// }

// // This loop iterates five times, logging the value of 'i'
// //  during each iteration to help with debugging.

// // ================================================== Question 137 =======================================================

// // Demonstrates using a try-catch block to handle errors

// try {
//     // Intentionally cause an error
//     throw new Error("Something went wrong");
//   } catch (error: any) {
//     console.log(error.message); // Logs the error message
//   }

//   // This code tries to execute a block that throws an error,
//   // and the catch block handles the error gracefully.

// // ================================================== Question 138 =======================================================
// // ================================================== Question 139 =======================================================
// // ================================================== Question 140 =======================================================
