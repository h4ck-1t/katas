const image = document.getElementById('image')
const modal = document.getElementById('modal')
const modalButton = document.getElementById('modal-button')

function openModal(event) {
  event.preventDefault()
  console.log(modal)
  modal.className += ' modal-open'
}

function closeModal(event) {
  event.preventDefault()
  modal.className = 'modal'
}

image.addEventListener('click', openModal)
modalButton.addEventListener('click', closeModal)
