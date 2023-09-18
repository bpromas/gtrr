// expande caixas FAQ
const showTextElements = document.querySelectorAll('.show-text');

showTextElements.forEach(element => {
     element.addEventListener('click', function () {
          const showElement = this.querySelector('.show');
          const sign = this.querySelector('.toggle-content span');
          
          if (showElement.style.display === 'none' || showElement.style.display === '') {
               showElement.style.display = 'block';
               sign.innerHTML = '-'
          } else {
               sign.innerHTML = '+'
               showElement.style.display = 'none';
          }
     });
});
// expande caixas FAQ