$(document).ready(function() {
    
    const $novaTarefa = $('#novaTarefa');
    const $adicionarTarefa = $('#adicionarTarefa');
    const $listaTarefas = $('#listaTarefas');
    const $cancelarTarefa = $('#cancelarTarefa');

    
    $adicionarTarefa.click(function() {
        const novaTarefa = $novaTarefa.val();
        $listaTarefas.append(`<li>${novaTarefa}</li>`);
        $novaTarefa.val('');
    });
        
    $("#cancelarTarefa").click(function(){
        $listaTarefas.empty(`<li>${listaTarefas}</li>`);
        $listaTarefas.val('');
    })
    
    
    
    $listaTarefas.on('click', 'li', function() {
        
        $(this).addClass('concluida');
    });
});




