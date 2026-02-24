const category = `Category
Learner
Learner
Learner
Learner
Learner
Learner  
Learner
Manager
Learner
Manager 
Admin
Admin
Learner
Manager 
Learner
Learner
Learner
Learner
Learner
Learner
Manager 
Manager 
Learner
Manager 
Admin
Learner
Learner
Learner
Learner
Learner
Learner
Manager 
Manager
Learner
Learner
Learner
Manager 
Learner
Learner
Learner 
Manager
Manager 
Manager 
Manager 
Manager
Learner
Learner
Learner
Learner
Learner
Learner
Learner
Learner
Learner
Learner
Learner
Learner
Learner
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Admin
Content Admin
Content Admin
Content Admin
Admin
Admin
Admin
Admin
Admin
Learner
Instructor
Instructor
Instructor
Instructor
Instructor
Instructor
Instructor
Admin
Admin
Admin
Admin
Admin
Learner
Content Viewer
`



// Initialize variables to hold the Title and Keywords values
var categories = [];



// Function to parse the CSV data and extract Title and Keywords values
function parseCSV() {
    return new Promise((resolve, reject) => {
        Papa.parse(category, {
            header: true,
            complete: (results) => {
                categories = results.data.map(row => 
                    row['Category'].trim().replace(/^"|"$/g, '')
                   
                        // Remove leading and trailing double quotes
                );

              
                

             console.log('categories ',categories); 

                resolve({answersEN}); // Resolve with the arrays
            },
            error: (error) => reject(error)
        });
    });
}




function getCategory() {
    return categories;
}

parseCSV().then(() => {
    // console.log("CSV Parsed and titles and keywords ready for export");
});


window.getCategory = getCategory;
