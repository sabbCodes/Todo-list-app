// Data
let todoItems = [
  { text: 'Introduction to Anatomy', isCompleted: false },
  { text: 'Upper Limb', isCompleted: false },
  { text: 'Lower Limb', isCompleted: false },
  { text: 'Thorax', isCompleted: false },
  { text: 'Abdomen', isCompleted: false },
  { text: 'Pelvis & Perineum', isCompleted: false },
  { text: 'MALE REPRODUCTIVE SYSTEM', isCompleted: false },
  { text: 'FEMALE REPRODUCTIVE SYSTEM', isCompleted: false },
  { text: 'MENSTRUATION & FERTILIZATION', isCompleted: false },
  { text: 'Embryogenesis Week 1 - 8', isCompleted: false },
  { text: 'MUSCULAR SYSTEM', isCompleted: false },
  { text: 'SKELETAL SYSTEM', isCompleted: false },
  { text: 'UROGENITAL SYSTEM', isCompleted: false },
  { text: 'CARDIOVASCULAR SYSTEM', isCompleted: false },
  { text: 'Respiratory System', isCompleted: false },
  { text: 'Gastrointestinal System', isCompleted: false },
  { text: 'Genetics', isCompleted: false },
  { text: 'TISSUE PROCESSING', isCompleted: false },
  { text: 'CELL CYTOLOGY', isCompleted: false },
  { text: 'EPITHELIAL TISSUES & GLANDS', isCompleted: false },
  { text: 'CONNECTIVE TISSUES', isCompleted: false },
  { text: 'Cartilage', isCompleted: false },
  { text: 'Bone', isCompleted: false },
  { text: 'MUSCULAR TISSUES', isCompleted: false },
  { text: 'NERVOUS TISSUES', isCompleted: false },
  { text: 'CELL PHYSIOLOGY', isCompleted: false },
  { text: 'EXCITABLE TISSUES', isCompleted: false },
  { text: 'Anatomy Practical', isCompleted: false },
  { text: 'BODY FLUIDS', isCompleted: false },
  { text: 'BLOOD AND IMMUNITY', isCompleted: false },
  { text: 'AUTONOMIC NERVOUS SYSTEM', isCompleted: false },
  { text: 'CARDIOVASCULAR SYSTEM', isCompleted: false },
  { text: 'RENAL PHYSIOLOGY', isCompleted: false },
  { text: 'RESPIRATORY PHYSIOLOGY', isCompleted: false },
  { text: 'GASTROINTESTINAL TRACT', isCompleted: false },
  { text: 'SPORTS PHYSIOLOGY', isCompleted: false },
  { text: 'Water and Electrolytes', isCompleted: false },
  { text: 'Liver and Biliary System', isCompleted: false },
  { text: 'Physiology Practical', isCompleted: false },
  { text: 'CELL BIOCHEMISTRY', isCompleted: false },
  { text: 'pH AND BUFFER', isCompleted: false },
  { text: 'CARBOHYDRATE', isCompleted: false },
  { text: 'Lipid', isCompleted: false },
  { text: 'PROTEINS AND AMINO ACIDS', isCompleted: false },
  { text: 'NUCLEIC ACIDS', isCompleted: false },
  { text: 'ENZYMES AND BIOENERGETICS', isCompleted: false },
  { text: 'CHO METABOLISM', isCompleted: false },
  { text: 'PROTEIN METABOLISM', isCompleted: false },
  { text: 'LIPID METABOLISM', isCompleted: false },
  { text: 'Biochemistry Practical', isCompleted: false }
];

const level3Courses = [
  { text: 'Head and Neck', isCompleted: false },
  { text: 'Neuro Anatomy', isCompleted: false },
  { text: 'Histology of special senses', isCompleted: false },
  { text: 'Histology of Anus', isCompleted: false },
  { text: 'Histology of Reproductive System', isCompleted: false },
  { text: 'Histology of GIT', isCompleted: false },
  { text: 'Embryology of CNS', isCompleted: false },
  { text: 'Embryology of Head & Neck', isCompleted: false },
  { text: 'Embryology of Limbs & Face', isCompleted: false },
  { text: 'Genetics', isCompleted: false },
  { text: 'Pathophysiology I', isCompleted: false },
  { text: 'Pathophysiology II', isCompleted: false },
  { text: 'Endocrine Physiology', isCompleted: false },
  { text: 'Skin Physiology', isCompleted: false },
  { text: 'Physiology of Special Senses', isCompleted: false },
  { text: 'Almighty Neuro-physiology', isCompleted: false },
  { text: 'Integration of Metabolism', isCompleted: false },
  { text: 'Nucleotide Metabolism', isCompleted: false },
  { text: 'DNA Replication', isCompleted: false },
  { text: 'DNA Transcription & Translation', isCompleted: false },
  { text: 'Genetic Engineering and Mutation', isCompleted: false },
  { text: 'Nutritional Biochemistry', isCompleted: false },
  { text: 'Special Topics', isCompleted: false }
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
    text, isCompleted: false
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
    checkbox.checked = todoItem.isCompleted;
    checkbox.addEventListener('change', () => {
      todoItem.isCompleted = checkbox.checked;
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
  function getCountdownDate(){
    if (levelChecker.checked === true){
      return "2024-01-22";
    } else {
      return "2024-05-27";
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

    // Change the color based on the number of days left before the deadline
    if (timeRemaining.days > 30){
      daysSpan.style.color = "lime";
      hoursSpan.style.color = "lime";
      minutesSpan.style.color = "lime";
      secondsSpan.style.color = "lime";
    } else if (timeRemaining.days > 15 && timeRemaining.days <= 30){
      daysSpan.style.color = "yellow";
      hoursSpan.style.color = "yellow";
      minutesSpan.style.color = "yellow";
      secondsSpan.style.color = "yellow";
    } else if (timeRemaining.days > -1 && timeRemaining.days <= 15){
      daysSpan.style.color = "red";
      hoursSpan.style.color = "red";
      minutesSpan.style.color = "red";
      secondsSpan.style.color = "red";
    } else {
      daysSpan.style.color = "blue";
      hoursSpan.style.color = "blue";
      minutesSpan.style.color = "blue";
      secondsSpan.style.color = "blue";
    }

    // Check if the countdown has ended
    if (timeRemaining.total <= 0) {
      document.getElementById("message").style.display = "block";
      clearInterval(countdownTimer);
    } else{
      document.getElementById("message").style.display = "none";
    }
  }, 1000);

  // Function to calculate the time remaining
  function getTimeRemaining(endDate) {
    const total = Date.parse(endDate) - Date.parse(new Date());
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    if (total <= 0){
      seconds = 0;
      minutes = 0;
      hours = 0;
      days = 0;
      clearInterval(countdownTimer); // stop the countdown
    }
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
}

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);

refreshBtn.addEventListener("click", ()=>{
  localStorage.removeItem("todoItems");
  localStorage.removeItem("userLevel");
  location.reload();
})