export function addLoadedClass() {
   if (!document.documentElement.classList.contains('loading')) {
      window.addEventListener('load', function () {
         setTimeout(function () {
            document.documentElement.classList.add('loaded');
         }, 0);
      });
   }
}
