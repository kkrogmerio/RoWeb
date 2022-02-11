
export const trafficChartDumy={
    'HourChart':[22,36,41,31,39,44,33,99],
    'DayChart':[22,36,20,35,40,60,80,99],
    'WeekChart':[22,22,33,11,32],
    'MonthChart':[14,14,21,30,42,27,18,19]
}
export function getCurrentTimelineDummyData(timeline){
 
    return trafficChartDumy[timeline]
}
export function bezierChartConfig(){
    return   {backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
  
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false}
}