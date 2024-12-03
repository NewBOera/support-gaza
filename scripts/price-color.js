document.addEventListener('DOMContentLoaded', () => {
    const priceOptions = document.querySelectorAll('#price-options > div');

    priceOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remover las clases activas de todos los elementos
            priceOptions.forEach(opt => {
                opt.classList.remove('bg-[#17354E]', 'text-white');
                opt.classList.add('bg-white', 'text-[#17354E]');
            });

            // Añadir las clases activas al elemento clickeado
            option.classList.add('bg-[#17354E]', 'text-white');
            option.classList.remove('bg-white', 'text-[#17354E]');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const priceOptionsMobile = document.querySelectorAll('#price-options-mobile > div');

    priceOptionsMobile.forEach(option => {
        option.addEventListener('click', () => {
            // Remover las clases activas de todos los elementos
            priceOptionsMobile.forEach(opt => {
                opt.classList.remove('bg-[#17354E]', 'text-white');
                opt.classList.add('bg-white', 'text-[#17354E]');
            });

            // Añadir las clases activas al elemento clickeado
            option.classList.add('bg-[#17354E]', 'text-white');
            option.classList.remove('bg-white', 'text-[#17354E]');
        });
    });
});
