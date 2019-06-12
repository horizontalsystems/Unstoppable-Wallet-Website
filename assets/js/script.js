function easySteps() {
  const screens = document.querySelectorAll('.frame-screen')
  const tabs = document.querySelectorAll('.tabs .item')

  const onClick = function (element) {
    screens.forEach(function (screen) {
      screen.style.display = 'none'
    })

    // reset previous active item
    tabs.forEach(function (item) {
      item.className = 'item'
    })

    const screen = document.getElementById('frame-' + element.id)
    if (!!screen) {
      screen.style.display = 'block'
    }

    // set new active item
    element.className = 'item active'
  }

  tabs.forEach(function (item) {
    item.addEventListener('click', function () {
      onClick(item)
    })
  })
}

function dropdownMenu() {
  const lang = document.querySelector('.with-dropdown')
  const menu = document.querySelector('.with-dropdown .nav-dropdown')
  if (!menu) {
    return
  }

  lang.addEventListener('mouseover', function () {
    menu.className = 'nav-dropdown active'
  })

  lang.addEventListener('mouseout', function () {
    menu.className = 'nav-dropdown'
  })
}

document.addEventListener('DOMContentLoaded', function () {
  easySteps()
  dropdownMenu()
})
