//  Variables
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close');

// Event listeners

openBtn.addEventListener('click',()=>{
    modalContainer.style.display="flex";
})

closeBtn.addEventListener('click',()=>{
    modalContainer.style.display='none';
})

window.addEventListener('click',(e)=>{
    if(e.target === modalContainer){
        modalContainer.style.display='none';
    }
})