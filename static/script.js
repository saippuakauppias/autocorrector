$(document).ready(function(){
  fix_spell = function(data) {
    data.forEach(function(elem) {
      $('#text_field').val(
        $('#text_field').val().replace(
          elem['word'],
          elem['s'][0] || elem['word']
        )
      );
    });
  }

  $('#correction').on('click', function() {
    var lines = $('#text_field').val().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n");

    lines.forEach(function(line) {
      if (line.length) {
        $.getScript('http://speller.yandex.net/services/spellservice.json/checkText?text=' + line + '&callback=fix_spell');
      }
    });

  });
});
