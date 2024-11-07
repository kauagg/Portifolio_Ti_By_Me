
    document.getElementById('menu-toggle').addEventListener('click', function(event) {
        event.preventDefault();
        
        // Seleciona o ícone e o sidebar
        const icon = this.querySelector('i');
        const sidebar = document.getElementById('sidebar-wrapper');
        
        // Alterna o estado do sidebar
        sidebar.classList.toggle('closed');
        
        // Alterna os ícones dependendo do estado
        if (sidebar.classList.contains('closed')) {
            icon.classList.remove('bi-arrow-bar-left'); // Ícone de abrir
            icon.classList.add('bi-arrow-bar-right');   // Ícone de fechar
        } else {
            icon.classList.remove('bi-arrow-bar-right'); // Ícone de fechar
            icon.classList.add('bi-arrow-bar-left');     // Ícone de abrir
        }
    });
