const buttons = document.querySelectorAll("button");
const cards = document.querySelectorAll(".card");

//add event listener to every button
buttons.forEach((btn)=>{
    btn.addEventListener("click",() => {
        
        //add 'button-active' class to clicked button if there isnt one,
        //remove class from other buttons 
        if(!btn.classList.contains("button-active")){
            buttons.forEach((elem) => elem.classList.remove("button-active"));
            btn.classList.add("button-active");
        }

        //loop on all elements of all cards, toggling class 'hidden' depending on timePeriodButton active 
        cards.forEach((card)=>{
            Array.from(card.children).forEach((elem)=>{

                if(elem.classList.contains(btn.id) && elem.classList.contains("hidden")){
                    elem.classList.remove("hidden");
                }
                else if(!elem.classList.contains(btn.id) && !elem.classList.contains("hidden")){
                    elem.classList.add("hidden");
                }
                
            });
        });

    });
});


