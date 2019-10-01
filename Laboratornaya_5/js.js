let imgs= document.querySelectorAll('.images img');
let block = document.querySelectorAll('.imagesContainers .imagesContainer');
let imgsBlock = document.querySelector('.images');
let currentImg;

imgs[1].addEventListener('dragstart', dragStart);
imgs[1].addEventListener('dragend', dragEnd);  


for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('dragover', dragOver);
    block[i].addEventListener('dragenter', dragEnter);
    block[i].addEventListener('dragleave', dragLeave);
    block[i].addEventListener('drop', dragDrop);
}
imgsBlock.addEventListener('dragover', dragOver);
imgsBlock.addEventListener('dragenter', dragEnterImgs);
imgsBlock.addEventListener('dragleave', dragLeaveImgs);
imgsBlock.addEventListener('drop', dragDropImgs);

function dragStart(){
    currentImg = this;
    setTimeout(()=>{
        this.style.display = 'none';  
    }, 0)
}

function dragEnd(){
    this.style.display = 'block';
}

function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
    this.style.background = '#ffa3a3';
}
function dragLeave(e){
    e.preventDefault();
    this.style.background = '#fff';
}
function dragDrop(){
    this.style.background = '#fff';
    if(this.childNodes.length <= 0){
        this.append(currentImg)
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('dragstart', dragStart);
            imgs[i].addEventListener('dragend', dragEnd);  
            imgs[i].draggable = 'true';
        }
    }
}
function dragEnterImgs(e){
    e.preventDefault();
    this.style.border = '5px dashed #000';
}
function dragLeaveImgs(e){
    e.preventDefault();
    this.style.border = 'none';
}
function dragDropImgs(){
    this.style.border = 'none';
    this.append(currentImg);
}