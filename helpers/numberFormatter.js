export function formatNumberTwoDigits(number){
    if(number.toString().length==1){
        return "0"+number.toString()
    }
    else
    return number;
}