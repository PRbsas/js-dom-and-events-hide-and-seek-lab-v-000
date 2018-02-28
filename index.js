function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  let ranked = document.querySelectorAll('.ranked-list li')
  for (let element of ranked) {
    element.innerHTML = parseInt(element.innerHTML) + n
  }
}

function deepestChild () {
  // return document.getElementById('grand-node').lastElementChild.innerText
  let current = document.getElementById('grand-node')
  let next = current.children[0]

  while(next) {
    current = next
    next = current.children[0]
  }
  return current
}
