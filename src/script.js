// Skapa objektet contactBook
const contactBook = {
  owner: "Anna López",
  contacts: [
    {
      name: "Ahmed Ali",
      phone: "070-1234567",
      group: "arbete",
    },
    {
      name: "Chen Li",
      phone: "070-7654321",
      group: "vänner",
    },
    {
      name: "Isak Gran",
      phone: "070-1112223",
      group: "arbete",
    },
    {
      name: "Juan López",
      phone: "070-5556667",
      group: "familj",
    },
  ],
};
  
  // Ange en grupp
  let groupToShow;  




function showContacts(contactBook, groupToShow) { // Rör ej denna kod



  for (let i=0;i<contactBook.contacts.length;i++) {
    if (contactBook.contacts[i].group === groupToShow)
  // Loopar igenom alla kontakter och jämför grupp
   
    return (`${contactBook.contacts[i].name} och ${contactBook.contacts[i].phone}`) // här ska sträng med namn och tekefonnummer visas i form av string interpolation

  }
}


// Rör ej denna kod
showContacts(contactBook, groupToShow);
module.exports = { showContacts };
