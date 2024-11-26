const optionsContainer = document.getElementById('price-options');

optionsContainer.addEventListener('click', e => {
    const selectedOption = e.target.closest('div');
    if (!selectedOption) return;

    Array.from(optionsContainer.children).forEach(option => {
        option.classList.remove('bg-[#17354E]', 'text-white');
        option.classList.add('bg-white', 'text-[#17354E]');
    });

    selectedOption.classList.add('bg-[#17354E]', 'text-white');
    selectedOption.classList.remove('bg-white', 'text-[#17354E]');
});

const optionsContainerMobile = document.getElementById('price-options-mobile');

optionsContainerMobile.addEventListener('click', e => {
    const selectedOption = e.target.closest('div');
    if (!selectedOption) return;

    Array.from(optionsContainerMobile.children).forEach(option => {
        option.classList.remove('bg-[#17354E]', 'text-white');
        option.classList.add('bg-white', 'text-[#17354E]');
    });

    selectedOption.classList.add('bg-[#17354E]', 'text-white');
    selectedOption.classList.remove('bg-white', 'text-[#17354E]');
});
