// Variables
const form = document.getElementById('request-quote');
const html = new HTMLUI();



// Event Listeners
eventListeners();

function eventListeners() {
     document.addEventListener('DOMContentLoaded', function() {
          // Create the <option> for the years
          // Создаем <option> по годам
          html.displayYears();
     });
     
     // When the form is submitted
     // Когда форма отправлена
     form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Read the values from the FORM
          // Считываем значения из ФОРМЫ
          const make = document.getElementById('make').value;
          const year = document.getElementById('year').value;
          // Read the radio buttons
          // Читаем радиокнопки
          const level = document.querySelector('input[name="level"]:checked').value;

          // Check that all the fields have something
          // Проверяем, что во всех полях что-то есть
          if( make === '' || year === '' || level === '' ) {
               html.displayError('All the fields are mandatory');
          } else {
               // Clear the previous quotes
               // Очистить предыдущие котировки
               const prevResult = document.querySelector('#result div');
               if(prevResult != null) {
                    prevResult.remove();
               }
               // Make the quotation
               // Сделаем цитату
               const insurance = new Insurance(make,year, level );
               const price = insurance.calculateQuotation(insurance);

               // Print the result from HTMLUI();
               // Распечатываем результат HTMLUI ();
               html.showResults(price, insurance);
          }
     });
}


