angular.module("MyFirstApp", [])
    .controller("FirstController",["$scope", function(m){
        m.nombre = "Luis";
        m.nuevoComentario = {};
        m.comentarios = [
            {
                comentario: "Buen tutorial",
                username: "codigofacilito",
            },
            {
                comentario: "Malísimo el tutorial",
                username: "otro_user"
            },
        ];

        m.agregarComentario = function(){
            m.comentarios.push(m.nuevoComentario);
            m.nuevoComentario = {};

        };

    }]);