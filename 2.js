function checkNum(num) {
    if (num === 0 || num === 1){
        return console.log('Числа 0 и 1 не являются простыми или составными. Число должно быть больше 1');
        
        } else if (num > 1000){
        return console.log('Введены неверные данные');
        
        } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
            return console.log(`Число ${num} составное`);
            } else {
            return console.log(`Число ${num} простое`);
            }
        }
        }
    }

    checkNum(696);