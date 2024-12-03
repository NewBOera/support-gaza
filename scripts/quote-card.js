document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones con la clase "more-btn"
    const moreButtons = document.getElementsByClassName('more-btn');
    console.log(moreButtons);

    // moreButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         alert('You clicked the more button');
    //         // Encuentra el artículo al que pertenece el botón
    //         const article = button.closest('article');

    //         if (article) {
    //             // Encuentra los elementos con las clases "famous-card" y "famous-quote" dentro de este artículo
    //             const famousCard = article.querySelector('.famous-card');
    //             const famousQuote = article.querySelector('.famous-quote');

    //             // Oculta 'famous-card' y muestra 'famous-quote'
    //             if (famousCard && famousQuote) {
    //                 famousCard.classList.add('hidden');
    //                 famousQuote.classList.remove('hidden');
    //             }
    //         }
    //     });
    // });
});
