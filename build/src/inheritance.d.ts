declare class Animal {
    name: string;
    constructor(name: string);
    speak(): void;
}
declare class Dog extends Animal {
    speak(): void;
}
declare const dog: Dog;
