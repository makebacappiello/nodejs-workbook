const myName = process.argv[2];
if (myName) {
  console.log(`Greetings, ${myName}!`);
} else {
  console.log("Hello, world!");
}
