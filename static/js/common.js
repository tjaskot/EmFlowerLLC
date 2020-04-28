// This function is needed for a dynamic plot chart. This function is called when the create chart function is referenced. Otherwise, if dynamic chart is not wanted, then please refer to the respective chart javascript block and modify the line with comment "Div Height & Width replaced here..."
function windowSize() {
  var w = window.innerWidth;
  var h = window.innerHeight;
}

function addActive(domElAddActive) {
  // python passes the actual dom element
  if (! domElAddActive.classList.contains("active")) {
    domElAddActive.classList.add("active");
  }
}
