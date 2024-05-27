
let person = {
    name: "Elda",
    balance: 10000
  };
  
  
  function withdraw(person, amount) {
    if (amount > person.balance) {
      console.log("Withdrawal cannot be processed due to insufficient funds");
    } else {
      person.balance -= amount;
      console.log(`${amount} withdrawn successfully. New balance: ${person.balance}`);
    }
  }
  
 
  withdraw(person, 500); 
  withdraw(person, 10800);
  