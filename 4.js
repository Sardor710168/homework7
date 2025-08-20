function yangilash() {
  let people = {
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
  };

  let n = 1;

  for (let person in people) {
    people[person] += Math.abs(n);
  }

  return people; 
}

console.log(yangilash());
