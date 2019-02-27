var toggle = document.getElementsByClassName("toggle");

var toggleContent = function() {
  console.log(this);
};

for (var i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', toggleContent, false);
}
