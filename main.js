var dataList = [];
for (var idx = 1; idx <= 30; idx++) {
    var item = {
        index: idx,
        staticImage: `public/images/${idx}.PNG`,
        threeDImage: `public/gifs/${idx}.gif`,
        // downloadLink: `https://2ly.link/1vw2e`,
    };

    dataList.push(item);
}

// Function to dynamically create a table with data
function createTable() {
    // Create a table element
    var table = document.createElement('table');

    // Create table header  
    var headerRow = table.insertRow();
    headerRow.insertCell(0).innerHTML = 'Object Index';
    headerRow.insertCell(1).innerHTML = 'Static Image';
    headerRow.insertCell(2).innerHTML = '3D Image';
    // headerRow.insertCell(3).innerHTML = 'Download Link';
    // headerRow.insertCell(2).innerHTML = 'STL File Download Link';

    // Iterate through the data list and populate the table
    for (var i = 0; i < dataList.length; i++) {
        var data = dataList[i];

        // Create a table row
        var row = table.insertRow();

        // Insert cells and fill them with data
        row.insertCell(0).innerHTML = data.index;
        row.insertCell(1).innerHTML = '<img class="column-2-image" src="' + data.staticImage + '" alt="Static Image" loading="lazy">';
        row.insertCell(2).innerHTML = '<img class="column-3-image" src="' + data.threeDImage + '" alt="3D Image" loading="lazy">';
        // row.insertCell(3).innerHTML = '<a href="' + data.downloadLink + '" download>Download</a>';
        // row.insertCell(2).innerHTML = '<a href="' + data.downloadLink + '" download>Download</a>';
    }

    // Append the table to the body or any other HTML element
    document.body.appendChild(table);
}

// Call the function to create the table
createTable();