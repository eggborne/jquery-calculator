var leftSideNumber = 0
var rightSideNumber = 0
var currentOperation = ""
var lastButtonClicked

operators =
{
  "+" : function(num1,num2) {
    return parseFloat(num1)+parseFloat(num2)
  },
  "-" : function(num1,num2) {
    console.log("subracting " + num2 + " from " + num1)
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
    lastButtonClicked = this
  })
  minusButton.click(function(){

    console.log("clicked subtract")
    var displayedNumber = $("#display").text()
    leftSideNumber = parseFloat(displayedNumber)
    $('#number-1').val(leftSideNumber)
    $("#display").text("0")
    currentOperation = operators["-"]
    lastButtonClicked = this
  })
  multiplyButton.click(function(){

    console.log("clicked mult")
    var displayedNumber = $("#display").text()
    leftSideNumber = parseFloat(displayedNumber)
    $('#number-1').val(leftSideNumber)
    $("#display").text("0")
    currentOperation = operators["*"]
    lastButtonClicked = this
  })
  divideButton.click(function(){

    console.log("clicked divide")
    var displayedNumber = $("#display").text()
    leftSideNumber = parseFloat(displayedNumber)
    $('#number-1').val(leftSideNumber)
    $("#display").text("0")
    currentOperation = operators["÷"]
    lastButtonClicked = this
  })

  $(".num-key").click(function(){
    var toPrint = $(this).text()
    if ($('#display').text()==="0") {
      $('#display').text("")
    }
    addToDisplay(toPrint)
    lastButtonClicked = this
  })

  clearButton.click(function(){
    currentResult = 0
    $("#display").text("0")
  })

  equalsButton.click(function(){
    console.log("L before: " + leftSideNumber)
    if (lastButtonClicked !== this) {
      console.log("wasn't equals last time!")
      rightSideNumber = $('#display').text()
    } else {
      console.log("hit equals last tim!")
    }
    console.log("R before: " + rightSideNumber)
    var result = currentOperation(leftSideNumber,rightSideNumber)
    leftSideNumber = result
    console.log("L after operation: " + leftSideNumber)
    console.log("R after operation: " + rightSideNumber)
    printToDisplay(result)
    lastButtonClicked = this
  })
  $('#dark-button').click(function(){
    $('#left-side').css({'background-color':'black'})
    $('#calculator').css({'background-color':'#555'})
    $('.calc-panel').css({'background-color':'#777'})
    $('.calc-key').css({'background-color':'#999'})
    $('body').css("color","white")
  })
  $('#cream-button').click(function(){
    $('#left-side').css({'background-color':'wheat'})
    $('#calculator').css({'background-color':'#abab9a'})
    $('.calc-panel').css({'background-color':'#996300'})
    $('.calc-key').css({'background-color':'#ffeaa8'})
    $('body').css("color","white")
  })
  $('#default-button').click(function(){
    $('#left-side').css({'background-color':'rgb(145, 145, 145)'})
    $('#calculator').css({'background-color':'white'})
    $('.calc-panel').css({'background-color':'initial'})
    $('.calc-key').css({'background-color':'initial'})
    $('body').css("color","initial")
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
