/**
 Goal: 
- Console log Pascal pyramid that is 5 rows deep. 
- First number has 1 column with value of 1.
- Every number in the subsequent rows will be the sum of two numbers above it.
- By changing rows value same logic can be scaled endlessly. Min row value 8.
 
Pseudocode:
- First loop trough the amount of rows.
- Inside each row iteration we run another loop representing the number of columns.
- Number of columns will be equal to the number of current row.
- Function create pyramid will take two number arguments: depth: 5, and starting number: 1 
- Function will return an array that has as each array element a string that represents one row of the pyramid.
    
Numbers:
- The sum of two number above the current number define the value.
- If above line has 2 numbers, the next line is bound to have three numbers. Out of those one is an addition.
- exclude first and last number of the row. Every other number is the sum of:
- previous value in numbers outer array, and values in locations -1 and + 1 in the inner array.
    
    Example:
    
          1
         1 1
        1 2 1
       1 3 3 1
      1 4 6 4 1
*/

const rows = 6;

function createPyramid() {
    const pyramidArray = [];
    let row = "";
    let counter = rows;

    // Numbers holds an array that has arrays as values. Each array represents numbers that get printed on the row.
    const numbers = createNumbers(1);

    // Loop that creates the rows.
    for (let i = 0; i < rows; i++) {
        row = "";
        
        // Loop that creates the spaces in front of rows.
        for(let j = 0; j < counter; j++) {
            row += " ";
        }
        
        //row += numbers[i][0] + " ";
        for (let j = 0; j < i; j++){
            row += numbers[i][j] + " ";
        }
        counter--;
        pyramidArray.push(row);
    }
    // console.log(numbers)
    return pyramidArray;
}

function createNumbers(initialNumber) {

    let numbers = createArray();

    for(let i = 0; i < rows; i++) {
        numbers[i][0] = initialNumber;
       
        for(let j = 1; j < i+1; j++) {     
            numbers[j][j - 1] = initialNumber;
            if(i > 2 && j < numbers.length) {
                // console.log("nums: " + numbers.length)
                numbers[i][j] = numbers[i - 1][j-1] + numbers[i - 1][j]
            }
        }
    }
    return numbers;
}

function createArray() {
    const numbers = [];
    
    for(let i = 0; i < rows; i++) {
        numbers.push([]);
        for(let j = 0; j < i; j++) {
           numbers[i].push('.');
        }
    }
    return numbers;
}

function showArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

showArray(createPyramid());


