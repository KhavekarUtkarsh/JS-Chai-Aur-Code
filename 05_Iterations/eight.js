// Reduce Function

const arr1 = [1,2,3,4]
const initialValue = 0

const sumWithInitialValue = arr1.reduce( (accumulator , currentValue) => accumulator + currentValue , initialValue )
// console.log(sumWithInitialValue)


// Here we have taken an Array.
// Then we have taken a initial value as 0.
// so in the reduce function we have two properties namely "accumulator" and "currentValue".
// Firstly accumulator is empty and the currentValue is notihing but the value inside the Array.
// Here in "reduce" we have same Callback function and then it's condition as that of "filter" , "map" , "forEach".
// Now here in Condition, we are adding the accumulator with the currentValue.
// But initially accumulator does not have any value.
// And that initial value we give to the accumulator (here as "initialValue" as 0).
// Then for first iteration it will perform addition of 0+1 (accumulator + currentValue), resulting 1, which is stored in accumulator.
// Then for next iteration the value of accumulator is 1 and currentValue is 2.
// In this way we are going to add all the values adn finally get the answer as 10 that will be returned by the "reduce".




const shoppingCart =[
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "python course",
        price : 1999
    },
    {
        itemName: "java course",
        price : 3999
    },
    {
        itemName: "cpp course",
        price : 999
    },
]

// Add all the prices inside the cart.

const total = shoppingCart.reduce( (acc,item) => acc + item.price ,0)
// console.log(total)