const boxes = document.querySelectorAll(".box")
const text = document.querySelector(".text")

let  array = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
]
let arr = Array(9).fill(null)

function createGame (){
  boxes.forEach((el,index) => {
    el.setAttribute("id", index)
    el.addEventListener("click" , play)
  })
}

let player = "X"
let stop = false
function play(e) {
  let id = e.target.id
  if(arr[id] || stop){
    return
  }
  arr[id] = player

    e.target.textContent = player
  if(payman()){
    stop = true
    text.textContent = "haxtec " + player
  }

  if(!arr.includes(null) && !payman()){
    text.textContent = "VOCH VOQI"
  }


  console.log(payman())
  player = player === "X" ? "O" : "X"

}
createGame()

function payman() {
  return array.some(el => {
    let a = el[0]
    let b = el[1]
    let c = el[2]
    return arr[a] === arr[b] && arr[b] === arr[c] && arr[a]
  })
}