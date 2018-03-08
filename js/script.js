var statsCounter = function() {
  var elements = document.getElementsByClassName('counter');
  if (elements.length > 0) {
    function increment(element, speed) {
      var count = parseInt(element.innerText);
      element.innerText = ++count;
      if (count !== parseInt(element.getAttribute('data-to'))) {
        setTimeout(function() {
          increment(element, speed);
        }, speed);
      }
    }
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var speed = element.getAttribute('data-speed') || 16;
      increment(element, speed);
    }
  }
};

statsCounter();
