function addRecommenderToChart(id) {
  var button = document.getElementById(id);
  var button_idx = id.slice(7);

  var table = document.getElementById('songList');
  var row = table.rows[parseInt(button_idx) + 1];
  var recommender = row.getElementsByTagName('td')[4];
  console.log("recommender is  ", recommender);
  addToChart(recommender);
}

function addToChart(recommender) {
  //var recommender = sessionStorage.getItem('recommender');

  var data = sessionStorage.getItem('pieChart');

  var layout = {title: 'Your Top Recommenders',};
  var title = {title: "Your Top Recommenders"};

  var pieData = JSON.parse(sessionStorage.getItem('pieData'));

  data = JSON.parse(data);
  if (data[0].labels[0] == "No recommenders :(") {
    console.log('empty pie chart');
    data[0].labels[0] = recommender;
    Plotly.newPlot('pieChart', data, layout, title);
    sessionStorage.setItem('pieChart', JSON.stringify(data));

    pieData[0].count[0] = 1;
    pieData[0].names[0] = recommender;
    sessionStorage.setItem('pieData', JSON.stringify(pieData));
  }

  else {
    if (pieData[0].names.includes(recommender)) {
      var idx = pieData[0].names.indexOf(recommender);
      pieData[0].count[idx]++;
      sessionStorage.setItem('pieData', JSON.stringify(pieData));
      
      var pie = [{
        values: getPercentages(pieData[0].count, pieData[0].names),
        labels: data[0].labels,
        type: 'pie'
      }];
      sessionStorage.setItem('pieChart', JSON.stringify(pie));

      var layout = {title: 'Your Top Recommenders',};
      var title = {title: "Your Top Recommenders"};
      Plotly.newPlot('pieChart', pie, layout, title);
    }
    else {
      data[0].labels.push(recommender);
      pieData[0].names.push(recommender);
      pieData[0].count.push(1);

      var pie = [{
        values: getPercentages(pieData[0].count, pieData[0].names),
        labels: data[0].labels,
        type: 'pie'
      }];
      sessionStorage.setItem('pieChart', JSON.stringify(pie));

      var layout = {title: 'Your Top Recommenders',};
      var title = {title: "Your Top Recommenders"};
      Plotly.newPlot('pieChart', pie, layout, title);
    }
  }
}

function getPercentages(counts, names) {
  var sum = 0;
  for (var i = 0; i < names.length; i++) {
    sum += counts[i];
  }

  percentages = [];
  for (var i = 0; i < names.length; i++) {
    percentages.push(counts[i]/sum);
  }

  return percentages;
}