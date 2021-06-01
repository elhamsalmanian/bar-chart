import React, { Component } from 'react';
import Chart from 'react-apexcharts';


class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: '#f4f4f4',
                    foreColor: '#333'
                },
                xaxis: {
                    categories: [
                        'Bordeaux',
                         'Burgundy', 
                         'Rhone', 
                         'Veneto', 
                         'Tuscany', 
                         'Rioja', 
                         'Napa',
                          'Penfolds',
                          'Baden',
                          'Mendoza'
                        ]
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
                }
            },
            series : [{
                name:'Wine Price',
                data: [
                      1045, 
                      2002, 
                      1097, 
                      744, 
                      1291,  
                      888,  
                      7500,  
                      2433, 
                      153, 
                      101, 
                    ]
            }],
        }
    }

    onClick= () => {
//console.log(123); it is just for test (if you go to the page->inspect->console->click on Horizontal ->you should see 123)
       this.setState({
           options: {...this.state.options,
            plotOptions: {
                ...this.state.options,
                bar: {
                    ...this.state.options.plotOptions.bar,
                    horizontal: !this.state.options.plotOptions.bar.horizontal
                }
            }
        }
    });
    }

    render() {
        return (
            <React.Fragment>
        <Chart 
        options = {this.state.options}
        series = {this.state.series}
        type ='bar'
        height ='450'
        width = '100%'
        />

        <button onClick={ this.onClick }>Change</button>
        </React.Fragment>
        );
    }
}

export default BarChart;