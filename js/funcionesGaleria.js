let modalAbierto = false;

    function mostrarMensaje() {
      document.getElementById('mensaje').style.display = 'block';
      document.getElementById('galeria').style.display = 'block';
    }

    function abrirModal(src) {
      const img = document.getElementById('modalImg');
      const video = document.getElementById('modalVideo');

      if (src.endsWith(".mp4")) {
        img.style.display = "none";
        video.style.display = "block";
        video.src = src;
        video.play();
      } else {
        video.style.display = "none";
        img.style.display = "block";
        img.src = src;
      }

      document.getElementById('modal').style.display = 'flex';
      document.body.classList.add('no-scroll');
      history.pushState({ modal: true }, "");
    }

    function cerrarModal() {
      const modal = document.getElementById('modal');
      const video = document.getElementById('modalVideo');

      // Oculta el modal
      modal.style.display = 'none';

      // Pausa y reinicia el video si estaba reproduciéndose
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
      }

      // Permite volver a hacer scroll
      document.body.classList.remove('no-scroll');

      // Maneja el historial
      if (history.state && history.state.modal) {
        history.back();
      }
    }

      // Detecta botón "Atrás" del móvil
    window.addEventListener('popstate', function (event) {
      document.getElementById('modal').style.display = 'none';
      document.body.classList.remove('no-scroll');
    });