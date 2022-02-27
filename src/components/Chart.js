import React from 'react';
import ZingChart from 'zingchart-react';
import "zingchart/es6";
// import 'zingchart-react/dist/modules-es6/zingchart-depth.min.js';

ZingChart.TOUCHZOOM = 'pinch';

export default function Chart() {
  var myConfig = {
    "type": "line",
    // "title": {
    //   "text": "Webpage Analytics",
    //   "font-size": "24px",
    //   "adjust-layout": true
    // },
    // "plotarea": {
    //   "margin": "dynamic 45 60 dynamic",
    // },
    // 

    "scale-x": {
      // "min-value": 1383292800000,
      "shadow": 0,
      "step": 3600000,
      "transform": {
        "type": "date",
        "all": "%d %M",
        "item": {
          "visible": false
        }
      },
      "label": {
        "visible": false
      },
      "minor-ticks": 0
    },
    "scale-y": {
      "line-color": "#f6f7f8",
      "shadow": 0,
      // "guide": {
      //   "line-style": "line"
      // },
      // "format": "₹",
      // negation: "currency",
      // "label": {
      //   "text": "Page Views",
      // },
      "minor-ticks": 0,
      "thousands-separator": ",",
      "step": "₹100",
    },
    // "crosshair-y": {
    //   "format": "₹",
    //   negation: "currency",
    // },
    "crosshair-x": {
      "line-color": "#efefef",
      "plot-label": {
        "border-radius": "5px",
        "border-width": "1px",
        "border-color": "#f6f7f8",
        "padding": "10px",
        "font-weight": "bold"
      },
      "scale-label": {
        "font-color": "#000",
        "background-color": "#f6f7f8",
        "border-radius": "5px"
      }
    },
    "tooltip": {
      "visible": false
    },
    "plot": {"aspect":"spline",
      "highlight": true,
      "tooltip-text": "%t views: %v<br>%k",
      "shadow": 0,
      "line-width": "2px",
      "marker": {
        "type": "circle",
        "size": 3
      },
      "highlight-state": {
        "line-width": 3
      },
      "animation": {
        "effect": 1,
        "sequence": 2,
        "speed": 100,
      }
    },
    "legend": {
      // "layout": "float",
      // "background-color": "none",
      // "border-width": 0,
      // "shadow": 10,
      // "align": "center",
      // "adjust-layout": true,
      // "toggle-action": "remove",
      // "item": {
      //   "padding": 7,
      //   "marginRight": 17,
      //   "cursor": "hand"
      // },
 
      // "align": "center",
      y: "90%",
    },
    "series": [{
        "values": [
          149.2,
          174.3,
          187.7,
          147.1,
          129.6,
          189.6,
          230,
          164.5,
          171.7,
          163.4,
          194.5,
          200.1,
          193.4,
          254.4,
          287.8,
          246,
          199.9,
          218.3,
          244,
          312.2,
          284.5,
          249.2,
          305.2,
          286.1,
          347.7,
          278,
          240.3,
          212.4,
          237.1,
          253.2,
          186.1,
          153.6,
          168.5,
          140.9,
          86.9,
          49.4,
          24.7,
          64.8,
          114.4,
          137.4
        ],
        "text": "Pricing",
        "line-color": "#007790",
        // "legend-item": {
        //   "background-color": "#007790",
        //   "borderRadius": 5,
        //   "font-color": "white"
        // },
        "legend-marker": {
          "visible": true
        },
        "marker": {
          "background-color": "none",
          "border-width": 1,
          "shadow": 0,
          "border-color": "none"
        },
        // "highlight-marker": {
        //   "size": 6,
        //   "background-color": "#007790",
        // }
      },
    ]
  };

  return (
    <>
      <ZingChart height={280} data={myConfig} />
    </>
  )
}
