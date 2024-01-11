let chartFuture;
const headings = document.getElementsByClassName('graph');
headings[0].style.display = 'none';
headings[1].style.display = 'none';
document.getElementsByClassName('ci')[0].style.display = 'none';

var allDataFuture = {
  labels: [],
  datasets: [
    { label: 'NATURAL GAS', data: [] },
    { label: 'GOLD', data: [] },
    { label: 'WTI CRUDE', data: [] },
    { label: 'BRENT CRUDE', data: [] },
    { label: 'SOYBEANS', data: [] },
    { label: 'CORN', data: [] },
    { label: 'COPPER', data: [] },
    { label: 'ALUMINIUM', data: [] },
    { label: 'ZINC', data: [] },
    { label: 'NICKEL', data: [] },
    { label: 'WHEAT', data: [] },
    { label: 'SUGAR', data: [] },
    { label: 'COFFEE', data: [] },
    { label: 'COTTON', data: [] },
    { label: 'BOND 10Y', data: [] },
    { label: 'Dollar Index', data: [] },
  ],
};

var finalDataFuture = {
  labels: allDataFuture.labels,
  datasets: [{ label: 'NATURAL GAS', data: [] }],
};

function loadCSVFuture(path, dataVar) {
  const csvFilePath = path;

  fetch(csvFilePath)
    .then((response) => response.text())
    .then((response) => {
      organizeDataFuture(response, dataVar);
    });
}

loadCSVFuture('./Svm.csv', allDataFuture);

// async function loadCSV(path, dataVar, timePeriod = 365) {
//   const csvFilePath = path;

//   try {
//     const response = await fetch(csvFilePath);
//     const csvData = await response.text();
//     organizeData(csvData, dataVar, timePeriod);
//     return dataVar;
//   } catch (error) {
//     console.error('Error loading CSV:', error);
//     throw error; // Re-throw the error to be caught by the caller if needed.
//   }
// }

function organizeDataFuture(csv, dataVar, timePeriod) {
  //   dataVar.labels = [];
  //   dataVar.datasets.forEach((dataset) => {
  //     dataset.data = [];
  //   });
  data = csv.split('\n');

  data.forEach((row) => {
    if (!row) {
      return;
    }
    splitRow = row.split(',');

    splitRow.forEach((item, index) => {
      if (index === 0) {
        dataVar.labels.push(item);
      } else {
        dataVar.datasets[index - 1].data.push(parseFloat(item));
      }
    });
  });
}

function getDataForLabel(label, dataVar) {
  switch (label) {
    case 'NATURAL':
      return dataVar.datasets[0];
    case 'GOLD':
      return dataVar.datasets[1];
    case 'WTI':
      return dataVar.datasets[2];
    case 'BRENT':
      return dataVar.datasets[3];
    case 'SOYBEANS':
      return dataVar.datasets[4];
    case 'CORN':
      return dataVar.datasets[5];
    case 'COPPER':
      return dataVar.datasets[6];
    case 'ALUMINIUM':
      return dataVar.datasets[7];
    case 'ZINC':
      return dataVar.datasets[8];
    case 'NICKEL':
      return dataVar.datasets[9];
    case 'WHEAT':
      return dataVar.datasets[10];
    case 'SUGAR':
      return dataVar.datasets[11];
    case 'COFFEE':
      return dataVar.datasets[12];
    case 'COTTON':
      return dataVar.datasets[13];
    case 'BOND_10Y':
      return dataVar.datasets[14];
    case 'Dollar_Index':
      return dataVar.datasets[15];
    default:
      return null;
  }
}

document.getElementById('futureChart').style.display = 'none';
// const myChart = new Chart(ctx, config);

// var type_select = document.getElementById('type_select');

// type_select.addEventListener('change', function () {
//   const data = getDataForLabel(type_select.value);
//   document.getElementById('myChart').style.display = 'block';
//   type_select.style.display = 'block';
//   finalData.datasets = [data];
//   myChart.update();
// });

function getModelFile(modelNo) {
  switch (modelNo) {
    case '1':
      return './DecisionTreeRegressor_histrolic_price_prediction.csv';
    case '2':
      return './KNeighborsRegressor_histrolic_price_prediction.csv';
    case '3':
      return './LinearRegression_histrolic_price_prediction.csv';
    case '4':
      return './LSTM_histrolic_price_prediction.csv';
    case '5':
      return './SVM_histrolic_price_prediction.csv';
    case '6':
      return './var_model_historical_price_prediction.csv';
    case '7':
      return './varima_model_historical_price_prediction.csv';
    case '8':
      return './varma_model_historical_price_prediction.csv';
    default:
      return './df.csv';
  }
}

document
  .getElementById('predictionForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    headings[0].style.display = 'block';
    headings[1].style.display = 'block';
document.getElementsByClassName('ci')[0].style.display = 'block';

    const type = document.getElementById('type_select').value;

    const normalData = getDataForLabel(type, allDataFuture);

    chartData = {
      labels: allDataFuture.labels,
      datasets: [{ label: 'Future Prediction', data: normalData.data }],
    };

    const config = {
      type: 'line',
      data: chartData,
      options: {
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart',
            },
          },
        },
      },
    };

    document.getElementById('futureChart').style.display = 'block';
    const ctx = document.getElementById('futureChart').getContext('2d');

    if (chartFuture) {
      chartFuture.destroy();
      const futureChart = new Chart(ctx, config);
      chartFuture = futureChart;
    } else {
      const futureChart = new Chart(ctx, config);
      chartFuture = futureChart;
    }
  });

// function parseDate(dateString) {
//   const [day, month, year] = dateString.split('-').map(Number);
//   return new Date(year, month - 1, day);
// }

// function isDateInTimePeriod(date, timePeriod) {
//   const today = new Date();
//   const startDate = new Date(today);
//   startDate.setDate(today.getDate() - timePeriod);

//   return date >= startDate && date <= today;
// }
