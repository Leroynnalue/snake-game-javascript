export function randomNumber(start,range){
    let number = Math.floor((Math.random() * range)  + start)

    while(number > range){
        number = Math.floor((Math.random() * range)  + start)
    }

    if(number % 5 == 0){
        return number
    }else return randomNumber(10,300)
}
