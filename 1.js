function findEvenOdd(){

    const arr = [1, 2, 3, 15, 13, 17, 14, 18, 19, 0]
    let evenNumber = 0;
    let oddNumber = 0;
    let zeroNumber = 0;
    arr.forEach(function(item, index, array) {
      
        if (typeof item === 'number' && !isNaN(item)) {
         
            if (item % 2 === 0) {
                evenNumber ++
            } else {
                oddNumber ++
            }
            
            if(item === 0){
                zeroNumber ++
            }
    
       }      
    });
            
    console.log(`Четных чисел: ${evenNumber}`);
    console.log(`Нечетных чисел: ${oddNumber}`);
    console.log(`Нулей: ${zeroNumber}`);
    
    }
    
findEvenOdd();