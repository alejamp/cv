// Actualizar fecha de última actualización
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdateElement = document.getElementById('last-update');
    if (lastUpdateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdateElement.textContent = today.toLocaleDateString('en-US', options);
    }

    // Configurar botón de descarga PDF
    setupPDFDownload();
});

// Smooth scroll para enlaces internos (si los hay)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para configurar la descarga de PDF
function setupPDFDownload() {
    const downloadBtn = document.getElementById('download-pdf-btn');
    
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', function() {
        exportToPDF();
    });
}

// Función para exportar el CV como PDF
function exportToPDF() {
    const element = document.getElementById('cv-content');
    const downloadBtn = document.getElementById('download-pdf-btn');
    
    if (!element) {
        console.error('No se encontró el contenido del CV');
        return;
    }

    // Ocultar botón temporalmente durante la generación
    if (downloadBtn) {
        downloadBtn.style.display = 'none';
    }

    // Agregar clase especial para aplicar estilos de PDF
    element.classList.add('generating-pdf');

    // Obtener el nombre del archivo (puedes personalizarlo)
    const name = document.querySelector('.name')?.textContent || 'CV';
    const filename = `CV_${name.replace(/\s+/g, '_')}.pdf`;

    // Configuración para html2pdf
    const opt = {
        margin: [10, 10, 10, 10],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true,
            logging: false
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
            compress: true
        },
        pagebreak: { 
            mode: ['avoid-all', 'css', 'legacy'],
            before: '.page-break-before',
            after: '.page-break-after',
            avoid: ['.section', '.timeline-item', '.project-card', '.skill-category']
        }
    };

    // Generar y descargar PDF
    html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
            // Remover clase especial y mostrar botón nuevamente
            element.classList.remove('generating-pdf');
            if (downloadBtn) {
                downloadBtn.style.display = 'flex';
            }
        })
        .catch((error) => {
            console.error('Error al generar PDF:', error);
            alert('Hubo un error al generar el PDF. Por favor, intenta usar la función de impresión del navegador (Ctrl+P) y guarda como PDF.');
            // Remover clase especial y mostrar botón nuevamente
            element.classList.remove('generating-pdf');
            if (downloadBtn) {
                downloadBtn.style.display = 'flex';
            }
        });
}

