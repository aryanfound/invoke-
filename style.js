const content21 = document.getElementById('content21');
content21.addEventListener('mouseover', () => {
    content21.style.transform = "translateX(-20%)";
});

content21.addEventListener('mouseout', () => {
    content21.style.transform = "translateX(0%)"; /* Reset to original position */
});

const content3=document.getElementById('content3');
content3.addEventListener('mouseover',()=>{
    content3.style.transform="translateX(20%)"
})
content3.addEventListener('mouseout', () => {
    content3.style.transform = "translateX(0%)"; /* Reset to original position */
});
const content4 = document.getElementById('content4');
content4.addEventListener('mouseover', () => {
    content4.style.transform = "translateX(-20%)";
});
content4.addEventListener('mouseout', () => {
    content4.style.transform = "translateX(0%)"; /* Reset to original position */
});
const content5=document.getElementById('content5');
content5.addEventListener('mouseover',()=>{
    content5.style.transform="translateX(20%)"
})
content5.addEventListener('mouseout', () => {
    content5.style.transform = "translateX(0%)"; /* Reset to original position */
});
document.addEventListener("DOMContentLoaded",function(){
    this.body.style.display="block";
})

