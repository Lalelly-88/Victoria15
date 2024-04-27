$(document).ready(function() {
    // Mostrar el modal al cargar la página
    $('#bienvenida-modal').fadeIn();

    // Evento para el botón "Ingresa y conocé más"
    $('#ingresa-btn').on('click', function() {
        $('#background-music')[0].play(); // Iniciar música
        $('#bienvenida-modal').fadeOut(); // Cerrar el modal
        $('#pagina-principal').fadeIn(); // Mostrar la página principal
    });

    // Evento para el botón de control de sonido
    $('#toggle-music').on('click', function() {
        var music = $('#background-music')[0];
        if (music.paused) {
            music.play(); // Reproducir música
        } else {
            music.pause(); // Pausar música
        }
    });
});

        // Configuración del contador de cuenta regresiva
    var fechaObjetivo = new Date("June 22, 2024 22:00:00").getTime(); // Fecha objetivo

    setInterval(function() {
        var ahora = new Date().getTime();
        var diferencia = fechaObjetivo - ahora;

        // Cálculos para días, horas, minutos y segundos
        var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Actualizar los valores del contador
        $('#contador-dias').text(dias);
        $('#contador-horas').text(horas);
        $('#contador-minutos').text(minutos);
        $('#contador-segundos').text(segundos);
    }, 1000); // Actualizar cada segundo