const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = `R ${(-parseFloat(leoBalance) + -parseFloat(sarahBalance)).toFixed(2)}`
const leo = `${leoName} ${leoSurname}(Owed: R ${parseFloat(-leoBalance).toFixed(2)})`
const sarah = `${sarahName}${sarahSurname} (Owed: R ${parseFloat(-sarahBalance).toFixed(2)})`
const total = `Total amount owed:`
const result = `${leo}  
${sarah} 


 ${divider}  
   ${total} ${owed}   
 ${divider}`

console.log(result)


