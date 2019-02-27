var toggle = document.getElementsByClassName("toggle");

const toggleContent = function() {
  var clickTarget = this.getAttribute("data");
  slideCheck(clickTarget);
};

function slideCheck(clickTarget) {
  var code = document.getElementById('code');
  var design = document.getElementById('design');
  var contact = document.getElementById('contact');

  if (clickTarget == "code") {
    code.classList.toggle("active");
  }
  else if (clickTarget == "design") {
    design.classList.toggle("active");
  }
  else if (clickTarget == "contact") {
    contact.classList.toggle("active"); 
  }
  else {
    //do nothing
  }
}

for (var i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', toggleContent, false);
}
