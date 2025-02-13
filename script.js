const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

const responseMessageContainer = document.getElementById('responseMessage');

function addSticker(url) {
    const sticker = document.createElement('img');
    sticker.src = url;
    sticker.classList.add('sticker');
    sticker.alt = 'Sticker'; 
    sticker.style.maxWidth = '147px';

    responseMessageContainer.appendChild(sticker);

    setTimeout(() => {
        sticker.style.transform = "translateY(0)";
        sticker.style.opacity = "1";
    }, 100);
}

yesButton.addEventListener('click', () => {
    yesButton.style.display = 'none';
    noButton.style.display = 'none';

    responseMessageContainer.innerHTML = 'Yay! I love you most, babyyy!!';
    responseMessageContainer.style.fontSize = '32px'; 
    responseMessageContainer.style.textAlign = 'center';
    responseMessageContainer.style.color = '#ff69b4';
    responseMessageContainer.style.fontWeight = 'bold';

    addSticker('https://media.tenor.com/suQEs-1e5Z0AAAAj/cutie-cat-chan.gif'); 
});

noButton.addEventListener('click', () => {
    yesButton.style.display = 'none';
    noButton.style.display = 'none';

    responseMessageContainer.innerHTML = 'Aww, maybe next time?';
    responseMessageContainer.style.fontSize = '32px';
    responseMessageContainer.style.textAlign = 'center';
    responseMessageContainer.style.color = '#ff6347';
    responseMessageContainer.style.fontWeight = 'bold';

    addSticker('https://media.tenor.com/JQylNRYWG9QAAAAj/sad.gif'); 
});

const stickyNotes = document.querySelectorAll('.sticky-note');

stickyNotes.forEach(note => {
    note.addEventListener('click', () => {
        note.classList.toggle('expanded');
    });
});
