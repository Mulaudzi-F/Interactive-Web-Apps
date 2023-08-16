
// order numbers
const order1 = document.querySelector('[data-key = "order1"]');
const order2 = document.querySelector('[data-key = "order2"]');
const order3 = document.querySelector('[data-key = "order3"]');


//order 1 items
const order1_donuts = document.querySelector('[data-key="order1"] .donuts .count')
order1_donuts.textContent= order1.getAttribute('data-donuts')

const order1_biscuits = document.querySelector('[data-key="order1"] .biscuits .count')
    order1_biscuits.textContent = order1.getAttribute('data-biscuits')

const order1_pancakes = document.querySelector('[data-key="order1"] .pancakes .count')
order1_pancakes.textContent = order1.getAttribute('data-pancakes')

const order1_delivery = document.querySelector('[data-key="order1"] .status dd')
    order1_delivery.textContent = order1.getAttribute('data-delivered')

//order2 items
const order2_donuts = document.querySelector('[data-key="order2"] .donuts .count')
order2_donuts.textContent= order2.getAttribute('data-donuts')
    
const order2_biscuits = document.querySelector('[data-key="order2"] .biscuits .count')
order2_biscuits.textContent = order2.getAttribute('data-biscuits')

const order2_pancakes = document.querySelector('[data-key="order2"] .pancakes .count')
order2_pancakes.textContent = order2.getAttribute('data-pancakes')

const order2_delivery = document.querySelector('[data-key="order2"] .status dd')
    order2_delivery.textContent = order2.getAttribute('data-delivered')

// order3 items

const order3_donuts = document.querySelector('[data-key="order3"] .donuts .count')
order3_donuts.textContent= order3.getAttribute('data-donuts')
    
const order3_biscuits = document.querySelector('[data-key="order3"] .biscuits .count')
order3_biscuits.textContent = order3.getAttribute('data-biscuits')

const order3_pancakes = document.querySelector('[data-key="order3"] .pancakes .count')
order3_pancakes.textContent = '2'

const order3_delivery = document.querySelector('[data-key="order3"] .status dd')
    order3_delivery.textContent = order3.getAttribute('data-delivered')