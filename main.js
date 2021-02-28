const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');

draggableElements.forEach(element =>{
    element.addEventListener('dragstart', dragStart);
    // element.addEventListener('drag', drag);
    // element.addEventListener('dragend', dragEnd);
})


droppableElements.forEach(element => {
    element.addEventListener('dragenter',dragEnter)
    element.addEventListener('dragover',dragOver)
    element.addEventListener('dragleave',dragLeave)
    element.addEventListener('drop',drop)
})


function dragStart(event){
    event.dataTransfer.setData('id', event.target.id)
}

function dragOver(event){
    event.preventDefault();
}

function dragEnter(event){
    event.target.classList.add('droppable-hover')
}

function dragLeave(event){
    event.target.classList.remove('droppable-hover')
}


function drop(event){
    event.target.classList.remove('droppable-hover');
    
    const draggedElementId = event.dataTransfer.getData('id');

    let child = document.getElementById(draggedElementId);

    let newParentDiv = document.getElementById(event.target.id);

    newParentDiv.appendChild(child);
}