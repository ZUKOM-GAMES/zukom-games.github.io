// Renders the cards of a gallery page (projects.html / assets.html).
// Each page loads a data file that defines window.GALLERY_ITEMS = [ { title, url, image, description }, ... ]
(function () {
    var items = window.GALLERY_ITEMS || [];
    var container = document.getElementById('gallery');
    var emptyNote = document.getElementById('gallery-empty');
    if (!container) { return; }

    if (!items.length) {
        if (emptyNote) { emptyNote.hidden = false; }
        return;
    }

    var buttonLabel = container.dataset.button || 'VIEW';
    if (container.dataset.layout === 'masonry') {
        container.classList.add('masonry');
    }

    items.forEach(function (item) {
        var card = document.createElement('a');
        card.className = 'card';
        card.href = item.url;
        card.target = '_blank';
        card.rel = 'noopener';

        var imageBox = document.createElement('div');
        imageBox.className = 'card-image';
        if (item.image) {
            var img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;
            img.loading = 'lazy';
            imageBox.appendChild(img);
        } else {
            var placeholder = document.createElement('span');
            placeholder.className = 'card-placeholder';
            placeholder.textContent = 'ZUKOM';
            imageBox.appendChild(placeholder);
        }
        card.appendChild(imageBox);

        var title = document.createElement('h3');
        title.textContent = item.title;
        card.appendChild(title);

        if (item.description) {
            var desc = document.createElement('p');
            desc.textContent = item.description;
            card.appendChild(desc);
        }

        if (item.price) {
            var price = document.createElement('span');
            price.className = 'card-price';
            price.textContent = item.price;
            card.appendChild(price);
        }

        var button = document.createElement('span');
        button.className = 'card-button';
        button.textContent = buttonLabel + ' >';
        card.appendChild(button);

        container.appendChild(card);
    });
})();
