$(function(){
  $('div.io-style').nextAll().filter('div.part:even').each(function(i){
    $(this).find('pre').attr('id', 'input-sample-'+(i+1)).after('<button class="btn btn-primary btn-large" data-clipboard-target="#input-sample-' + (i+1) + '">Copy</button>');
  });
});

var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
//成功時の処理
});
clipboard.on('error', function(e) {
//失敗時の処理
});
