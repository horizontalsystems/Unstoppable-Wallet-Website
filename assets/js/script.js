function easySteps() {
  const screens = document.querySelectorAll('.frame-screen')
  const steps = document.querySelectorAll('.steps .item')

  const onClick = function (element) {
    screens.forEach(function (screen) {
      screen.style.display = 'none'
    })

    // reset previous active item
    steps.forEach(function (item) {
      item.className = 'item'
    })

    const screen = document.getElementById('frame-' + element.id)
    if (!!screen) {
      screen.style.display = 'block'
    }

    // set new active item
    element.className = 'item active'
  }

  steps.forEach(function (item) {
    item.addEventListener('click', function () {
      onClick(item)
    })
  })
}

function dropdownMenu() {
  const lang = document.querySelector('.languages')
  const menu = document.querySelector('.languages .menu')
  if (!menu) {
    return
  }

  lang.addEventListener('mouseover', function () {
    menu.className = 'menu active'
  })

  lang.addEventListener('mouseout', function () {
    menu.className = 'menu'
  })
}

document.addEventListener('DOMContentLoaded', function () {
  easySteps()
  dropdownMenu()
})
