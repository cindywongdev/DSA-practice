let weatherData = [54, 57, 51, 51, 55, 58, 56]

const average = (weatherData.reduce((curr, acc) => curr + acc, 0) / weatherData.length).toFixed(2)

console.log(average)