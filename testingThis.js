const person = {
  firstName: 'Tayrine',
  lastName: 'Soares',
  fullName: function() {
    return this.firstName + this.lastName;
  }
};

console.log(`Hello ${person.fullName()}`);
