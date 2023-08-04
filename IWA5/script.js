const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
let customers = '1'
const customerLocation = 'RSA'
let currency = null
let shipping = null

// product bought

let shoes = 300 * 1
let toys =  100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

if (customerLocation === 'RSA') { 
    shipping = 400; 
    currency = 'R' 
    if (shoes + batteries + pens + shirts >= 1000 && customers ==='1' ) {
      shipping = 0;
     }}
     else if (customerLocation === 'NAM'){
        shipping = 600;
        currency = '$' 
        if (shoes + batteries + pens + shirts >= 60 && customers ==='1' ) {
            shipping = 0;
           }
    }
   else {
       shipping = 800;
       currency = '$'}



    if (customerLocation === 'NAM' && customers < 2) {
        shipping = 0;
    }
   

if (shipping === 0 && customers !== 1) { console.log(FREE_WARNING) }

customerLocation === 'NK' ? console.log(BANNED_WARNIN) : console.log('price', currency,  shoes + batteries+ toys + pens + shirts + shipping)

