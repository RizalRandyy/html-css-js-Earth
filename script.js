function ubahGambar(resolution) {
    let gambar = document.getElementById('gambar');
    switch (resolution) {
        case '144p':
            gambar.src = 'images/144.jpeg';
            break;
        case '240p':
            gambar.src = 'images/240.jpeg';
            break;
        case '480p':
            gambar.src = 'images/480.jpeg';
            break;
        case '720p':
            gambar.src = 'images/720.jpeg';
            break;
        case '1080p':
            gambar.src = 'images/1080.png';
            break;
        default:
            gambar.src = 'images/11.png';
    }
}