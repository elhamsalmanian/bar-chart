
let cData = chartData;  // val is "Hello";

//chart Options
const options = {
    chart: {
        height: 450 ,
        width: '100%',
        type: cData.chartType,
        background:'#f4f4f4',
        foreColor:'#333'
    },
    series : cData.seriesData,
    xaxis: {
        categories: cData.xaxisCategories
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },

    fill: {
        colors: ['#f44336']
    },
    dataLable: {
        enabled: false
    },
    title: {
        text: 'The Best Wines Brand (2020)',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
        }
    },
};




//Init Chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

//Render Chart
chart.render();

//Event Method Example
// This is your choice, You can out each events you want like: beforeMount,mounted,selection,beforeZoom,scrolled,click,zoomed,dataPointSelection,update
// (https://apenxcharts.com/docs/events/)
document.querySelector('button').addEventListener('click', (e) => {
    var btn = e.target;
    var isHorizontal = true;
    if(btn.innerText == 'Horizontal')
    {
        e.target.innerText = 'Vertical' ;
        isHorizontal = true;        
    }
    else
    {
        btn.innerText = 'Horizontal' ;
        isHorizontal = false;        
    }

    chart.updateOptions({
        plotOptions: {
            bar: {
                horizontal: isHorizontal, // if you put true you can find your bar on horizontal status.
            }
        }
    })
}
);

document.getElementById('test').append(val);
