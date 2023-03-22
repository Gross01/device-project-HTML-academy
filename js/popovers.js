const popoverProductCatalog = document.querySelector('.popover-product-catalog');
const productCatalogLink = document.querySelector('.site-navigation__product-catalog');
const popoverOpen = document.querySelector('.popover--open');
const popoverBasket = document.querySelector('.popover-basket');
const basket = document.querySelector('.user-menu__item:last-child')
const deliveryInfo = document.querySelector('.delivery-info');
const modal = document.querySelector('.modal-container')
const modalCloseButton = document.querySelector('.modal__close-button');

productCatalogLink.addEventListener('click', function () {
  popoverProductCatalog.classList.add('popover--open')
})

basket.addEventListener('click', function () {
  popoverBasket.classList.add('popover--open')
})

deliveryInfo.addEventListener('click', function () {
  modal.classList.remove('modal--close')
})

modalCloseButton.addEventListener('click', function () {
  modal.classList.add('modal--close')
})

