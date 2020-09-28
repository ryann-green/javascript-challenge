// assign a new variable to the data
let tableData = data;

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// create a reference to the table body
let tbody = d3.select("tbody");

// create a reference to the table
let table=d3.select("#ufo-table tr");


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
    let inputDateElement = d3.select("#datetime");
    let inputCityElement = d3.select("#city");
    let inputStateElement = d3.select("#state");
    let inputCountryElement = d3.select("#country");
    let inputShapeElement = d3.select("#shape");

    // Get the value property of the input element
    let inputDateValue = inputDateElement.property("value");
    let inputCityValue = inputCityElement.property("value");
    let inputStateValue = inputStateElement.property("value");
    let inputCountryValue = inputCountryElement.property("value");
    let inputShapeValue = inputShapeElement.property("value");


        // Use the form input to filter the data by date
    function filters(date) {
        if (inputDateValue != "")
            return date.datetime === inputDateValue
    
        if (inputCityValue != "") 
            return date.city === inputCityValue

        if (inputStateValue != "") 
            return date.state === inputStateValue
    
        if (inputCountryValue != "") 
            return date.country === inputCountryValue

        if (inputShapeValue != "") 
            return date.shape === inputShapeValue
        };

    // filter() uses the custom function as its argument
    let filterDate= tableData.filter(filters);
    
    // iterate through each entry in the data dictionary or "object"
    filterDate.forEach(function(sighting){

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

