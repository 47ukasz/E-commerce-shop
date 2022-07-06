let appBody, menuBtn, menu, allImgs, prevBtn, nextBtn, navCartBtn, cart, productInput, minusBtn, plusBtn, allShowOfPhotos, galleryPhoto, addToCartBtn, galleryImg, previewBox, photosContent, photosNext, photosPrev, photosGallery, closeGallery, cartAmmount
let slideIndex = 0
let acctualValue = 0
let index = 0
let currentIndex = 0

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    appBody = document.querySelector('body')
    menuBtn = document.querySelector('.nav__mobile--menuBtn')
    menu = document.querySelector('.nav__mobile--menu')
    prevBtn = document.querySelector('.main__slider--prevBtn')
    nextBtn = document.querySelector('.main__slider--nextBtn')
    allImgs = document.querySelectorAll('.main__slider--img')
    navCartBtn = document.querySelectorAll('.nav__cart')
    cart = document.querySelector('.main__cart')
    productInput = document.querySelector('.main__productInfo--input')
    minusBtn = document.querySelector('.main__productInfo--input-minus')
    plusBtn = document.querySelector('.main__productInfo--input-plus')
    allShowOfPhotos = document.querySelectorAll('.main__gallery--showof-photo')
    galleryPhoto = document.querySelector('.main__gallery--img')
    addToCartBtn = document.querySelector('.main__productInfo--addBtn')
    photosGallery = document.querySelector('.photos')
    galleryImg = document.querySelector('.photos__imgBox--img')
    previewBox = document.querySelector('.photos__preview')
    photosContent = document.querySelector('.photos__content')
    photosNext = document.querySelector('.photos__imgBox--next')
    photosPrev = document.querySelector('.photos__imgBox--previous')
    closeGallery = document.querySelector('.photos__content--close')
}

const prepareDOMEvents = () => {
    menuBtn.addEventListener('click', handleMenu)
    nextBtn.addEventListener('click', handleNextSlide)
    prevBtn.addEventListener('click', handlePrevSlide)
    navCartBtn.forEach(btn => btn.addEventListener('click', handleCart))
    plusBtn.addEventListener('click', handleUpgradeAmmountOfProduct)
    minusBtn.addEventListener('click', handleDowngradeAmmountOfProduct)
    allShowOfPhotos.forEach(photo => photo.addEventListener('click', handleGallery))
    addToCartBtn.addEventListener('click', handleCarting)
    photosContent.addEventListener('click', handlePhotoGallery)
    photosNext.addEventListener('click', handleNextPhoto)
    photosPrev.addEventListener('click', handlePrevPhoto)
    galleryPhoto.addEventListener('dblclick', handleOpenGallery)
    closeGallery.addEventListener('click', handleCloseGallery)
}

const handleMenu = () => {
    const shadowBlock = document.querySelector('.shadow')
    menu.classList.toggle('active')
    shadowBlock.classList.toggle('active')

    const closeSVG = '<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>'
    const menuSVG = '<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd" /></svg>'


    if (menu.matches('.active')) {
        menuBtn.textContent = ''
        menuBtn.innerHTML = closeSVG
    } else {
        menuBtn.textContent = ''
        menuBtn.innerHTML = menuSVG
    }
}

const handleNextSlide = () => {
    allImgs.forEach(img => img.classList.remove('active'));
    slideIndex++

    if (slideIndex < allImgs.length) {
        allImgs[slideIndex].classList.add('active')
    } else {
        slideIndex = 0
        allImgs[slideIndex].classList.add('active')
    }
}

const handlePrevSlide = () => {
    allImgs.forEach(img => img.classList.remove('active'));
    slideIndex--

    if (slideIndex < 0) {
        slideIndex = allImgs.length - 1
        allImgs[slideIndex].classList.add('active')
    } else {
        allImgs[slideIndex].classList.add('active')
    }
}

const handleCart = () => {
    cart.classList.toggle('active')
}

const handleUpgradeAmmountOfProduct = () => {
    acctualValue++
    productInput.value = acctualValue
}

