var pluse=document.getElementById('pluse')
var moin=document.getElementById('moins')
var result=document.getElementById('result')
var resit=document.getElementById('resit')

var num=0

pluse.addEventListener('click',function(){
num ++
if(num>0){
    result.style.color='red'
}
result.textContent=num})





moin.addEventListener('click',function(){
num--
if(num<0){
    result.style.color='blue'
}
result.textContent=num})




resit.addEventListener('click',function(){
    num=0
    
        result.style.color='black'
    
result.textContent=num})