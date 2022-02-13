import React from 'react'
import { Grid, LineChart, XAxis, YAxis, BarChart } from 'react-native-svg-charts'
import { View, Text as RNText } from 'react-native'
import { Text } from 'react-native-svg'
class XYAxisBarChart extends React.PureComponent {
    render() {
      const data = [55, 50, 10, 95, 43,22,51]
  
      const axesSvg = { fontSize: 10, fill: 'grey' }
      const verticalContentInset = { top: 10, bottom: 10 }
      const xAxisHeight = 30
      const CUT_OFF = 20
  
      
  
      return (
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ height: 300,width:400, flexDirection: 'row' }}>
            <YAxis min={0} max={100} data={data} style={{ marginBottom: 0 }} contentInset={verticalContentInset} svg={axesSvg} />
            <View style={{ flex: 1 }}>
              <BarChart
                style={{ flex: 1 }}
                data={data}
                contentInset={{ top: 20, bottom: 20 }}
                svg={{
                  fill: 'lightgreen'
                }}
              >
                <Grid />
                {/* <Labels /> */}
              </BarChart>
            </View>
          </View>
          <XAxis style={{ marginHorizontal: -10, height: 30}} data={data}  formatLabel={(value, index) => String('Feb ') + index} svg={axesSvg} contentInset={{ left: 30, right: 30 }} />
        </View>
      )
    }
  }
  
  export default XYAxisBarChart