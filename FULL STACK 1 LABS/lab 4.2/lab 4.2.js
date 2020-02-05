var cat = {
    'name': 'kitty',
    'age': 2,
    'breed':'American',
    };
    
    console.log(cat);
    
    console.log(cat.name);
     
    
    let propertyName = 'age';
    console.log(cat.age);
    
    
    function Cat(name,age,breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    }
    
    this.greeting = function () {
        this.console.log(`meow, hello, I am ${this.name}`);
    };
        this.wagTail = function() {
          this.console.log(`${this.name} wag tail happly`);
        }
    
    meow = new Cat('meow',7,'meowa');
    console.log(meow);
    console.log(meow instanceof Cat);
    