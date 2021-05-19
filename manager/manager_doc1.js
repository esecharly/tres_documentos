$(document).ready(function() {
    $('#btn_mostrar1').click(()=>{
        $.ajax({
            type: 'POST',
            data: {
                'doc1':'Hola desde doc1'
            },
            url: 'control/control_doc1.php',
            success: (r) => {
                console.log(r);
                $('#mostrar_res1').text(r);
            }
        })
    });
});