const handleDowngradeAmmountOfProduct = () => {
    acctualValue--
    if (acctualValue < 0) {
        acctualValue = 0
    }

    productInput.value = acctualValue
}

const handleGallery = (e) => {
    const src = e.target.getAttribute('src').slice(0, 21) + '.jpg'
    galleryPhoto.setAttribute('src', src)

    allShowOfPhotos.forEach(el => {
        el.parentElement.classList.remove('activePhoto')
        el.previousElementSibling.classList.remove('active')
    })

    e.target.parentElement.classList.add('activePhoto')
    e.target.previousElementSibling.classList.add('active')
}

const handleCarting = () => {

    cartAmmount = document.querySelectorAll('.nav__cart--amount')
    const cartContent = cart.querySelector('.main__cart--content')
    const cartProduct = `                    
    <div class="main__cart--item">
    <div class="main__cart--item-box">
        <img src="./img/image-product-1-thumbnail.jpg" alt="" class="main__cart--item-img">
        <div class="main__cart--item-info">
            <p class="main__cart--item-header">Autumn Limited Edition...</p>
            <p class="main__cart--item-cost">
                $125.00 x <span class="ammount">${acctualValue}</span> <span class="price">$ ${acctualValue * 125}</span>
            </p>
        </div>
    </div>
    <button class="main__cart--item-deleteBtn" onclick="clearCart(event)">
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a" />
            </defs>
            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
        </svg>
    </button>
    </div>`

    if (acctualValue != 0) {
        cartContent.innerHTML = cartProduct
        cartAmmount.forEach(el => el.style.display = 'block')
        cartAmmount.forEach(el => el.textContent = acctualValue)
    } else {
        cartAmmount.forEach(el => el.style.display = 'none')
    }

}

const photosArr = [
    { bigPhoto: './img/image-product-1.jpg', smallPhoto: './img/image-product-1-thumbnail.jpg' },
    { bigPhoto: './img/image-product-2.jpg', smallPhoto: './img/image-product-2-thumbnail.jpg' },
    { bigPhoto: './img/image-product-3.jpg', smallPhoto: './img/image-product-3-thumbnail.jpg' },
    { bigPhoto: './img/image-product-4.jpg', smallPhoto: './img/image-product-4-thumbnail.jpg' },
]

const handlePreviewGallery = () => {


    photosArr.forEach(el => {
        const previewImg = document.createElement('img')
        previewImg.setAttribute('src', photosArr[index].smallPhoto)
        previewImg.setAttribute('data-id', index)
        previewImg.classList.add('photos__preview--img')
        previewBox.append(previewImg)
        index++
    })

}

const handlePhotoGallery = (e) => {
    if (e.target.matches('.photos__preview--img')) {
        currentIndex = e.target.getAttribute('data-id')
    }

    galleryImg.setAttribute('src', photosArr[currentIndex].bigPhoto)
}

const handleNextPhoto = () => {
    currentIndex++

    if (currentIndex === photosArr.length) {
        currentIndex = 0
        galleryImg.setAttribute('src', photosArr[currentIndex].bigPhoto)
    } else {
        galleryImg.setAttribute('src', photosArr[currentIndex].bigPhoto)
    }
}

const handlePrevPhoto = () => {
    currentIndex--

    if (currentIndex < 0) {
        currentIndex = photosArr.length - 1
        galleryImg.setAttribute('src', photosArr[currentIndex].bigPhoto)
    } else {
        galleryImg.setAttribute('src', photosArr[currentIndex].bigPhoto)
    }
}

const handleOpenGallery = () => {
    photosGallery.classList.add('activeFlex')
    handlePreviewGallery()
}

const handleCloseGallery = () => {
    photosGallery.classList.remove('activeFlex')
}

const clearCart = (e) => {
    e.target.closest('.main__cart--content').textContent = ''
    cartAmmount.forEach(el => el.style.display = 'none')
    cart.classList.remove('active')
}

document.addEventListener('DOMContentLoaded', main)
