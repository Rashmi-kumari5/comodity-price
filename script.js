// document.addEventListener('DOMContentLoaded', function () {
//   const apiKey = '0b686d7ab2f84277a4bb4f38722c8393'; // Replace with your News API key
//   const apiUrl =
//     'https://newsapi.org/v2/everything?q=commodity+price+predictions&apiKey=' +
//     apiKey;

//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const articles = data.articles;
//       let output = '';
//       articles.forEach((article, index) => {
//         if (index == 0) {
//           output += `<a href="${article.url}" target="_blank"><div class="carousel-item active" data-bs-interval="5000" style="background-image: url('${article.urlToImage}'); width: 100%; height: 100%;"><div class="news-text">${article.title}</div></div></a>`;
//           return;
//         } else {
//           output += `<a href="${article.url}" target="_blank"><div class="carousel-item" data-bs-interval="5000" style="background-image: url('${article.urlToImage}'); width: 100%; height: 100%;"><div class="news-text">${article.title}</div></div></a>`;
//         }
//       });
//       document.getElementById('news').innerHTML = output;
//     })
//     .catch((error) => {
//       console.error('There was a problem fetching the news:', error);
//       document.getElementById('news').innerHTML =
//         'Error fetching news. Please try again later.';
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
  const apiKey = '0b686d7ab2f84277a4bb4f38722c8393'; // Replace with your News API key
  const apiUrl =
    'https://newsapi.org/v2/everything?q=commodity+price+predictions&apiKey=' +
    apiKey;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then((data) => {
      const articles = data.articles;
      let output = '';
      articles.forEach((article, index) => {
        if (index == 0) {
          output += `<a href="${article.url}" target="_blank"><div class="carousel-item active" data-bs-interval="5000" style="background-image: url('${article.urlToImage}'); width: 100%; height: 100%;"><div class="news-text">${article.title}</div></div></a>`;
          return;
        } else {
          output += `<a href="${article.url}" target="_blank"><div class="carousel-item" data-bs-interval="5000" style="background-image: url('${article.urlToImage}'); width: 100%; height: 100%;"><div class="news-text">${article.title}</div></div></a>`;
        }
      });
      document.getElementById('news').innerHTML = output;
    })
    .catch((error) => {
      console.error('There was a problem fetching the news:', error);
      document.getElementById('news').innerHTML =
        'Error fetching news. Please try again later.';
    });
});
// ------------------------------------------graph----------------------------------------------------



// var allData = {
//   labels: [],
//   datasets: [
//     { label: 'NATURAL GAS', data: [] },
//     { label: 'GOLD', data: [] },
//     { label: 'WTI CRUDE', data: [] },
//     { label: 'BRENT CRUDE', data: [] },
//     { label: 'SOYBEANS', data: [] },
//     { label: 'CORN', data: [] },
//     { label: 'COPPER', data: [] },
//     { label: 'ALUMINIUM', data: [] },
//     { label: 'ZINC', data: [] },
//     { label: 'NICKEL', data: [] },
//     { label: 'WHEAT', data: [] },
//     { label: 'SUGAR', data: [] },
//     { label: 'COFFEE', data: [] },
//     { label: 'COTTON', data: [] },
//     { label: 'BOND 10Y', data: [] },
//     { label: 'Dollar Index', data: [] },
//   ],
// };

// var finalData = {
//   labels: allData.labels,
//   datasets: [{ label: 'NATURAL GAS', data: [] }],
// };

// function loadCSV() {
//   const csvFilePath = './df.csv';

//   fetch(csvFilePath)
//     .then((response) => response.text())
//     .then((response) => {
//       organizeData(response);
//     });
// }

// loadCSV();

// function organizeData(csv) {
//   data = csv.split('\n');

//   data.forEach((row) => {
//     if (!row) {
//       return;
//     }

//     splitRow = row.split(',');

//     splitRow.forEach((item, index) => {
//       if (index === 0) {
//         allData.labels.push(item);
//       } else {
//         allData.datasets[index - 1].data.push(parseFloat(item));
//       }
//     });
//   });
  
// }

// function getDataForLabel(label) {
//   switch (label) {
//     case 'NATURAL GAS':
//       return allData.datasets[0];
//     case 'GOLD':
//       return allData.datasets[1];
//     case 'WTI CRUDE':
//       return allData.datasets[2];
//     case 'BRENT CRUDE':
//       return allData.datasets[3];
//     case 'SOYBEANS':
//       return allData.datasets[4];
//     case 'CORN':
//       return allData.datasets[5];
//     case 'COPPER':
//       return allData.datasets[6];
//     case 'ALUMINIUM':
//       return allData.datasets[7];
//     case 'ZINC':
//       return allData.datasets[8];
//     case 'NICKEL':
//       return allData.datasets[9];
//     case 'WHEAT':
//       return allData.datasets[10];
//     case 'SUGAR':
//       return allData.datasets[11];
//     case 'COFFEE':
//       return allData.datasets[12];
//     case 'COTTON':
//       return allData.datasets[13];
//     case 'BOND_10Y':
//       return allData.datasets[14];
//     case 'Dollar_Index':
//       return allData.datasets[15];
//     default:
//       return null;
//   }
// }

// const config = {
//   type: 'line',
//   data: finalData,
//   options: {
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top',
//         },
//         title: {
//           display: true,
//           text: 'Chart.js Line Chart',
//         },
//       },
//     },
//   },
// };

// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, config);

// var type_select = document.getElementById('type_select');

// type_select.addEventListener('change', function () {
//   const data = getDataForLabel(type_select.value);
//   finalData.datasets = [data];
//   myChart.update();
// });
