        $(function(){
                $("#btn-alta-inmueble").click(function(){
                    var url="../../panel_sys/inmuebles/crear/procesar_inmueble.php";
                    $.ajax({
                        type:"POST",
                        url:url,
                        data:$("#crear_inmueble").serialize(),

                        success:function(data){
                            $("#m_v").html(data);                
                        }

                    });
                    return false;
                });
            });

        $(function(){
                $("#btn-alta-user").click(function(){
                    var url="../../panel_sys/crear_user/procesar_formulario.php";
                    $.ajax({
                        type:"POST",
                        url:url,
                        data:$("#alta_usuario").serialize(),

                        success:function(data){
                            $("#m_v").html(data);                
                        }

                    });
                    return false;
                });
            });

        $(document).on("change","#inmueble_slc",function(){
                   $("#inmueble_slc option:selected").each(function () {
                    elegid=$(this).val();
                    $.post("../../panel_sys/crear_user/mostrar_supervisor.php", { elegid: elegid }, function(data){
                    $("#supervisor").html(data);
                    
                });
           })
        });