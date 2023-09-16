const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');


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
});