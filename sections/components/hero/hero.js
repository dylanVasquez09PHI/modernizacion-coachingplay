// Función para animar contadores
function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let currentValue = 0;
    const increment = Math.ceil(targetValue / 50); // 50 pasos para la animación
    const speed = 30; // milisegundos entre incrementos

    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(counter);
        }

        // Formatear números con miles
        if (targetValue > 100) {
            element.textContent = currentValue.toLocaleString('es-CO');
        } else {
            element.textContent = currentValue;
        }
    }, speed);
}


function initHero() {
    const targets = {
        'counter-tools-1': 120,
        'counter-countries-1': 15,
        'counter-community-1': 4500,
        'counter-facilitadores': 4500,
        'counter-countries-2': 15,
        'counter-tools-2': 120,
        'counter-years': 13,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target.id, targets[entry.target.id]);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    Object.keys(targets).forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

initHero();
