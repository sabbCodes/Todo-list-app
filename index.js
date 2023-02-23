// Data
let todoItems = [
  { text: 'Introduction to Anatomy', iscompleted: false },
  { text: 'Upper Limb', iscompleted: false },
  { text: 'Lower Limb', iscompleted: false },
  { text: 'Thorax', iscompleted: false },
  { text: 'Abdomen', iscompleted: false },
  { text: 'Pelvis & Perineum', iscompleted: false },
  { text: 'MALE REPRODUCTIVE SYSTEM', iscompleted: false },
  { text: 'FEMALE REPRODUCTIVE SYSTEM', iscompleted: false },
  { text: 'MENSTRUATION & FERTILIZATION', iscompleted: false },
  { text: 'WEEK 1 TO WEEK 8', iscompleted: false },
  { text: 'MUSCULAR SYSTEM', iscompleted: false },
  { text: 'SKELETAL SYSTEM', iscompleted: false },
  { text: 'UROGENITAL SYSTEM', iscompleted: false },
  { text: 'CARDIOVASCULAR SYSTEM', iscompleted: false },
  { text: 'Respiratory System', iscompleted: false },
  { text: 'Gastrointestinal System', iscompleted: false },
  { text: 'Genetics', iscompleted: false },
  { text: 'TISSUE PROCESSING', iscompleted: false },
  { text: 'CELL CYTOLOGY', iscompleted: false },
  { text: 'EPITHELIAL TISSUES & GLANDS', iscompleted: false },
  { text: 'CONNECTIVE TISSUES', iscompleted: false },
  { text: 'Cartilage', iscompleted: false },
  { text: 'Bone', iscompleted: false },
  { text: 'MUSCULAR TISSUES', iscompleted: false },
  { text: 'NERVOUS TISSUES', iscompleted: false },
  { text: 'CELL PHYSIOLOGY', iscompleted: false },
  { text: 'EXCITABLE TISSUES', iscompleted: false },
  { text: 'Anatomy Practical', iscompleted: false },
  { text: 'BODY FLUIDS', iscompleted: false },
  { text: 'BLOOD AND IMMUNITY', iscompleted: false },
  { text: 'AUTONOMIC NERVOUS SYSTEM', iscompleted: false },
  { text: 'CARDIOVASCULAR SYSTEM', iscompleted: false },
  { text: 'RENAL PHYSIOLOGY', iscompleted: false },
  { text: 'RESPIRATORY PHYSIOLOGY', iscompleted: false },
  { text: 'GASTROINTESTINAL TRACT', iscompleted: false },
  { text: 'SPORTS PHYSIOLOGY', iscompleted: false },
  { text: 'Water and Electrolytes', iscompleted: false },
  { text: 'Liver and Biliary System', iscompleted: false },
  { text: 'Physiology Practical', iscompleted: false },
  { text: 'CELL BIOCHEMISTRY', iscompleted: false },
  { text: 'pH AND BUFFER', iscompleted: false },
  { text: 'CARBOHYDRATE', iscompleted: false },
  { text: 'Lipid', iscompleted: false },
  { text: 'PROTEINS AND AMINO ACIDS', iscompleted: false },
  { text: 'NUCLEIC ACIDS', iscompleted: false },
  { text: 'ENZYMES AND BIOENERGETICS', iscompleted: false },
  { text: 'CHO METABOLISM', iscompleted: false },
  { text: 'PROTEIN METABOLISM', iscompleted: false },
  { text: 'LIPID METABOLISM', iscompleted: false },
  { text: 'Biochemistry Practical', iscompleted: false }
];

let level3Courses = [
  { text: 'Head and Neck', iscompleted: false },
  { text: 'Neuro Anatomy', iscompleted: false },
  { text: 'Histology of special senses', iscompleted: false },
  { text: 'Histology of Anus', iscompleted: false },
  { text: 'Histology of Reproductive System', iscompleted: false },
  { text: 'Histology of GIT', iscompleted: false },
  { text: 'Embryology of CNS', iscompleted: false },
  { text: 'Embryology of Head & Neck', iscompleted: false },
  { text: 'Embryology of Limbs & Face', iscompleted: false },
  { text: 'Genetics', iscompleted: false },
  { text: 'Pathophysiology I', iscompleted: false },
  { text: 'Pathophysiology II', iscompleted: false },
  { text: 'Endocrine Physiology', iscompleted: false },
  { text: 'Skin Physiology', iscompleted: false },
  { text: 'Physiology of Special Senses', iscompleted: false },
  { text: 'Almighty Neuro-physiology', iscompleted: false },
  { text: 'Integration of Metabolism', iscompleted: false },
  { text: 'Nucleotide Metabolism', iscompleted: false },
  { text: 'DNA Replication', iscompleted: false },
  { text: 'DNA Transcription & Translation', iscompleted: false },
  { text: 'Genetic Engineering and Mutation', iscompleted: false },
  { text: 'Nutritional Biochemistry', iscompleted: false },
  { text: 'Special Topics', iscompleted: false }
]

