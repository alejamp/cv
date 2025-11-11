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

// Función para esperar a que todas las imágenes se carguen
function waitForImages(element) {
    return new Promise((resolve) => {
        const images = element.querySelectorAll('img');
        if (images.length === 0) {
            resolve();
            return;
        }

        let loadedCount = 0;
        const totalImages = images.length;

        const checkComplete = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                // Esperar un frame adicional para asegurar que las imágenes estén renderizadas
                requestAnimationFrame(() => {
                    requestAnimationFrame(resolve);
                });
            }
        };

        images.forEach((img) => {
            // Forzar carga si no está completa
            if (img.complete && img.naturalHeight > 0) {
                checkComplete();
            } else {
                // Si la imagen ya tiene src pero no está cargada, forzar recarga
                if (img.src && !img.complete) {
                    const originalSrc = img.src;
                    img.src = '';
                    img.src = originalSrc;
                }
                img.addEventListener('load', checkComplete, { once: true });
                img.addEventListener('error', checkComplete, { once: true });
            }
        });
    });
}

// Función para exportar el CV como PDF
async function exportToPDF() {
    const element = document.getElementById('cv-content');
    const downloadBtn = document.getElementById('download-pdf-btn');
    
    if (!element) {
        console.error('No se encontró el contenido del CV');
        return;
    }

    // Deshabilitar botón durante la generación
    if (downloadBtn) {
        downloadBtn.disabled = true;
        downloadBtn.style.opacity = '0.5';
        downloadBtn.style.cursor = 'not-allowed';
    }

    // Guardar posición de scroll actual
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Asegurar que la página esté en la parte superior
    window.scrollTo(0, 0);
    
    // Esperar a que el scroll se complete
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Agregar clase especial para aplicar estilos de PDF
    element.classList.add('generating-pdf');
    
    // Forzar reflow para asegurar que los estilos se apliquen
    void element.offsetHeight;
    
    // Esperar un frame para que los estilos se apliquen completamente
    await new Promise(resolve => requestAnimationFrame(resolve));
    
    // Esperar a que todas las imágenes se carguen
    await waitForImages(element);
    
    // Esperar frames adicionales de renderizado para asegurar que todo esté completamente renderizado
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    // Obtener el nombre del archivo
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
            allowTaint: false,
            letterRendering: true,
            logging: false,
            scrollX: 0,
            scrollY: 0,
            imageTimeout: 15000,
            removeContainer: true
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

    try {
        // Generar y descargar PDF
        await html2pdf()
            .set(opt)
            .from(element)
            .save();
    } catch (error) {
        console.error('Error al generar PDF:', error);
        alert('Hubo un error al generar el PDF. Por favor, intenta usar la función de impresión del navegador (Ctrl+P) y guarda como PDF.');
    } finally {
        // Restaurar estado
        element.classList.remove('generating-pdf');
        
        // Restaurar posición de scroll
        window.scrollTo(0, scrollPosition);
        
        // Restaurar botón
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.style.opacity = '1';
            downloadBtn.style.cursor = 'pointer';
        }
    }
}

