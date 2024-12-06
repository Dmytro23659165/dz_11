let bankAccount = { 
    ownerName: 'Dima', 
    accountNumber: 1209213821373, 
    balance: 1200, 
    deposit(dodavaty) { 
        bankAccount.balance += dodavaty; 
        console.log(`Ви поповнили рахунок на ${dodavaty} грн. Залишок ${bankAccount.balance} грн`); 
    }, 
    withdraw(znimaty) { 
        if (znimaty > bankAccount.balance) { 

        } else { 
            bankAccount.balance -= znimaty; 
            console.log(`Ви зняли ${znimaty} UAH. Залишок ${bankAccount.balance} грн`); 
        } 
    } 
};
bankAccount.deposit(500);
bankAccount.withdraw(300);


let weather = { 
    temperature: 12, 
    humidity: 0, 
    windSpeed: 30 
}; 
function temperatureSposib(array) { 
        if (weather.temperature <= 0) { 
            return `false`; 
        } else if (weather.temperature >= 0) { 
            console.log(`Температура більша ${weather.humidity} цельсія`); 
        } 
};
console.log(temperatureSposib(weather));


let user = {
    name: 'Dima',
    email: 'ashdjhasdjh@gmail.com',
    password: 'djskladlkj228',
    verify(inputEmail, inputPassword) {
        if (inputEmail === user.email && inputPassword === user.password) {
            return 'Правильно';
        } else {
            return 'Неправильно';
        }
    }
};
function promptUser(user) {
    const inputEmail = prompt('Введіть email:');
    const inputPassword = prompt('Введіть пароль:');
    const loginResult = user.verify(inputEmail, inputPassword);
    console.log(loginResult);
}
promptUser(user);


let movie = { 
    title: 12, 
    director: `dima`, 
    year: 1999,
    rating: 8,
}; 
function temperatureSposib(movie) { 
    if (movie.rating <= 5) { 
        return `false`; 
    } else if (movie.rating >= 5) { 
        console.log(`Оцінка мультфільму ${movie.rating} балів`); 
    } 
};
console.log(temperatureSposib(movie));
