import { html,  updateDraggingHtml, createOrderHtml, moveToColumn } from "./view.js";
import { updateDragging, createOrderData, TABLES } from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */

const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {} 

// HELP event handler
const handleHelpToggle = (event) => {
    html.help.overlay.style.display = 'block'
    html.other.add.focus()  

    html.help.cancel.addEventListener('click', () =>{
        html.help.overlay.style.display = 'none'
        html.other.add.focus()
    })
   }

//add toggle function
const handleAddToggle = (event) => {
   html.add.overlay.style.display = 'block'
   
  
   html.add.title.value ='';
   html.add.table.value = TABLES[0]

   html.add.cancel.addEventListener('click', () =>{
    html.add.overlay.style.display = 'none';
    html.other.add.focus()
   })

}

// add handleAddSubmit function
  

const handleAddSubmit = (event) => {
 event.preventDefault() 
 html.edit.overlay.style.display = 'block'
 const title = html.add.title.value;
 const table = html.add.table.value;
 

 if(title && table){
    const order = createOrderData({title, table, column: 'ordered'})
    const orderHtml = createOrderHtml(order);
    html.columns.ordered.appendChild(orderHtml) 
    html.add.overlay.style.display = 'none'

    html.other.add.focus()
 } 
html.edit.cancel.addEventListener('click', () =>{
    html.edit.overlay.style.display = 'none'
}) 

}


let activeEditOrderId = null;

// handile edit function
const handleEditToggle = (event) => {
    const clickedOrder = event.target.closest('.order') 
   
    if(clickedOrder){
    
        activeEditOrderId = clickedOrder.dataset.id
        const order = state.orders[activeEditOrderId]

        if(order){
            html.edit.id.value = order.id;
            html.edit.title.value = order.title;
            html.edit.table.value = order.table;
            html.edit.column.value = order.column;
            html.edit.overlay.style.display = 'block';
            html.edit.title.focus()
        }
    }
}

// edit submit function

const handleEditSubmit = (event) => {
    event.preventDefault();
    const id = html.edit.id.value;
    const title = html.edit.title.value;
    const table = html.edit.table.value;
    const column = html.edit.column.value;

    if(state.orders[id]){
        const order = state.orders[id];
        order.title = title;
        order.table = table;
        order.column = column;
        moveToColumn(id, column);
        html.edit.overlay.style.display = 'none';
        activeEditOrderId = null;
    }
}
const handleDelete = (event) => {
    if(activeEditOrderId) {
        const orderHtml = document.querySelector(`[data-id="${activeEditOrderId}"]`)
        if(orderHtml){
            orderHtml.remove();
            delete state.orders[activeEditOrderId];
            activeEditOrderId = null;
            html.edit.overlay.style.display = 'none'

        }
    }
}

html.edit.cancel.addEventListener('click', () =>{
    html.edit.overlay.style.display = 'none;'
    activeEditOrderId = null
})

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}


