const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');
const initialInfo = document.querySelector('.initial-info');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = () => {
  input.click();
}

// When browse
input.addEventListener('change', function(){
  file = this.files[0];
  dragArea.classList.add('active');
  displayFile();
});


// When the file is inside the drag area

dragArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dragText.textContent = 'Release to Upload';
  dragArea.classList.add('active');
});

// When the file leaves the drag area

dragArea.addEventListener('dragleave', () => {
  dragText.textContent = 'Drag and Drop';
  dragArea.classList.remove('active');
});

// When the file is dropped in the drag area
dragArea.addEventListener('drop', (e) => {

  e.preventDefault();
  file = e.dataTransfer.files[0];
  displayFile();
});

function displayFile(){
  let fileType = file.type;

  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

  if(validExtensions.includes(fileType)){
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<div class="uploaded-image">
      <img src="${fileURL}" alt="">
      <button type="button" class="remove-btn"><i class="fa-solid fa-times"></i></button>
    </div>`;
      dragArea.innerHTML = imgTag;
    }
    fileReader.readAsDataURL(file);
    dragArea.classList.remove('active');
  } else {
    alert('This file is not an image');
    dragArea.classList.remove('active');
  }
}

window.onclick = (e) => {
  if(e.target.classList.contains('remove-btn')){
    e.target.parentElement.remove();
    dragArea.appendChild(initialInfo);
  }else if(e.target.parentElement.classList.contains('remove-btn')){
    e.target.parentElement.parentElement.remove();
    dragArea.appendChild(initialInfo);
  }
}