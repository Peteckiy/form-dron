$('.varrad').change(function(){
    if($(this).prop('checked')) $(this).next('.variant').children('.vvar').text('Правильный');
    else $(this).next('.variant').children('.vvar').text('Вариант');
  });