/*Create Constructors*/
var Todo = function(variables) {
    var variable = variables || {};
    this.task = variable.task;
    this.status = 'open';
};



/*Create Instances*/
var taskList = [];

// When I click the Submit
$('#addTask').on('submit', function(event) {
    event.preventDefault();

    //assigning text in entryField to a variable
    var taskText = $('.entryField').val();
    var newTask = new Todo({
        task: taskText
    });


    //push taskText to taskList
    taskList.push(newTask);
    // console.log(taskList);

    // Put taskText on page
    $('.info').append('<li class="listitem">' + taskText + '</li>');

    //automatically resets entryField
    this.reset();
    // console.log(newTask);
    count();
});


// Toggle status 'open' to 'closed'

// create click events
$('.info').on('click', 'li', function(event) {
    event.preventDefault();
    $(this).addClass('select');

    var tTask = $(this).text();
    // console.log(tTask);

    var openTask = _.find(taskList, {
        task: tTask
    });
    // console.log(openTask);
    // take the edit when click on and change the status
    openTask.status = 'closed';

    count();
});


// Toggle status 'closed' to 'open'

$('.info').on('click', '.select', function(event) { /* you use .select so you do select every li in in the ul*/
    event.preventDefault();
    $(this).removeClass('select');

    var tTask = $(this).text();
    // console.log(tTask);

    var openTask = _.find(taskList, {
        task: tTask
    });
    // console.log(openTask);
    // take the edit when click on and change the status
    openTask.status = 'open';

    count();
});

// Clear out the completed tasks and sent back open tasks
$('.removeBtn').on('click', function(event) {
    event.preventDefault();
    taskList = taskList.filter(function(a) {
        if (a.status == 'open') {
            return a;
        }
        taskList.push(a); /*if it is open it get pushed back to task list*/
    });

    $('.info').empty();
    taskList.forEach(function(b) {
        $('.info').append('<li>' + b.task + '</li>');
    });

    count();

});


// Add counting function
function count() {
    var totalCount = 0;
    taskList.forEach(function(x) {
        if (x.status === 'open') {
            return totalCount++;
            // console.log(totalCount);
        }
        taskList.push(totalCount);
    });
    $('.entrycount').html(totalCount);
}
