
import d3 from 'd3';
import jsonldVis from '..';
jsonldVis(d3);

function loadVis(url) {
  d3.select('#graph').html('');
  d3.json(url, (err, data) => {
    if (err) return console.warn(err);
    d3.jsonldVis(data, '#graph', { w: 800, h: 600, maxLabelWidth: 250 });
  });
}

d3.select('#load').on("click", () => {
  loadVis(d3.select('#url').property('value'));
});

loadVis('example.json');
