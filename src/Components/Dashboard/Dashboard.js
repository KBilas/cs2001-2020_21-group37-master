import React, { Component } from 'react';
import './styles/Dashboard.css';
import ChartistGraph from 'react-chartist';

import DashNav from './DashNav.js';
import CardsSection from './CardsSection';

//dashboard charts for the dashboard
//static values for the charts wont change unless intended
//link for the i personally used charts https://gionkunz.github.io/chartist-js/

class Dashboard extends Component {
  render() {
    let dataPie = { 
      labels: ["50%", "30%", "20%"], //percentages as labels on the graph
      series: [50, 30, 20] //actual percentage that will be seen on the graph
    }
    let dataPie2 = { 
      labels: ["15%", "45%", "40%"], //percentages as labels on the graph
      series: [15, 45, 40] //actual percentage that will be seen on the graph
    }
    let dataSales = {
      labels: [
        "9:00AM",
        "12:00AM",
        "3:00PM",
        "6:00PM",
        "9:00PM",
        "12:00PM",
        "3:00AM",
        "6:00AM"
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695, 580],
        [67, 152, 143, 240, 287, 335, 435, 437, 450],
        [23, 113, 67, 108, 190, 239, 307, 308, 350]
      ]
    }

    let DataBar = {
      labels: [
        "Morning",
        "Afternoon",
        "Evening",
        "Night"
      ],
      series: [

        [287, 385, 490, 492],
        [67, 152, 143, 240],
        [85, 264, 143, 240]

      ]
    }

//Pie chart and line chart just make them about anything as well just gave examples
//make sure theyre live updates
//at least i think they have to be updated constantly


    return ( 
      <div className="content"> 
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm-5 ms-xl1">
              <DashNav /> 
            </div>
            <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
              <div className="ms-Grid-row">
                <CardsSection />
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm4 ms-xl3 main-element"> 
                  <div className="card ">
                    <div className="card-header ">
                      <h4 className="card-title">Exercise Types</h4>
                      <p className="card-category">Sub-Heading</p> 
                    </div>
                    <div className="card-body ">
                      <ChartistGraph data={dataPie} type="Pie" /> 
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> Orange - Arms
                        <p></p>
                          <i className="fa fa-circle text-danger"></i> Red - Legs
                          <p></p>
                          <i className="fa fa-circle text-warning"></i> Blue - Shoulders
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-clock-o"></i> Updated ___ Ago   
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="ms-Grid-col ms-sm8 ms-xl8 main-element">
                  <div className="card">
                    <div className="card-header ">
                      <h4 className="card-title">Exercises Done Daily</h4>
                      <p className="card-category">Sub-Heading</p>
                    </div>
                    <div className="card-body ">
                      <ChartistGraph data={dataSales} type="Line" />
                    </div>
                    <div className="card-footer ">
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> 1
                        <p></p>
                    <i className="fa fa-circle text-danger"></i> 2
                    <p></p>
                    <i className="fa fa-circle text-warning"></i> 3
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-history"></i> Updated ___ Ago 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm4 ms-xl3 main-element"> 
                  <div className="card ">
                    <div className="card-header ">
                      <h4 className="card-title">Most Exercises Done</h4>
                      <p className="card-category">Sub-Heading</p> 
                    </div>
                    <div className="card-body ">
                      <ChartistGraph data={dataPie2} type="Pie" /> 
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> Orange - Arms
                        <p></p>
                          <i className="fa fa-circle text-danger"></i> Red - Legs
                          <p></p>
                          <i className="fa fa-circle text-warning"></i> Blue - Shoulders
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-clock-o"></i> Updated ___ Ago   
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="ms-Grid-col ms-sm8 ms-xl8 main-element">
                  <div className="card">
                    <div className="card-header ">
                      <h4 className="card-title">Favourite Exercises</h4>
                      <p className="card-category">Sub-Heading</p>
                    </div>
                    <div className="card-body ">
                      <ChartistGraph data={DataBar} type="Bar" />
                    </div>
                    <div className="card-footer ">
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> 1
                        <p></p>
                    <i className="fa fa-circle text-danger"></i> 2
                    <p></p>
                    <i className="fa fa-circle text-warning"></i> 3
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-history"></i> Updated ___ Ago 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;