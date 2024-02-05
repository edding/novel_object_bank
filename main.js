// Sample list of objects with data
var dataList = [
    { index: 1, staticImage: 'static_image_1.jpg', threeDImage: '3d_image_1.jpg', downloadLink: 'download_1.zip' },
    { index: 2, staticImage: 'static_image_2.jpg', threeDImage: '3d_image_2.jpg', downloadLink: 'download_2.zip' },
    // Add more objects as needed
];

// Function to dynamically create a table with data
function createTable() {
    // Create a table element
    var table = document.createElement('table');

    // Create table header
    var headerRow = table.insertRow();
    headerRow.insertCell(0).innerHTML = 'Object Index';
    headerRow.insertCell(1).innerHTML = 'Static Image';
    headerRow.insertCell(2).innerHTML = '3D Image';
    headerRow.insertCell(3).innerHTML = 'Download Link';

    // Iterate through the data list and populate the table
    for (var i = 0; i < dataList.length; i++) {
        var data = dataList[i];

        // Create a table row
        var row = table.insertRow();

        // Insert cells and fill them with data
        row.insertCell(0).innerHTML = data.index;
        row.insertCell(1).innerHTML = '<img src="' + data.staticImage + '" alt="Static Image">';
        row.insertCell(2).innerHTML = '<img src="' + data.threeDImage + '" alt="3D Image">';
        row.insertCell(3).innerHTML = '<a href="' + data.downloadLink + '" download>Download</a>';
    }

    // Append the table to the body or any other HTML element
    document.body.appendChild(table);
}

// Call the function to create the table
createTable();