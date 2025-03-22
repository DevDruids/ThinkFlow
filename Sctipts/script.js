const btnBoard = document.getElementById('btn-board');
const btnTable = document.getElementById('btn-table');
const btnTimeline = document.getElementById('btn-timeline');
const btnCalendar = document.getElementById('btn-calendar');
const btnGallery = document.getElementById('btn-gallery');
const btnList = document.getElementById('btn-list');
let picture = document.getElementById('img-visualizeSect');
let block = document.getElementById('visualization-visualizeSect');

if(picture.src.includes('VisualizeSection-Frame.jpg')){
  btnGallery.style.backgroundColor = "#cac8c7";
} // hear we should continue code

btnBoard.addEventListener('click', () =>{
  console.log(1)
})