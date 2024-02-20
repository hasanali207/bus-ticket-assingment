let allseatName = document.getElementsByClassName('seat-name');
let selectSeatNumber = 0;
let ticketCount = getTextElementValueById('available-seat');

let ticketPrice = getTextElementValueById('ticket-price')
let SeatNumber = 4
for(seatName of allseatName){
        seatName.addEventListener('click', function(event){
            

            if(selectSeatNumber < 4){
                selectSeatNumber = selectSeatNumber + 1;
                setInnerText('select-seat-number', selectSeatNumber)
                
                ticketCount = ticketCount - 1;
                setInnerText('available-seat', ticketCount)

                event.target.style.cursor = 'not-allowed';
                event.target.style.pointerEvents = 'none';
                event.target.style.backgroundColor = '#1DD100';
                event.target.style.color = '#fff';
                event.target.style.borderRadius = '6px';
                
                const getSeatName = event.target.innerText;           
                const appendContainer = document.getElementById('append-selected-seat') ;   
                 const newElement = document.createElement('div');
                 newElement.style.display = 'flex'
                 newElement.style.justifyContent = 'space-between'
                 newElement.style.padding = '10px 0'
                const p1  = document.createElement('p')
                p1.innerText = getSeatName;
                const p2  = document.createElement('p')
                p2.innerText = "Economy Class";
                const p3  = document.createElement('p')
                p3.innerText = ticketPrice;
                newElement.appendChild(p1)
                newElement.appendChild(p2)
                newElement.appendChild(p3)
                appendContainer.appendChild(newElement)



                let totalCost =  getTextElementValueById('total-cost');
                let  sumOfTotalCost = totalCost + ticketPrice
                 
                 setInnerText('total-cost',sumOfTotalCost)
           
                 let grandTotal = getTextElementValueById('grand-total');
                  let grandTotalCost = grandTotal + ticketPrice;
                 setInnerText('grand-total', grandTotalCost)
                

                 const calculateButton = document.getElementById('calculate-btn');
                 const discountCodeInput = document.getElementById('discount-code')
                 if(SeatNumber === selectSeatNumber){
                    calculateButton.style.backgroundColor ='#1DD100';
                 }
                 calculateButton.addEventListener('click', function(event){
                     
                    
                     const couponCodeWrapper = document.getElementById('coupon-code-area');
                     const discountCode = discountCodeInput.value
                    if(SeatNumber === selectSeatNumber){
                    
                     if(discountCode === "NEW15"){
                         grandTotalCost = grandTotalCost - (grandTotalCost * 0.15)
                         setInnerText('grand-total', grandTotalCost)
                         couponCodeWrapper.style.display = 'none'
                     }
                     else if(discountCode === "Couple 20"){
                         grandTotalCost = grandTotalCost - (grandTotalCost * 0.20)
                         setInnerText('grand-total', grandTotalCost)
                         couponCodeWrapper.style.display = 'none'
                     }
                     
                    }
         
                     
                 })

                 

               }
               else{
                alert('No, ticket is avaiable For purchase')
             }
      
    
      

    // SeatNumberCoundown up to down
        
        
// Append Content 
    





      


       
      
      

  
    })
}




const mainContent = document.getElementById('main-content')
const submitButton = document.getElementById('submit-btn')




function setInnerText(id,value){
    document.getElementById(id).innerText = value;
    return;
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


// const selectSeatNumber = getTextElementValueById('current-life');
// const updatedLife = selectSeatNumber - 1;
// setTextElementValueById('selectSeatNumber', updatedLife);

// if(updatedLife === 0){
//     gameOver();
// }


// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputValueText = inputField.value;
//     // console.log(inputValue);
//     return inputValueText;
// }

// // function setInnerTextById(elementId, area){
// //     const element = document.getElementById(elementId);
// //     element.innerText = area;
// // }