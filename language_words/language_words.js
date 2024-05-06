// Requirements

// Your start-up's BA has told marketing that your website has

// a large audience in Scandinavia and surrounding countries.

// Marketing thinks it would be great to welcome

// visitors to the site in their own language.

// Luckily you already use an API that detects the user's location, so this is an easy win.

//-- - - - -- - -

// DATABASE

const DATABASE = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  welsh: "Croeso",
  swedish: "Valkommen",
};

let dafault = Object.keys(DATABASE)[0];

// Examples

// First Solution

// let greet = (lang) => {
//   if (
//     lang == "IP_ADDRESS_INVALID" ||
//     lang == "IP_ADDRESS_NOT_FOUND" ||
//     lang == "IP_ADDRESS_REQUIRED"
//   ) {
//     return DATABASE[dafault];
//   } else return DATABASE[lang];
// };

// Secound Solution

let greet = (lang) => {
  return DATABASE[lang] || DATABASE[dafault];
};

// Test

console.log(greet("IP_ADDRESS_REQUIRED"));
