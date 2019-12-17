const counter = require('./Counter')

// USAGE: getCounter(collation_name) --> int (x)
module.exports = {
  getCounter(col) {

    return new Promise(async resolve => {
      let number = await counter.findOne({col})
  
      if (!number) {
        await counter.create({col})
        resolve(1)
        number = await counter.findOne({col})
        number.counter++
        await number.save()
        return
      }
  
      number.counter++
      await number.save()
  
      resolve(number.counter)
    })

  }
}
