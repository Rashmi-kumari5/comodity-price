// function downloadData(data, filename) {
//   const csv = "Commodity Name,Time Period,Model No\n" + data.join('\n');
//   const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//   const link = document.createElement('a');
//   if (link.download !== undefined) {
//       const url = URL.createObjectURL(blob);
//       link.setAttribute('href', url);
//       link.setAttribute('download', filename);
//       link.style.visibility = 'hidden';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//   }
// }

// // Event listener for form submission
// document.getElementById('predictionForm').addEventListener('submit', function (e) {
//   e.preventDefault();
//   const commodityName = document.getElementById('commodityName').value;
//   const timePeriod = document.getElementById('timePeriod').value;
//   const modelNo = document.getElementById('modelNo').value;

//   // Prepare the data array
//   const data = [commodityName, timePeriod, modelNo];

//   // Download data as a CSV file
//   downloadData(data, 'commodity_data.csv');
// });

// // Event listener for download button
// document.getElementById('downloadButton').addEventListener('click', function () {
//   const sampleData = [
//       ['Gold', '6 months', '1'],
//       ['Silver', '1 year', '3'],
//       ['Oil', '5 years', '2']
//   ];

//   // Download sample data as a CSV file
//   downloadData(sampleData.map(row => row.join(',')), 'sample_commodity_data.csv');
// });









// Function to download data as CSV file
function downloadData(data, filename) {
    const csv = "Commodity Name,Time Period,Model No\n" + data.join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  }
  
  // Event listener for form submission
  document.getElementById('predictionForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const commodityName = document.getElementById('commodityName').value;
    const timePeriod = document.getElementById('timePeriod').value;
    const modelNo = document.getElementById('modelNo').value;
  
    // Prepare the data array
    const data = [commodityName, timePeriod, modelNo];
  
    // You can perform prediction logic here instead of downloading the file
    // For now, let's log the data to the console
    console.log("Prediction Data:", data);
  });
  
  // Event listener for download button
  document.getElementById('downloadButton').addEventListener('click', function () {
    const sampleData = [
        ['Gold', '6 months', '1'],
        ['Silver', '1 year', '3'],
        ['Oil', '5 years', '2']
    ];
  
    // Download sample data as a CSV file
    downloadData(sampleData.map(row => row.join(',')), 'sample_commodity_data.csv');
  });
  
  
  // Function to clear form fields
  function clearForm() {
    document.getElementById('commodityName').value = '';
    document.getElementById('timePeriod').value = '';
    document.getElementById('modelNo').value = '';
  }
  
  // Function to download data as CSV file
  function downloadData(data, filename) {
    const csv = "Commodity Name,Time Period,Model No\n" + data.join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        // Clear form fields after download
        clearForm();
    }
  }
  
  // Event listener for form submission
  document.getElementById('predictionForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const commodityName = document.getElementById('commodityName').value;
    const timePeriod = document.getElementById('timePeriod').value;
    const modelNo = document.getElementById('modelNo').value;
  
    // Prepare the data array
    const data = [commodityName, timePeriod, modelNo];
  
    // You can perform prediction logic here instead of downloading the file
    // For now, let's log the data to the console
    console.log("Prediction Data:", data);
  });
  
  // Event listener for download button
  document.getElementById('downloadButton').addEventListener('click', function () {
    const sampleData = [
        ['Gold', '6 months', '1'],
        ['Silver', '1 year', '3'],
        ['Oil', '5 years', '2']
    ];
  
    // Download sample data as a CSV file
    downloadData(sampleData.map(row => row.join(',')), 'sample_commodity_data.csv');
  });
  


