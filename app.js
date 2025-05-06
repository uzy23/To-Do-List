// Get the current date
const date = new Date();

// Set the desired date format
const objectFormat = {
    "year": "numeric",
    "month": "long",
    "day": "numeric",
    "weekday": "long",
    "time": "short",
};

// Create a formatter using the above format
const timeFormat = new Intl.DateTimeFormat("en-GB", objectFormat);

// Display the formatted date in the element with class "realDate"
document.querySelector(".realDate").innerText = timeFormat.format(date);


// Add an event listener to the Enter button
document.querySelector("span>button").addEventListener("click", () => {

    // Get the task input value
    task = document.querySelector("span>input").value;

    // Check if input is empty
    if (task == "") {
        alert("Please type in a task");
        return;
    }

    // Create a new list item for the task
    const taskLi = document.createElement("li");
    taskLi.innerHTML = `
        <div>
            <input type="checkbox">
            <span>${task}</span>
            <img class="edit" src="./img/edit.png" alt="">
            <img class="clear" src="./img/delete.png" alt="">
        </div>`;
    taskLi.classList.add("taskLi");

    // Append the task to the task container
    document.querySelector(".taskContainer").appendChild(taskLi);

    // Clear the input field after adding the task
    document.querySelector("span>input").value = "";

    // Get the clear and edit buttons for this task
    const taskLiClear = taskLi.querySelector(".clear");
    const taskLiEdit = taskLi.querySelector(".edit");

    // Add event listener for editing the task
    taskLi.querySelector(".edit").addEventListener("click", () => {
        let newTask = prompt("Edit your task");
        const taskSpan = taskLi.querySelector("span");

        // If new task is empty or cancelled, alert user
        if (newTask == "" || newTask.trim() === null) {
            alert("Please type in your new task");
        }

        // Update the task text
        taskSpan.textContent = newTask;
    });

    // Add event listener for deleting the task
    taskLi.querySelector(".taskLi .clear").addEventListener("click", () => {
        taskLi.innerHTML = "";
    });

    // Add event listener for completing the task
    taskLi.querySelector("input").addEventListener("click", () => {

        // Style the task as completed
        taskLi.style.textDecoration = "line-through";
        taskLi.style.color = "#A9A9A9";

        // Change the icons to grey versions
        taskLiClear.src = "./img/greydelete.png";
        taskLiEdit.src = "./img/greyedit.png";

        // Automatically remove the task after 2 seconds
        setInterval(function () {
            taskLi.innerHTML = "";
        }, 2000);
    });
});
