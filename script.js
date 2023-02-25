let board = document.getElementsByClassName('board')[0]
let random = true;
let lastRenderTime = 0
let speed = 4
let gameover = false
let x = false
let o = false
let m = 0
let n = 0
let onep = document.getElementById('onep')
let twop = document.getElementById('twop')
let twopbool = false
let onepbool = true
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let turnx = true
let turn0 = false
if (turnx) { document.getElementById('xturn').classList.add('xturn') }
for (let i = 1; i <= 9; i++) {
  board.innerHTML += `<button id = "t${i}" class = "tiles" onclick = "game('t${i}')"></button>`
}
let you = document.getElementsByClassName('you')[0]
let comp = document.getElementsByClassName('comp')[0]
you.innerHTML = m
comp.innerHTML = n
let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let t3 = document.getElementById('t3')
let t4 = document.getElementById('t4')
let t5 = document.getElementById('t5')
let t6 = document.getElementById('t6')
let t7 = document.getElementById('t7')
let t8 = document.getElementById('t8')
let t9 = document.getElementById('t9')

let restart = document.getElementsByClassName('restart')[0]
let tiles = document.querySelectorAll('.tiles')
let tilelist = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9']

// for twop
twoplayer = () => {
  document.getElementById('twop').style.color = "white"
  document.getElementById('twop').style.backgroundColor = "black"
  document.getElementById('onep').style.backgroundColor = "transparent"
  document.getElementById('onep').style.color = "black"
  document.getElementsByClassName('twopboard')[0].style.visibility = "unset"
  twopbool = true
  onepbool = false
  player1.innerHTML = 'player1(X) : <span class="you"></span>'
  player2.innerHTML = 'player2(0) : <span class="comp"></span>'
  m = 0
  n = 0
  document.getElementsByClassName('you')[0].innerHTML = m
  document.getElementsByClassName('comp')[0].innerHTML = n

}
oneplayer = () => {
  document.getElementById('twop').style.color = "black"
  document.getElementById('twop').style.backgroundColor = "transparent"
  document.getElementById('onep').style.backgroundColor = "black"
  document.getElementById('onep').style.color = "white"
  document.getElementsByClassName('twopboard')[0].style.visibility = "hidden"
  onepbool = true
  twopbool = false
  player1.innerHTML = 'your score : <span class="you"></span>'
  player2.innerHTML = 'computer : <span class="comp"></span>'
  m = 0
  n = 0
  document.getElementsByClassName('you')[0].innerHTML = m
  document.getElementsByClassName('comp')[0].innerHTML = n

}

