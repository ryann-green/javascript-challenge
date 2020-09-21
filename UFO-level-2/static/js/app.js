// assign a new variable to the data
let tableData = data;

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// create a reference to the table body
let tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    let rows = d3.selectAll("tbody tr");
    rows.remove();

    // Prevent the page from refreshing
    d3.event.preventDefault() ;

    // Select the input element and get the raw HTML node
    let inputDate = d3.select("#datetime");
    let inputCity = d3.select("#city");

    // Get the value property of the input element

    let dateValue = inputDate.property("value");
    let cityValue = inputCity.property("value");


    // Use the form input to filter the data by date
    function selectDate(date) {
        if (dateValue != " "){
        return date.datetime === dateValue}};

    function selectCity(city) {
        if (cityValue != " "){
        return city.city === cityValue} };

    // let filters=[selectDate, selectCity]

    // function filtable(){

    //     for (let filter of filters) {
    //         if (filter="") 
    //       }
          
        
    // }
    // filter() uses the custom function as its argument
    let filterTable= tableData.filter(selectDate);
    
    // iterate through each entry in the data dictionary or "object"
    filterTable.forEach(function(sighting){

        // create a variable for adding a row for later
        let row=tbody.append("tr");

        // now for each entry, we need to iterate through the values and the columns in the table
        Object.entries(sighting).forEach(function([key,value]){

            // create the variable for the cell
            let cell=row.append("td");

            // add the value text that we're iterating through to the cell we're in
            cell.text(value);
        });
    })
};
