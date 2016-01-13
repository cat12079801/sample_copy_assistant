$(function(){
  $('div.io-style').nextAll().filter('div.part:even').each(function(i){
    $(this).find('pre')
      .attr('id', 'input-sample-'+(i+1))
      .addClass('input-sample')
      .after('<button class="btn btn-primary btn-large" data-clipboard-target="#input-sample-' + (i+1) + '">Copy</button>');
  });
});

var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
  pre_tag = e["trigger"]["dataset"]["clipboardTarget"];
  if(!$(pre_tag).hasClass('success_animating')){
    $(pre_tag).addClass('success_animating').delay(1000).queue(function(){
      $(this).removeClass('success_animating').dequeue();
    });
  }
});
clipboard.on('error', function(e) {
  pre_tag = e["trigger"]["dataset"]["clipboardTarget"];
  if(!$(pre_tag).hasClass('failed_animating')){
    $(pre_tag).addClass('failed_animating').delay(1000).queue(function(){
      $(this).removeClass('failed_animating').dequeue();
    });
  }
});
