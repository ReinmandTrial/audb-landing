export function uniqArray(array) {
   return array.filter(function (item, index, self) {
      return self.indexOf(item) === index;
   });
}

export function counter(ms, el) {
   let counter = 0;
   let interval = setInterval(() => {
      el.innerHTML = ++counter + '%';
      counter === 100 ? clearInterval(interval) : false;
   }, ms);
}
