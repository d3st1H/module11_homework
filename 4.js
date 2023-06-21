function counterNum (a, b) {
    let current = a
    let intervalId = setInterval(function(){

      console.log(current)

      if (current === b) {
        clearInterval(intervalId)
      }

      current++
      
    }, 1000);
} 

  counterNum(5, 15);