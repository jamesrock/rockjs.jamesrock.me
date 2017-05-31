var Person = ROCK.Object.extend({
  constructor: function Person(id, forename, surname) {

    this.id = id;
    this.forename = forename;
    this.surname = surname;

  },
  getFullName: function() {

    return [this.forename, this.surname].join(" ");
    
  }
});
