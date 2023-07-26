const s1 = document.querySelector('#p1')
const s2 = document.querySelector('#p2')
const s3 = document.querySelector('#p3')
const selectthis = document.querySelector('#players');
let maxval = 5;
let gameover = false
selectthis.addEventListener('change', function () { maxval = parseInt(this.value) })
s1.addEventListener('click',()=>
{
    let scorep1 = document.querySelector('#scorep1')
    score = parseInt(scorep1.innerText)
    if(score!==maxval&&gameover==false){
    scorep1.innerText = score+1}
    if(score == maxval-1){ gameover = true}
})
s2.addEventListener('click',()=>
{
    let scorep2 = document.querySelector('#scorep2')
    scorem =parseInt(scorep2.innerText)
    if(scorem!==maxval&&gameover==false){
    scorep2.innerText = scorem+1}
    if(scorem == maxval-1){ gameover = true}
})
s3.addEventListener('click',()=>
{
    let scorep2 = document.querySelector('#scorep2')
    let scorep1 = document.querySelector('#scorep1')
    scorep2.innerText = 0
    scorep1.innerText = 0
    gameover = false
   
})
