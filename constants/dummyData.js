
export const trafficChartDumy={
    
}
export function getWeeklyTimelineDummyData(timeline){
    
    let randomDummyData=[];
    timeline.forEach(ie=>randomDummyData.push(Math.floor(Math.random() * 100)))
    return randomDummyData;
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