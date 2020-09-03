

// Classes


// Everything related to the quotation and calculations is Insurance
// Все, что связано с расценками и расчетами, - это страхование
class Insurance {

  constructor(make, year, level){
       this.make = make;
       this.year = year;
       this.level = level;
  }

  // Calculate the price for the current quotation
  // Рассчитываем цену для текущей котировки
  calculateQuotation(insurance) {
            let price;
            const base = 2000;

            // get the make
            // получаем марку
            const make = insurance.make;

                 /*
                      1 = American 15%
                      2 = Asian 05%
                      3 = European 35%
                 */
            switch(make) {
                      case '1': 
                           price = base * 1.15;
                           break;
                      case '2': 
                           price = base * 1.05;
                           break;
                      case '3': 
                           price = base * 1.35;
                           break;
            }

            // Get the year
            // Получаем год
            const year = insurance.year;

            // Get the years difference
            // Получить разницу в годах
            const difference = this.getYearDifference(year);

            // Each year the cost of the insurance is going to be 3% cheaper
            // С каждым годом стоимость страховки будет дешевле на 3%
            price = price - ((difference * 3) * price) / 100;
            
            // Check the level of protection
            // Проверяем уровень защиты
            const level = insurance.level;

            price = this.calculateLevel(price, level);

            return price;
  }
  // Returns the difference between years
  // Возвращает разницу между годами
  getYearDifference(year) {
       return new Date().getFullYear() - year;
  }
  // Adds the value based on the level of protection
  // Добавляет значение в зависимости от уровня защиты
  calculateLevel(price, level) {
       /*
                 Basic insurance is going to increase the value by 30%
                 Complete Insurance is going to increaste the value by 50%
                 Базовая страховка увеличивает стоимость на 30%. 
                 Полная страховка увеличивает стоимость на 50%.
            */
       if(level === 'basic') {
            price = price * 1.30;
       } else {
                 price = price * 1.50;
       }

       return price;
  }
}


// Everything related to the HTML
// Все, что связано с HTML
class HTMLUI {
  // Displays the latest 20 years in the select
  // Отображает последние 20 лет в выбранном
  displayYears() {
       // Max & minimum years
       // Максимальный и минимальный годы
       const max = new Date().getFullYear(),
            min = max - 20;

       // Generate the list with the latest 20 years
       // Создаем список за последние 20 лет
       const selectYears = document.getElementById('year');

       // Print the values
       // Распечатываем значения
       for(let i = max; i > min; i-- ) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectYears.appendChild(option);
       }
  }
  // Prints an error
  // Выводит ошибку 
  displayError(message) {
       // create a div
      // создаем div
       const div = document.createElement('div');
       div.classList = 'error';

       // insert the message
       // вставляем сообщение
       div.innerHTML = `
            <p>${message}</p>
       `;

       form.insertBefore(div, document.querySelector('.form-group'));

       // Remove the error
       // Убираем ошибку
       setTimeout(function() {
            document.querySelector('.error').remove();
       }, 3000);
  }

  // Prints the result into the HTML
  // Выводит результат в HTML
  showResults(price, insurance) {
       // Print the result
       // Распечатываем результат
       const result = document.getElementById('result');

       // create a div with the result
       // создаем div с результатом
       const div = document.createElement('div');

       // Get Make from the object and assign a readable name
       // Получить Make из объекта и присвоить читаемое имя
       let make = insurance.make;

       switch(make) {
            case  '1':
                 make = 'American';
                 break;
            case  '2':
                 make = 'Asian';
                 break;
            case  '3':
                 make = 'European';
                 break;
                 
       }


       // Insert the result
       // Вставляем результат
       div.innerHTML = `
            <p class="header">Summary</p>
            <p>Make: ${make}</p>
            <p>Year: ${insurance.year}</p>
            <p>Level: ${insurance.level}</p>
            <p class="total">Total: $ ${price}</p>
       `;

       const spinner = document.querySelector('#loading img');
       spinner.style.display = 'block';

       setTimeout(function() {  
            spinner.style.display = 'none';
            // Insert this into the HTML
            // Вставляем это в HTML
            result.appendChild(div);
       }, 3000);


  }

}
