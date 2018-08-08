$(document).ready(function(){
  setButtonIDs()


  var addButton = $("#button-a")
  var minusButton = $("#button--")
  var multiplyButton = $("#button-m")
  var divideButton = $("#button-÷")
  addButton.click(function(){
    console.log("clicked add")
  })
  minusButton.click(function(){
    console.log("clicked subtract")
  })
  multiplyButton.click(function(){
    console.log("clicked mult")
  })
  divideButton.click(function(){
    console.log("clicked divide")
  })
})

function setButtonIDs() {
  $('.calc-key').each(function(){
    var newID = "button-" + $(this).html()
    if (newID==="button-+") {
      newID = "button-a"
    }
    if (newID==="button-*") {
      newID = "button-m"
    }
    $(this).attr("id",newID)
  })
}
