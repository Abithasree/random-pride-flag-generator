const fs = require('fs');

// Read the existing JSON data from the file
const flagsData = fs.readFileSync('flags.json');
const flags = JSON.parse(flagsData);

// Add an index to each existing record
flags.forEach((flag, index) => {
  flag.index = index + 1;
});

// Write the updated JSON data back to the file
fs.writeFileSync('flags.json', JSON.stringify(flags, null, 2));

// Confirmation message
console.log("Indexes added successfully to existing records!");
