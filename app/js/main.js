/*Create Constructors*/
var Todo = function (variables) {
  var variable = variables || {};
  this.task = variable.task;
  this.status = 'open';
};



/*Create Instances*/
var taskList = [];

  // When I click the Submit
  $('#addTask').on('submit', function (event) {
  event.preventDefault();

  //assigning text in entryField to a variable
  var taskText = $('.entryField').val();
  var newTask = new Todo ({task: taskText});


  //push taskText to taskList
  taskList.push(newTask);
  // console.log(taskList);

  // Put taskText on page
  $('.info').append('<li>' + taskText + '</li>');

  //automatically resets entryField
  this.reset();
  console.log(newTask);
});


// Toggle status 'open' to 'closed'

// create click events
  $('.info').on('click', 'li', function (event) {
    event.preventDefault();
    $(this).addClass('select');

    var tTask = $(this).text();
    console.log(tTask);

    var openTask = _.find(taskList, { task: tTask } );
    console.log(openTask);



  });


