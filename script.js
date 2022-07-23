
       

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




   


       let arrobj = [
     
                
                   {name:"Homeowners' Association(HOA) survey template", val :"customers"  },
                   {name:"Automobile buyer feedback", val :"customers"  },
                   {name:"Social media safty", val :" customers"  },
                   {name:"CRM software survey templat", val :"customers"  },
                   {name:"Customer experience", val :" customers"  },
                   {name:"Website feedback (intercept) survey template", val :"customers"  },
                   {name:"Feature request template", val :" customers"  },
                   {name:"Post purchase evaluation template", val :"customers"  },
                   {name:"Customer testimonial template", val :"customers"  },
                   {name:"Customer review template", val : "customers"  },
                   {name:"Brand perception survey", val :"customers"  },
                   {name:"Consumer behavior", val :"customers"  },
                   {name:"school climate", val :"education"  },
                   {name:"University instutor evalutin", val :"education"  },
                   {name:"High school sports- student feedback", val :"education"  },
                   {name:" Workshop survey", val :"education"  },
                   {name:"Website feedback survey templete", val : "customers"  },
                   {name:"Website feedback survey templete", val : "customers"  },
                   {name:"Customer comments", val :"customers"  },
                   {name:"Restaurant feedback survey templete", val :"customers"  },
                   {name:"Path to purchase", val :"customers"  },
                   {name:"NPS and brand loyalty", val :"customers"  },
                   {name:"Corporate social responsibility survey templete", val :"customers"  },
                   {name:"Help desk feedback survey template", val :"customers"  },
                   {name:"School program fit", val :"education"  },
                   {name:"parent self-efficacy", val :"education"  },
                   {name:"Aluni template", val :"education"  },
                   {name:"Mailchmp customer check-in template", val :"customers"  },
                   {name:"Coronavirus B2B customer pulse survey template", val :"customers"  },
                   {name:"Mobil app feedback", val :" customers"  },
                   {name:"Software and app customer feedback", val :"customers"  },
                   {name:"Customer feedback survey template (Business to Business)", val :"customers"  },
                   {name:"University student satisfaction", val :"education"  },
                   {name:"Education demographics", val :"education"  },
                   {name:"Course evaluation survey template", val :"education"  },
                   {name:"Learning support", val :"education"  },
                   {name:"K-12 parent template", val :"education"  },
                   {name:"Parent engagement", val :"education"  },
                   {name:"University teaching assistance evaluation survey template", val :"education"  },
                   {name:"Child behaviors survey template", val :"education"  },
                   {name:"Bullying survey", val :"education"  },
                   {name:"University faculty satisfaction", val :"education"  },
                   {name:"University student graduation template", val :"education"  },
                   {name:"Name That Novel survey template", val :"education"  },
                   {name:"High school teacher evaluation template", val :"education"  },
                   {name:"360-degree employee evaluation", val :"employees"  },
                   {name:"Employee engagement", val :"employees"  },
                   {name:"Management performance", val :"employees"  },
                   {name:"Employee satisfaction", val :"employees"  },
                   {name:"Team performance", val :"employees"  },
                   {name:"Employee exit", val :"employees"  },
                   {name:"Employee benefit", val :"employees"  },
                   {name:"Recruitment satisfication", val :"employees"  },
                   {name:"Work environment", val :"employees"  },
                   {name:"Department performance", val :"employees"  },
                   {name:"Employee performance", val :"employees"  },
                   {name:"Employment template", val :"employees"  },
                   {name:"Supervisor performance", val :"employees"  },
                   {name:"Employee motivation", val :"employees"  },
                   {name:"Career development", val :"employees"  },
                   {name:"New hire onboarding survey template", val :"employees"  },
                   {name:"Meeting feedback survey template", val :"employees"  },
                   {name:"Compensation survey template", val :"employees"  },
                   {name:"Work life balance survey", val :"employees"  },
                   {name:"Exit interview survey template", val :"employees"  },
                   {name:"Employee diversity", val :"employees"  },
                   {name:"Team building template", val :"employees"  },
                   {name:"Stakeholder template", val :"employees"  },
                   {name:"Candiate experience", val :"employees"  },
                   {name:"Relationship management", val :"employees"  },
                   {name:"Work engagement", val :"employees"  },
                   {name:"Professional development template", val :"employees"  },
                   {name:"Organizational culture survey template", val :"employees"  },
                   {name:"Mentorship and advocacy", val :"employees"  },
                   {name:"Job applicaton survey template", val :"employees"  },
                   {name:"Vendor workplace diversity survey", val :"employees"  },
                   {name:"Online professional networking", val :"employees"  },
                   {name:"Workplace benefits survey", val :"employees"  },
                   {name:"Entry interview survey template", val :"employees"  },
                   {name:"Leadership style survey template", val :"employees"  },
                   {name:"Timesheet template", val :"employees"  },
                   {name:"Wage gap evaluation survey", val :"employees"  },
                   {name:"Culture of Genius template", val :"employees"  },
                   {name:"Customer effort score survey", val :"employees"  },
                   {name:"Help desk template", val :"employees"  },
                   {name:"Return to the office survey template", val :"employees"  },
                   {name:"Job application template", val :"employees"  },
                   {name:"Gender inclusivity at work survey template", val :"employees"  },
                   {name:"SurveyMokey team survey", val :"employees"  },
                   {name:"Impact of racism employee check-in", val :"employees"  },
                   {name:"Adam Grant entry interview", val :"employees"  },
                   {name:"Gender in the workplace", val :"employees"  },
                   {name:"New hire training quiz", val :"employees"  },
                   {name:"Benefits template", val :"employees"  },
                   {name:"Corporate legal training quiz", val :"employees"  },
                   {name:"General event feedback survey template", val :"events"  },
                   {name:"RSVP and contact information", val :"events"  },
                   {name:"Professional event feedback", val :"events"  },
                   {name:"Post-event feedback survey template", val :"events"  },
                   {name:"Event planning", val :"events"  },
                   {name:"Entertainment event feedback", val :"events"  },
                   {name:"Neighborhood events survey template", val :"events"  },
                   {name:"Appointment template", val :"events"  },
                   {name:"Endurance event feedback", val :"events"  },
                   {name:"Eventbrite post-event feedback", val :"events"  },
                   {name:"Diet,fitness,and exercice", val :"healthcare"  },
                   {name:"Mental health survey", val :"healthcare"  },
                   {name:"Stress survey", val :"healthcare"  },
                   {name:"Post-vist patient satisfaction", val :"healthcare"  },
                   {name:"Hospital performance evaluation", val :"healthcare"  },
                   {name:"Health insurance evaluation", val :"healthcare"  },
                   {name:"CAHPS Vists Survey 2.0", val :"healthcare"  },
                   {name:"Personal hygience survey template", val :"healthcare"  },
                   {name:"Health insurance template", val :"healthcare"  },
                   {name:"Smoking template", val :"healthcare"  },
                   {name:"Height and weight survey template", val :"healthcare"  },
                   {name:"Healthcare expenses", val :"healthcare"  },
                   {name:"Social support", val :"healthcare"  },
                   {name:"Health check-in survey template", val :"healthcare"  },
                   {name:"CAHPS Dental Plan Survey", val :"healthcare"  },
                   {name:"Veterinarian patient intake template", val :"healthcare"  },
                   {name:"Neighborhood events survey template", val :"healthcare"  },
                   {name:"Height and weight survey template", val :"healthcare"  },
                   {name:"Smoking template", val :"healthcare"  },
                   {name:"Height and weight survey template", val :"healthcare"  },
                   {name:"CRM software survey templat", val :"market-reserch"  },
                   {name:"Customer experience", val :"market-reserch"  },
                   {name:"Website feedback (intercept) survey template", val :"market-reserch"  },
                   {name:"Feature request template", val :"market-reserch"  },
                   {name:"Post purchase evaluation template", val :"market-reserch"  },
                   {name:"Customer testimonial template", val :"market-reserch"  },
                   {name:"Customer review template", val :"market-reserch"  },
                   {name:"Brand perception survey", val :"market-reserch"  },
                   {name:"Consumer behavior", val :"market-reserch"  },
                   {name:"Mailchmp customer check-in template", val :"market-reserch"  },
                   {name:"Coronavirus B2B customer pulse survey template", val :"market-reserch"  },
                   {name:"Mobil app feedback", val :"market-reserch"  },
                   {name:"Software and app customer feedback", val :"market-reserch"  },
                   {name:"Customer feedback survey template (Business to Business)", val :"market-reserch"  },
                   {name:"University student satisfaction", val :"market-reserch"  },
                   {name:"Education demographics", val :"market-reserch"  },
                   {name:"Course evaluation survey template", val :"market-reserch"  },
                   {name:"Learning support", val :"education"  },
                   {name:"K-12 parent template", val :"market-reserch"  },
                   {name:"Parent engagement", val :"market-reserch"  },
                   {name:"University teaching assistance evaluation survey template", val :"market-reserch"  },
                   {name:"Child behaviors survey template", val :"market-reserch"  },
                   {name:"Bullying survey", val :"market-reserch"  },
                   {name:"University faculty satisfaction", val :"market-reserch"  },
                   {name:"University student graduation template", val :"market-reserch"  },
                   {name:"school climate", val :"market-reserch"  },
                   {name:"University instutor evalutin", val :"market-reserch"  },
                   {name:"High school sports- student feedback", val :"market-reserch"  },
                   {name:" Workshop survey", val :"market-reserch"  },
                   {name:"School program fit", val :"market-reserch"  },
                   {name:"parent self-efficacy", val :"market-reserch"  },
                   {name:"Aluni template", val :"market-reserch"  },
                   {name:"Name That Novel survey template", val :"market-reserch"  },
                   {name:"High school teacher evaluation template", val :"market-reserch"  },
                   {name:"360-degree employee evaluation", val :"market-reserch"  },
                   {name:"Employee engagement", val :"employees"  },
                   {name:"Management performance", val :"market-reserch"  },
                   {name:"Employee satisfaction", val :"market-reserchs"  },
                   {name:"Team performance", val :"market-reserch"  },
                   {name:"Employee exit", val :"market-reserch"  },
                   {name:"Employee benefit", val :"market-reserch"  },
                   {name:"Recruitment satisfication", val :"market-reserch"  },
                   {name:"Work environment", val :"market-reserch"  },
                   {name:"Department performance", val :"market-reserch"  },
                   {name:"Employee performance", val :"market-reserch"  },
                   {name:"Employment template", val :"market-reserch"  },
                   {name:"Employee exit", val :"Nonprofits"  },
                   {name:"Employee benefit", val :"Nonprofits"  },
                   {name:"Recruitment satisfication", val :"Nonprofits"  },
                   {name:"Department performance", val :"Nonprofits"  },
                   {name:"Employee performance", val :"Nonprofits"  },
                   {name:"CRM software survey templat", val :"market-reserch"  },
                   {name:"Customer experience", val :" market-reserch"  },
                   {name:"Website feedback (intercept) survey template", val :"market-reserch"  },
                   {name:"Feature request template", val :" market-reserch"  },
                   {name:"Post purchase evaluation template", val :"market-reserch"  },
                   {name:"Customer testimonial template", val :"market-reserch"  },
                   {name:"Customer review template", val :"market-reserch"  },
                   {name:"Brand perception survey", val :"market-reserch"  },
                   {name:"Consumer behavior", val :"market-reserch"  },
                   {name:"Mailchmp customer check-in template", val :"market-reserch"  },
                   {name:"Coronavirus B2B customer pulse survey template", val :"market-reserch"  },
                   {name:"Mobil app feedback", val :" market-reserch"  },
                   {name:"Software and app customer feedback", val :"market-reserch"  },
                   {name:"Customer feedback survey template (Business to Business)", val :"market-reserch"  },
                   {name:"University student satisfaction", val :"market-reserch"  },
                   {name:"Education demographics", val :"market-reserch"  },
                   {name:"Course evaluation survey template", val :"market-reserch"  },
                   {name:"Learning support", val :"education"  },
                   {name:"K-12 parent template", val :"market-reserch"  },
                   {name:"Parent engagement", val :"market-reserch"  },
                   {name:"University teaching assistance evaluation survey template", val :"market-reserch"  },
                   {name:"Child behaviors survey template", val :"market-reserch"  },
                   {name:"Employee exit", val :"market-reserch"  },
                   {name:"Employee benefit", val :"market-reserch"  },
                   {name:"Recruitment satisfication", val :"market-reserch"  },
                   {name:"Work environment", val :"market-reserch"  },
                   {name:"Department performance", val :"market-reserch"  },
                   {name:"Employee performance", val :"market-reserch"  },
                   {name:"Employment template", val :"market-reserch"  },
                   {name:"Brand perception survey", val :"others"  },
                   {name:"Customer comments", val :" others"  },
                   {name:"customer satisfaction survey", val : "customers " },
                   {name:"customer service", val : "customers"  },
                   {name:"Net Promoter Score(NPS) ", val :" customers"  },
                   {name:"Software evaluation survey templete", val : "customers"  },
                   {name:"customer service feedback", val : "customers  "},
                   {name:"Hotal feedback", val : "customers"  },
                   {name:"Cunsumer behavior ", val :"customers"  },
                   {name:"Typical customer anyalysis", val :"customers"  },
                   {name:"Retailer customer feedback", val :"customers"  },
                   {name:"Brand perception survey", val :"customers"},
                   {name:"Restaurant feedback survey templete", val :"others"  },
                   {name:"Path to purchase", val :"others"  },
                   {name:"NPS and brand loyalty", val :" others"  },
                   {name:"Corporate social responsibility survey templete", val :"others"  },
                   {name:"Help desk feedback survey template", val :"others"  },
                   {name:"Homeowners' Association(HOA) survey template", val :"others"  },
                   {name:"Bullying survey", val :"market-reserch"  },
                   {name:"University faculty satisfaction", val :"market-reserch"  },
                   {name:"University student graduation template", val :"market-reserch"  },
                   {name:"school climate", val :"market-reserch"  },
                   {name:"University instutor evalutin", val :"market-reserch"  },
                   {name:"High school sports- student feedback", val :"market-reserch"  },
                   {name:" Workshop survey", val :"market-reserch"  },
                   {name:"School program fit", val :"market-reserch"  },
                   {name:"parent self-efficacy", val :"market-reserch"  },
                   {name:"Aluni template", val :"market-reserch"  },
                   {name:"Name That Novel survey template", val :"market-reserch"  },
                   {name:"High school teacher evaluation template", val :"market-reserch"  },
                   {name:"360-degree employee evaluation", val :"market-reserch"  },
                   {name:"Employee engagement", val :"employees"  },
                   {name:"Management performance", val :"market-reserch"  },
                   {name:"Employee satisfaction", val :"market-reserchs"  },
                   {name:"Team performance", val :"market-reserch"  },
                   {name:"Automobile buyer feedback", val :"others"  },
                   {name:"Social media safty", val :" others"  },
                   {name:"CRM software survey templat", val :"others"  },
                   {name:"Customer experience", val :" others"  },
                   {name:"Website feedback (intercept) survey template", val :"others"  },
                   {name:"Feature request template", val :"others"  },
                   {name:"Post purchase evaluation template", val :"others"  },
                   {name:"Customer testimonial template", val :"others"  },
                   {name:"Customer review template", val :"others"  },
                   {name:"Brand perception survey", val :"others"  },
                   {name:"Consumer behavior", val :"others"  },
                   {name:"Mailchmp customer check-in template", val :"others"  },
                   {name:"Coronavirus B2B customer pulse survey template", val :"others"  },
                   {name:"Mobil app feedback", val :" others"  },
                   {name:"Software and app customer feedback", val :"others"  },
                   {name:"Customer feedback survey template (Business to Business)", val :"others"  },
                   {name:"University student satisfaction", val :"others"  },
                   {name:"Education demographics", val :"others"  },
                   {name:"Course evaluation survey template", val :"others"  },
                   {name:"Learning support", val :"others"  },
                   {name:"K-12 parent template", val :"others"  },
                   {name:"Parent engagement", val :"others"  },
                   {name:"University teaching assistance evaluation survey template", val :"others"  },
     
     
                    
                   
                   
     
                    
                    
     
     
     
     
     
       ];
         display(arrobj)
                  
       
         function display(arr){
             document.querySelector(".scroll-object").innerHTML=""
              
              for(let i = 0; i < arr.length; i++){
                 if(i == 0 || i == 5 || i == 10|| i == 15||i == 20|| i == 25|| i == 30|| i == 35|| i == 40|| i == 45|| i == 50||i == 0 || i == 5 || i == 10|| i == 15||i == 20|| i == 25|| i == 30|| i == 35|| i == 40|| i == 89|| i == 87  ){
                     let div = document.createElement("div");
                 div.className = "box"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             }else if(i == 100 || i == 105 || i == 55|| i == 60||i == 65|| i == 70|| i == 75|| i == 80|| i == 85|| i == 90|| i == 95 || i == 89|| i == 91|| i == 94|| i == 95|| i == 99){
                 let div = document.createElement("div");
                 div.className = "box1"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
               
             }else if(i == 160 || i == 155 || i == 150|| i == 145||i == 140|| i == 135|| i == 130|| i == 125|| i == 120|| i == 115|| i == 110|| i == 93|| i == 101|| i == 104|| i == 195){
                 let div = document.createElement("div");
                 div.className = "box2"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
                 
             }else if(i == 165 || i == 170 || i == 175|| i == 180||i == 185|| i == 190|| i == 195|| i == 200|| i ==205|| i == 210|| i == 215 || i == 106|| i ==111 || i == 114|| i == 117|| i == 121|| i == 124|| i ==128 || i == 132|| i ==136 || i ==138 ){
                 let div = document.createElement("div");
                 div.className = "box3"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             }else if(i == 8 || i == 16 || i == 24|| i == 32||i == 40|| i == 48|| i == 56|| i == 64|| i == 72|| i == 9|| i == 18|| i == 107|| i == 95|| i == 112|| i == 118|| i == 156|| i ==179 || i == 122|| i ==127 || i ==129 || i == 133){
                 let div = document.createElement("div");
                 div.className = "box4"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             }else if(i == 27|| i == 36 || i == 54|| i == 63||i == 72|| i == 81|| i == 90|| i == 7|| i == 14|| i == 21|| i == 183|| i == 28|| i == 113|| i ==116 || i == 119|| i ==138|| i == 149|| i == 123|| i == 126|| i == 131|| i == 134|| i ==137 || i == 139|| i == 191|| i ==201 || i == 211|| i == 187|| i == 177|| i == 154|| i == 198|| i == 143|| i == 208){
                 let div = document.createElement("div");
                 div.className = "box5"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             }else if(i == 42 || i == 49 || i == 6|| i == 12||i == 18|| i == 24|| i == 36|| i == 16|| i == 4|| i == 8|| i == 12){
                 let div = document.createElement("div");
                 div.className = "box6"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             
             }else if(i == 31|| i == 37 || i == 46|| i == 12||i == 51|| i == 61|| i == 66|| i == 68|| i == 77|| i == 82|| i == 12){
                 let div = document.createElement("div");
                 div.className = "box7"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             
             }else if(i == 38 || i == 49 || i == 41|| i == 47||i == 18|| i == 53|| i == 67|| i == 69|| i == 84|| i == 8|| i == 12){
                 let div = document.createElement("div");
                 div.className = "box8"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             
             }else if(i == 3 || i == 6 || i == 9|| i ==2||i == 4|| i == 11|| i == 17|| i == 23|| i == 29 || i == 1|| i == 26){
                 let div = document.createElement("div");
                 div.className = "box9"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             
             }else if(i == 13 || i == 19 || i == 22|| i == 12||i == 29|| i == 33|| i == 39|| i == 16|| i == 83|| i == 73|| i == 76){
                 let div = document.createElement("div");
                 div.className = "box10"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             }else if(i%2 ===0){
                 let div = document.createElement("div");
                 div.className = "box11"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             
             }else {
                 let div = document.createElement("div");
                 div.className = "box12"
                 div.innerText = arr[i].name
             
                 document.querySelector(".scroll-object").append(div)
             }
               
              }
             }
             
              
              
             
             
            
             
            
     
         
         
         
         
        
       
           
       
     
     
      
         // document.querySelector(".checkit").addEventListener("click",funbtn1)
     
                 let x =  document.querySelectorAll(".checkit")
                  for(let i = 0; i < x.length; i++){
                     var count = 0
                     x[i].addEventListener("click",function(){
                             console.log(x[i].value)
                             if(x[i].value == "all"){
                                 display(arrobj)
                             }else{
                                 let y = arrobj.filter(function(el){
                           return el.val == x[i].value
                      })
                            display(y)
     
                             }
                         
                          
                     })
                 }
             
                     
                  
                  
             
             