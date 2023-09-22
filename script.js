// expande caixas FAQ
const toggleContentElement = document.querySelectorAll('.toggle-content');

toggleContentElement.forEach(element => {
     element.addEventListener('click', function () {
          const parent = element.parentElement;

          const showElement = parent.querySelector('.show');
          const sign = this.querySelector('span');
          
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