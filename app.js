$(document).ready(function() {
  $('section').hide()

  $('.aboutButton').click(function () {
    $('section').hide()
    $('.aboutSection').toggle()
  })

  $('.cocButton').click(function () {
    $('section').hide()
    $('.codeOfConductSection').toggle()
  })

  $('.upcomingEventsButton').click(function () {
    $('section').hide()
    $('.upcomingEventsSection').toggle()
  })

  $('.previousEventsButton').click(function () {
    $('section').hide()
    $('.previousEventsSection').toggle()
  })

  $('.collaboratorsButton').click(function () {
    $('section').hide()
    $('.collaboratorsSection').toggle()
  })

  $('.contactButton').click(function () {
    $('section').hide()
    $('.contactSection').toggle()
  })
})
