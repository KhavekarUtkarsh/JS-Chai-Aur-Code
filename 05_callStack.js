// JS consists of a topic named as JavaScript Execution Context.

// Simply how JS runs / executes the file.
// For that JS runs it in Two Phases.
// JS is Single Threaded.
// Here we have Global Execution Context and Function/ Functional Execution Context.
// There is another type called Eval Execution Context. It is a kind of property of Global Object. It is not that Important now here to Study.

// The first phase is Memory Creation Phase / Creation Phase.
// And another one is Execution Phase.

// In Memory Creation Phase , we provide memory to all variables and any other declared types and here we don't execute them. Means here we Allocate the Memory.
// In Execution Phase we execute all the operations.



let val1= 10
let val2= 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let reault1= addNum(val1,val2)
let reault2= addNum(10,2)


// Steps-

// 1) At very first we have Global Execution/ Global Environment and at very start it is Located in "this".
// 2) Then now we have Memory Phase where all variable will get some memory.
        // (a) Line-17 => So here we firstly got val1, which will be given as "undefined"
        // (b) Line-18 => Then we got val2, which will be given as "undefined"
        // (c) Line-19 => Now we got addNum, here it will be given it's Definition i.e. all the code inside it.
        // (d) Line-23 => Now we got result1, which will be given as "undefined"
        // (e) Line-24 => Now we got result2, which will be given as "undefined"
// 3) Then now we are in Execution Phase, where we execute the code.
        // (a) Line-17 => Now here we allocte the value 10 to val1.
        // (b) Line-18 => Now here we allocte the value 5 to val2.
        // (c) Line-19 to 22 => Here we don't have anything to execute because we have already holded the definition of it in Memory Creation Phase.
        // (d) Line-23 => Now here we have the the result1 in which addNum should go, but addNum is the Function. Therefore here it will create seperate Execution Context.
        // So here we have New Variable Environment and Execution Thread.
        // So as many time Functions get excuted that many times new Execution Context will be created.
        // So for the addNum function, here we have again the same two works to perform that is Memory Phase and Execution Phase.
            // i) Firstly Memory Phase.
                    // (A) Firstly we have val1 which is given "undefined"
                    // (B) Then we have val2 which is given "undefined"
                    // (C) Then we have total which is given "undefined"
            // ii) Now we are in Execution Phase.
                    // (A) Firstly we have num1 which is given value as 10
                    // (B) Then we have num2 which is given value as 5
                    // (C) Then we have total which is given value as 15 after performing operation. And after that the total is returned to the Global Execution Context "1)"
                    // (D) Now after finishing the operations this new Execution Context will be get Deleted.
                    // And now we are again at step "3)"
        // (e) Here we have got result1 as 15.
        // (f) Line-24 => Now we have result2 which again has addNum function.
        // So here again we have New Variable Environment and Execution Thread.
        // So for the addNum function, here we have again the same two works to perform that is Memory Phase and Execution Phase.
            // i) Firstly Memory Phase
                    // (A) Firstly we have val1 which is given "undefined"
                    // (B) Then we have val2 which is given "undefined"
                    // (C) Then we have total which is given "undefined"
            // ii) Now we are in Execution Phase.
                    // (A) Firstly we have num1 which is given value as 10
                    // (B) Then we have num2 which is given value as 2
                    // (C) Then we have total which is given value as 12 after performing operation. And after that the total is returned to the Global Execution Context "1)"
                    // (D) Now after finishing the operations this new Execution Context will be get Deleted.
                    // And now we are again at step "3)"


// For detailed explanation of JS Execution Context and Call Stack watch Chai Aur Code video no.-25