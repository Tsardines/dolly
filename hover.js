
  // $('.wizard').mouseover(function () {
  //   $(this).attr('src', $(this).data("hover"));
  // }).mouseout(function () {
  //
  //   $(this).attr('src', $(this).data("src"));
  // });


// $('img').bind('mouseenter mouseleave', function() {
//   $(this).attr({
//     src: $(this).attr('data-other-src')
//     , 'data-other-src': $(this).attr('src')
//   })
// });

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img.wizard').hover(sourceSwap, sourceSwap);
});
