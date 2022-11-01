// Enums serve to make  specific sequences of numbers more human-readable and expressive.
// Take, for example, this plain JavaScript code:

 const Pizza = 0;
const FriedChicken = 1;
const IceCream = 2;

// The above variables could be used anywhere in code but is still kinda ugly that way to a lot of developers
// With enums in TypeScript, which you declare with the new enum keyword, you can do it more elegantly:

enum Food { Pizza, FriedChicken, IceCream}
let myFavoriteFood = Food.FriedChicken

alert(myFavoriteFood)

