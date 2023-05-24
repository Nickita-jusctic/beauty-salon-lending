
let offset = 0
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 1100;
    if(offset > 2200){
        offset =0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -= 1100;
    if(offset < 0){
        offset =0;
    }
    sliderLine.style.left = -offset + 'px';
})



// girls
document.querySelectorAll('.cursor').forEach(node=>{
    document.addEventListener('mousemove', e=>{
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
    })
})



