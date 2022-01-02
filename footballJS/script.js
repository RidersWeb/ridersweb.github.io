ball.style.left = field.clientWidth/2 - field.clientLeft - 15 + 'px'
ball.style.top = field.clientHeight/2 - field.clientTop - 15 + 'px'

let countHome = 0,
      countGuest = 0

home.innerHTML = countHome
guest.innerHTML = countGuest

field.onclick = event => {
  let fieldCoords = event.target.getBoundingClientRect();

  const ballCoords = {
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2,
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2
  }

  if(ballCoords.left < 0) ballCoords.left = 0

  if(ballCoords.top < 0) ballCoords.top = 0

  if(ballCoords.left > field.clientWidth - ball.clientWidth) ballCoords.left = field.clientWidth - ball.clientWidth

  if(ballCoords.top > field.clientHeight - ball.clientHeight) ballCoords.top = field.clientHeight - ball.clientHeight

 console.log(ballCoords.left, ballCoords.top)



  ball.style.left = ballCoords.left + 'px'
  ball.style.top = ballCoords.top + 'px'

  if(ballCoords.left < 45 && (ballCoords.top > 118 && ballCoords.top < 235)) {
    if(countGuest > 8) {
      return alert("GUEST VICTORY")
    }
    countGuest++
    guest.innerHTML = countGuest
  }

  if(ballCoords.left > 513 && (ballCoords.top > 118 && ballCoords.top < 235)) {
    if(countHome > 8) {
      return alert("HOME VICTORY")
    }
    countHome++
    home.innerHTML = countHome
  }

  

}


