/**
 * App logic
 */
// Listen for button clicks

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKfkwuzBib0i8KbtEKszOuzGOEqpzv4yU",
    authDomain: "employees-3ce0a.firebaseapp.com",
    databaseURL: "https://employees-3ce0a.firebaseio.com",
    projectId: "employees-3ce0a",
    storageBucket: "employees-3ce0a.appspot.com",
    messagingSenderId: "442829215684"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// -----------------------------

// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/employees");



$('#submit-employee').on('click', function(e){
    collectForm(e);
});

function collectForm(e){
    e.preventDefault();
    let name = $('#employeeName').val();
    let role = $('#role').val();
    let date = $('#date').val();
    let rate = $('#rate').val();

    let employeeObj = {
        name: name,
        role: role,
        start: date,
        rate: rate
    }
    console.log(employeeObj);
    postEmployee(employeeObj);
}

function postEmployee(employeeObj){
    database.ref().push(employeeObj);
}
function getEmployees(){

}

function fillTable(employee){
    
    let row = $('<tr>');
    let name = $('<td>').text(employee.name);
    let role = $('<td>').text(employee.role);
    let start = $('<td>').text(employee.start);
    let months = $('<td>').text(999);
    let rate = $('<td>').text(employee.rate);
    let total = $('<td>').text('$9999999.00');
}
database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      
      let employees = snapshot.val();
      $('#employees').empty();
      
    //   employees.forEach(function(emp){
    //       console.log
    //       let content = $('<tr>');
    //       content.append(
    //           `<th scope="col">${emp.name}</th>
    //           <th scope="col">${emp.role}</th>
    //           <th scope="col">${emp.start}</th>
    //           <th scope="col">${emp.rate}</th>`
    //       );
    //       $('#employees').append(content);
    //   });
    //   <tr>
    //                     <th scope="col">Employee Name</th>
    //                     <th scope="col">Role</th>
    //                     <th scope="col">Start Date</th>
    //                     <th scope="col">Months Worked</th>
    //                     <th scope="col">Monthly Rate (﹩)</th>
    //                     <th scope="col">total Billed (﹩)</th>
    //                     </tr>
      
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


// <thead>
// <tr>
// <th scope="col">#</th>
// <th scope="col">First</th>
//     <th scope="col">Last</th>
//     <th scope="col">Handle</th>
//     </tr>
//     </thead>