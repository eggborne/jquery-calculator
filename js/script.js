var leftSideNumber = 0
var currentOperation = ""

operators =
{
  "+" : function(num1,num2) {
    return parseFloat(num1)+parseFloat(num2)
  },
  "-" : function(num1,num2) {
    return parseFloat(num1)-parseFloat(num2)
  },
  "*" : function(num1,num2) {
    return parseFloat(num1)*parseFloat(num2)
  },
  "÷" : function(num1,num2) {
    return parseFloat(num1)/parseFloat(num2)
  }
}



$(document).ready(function(){
  printToDisplay("0")
  setButtonIDs()


  var addButton = $("#button-a")
  var minusButton = $("#button--")
  var multiplyButton = $("#button-m")
  var divideButton = $("#button-÷")

  var clearButton = $("#button-CLEAR")
  var equalsButton = $("#button-e")

  addButton.click(function(){
    var displayedNumber = $("#display").text()
    leftSideNumber = parseFloat(displayedNumber)
    $('#number-1').val(leftSideNumber)
    $("#display").text("0")
    currentOperation = operators["+"]
  })
  minusButton.click(function(){

    console.log("clicked subtract")
    var displayedNumber = $("#display").text()
    leftSideNumber = parseFloat(displayedNumber)
    $('#number-1').val(leftSideNumber)
    $("#display").text("0")
    currentOperation = operators["-"]
  })
  multiplyButton.click(function(){

    console.log("clicked mult")
    var displayedNumber = $("#display").text()
    leftSideNumber = parseFloat(displayedNumber)
    $('#number-1').val(leftSideNumber)
    $("#display").text("0")
    currentOperation = operators["*"]
  })
  divideButton.click(function(){

    console.log("clicked divide")
    var displayedNumber = $("#display").text()
    leftSideNumber = parseFloat(displayedNumber)
    $('#number-1').val(leftSideNumber)
    $("#display").text("0")
    currentOperation = operators["÷"]
  })

  $(".num-key").click(function(){
    var toPrint = $(this).text()
    if ($('#display').text()==="0") {
      $('#display').text("")
    }
    addToDisplay(toPrint)
  })

  clearButton.click(function(){
    currentResult = 0
    $("#display").text("0")
  })

  equalsButton.click(function(){
    console.log("clicked equals")
    var rightSideNumber = $('#display').text()
    var result = currentOperation(leftSideNumber,rightSideNumber)
    leftSideNumber = rightSideNumber
    printToDisplay(result)
  })


})

function printToDisplay(string) {
  $('#display').text(string)
}
function addToDisplay(numeral){
  $('#display').append(numeral)
}

function setButtonIDs() {
  $('.calc-key').each(function(){
    var newID = "button-" + $(this).html()
    if (newID==="button-+") {
      newID = "button-a"
    }
    if (newID==="button-*") {
      newID = "button-m"
    }
    if (newID==="button-=") {
      newID = "button-e"
    }
    $(this).attr("id",newID)
  })
}
