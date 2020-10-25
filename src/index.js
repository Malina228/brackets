module.exports = function check (str, bracketsConfig) {
  const strArray = str.split('')
  const qwerty = Object.fromEntries(bracketsConfig)
  const res = []

  for (let i of strArray) 
  {
      if (res[0] === i)
      {
          res.shift()
      } 
      else if (qwerty[i]) 
      {
          res.unshift(qwerty[i])
      } 
      else 
      {
          return false
      }
  }

  return res.length === 0
}