// Select HTML elements
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
const refreshBtn = document.getElementById("refresh");
const levelChecker = document.getElementById("userLevel");

// Load todo items from local storage, if available
if (localStorage.getItem('todoItems')) {
  todoItems = JSON.parse(localStorage.getItem('todoItems'));
}

// Load user level from local storage, if available
if (localStorage.getItem("userLevel")){
  levelChecker.checked = JSON.parse(localStorage.getItem("userLevel"));
  renderTodoList();
} 


// Render the initial list of todo items
renderTodoList();

// Add event listener to the Add button
addTodoButton.addEventListener('click', () => {
  const newTodoText = newTodoInput.value;
  if (newTodoText) {
    addTodoItem(newTodoText);
    newTodoInput.value = '';
  }
});

// Function to add a new todo item to the list
function addTodoItem(text) {
  // Create a new todo item object
  const todoItem = {
    text, iscompleted: false
  };
  
  // Add the item to the list
  todoItems.unshift(todoItem);

  // Save the updated list to local storage
  saveTodoItems();

  // Render the updated list
  renderTodoList();
}

// Function to render the todo list
function renderTodoList() {
  // Clear the existing list
  todoList.innerHTML = '';

  // Render each item in the list
  todoItems.forEach((todoItem, index) => {
    // Create the necessary HTML elements
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoItem.iscompleted;
    checkbox.addEventListener('change', () => {
      todoItem.iscompleted = checkbox.checked;
      saveTodoItems();
      renderTodoList();
    });
    const label = document.createElement('label');
    label.textContent = todoItem.text;

    // Append the elements to the DOM
    li.appendChild(checkbox);
    li.appendChild(label);
    todoList.appendChild(li);
  });
}

function handleLevel(){
  levelChecker.addEventListener("change", () =>{
    if (levelChecker.checked === true){
      todoItems.push(...level3Courses);
      saveTodoItems();
      renderTodoList();
    } else {
      todoItems.splice(todoItems.length - level3Courses.length, level3Courses.length);
      saveTodoItems();
      renderTodoList();
    }
    saveUserLevel()
  })
}
handleLevel()

// Function to save the todo items to local storage
function saveTodoItems() {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// Function to save the user level to local storage
function saveUserLevel(){
  localStorage.setItem("userLevel", JSON.stringify(levelChecker.checked))
}

// Countdown function
function updateCountdown() {
  // Set the date to countdown to (YYYY-MM-DD format)
  let countdownDate = '';
  function getCountdownDate(){
    if (levelChecker.checked === true){
      return "2023-03-17";
    } else {
      return "2023-04-17";
    }
  }
    // Select HTML elements
    const daysSpan = document.querySelector('.days');
    const hoursSpan = document.querySelector('.hours');
    const minutesSpan = document.querySelector('.minutes');
    const secondsSpan = document.querySelector('.seconds');

    // Update the countdown every second
    const countdownTimer = setInterval(() => {
        // Calculate the time remaining
        const timeRemaining = getTimeRemaining(getCountdownDate());

        // Display the time remaining in the HTML elements
        daysSpan.textContent = timeRemaining.days;
        hoursSpan.textContent = timeRemaining.hours;
        minutesSpan.textContent = timeRemaining.minutes;
        secondsSpan.textContent = timeRemaining.seconds;

        // Check if the countdown has ended
        if (timeRemaining.total <= 0) {
        clearInterval(countdownTimer);
        }
    }, 1000);

    // Function to calculate the time remaining
    function getTimeRemaining(endDate) {
        const total = Date.parse(endDate) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
        total,
        days,
        hours,
        minutes,
        seconds
        };
    }
}
  
// Call the updateCountdown() function every second
setInterval(updateCountdown, 1000);

refreshBtn.addEventListener("click", ()=>{
  localStorage.removeItem("todoItems");
  localStorage.removeItem("userLevel");
  location.reload();
})