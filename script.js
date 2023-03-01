const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});


var cuisines = [
  'American', 'Chinese', 'English', 'French', 'German', 'Indian', 
  'Israeli', 'Italian', 'Jamaican', 'Japanese', 'Korean', 'Mediterranean',
  'Mexican', 'Polish', 'Portuguese', 'Russian', 'Thai', 'Vietnamese'
]

function addFoodTypes(){
  var container = document.getElementById("container-cuisine")
  
  for (const fieldName of cuisines){
    const label = document.createElement('label');
    label.textContent = fieldName;

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = fieldName;

    label.appendChild(input);
    container.appendChild(label);
  }
}

const dollarRanges = [
  '$', '$$', '$$$', '$$$$', '$$$$$'
];

const dollarList = document.querySelector('#dollarList');

for (const dollarRange of dollarRanges) {
  const option = document.createElement('option');
  option.value = dollarRange;
  dollarList.appendChild(option);
}