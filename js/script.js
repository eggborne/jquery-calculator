$(document).ready(function(){
  console.log("cocks")
  createLayout("#stage")
})
function createLayout(container,layoutArray) {
  var rows = layoutArray.length
  // make the row divs
  for (var r=0;r<rows;r++) {
    if (!r) {
      $(container).html(`<div id = "`+r+`" class="row"></div>`)
    } else {
      $(container).append(`<div id = "`+r+`" class="row"></div>`)
    }
  }
  
}