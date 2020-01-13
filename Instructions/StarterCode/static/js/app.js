// from data.js
var tableData = data;

// Add Data to Table

tbody = d3.select("tbody")

console.log(tableData);

function addData(data){ 

    tbody.text("")

    data.forEach(function(UFOsighting){

    row = tbody.append("tr")

    Object.entries(UFOsighting).forEach(function([key, value]){

        cell = row.append("td").text(value)	

    })

})}


addData(tableData)


// Data Filter

var filterDate = d3.select("#datetime")

var filterButton = d3.select("filter-btn")

function updateData(){
    d3.event.preventDefault();
    console.log(filterDate.property("value"));
    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime===filterDate.property("value"))
    addData(filteredData);

}


filterDate.on("change", updateData)









//Additional attempts below...

// // from data.js
// var tableData = data;

// // Data Input
// var tbody = d3.select("tbody");

// console.log(tableData);


// function addData(data){
// data.forEach(function(UFOsighting) {
//     console.log(UFOsighting);
//     var row = tbody.append("tr");
//     Object.entries(UFOsighting).forEach(function([key, value]) {
//       console.log(key, value);
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// };

// function updateData(data){
//     data.forEach(function(UFOsighting) {
//         console.log(UFOsighting);
//         var row = tbody.append("tr");
//         Object.entries(UFOsighting).forEach(function([key, value]) {
//           console.log(key, value);
//           var cell = row.append("td");
//           cell.text(value);
//           cell.exit();
//           cell.remove();
//         });
//       });
//     };

// addData(tableData);

// // Data Filter
// var inputField = d3.select("#datetime");

// inputField.on("change", function() {
//     d3.event.preventDefault();
//     var filterDate = d3.event.target.value;
//     console.log(filterDate);
//     var filteredData = tableData.filter(dates => dates.datetime == filterDate)
//     console.log(filteredData);
//     updateData(filteredData);

//     //     filteredData.forEach(function(UFOsighting) {
//     //     console.log(UFOsighting);
//     //     var row = tbody.append("tr");
//     //     Object.entries(UFOsighting).forEach(function([key, value]) {
//     //       console.log(key, value);
//     //       var cell = row.append("td");
//     //       cell.text(value);
//     //     });
//     //   });
//   });
