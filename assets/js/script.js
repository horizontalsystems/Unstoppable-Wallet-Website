function easySteps() {
  const screens = document.querySelectorAll('.frame-screen')
  const steps = document.querySelectorAll('.steps .item')

  const stepLeft = document.getElementById('step-left')
  const stepRight = document.getElementById('step-right')

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

  // For mobile with arrow icons
  if (!!stepLeft && !!stepRight) {
    const items = {
      curr: steps[0],
      next: steps[1],
      prev: steps[2]
    }

    const onClickNav = function (isLeft) {
      const curr = items.curr
      const next = items.next
      const prev = items.prev

      if (isLeft) {
        items.curr = prev
        items.prev = next
        items.next = curr
      } else {
        items.curr = next
        items.prev = curr
        items.next = prev
      }

      onClick(items.curr)
    }

    stepLeft.addEventListener('click', function () {
      onClickNav(true)
    })

    stepRight.addEventListener('click', function () {
      onClickNav(false)
    })
  }
}

function scrollMenu() {
  const navBar = document.querySelector('.navbar-nav')
  const navLeft = document.getElementById('nav-left')
  const navRight = document.getElementById('nav-right')
  const navActive = document.querySelector('.nav-item.active')

  if (!!navActive) {
    navActive.scrollIntoView(true)
  }

  const onClick = function (isLeft) {
    //  reached left corner
    if (isLeft && navBar.scrollLeft < 1) {
      return
    }
    //  reached right corner
    if (!isLeft && navBar.scrollWidth <= navBar.scrollLeft + navBar.clientWidth) {
      return
    }

    if (isLeft) {
      navBar.scrollLeft -= 100
    } else {
      navBar.scrollLeft += 100
    }
  }

  if (!!navRight) {
    navRight.addEventListener('click', function () {
      onClick(false)
    })
  }

  if (!!navLeft) {
    navLeft.addEventListener('click', function () {
      onClick(true)
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  easySteps()
  scrollMenu()
})
