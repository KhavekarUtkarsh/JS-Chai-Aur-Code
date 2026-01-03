// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 >= 1);
// console.log(2 <= 1);



// console.log("2" > 1); // Here JS automitically converted "2" into number 2 and given output as true.
// console.log("02" > 1); // Here JS automitically converted "02" into number 2 and given output as true.
// Due to this it will not give the predictable result.

// So in this case you have to make sure that the data tyoe of both values are same before comparison.



// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);

// The reason is that the equality check == and comparison operators > , < , >= , <= work differently.
// Compariosn convert null to a number treating it as 0.
// That's why null >= 0 is true and null > 0 is false.



// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);

// Here for the undefined all values are false only.

// Therefore here comes the Strict Check i.e. ===
// Here strict check not only checks the values but also checks their data types.

// console.log("2" === 2); // this result false because data types are different.