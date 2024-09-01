class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak();
