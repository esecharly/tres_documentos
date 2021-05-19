$(document).ready(function() {
    $('#btn_mostrar2').click(()=>{
        $.ajax({
            type: 'POST',
            data: {
                'doc1':'Hola desde doc2'
            },
            url: 'control/control_doc2.php',
            success: (r) => {
                console.log(r);
                $('#mostrar_res2').text(r);
            }
        })
    });
});