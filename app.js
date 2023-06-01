$(document).ready(function() {
  $('section').hide()

  $('.aboutSection').toggle()

  $('.aboutButton').click(function () {
    $('section').hide()
    $('.aboutSection').toggle()
  })

  $('.contactButton').click(function () {
    $('section').hide()
    $('.contactSection').toggle()
  })

  $('.downloadsButton').click(function () {
    $('section').hide()
    $('.downloadsSection').toggle()
  })
})
