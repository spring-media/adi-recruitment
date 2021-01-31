/**
 * Finds sum and mean of 'impressions' values
 * @param {Array} data - List of objects, each with keys ['date', 'impressions'] 
 * @return {Object} Object containing calculated mean and sum 
 */
function process( data ){
  let sum = 0

  if (typeof data === 'object') {
    for(let i in data) {
      sum += data[i]['impressions']
    }
  } else {
    data = data.split(/\r\n|\r|\n/);
    data.shift() // first element is descriptor

    for (let i in data) {
      sum += parseInt(data[i].split(",")[1])
    }
  }

  const mean = sum/data.length

  return {'mean':mean, 'sum':sum}
}

module.exports = { process }