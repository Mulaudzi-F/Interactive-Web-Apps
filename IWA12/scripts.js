const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}
 
// Edit below line 
 const book1 = document.querySelector('#book1')
 const book1_status = document.querySelector('#book1 .status')
 const book1_reserve = document.querySelector('#book1 .reserve')
 const book1_checkout = document.querySelector('#book1 .checkout')
 const book1_checkin = document.querySelector('#book1 .checkin')

 //book2
 const book2 = document.querySelector('#book2')
 const book2_status = document.querySelector('#book2 .status')
 const book2_reserve = document.querySelector('#book2 .reserve')
 const book2_checkout = document.querySelector('#book2 .checkout')
 const book2_checkin = document.querySelector('#book2 .checkin')

 //book3
 const book3 = document.querySelector('#book3')
 const book3_status= document.querySelector('#book3 .status')
 const book3_reserve= document.querySelector('#book3 .reserve')
 const book3_checkout= document.querySelector('#book3 .checkout')
 const book3_checkin= document.querySelector('#book3 .checkin')

 //changing the color of buttons to back and gray
book1_checkin.style.color = 'black';
book2_checkin.style.color = 'black';
book3_checkin.style.color = 'black';

//changing color for status text

 /* for book1 */
  if(book1_status.textContent === 'overdue'){
    book1_status.style.color = STATUS_MAP.overdue.color
    book1_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book1_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book1_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
}
  else if (book1_status.textContent === 'shelf'){
    book1_status.style.color = STATUS_MAP.shelf.color
   
    book1_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book1_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book1_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
  }
  else if (book1_status.textContent === 'checkedOut'){
    book1_status.style.color = STATUS_MAP.checkedOut.color
    book1_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book1_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book1_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
  
  }
  else if (book1_status.textContent === 'reserved'){
    book1_status.style.color = STATUS_MAP.reserved.color
    book1_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book1_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book1_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
  }
  

 /* for book2 */
 if(book2_status.textContent === 'overdue'){
    book2_status.style.color = STATUS_MAP.overdue.color
    book2_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book2_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book2_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
  
  }
  else if (book2_status.textContent === 'shelf'){
    book2_status.style.color = STATUS_MAP.shelf.color
    book2_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book2_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book2_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
  }
  
  else if (book2_status.textContent === 'checkedOut'){
    book2_status.style.color = STATUS_MAP.checkedOut.color
    
    book2_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book2_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book2_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
  
  }
  else if (book2_status.textContent === 'reserved'){
    book2_status.style.color = STATUS_MAP.reserved.color
    book2_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book2_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book2_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
  
  }

/* for book3 */

if(book3_status.textContent === 'overdue'){
    book3_status.style.color = STATUS_MAP.overdue.color
    book3_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book3_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book3_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
  }
  else if (book3_status.textContent === 'shelf'){
    book3_status.style.color = STATUS_MAP.shelf.color
    book3_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book3_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book3_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
      
  }
  else if (book3_status.textContent === 'checkedOut'){
    book3_status.style.color = STATUS_MAP.checkedOut.color
    book3_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book3_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book3_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
      
  }
  else if (book3_status.textContent === 'reserved'){
    book3_status.style.color = STATUS_MAP.reserved.color
    book3_checkout.disabled = !STATUS_MAP.overdue.canCheckout
    book3_reserve.disabled = !STATUS_MAP.overdue.canReserve
    book3_checkin.disabled = !STATUS_MAP.overdue.canCheckIn
      
  }

// checkin.style.color = 'black'
// statusy.0.style.color = STATUS_MAP.statusy.color
// reserve.0 = STATUS_MAP.statusy.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.statusy.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.statusy.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// statusy.1.style.color = STATUS_MAP.statusy.color
// reserve.1 = STATUS_MAP.statusy.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.statusy.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.statusy.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// statusy.2.style.color = STATUS_MAP.statusy.color
// reserve.2 = STATUS_MAP.statusy.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.statusy.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.statusy.canCheckIn ? 'enabled' : 'disabled'