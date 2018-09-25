$(document).ready(function() {

  $('#filtroNivel').change(function(){
    var fNivelSelect = $(this).val();
    if(fNivelSelect == '') {
      $('ul.list-vagas li.active').removeClass('activeNivel').show();
    } else {
      $('ul.list-vagas').show();
      $('#resultSearchList').hide(); 
      $('ul.list-vagas li.active').each(function(){
        var fNivel = $(this).attr('data-nivel');
        fNivel = fNivel.replace(',','').replace(/,+$/, '');
        if(fNivel.indexOf(fNivelSelect) !== -1){
          $(this).addClass('activeNivel').show();
        } else {
          $(this).removeClass('activeNivel').hide();
        }
      });
      var visivel = $('ul.list-vagas li').is(':visible');
      if (!visivel) {
        $('ul.list-vagas').hide();
        $('#resultSearchList').show();
      }
    }
  });

  $('#filtroOrdenar').change(function(){
    var ordemList = $(this).val();
    if(ordemList != '') {
      $('ul.list-vagas').hide();
      var vagasList = $('ul.list-vagas li');
      vagasList.sort(function(a, d) {
        // para ordem decrescente; use a - d para crescente
        if (ordemList == 'a') {
          return $(a).attr('data-datavaga') - $(d).attr('data-datavaga')
        } else if (ordemList == 'd'){
          return $(d).attr('data-datavaga') - $(a).attr('data-datavaga')
        }
      });
      $('ul.list-vagas').html(vagasList).show();
    }
  });

});