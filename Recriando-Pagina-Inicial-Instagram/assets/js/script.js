let time = 5000,
    currentImageIndex = 0,
    imagem = document
                .querySelectorAll("#nLFdg img")
    max = imagem.length;

function nextImage() {

    imagem[currentImageIndex]
        .classList.remove("aXOnh")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    imagem[currentImageIndex]
        .classList.add("aXOnh")

}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)