restart.onclick = function startgame() {

  tiles.forEach(function clear(entry) {

    entry.innerHTML = ''
    entry.disabled = false
    entry.style.color = 'black'
  })
  gameover = false
  tilelist = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9']
  turnx = true
  turn0 = false
}
function game(a) {
  if (onepbool) {
    document.getElementById('twop').addEventListener("click", function() {
      tiles.forEach(function clear(entry) {

        entry.innerHTML = ''
        entry.disabled = false
        entry.style.color = 'black'
      })
      gameover = false
      tilelist = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9']
    })



    let t = tilelist.indexOf(a)


    if (t > -1) {
      tilelist.splice(t, 1)
    }

    document.getElementById(a).innerText = 'X'
    document.getElementById(a).disabled = "disabled"



    // FOR (1,2,3) 
    if (t3.innerHTML == '' && t2.innerHTML == 'X' && t1.innerHTML == 'X') {
      t3.innerHTML = 'O'
      t3.disabled = 'disabled'
      let t = tilelist.indexOf('t3')
      random = false
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t2.innerHTML == '' && t3.innerHTML == 'X' && t1.innerHTML == 'X') {
      t2.innerHTML = 'O'
      t2.disabled = 'disabled'
      let t = tilelist.indexOf('t2')
      random = false
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t1.innerHTML == '' && t3.innerHTML == 'X' && t2.innerHTML == 'X') {
      t1.innerHTML = 'O'
      t1.disabled = 'disabled'
      let t = tilelist.indexOf('t1')
      random = false
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    // for(1,4,7)
    else if (t7.innerHTML == '' && t4.innerHTML == 'X' && t1.innerHTML == 'X') {
      t7.innerHTML = 'O'
      t7.disabled = 'disabled'
      let t = tilelist.indexOf('t7')
      random = false
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t4.innerHTML == '' && t7.innerHTML == 'X' && t1.innerHTML == 'X') {
      t4.innerHTML = 'O'
      t4.disabled = 'disabled'
      let t = tilelist.indexOf('t4')
      random = false
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t1.innerHTML == '' && t7.innerHTML == 'X' && t4.innerHTML == 'X') {
      t1.innerHTML = 'O'
      t1.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t1')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    // for(1,5,9)
    else if (t9.innerHTML == '' && t5.innerHTML == 'X' && t1.innerHTML == 'X') {
      t9.innerHTML = 'O'
      t9.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t9')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }

    else if (t5.innerHTML == '' && t9.innerHTML == 'X' && t1.innerHTML == 'X') {
      t5.innerHTML = 'O'
      t5.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t5')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }

    else if (t1.innerHTML == '' && t9.innerHTML == 'X' && t5.innerHTML == 'X') {
      t1.innerHTML = 'O'
      t1.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t1')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }

    // for (3,6,9)

    else if (t3.innerHTML == '' && t6.innerHTML == 'X' && t9.innerHTML == 'X') {
      t3.innerHTML = 'O'
      t3.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t3')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t6.innerHTML == '' && t3.innerHTML == 'X' && t9.innerHTML == 'X') {
      t6.innerHTML = 'O'
      t6.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t6')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t9.innerHTML == '' && t6.innerHTML == 'X' && t3.innerHTML == 'X') {
      t9.innerHTML = 'O'
      t9.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t9')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    // for(7,8,9)
    else if (t7.innerHTML == '' && t8.innerHTML == 'X' && t9.innerHTML == 'X') {
      t7.innerHTML = 'O'
      t7.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t7')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t8.innerHTML == '' && t7.innerHTML == 'X' && t9.innerHTML == 'X') {
      t8.innerHTML = 'O'
      t8.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t8')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t9.innerHTML == '' && t7.innerHTML == 'X' && t8.innerHTML == 'X') {
      t9.innerHTML = 'O'
      t9.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t9')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    // for(3,5,7)

    else if (t3.innerHTML == '' && t5.innerHTML == 'X' && t7.innerHTML == 'X') {
      t3.innerHTML = 'O'
      t3.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t3')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t5.innerHTML == '' && t3.innerHTML == 'X' && t7.innerHTML == 'X') {
      t5.innerHTML = 'O'
      t5.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t5')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t7.innerHTML == '' && t3.innerHTML == 'X' && t5.innerHTML == 'X') {
      t7.innerHTML = 'O'
      t7.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t7')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    // for (4,5,6)
    else if (t4.innerHTML == '' && t5.innerHTML == 'X' && t6.innerHTML == 'X') {
      t4.innerHTML = 'O'
      t4.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t4')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t5.innerHTML == '' && t4.innerHTML == 'X' && t6.innerHTML == 'X') {
      t5.innerHTML = 'O'
      t5.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t5')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t6.innerHTML == '' && t4.innerHTML == 'X' && t5.innerHTML == 'X') {
      t6.innerHTML = 'O'
      t6.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t6')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    // for(2,5,8)
    else if (t2.innerHTML == '' && t8.innerHTML == 'X' && t5.innerHTML == 'X') {
      t2.innerHTML = 'O'
      t2.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t2')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t5.innerHTML == '' && t2.innerHTML == 'X' && t8.innerHTML == 'X') {
      t5.innerHTML = 'O'
      t5.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t5')
      if (t > -1) {
        tilelist.splice(t, 1)

      }
    }
    else if (t8.innerHTML == '' && t2.innerHTML == 'X' && t5.innerHTML == 'X') {
      t8.innerHTML = 'O'
      t8.disabled = 'disabled'
      random = false
      let t = tilelist.indexOf('t8')
      if (t > -1) {

        tilelist.splice(t, 1)

      }
    }



    else {

      random = true
    }
    if (random) {
      let comp = Math.floor(Math.random() * tilelist.length)
      let opp = tilelist[comp]

      let c = tilelist.indexOf(opp)
      if (c > -1) {
        tilelist.splice(c, 1)
      }
      try {
        document.getElementById(opp).innerText = "O"
        document.getElementById(opp).disabled = "disabled"
      }
      catch {
        setTimeout(function() {
          tiles.forEach(function clear(entry) {

            entry.innerHTML = ''
            entry.disabled = false
            entry.style.color = 'black'
          })
          gameover = false
          tilelist = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9']
        }, 1000)
      }
      random = false
    }
  }
  else if (twopbool) {

    document.getElementById('onep').addEventListener("click", function() {
      tiles.forEach(function clear(entry) {

        entry.innerHTML = ''
        entry.disabled = false
        entry.style.color = 'black'
      })
      gameover = false
      tilelist = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9']
    })
    let t = tilelist.indexOf(a)


    if (t > -1) {
      tilelist.splice(t, 1)
    }
    if (tilelist.length == 0) {
      setTimeout(function() {
        tiles.forEach(function clear(entry) {

          entry.innerHTML = ''
          entry.disabled = false
          entry.style.color = 'black'
        })
        gameover = false
        tilelist = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9']
        turnx = true
        turn0 = false
      }, 750)
    }


    if (turnx) {
      // document.getElementById('xturn').classList.add('xturn')
      // document.getElementById('oturn').classList.remove('oturn')
      // document.getElementById('xturn-oturn').innerHTML = "X's turn"
      document.getElementById(a).innerText = "X"
      turnx = false
      turn0 = true
    }
    else if (turn0) {
    //   document.getElementById('xturn').classList.remove('xturn')
    //   document.getElementById('oturn').classList.add('oturn')
    //   document.getElementById('xturn-oturn').innerHTML = "0's turn"
      document.getElementById(a).innerText = "0"
      turnx = true
      turn0 = false
    }
    document.getElementById(a).disabled = "disabled"



  }
}



// for game over or win
function main(currentTime) {
  window.requestAnimationFrame(main)
  const differncebtwneachrender = (currentTime - lastRenderTime) / 1000
  if (differncebtwneachrender < 1 / speed) return
  lastRenderTime = currentTime

  if (turnx) {
    document.getElementById('xturn').classList.add('xturn')
    document.getElementById('oturn').classList.remove('oturn')
    document.getElementById('xturn-oturn').innerHTML = "X's turn"
  }
  else if(turn0){
    
      document.getElementById('xturn').classList.remove('xturn')
      document.getElementById('oturn').classList.add('oturn')
      document.getElementById('xturn-oturn').innerHTML = "0's turn"
  }
  checkwin()
  isgameover()

}
window.requestAnimationFrame(main);
// (1,2,3)

function checkwin() {
  if ((t1.innerHTML == t2.innerHTML) && (t2.innerHTML == t3.innerHTML) && (t1.innerHTML !== "")) {
    t1.style.color = 'red'
    t2.style.color = 'red'
    t3.style.color = 'red'
    gameover = true
    random = false
    if (t1.innerHTML == 'X') { x = true } else { o = true }
    gamerestart()
  }
  // for(1,4,7)
  else if ((t1.innerHTML == t4.innerHTML) && (t4.innerHTML == t7.innerHTML) && (t1.innerHTML !== "")) {
    t1.style.color = 'red'
    t4.style.color = 'red'
    t7.style.color = 'red'
    gameover = true
    random = false
    if (t1.innerHTML == 'X') { x = true } else { o = true }
    gamerestart()
  }
  // for(1,5,9)
  else if ((t1.innerHTML == t5.innerHTML) && (t5.innerHTML == t9.innerHTML) && (t1.innerHTML !== "")) {
    t1.style.color = 'red'
    t5.style.color = 'red'
    t9.style.color = 'red'
    gameover = true
    random = false
    if (t1.innerHTML == 'X') { x = true } else { o = true }
    gamerestart()
  }
  // for(3,6,9)
  else if ((t3.innerHTML == t6.innerHTML) && (t6.innerHTML == t9.innerHTML) && (t3.innerHTML !== "")) {
    t3.style.color = 'red'
    t6.style.color = 'red'
    t9.style.color = 'red'
    gameover = true
    random = false
    if (t3.innerHTML == 'X') { x = true } else { o = true }
    gamerestart()
  }
  // for(3,5,7)
  else if ((t3.innerHTML == t5.innerHTML) && (t5.innerHTML == t7.innerHTML) && (t3.innerHTML !== "")) {
    t3.style.color = 'red'
    t5.style.color = 'red'
    t7.style.color = 'red'
    gameover = true
    random = false
    if (t3.innerHTML == 'X') { x = true } else { o = true }
    gamerestart()
  }
  // for(7,8,9)
  else if ((t7.innerHTML == t8.innerHTML) && (t8.innerHTML == t9.innerHTML) && (t7.innerHTML !== "")) {
    t7.style.color = 'red'
    t8.style.color = 'red'
    t9.style.color = 'red'
    gameover = true
    random = false
    if (t7.innerHTML == 'X') { x = true } else { o = true }
    gamerestart()
  }
  // for(2,5,8)
  else if ((t2.innerHTML == t5.innerHTML) && (t5.innerHTML == t8.innerHTML) && (t2.innerHTML !== "")) {
    t2.style.color = 'red'
    t8.style.color = 'red'
    t5.style.color = 'red'
    gameover = true
    random = false
    if (t2.innerHTML == 'X') { x = true } else { o = true }
    gamerestart()
  }
  // for(4,5,6)
  else if ((t4.innerHTML == t5.innerHTML) && (t5.innerHTML == t6.innerHTML) && (t4.innerHTML !== "")) {
    t4.style.color = 'red'
    t5.style.color = 'red'
    t6.style.color = 'red'
    gameover = true
    random = false
    if (t4.innerHTML == 'X') { x = true } else { o = true }
    gamerestart()
  }

}
function isgameover() {
  if (gameover) {
    if (x) {
      m += 1
      x = false
      turnx = true
      turn0 = false
      if (m % 3 == 0) { document.getElementsByClassName('you')[0].innerHTML = m / 3 }

    }
    else if (o) {
      n += 1
      o = false
      turnx = false
      turn0 = true
      if (n % 3 == 0) { document.getElementsByClassName('comp')[0].innerHTML = n / 3 }


    }

    gameover = false
    tilelist = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9']
    console.log("x")


  }
}
function gamerestart() {
  setTimeout(function() {
    tiles.forEach(function clear(entry) {

      entry.innerHTML = ''
      entry.disabled = false
      entry.style.color = 'black'
    })

  }, 750)
}

