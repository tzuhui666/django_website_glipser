function openPopup() {
    document.getElementById('popup-page').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup-page').style.display = 'none';
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });
}

function showDetails(id, heartRate, style, music, instruments) {
    // 設定彈窗的內容
    document.getElementById('details-id').textContent = id + '.';
    document.getElementById('details-heart').textContent = heartRate;
    document.getElementById('details-style').textContent = style;
    document.getElementById('details-music').textContent = music;
    document.getElementById('details-instruments').textContent = instruments;

    // 設置圖片
    const imageSrc = document.querySelector(
        `.gallery-item:nth-child(${id - 47}) img`
    ).src;
    document.getElementById('details-image').src = imageSrc;

    // 顯示彈窗
    document.getElementById('details-popup').style.display = 'flex';
}

function closeDetails() {
    // 隱藏彈窗
    document.getElementById('details-popup').style.display = 'none';
}


