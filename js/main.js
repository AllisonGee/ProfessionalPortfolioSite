$(function () {
  $('#mobile-menu-button').click(function () {
    if ($('.top-nav').hasClass('showing')) {
      $('.top-nav').removeClass('showing').addClass('hiding')
    } else {
      $('.top-nav').removeClass('hiding').addClass('showing')
    }
  })
})
