let items = document.querySelectorAll(".item");
let columns = document.querySelectorAll(".column");

items.forEach(item=>{
    item.addEventListener('dragstart', ()=>{
        item.classList.add('dragging');
    })

    item.addEventListener('dragend',()=>{
        item.classList.remove('dragging');
    })
})

columns.forEach(col=>{
    col.addEventListener('dragover', (e)=>{
        e.preventDefault();
        let draggingItem = document.querySelector('.dragging');
        col.appendChild(draggingItem);
    })
})