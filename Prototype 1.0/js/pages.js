function stedPage(sted){
                    
                    $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/museums.json", success: function(result){
                            museums = JSON.parse(result);
                            var stedP;
                            $("#ContentBox").empty();
                            for(var i = 0; i <museums.length;i++){
                                    if (museums[i].id == $(sted).attr("id")){
                                        stedP = museums[i];
                                    }
                                }   
                            $("#ContentBox").append(`
                                <div style="background-color:rgb(${stedP.farve}); color:white" class="headBox">
                                    <img src="${stedP.billede}" class="headBoxImg">
                                    <div class="headBoxText">
                                        <h3>Adresse</h3>
                                        <p>${stedP.adresse}</p>
                                        <h3>Entrepriser</h3>
                                        <p>${stedP.priser}</p>
                                        <h3>Generelle Åbningstider</h3>
                                        <p>${stedP.tider}</p>
                                        <h3><a href="${stedP.website}">Website</a></h3>
                                    </div>
                                </div>
                                <div class="beskrivBox"> 
                                    <h2>${stedP.navn}</h2>
                                    <p>${stedP.beskrivelse} </p>
                                </div>
                                `
                                );
                                
                                var udstillinger = [];
                                $("#ContentBox").append("<div class = 'slideBox' id ='museumSlide'></div>");
                                $("#ContentBox").append("<div class = 'dotBox' id='museumDot' style='text-align:center'></div>");
                                $("#museumSlide").append("<h2> Udstillinger </h2>");
                                
                               $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/events.json", success: function(result){
                                    events = JSON.parse(result)
                                    count = 0;
                                    for (var i = 0; i < events.length;i++){
                                        if (events[i].sted == stedP.id){
                                            udstillinger.push(events[i])
                                            count +=1;
                                            $("#museumSlide").append(`
                                                <div class="mySlides1 fade eventBlock" id ="${events[i].id}">
                                                    <img src="${events[i].billede}" style="width:50%">
                                                    <div class= "slideTextBox" style="background-color:rgb(${events[i].farve}">
                                                        <div class="capText" style="color:white">
                                                            <h3>${events[i].navn}</h3>
                                                            <p>${events[i].beskrivelseKort} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            `);
                                            
                                            $("#museumDot").append(`
                                                <span class="dot1" onclick="currentSlide(1,${count})"></span>
                                            `);
                                            
                                        }
                                    }
                                   $("#museumSlide").append(`
                                    <a class='prev' onclick='plusSlides(1,-1)'>&#10094;</a>
                                    <a class='next' onclick='plusSlides(1,1)'>&#10095;</a>
                                    `)
                                   if (count==0){
                                       $("#museumSlide").remove()
                                   }
                                   else {
                                       showSlides(1, slideIndex[0])
                                   }
                                   
                                   
                                }})
                           
                            $("#ContentBox").append(`
                                <div class = 'slideBox' id ='relateredeSlide'></div>
                                <div class = 'dotBox' id='relateredeDot' style='text-align:center'></div>
                            `);
                            $("#relateredeSlide").append("<h2>Steder af lignende type</h2>");
                                
                        
                            var count = 0;
                            var added = []
                            for(var i = 0; i <museums.length;i++){
                                tempMuseum = museums[i];
                                for(var p =0; p < tempMuseum.type.length;p++){
                                    if (stedP.type.includes(tempMuseum.type[p]) && tempMuseum.id != stedP.id && !added.includes(tempMuseum.id)){
                                        count += 1;
                                        added.push(tempMuseum.id);
                                            $("#relateredeSlide").append(`
                                                <div class="mySlides2 fade stedBlock" id ="${tempMuseum.id}">
                                                    <img src="${tempMuseum.billede}" style="width:50%">
                                                    <div class= "slideTextBox" style="background-color:rgb(${tempMuseum.farve}">
                                                        <div class="capText" style="color:white">
                                                            <h3>${tempMuseum.navn}</h3>
                                                            <p>${tempMuseum.beskrivelseKort}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            `);
                                            
                                            $("#relateredeDot").append(`
                                                <span class="dot2" onclick="currentSlide(2,${count})"></span>
                                            `);
                                    }
                                }
                                }
                            $("#relateredeSlide").append(`
                                    <a class='prev' onclick='plusSlides(2,-1)'>&#10094;</a>
                                    <a class='next' onclick='plusSlides(2,1)'>&#10095;</a>
                                    `)
                            if (count==0){
                                       $("#relateredeSlide").remove()
                                   }
                                   else {
                                       showSlides(2, slideIndex[1])
                                   }
                                
                            }  
                          });
                }

 function eventPage(event){
                    
                    $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/events.json", success: function(result){
                            events = JSON.parse(result);
                            var eventP;
                            $("#ContentBox").empty();
                            for(var i = 0; i <events.length;i++){
                                    if (events[i].id == $(event).attr("id")){
                                        eventP = events[i];
                                    }
                            }   
                            $("#ContentBox").append(`
                                <div style="background-color:rgb(${eventP.farve}); color:white" class="headBox">
                                    <img src="${eventP.billede}" class="headBoxImg">
                                    <div class="headBoxText">
                                        <h3>Tidspunkt</h3>
                                        <p>${eventP.tid}</p>
                                        <h3>Lokation</h3>
                                        <p>${eventP.lokation}</p>
                                        <h3><a href="${eventP.website}">Website</a></h3>
                                    </div>
                                    
                                </div>
                                <div class="beskrivBox"> 
                                    <h2>${eventP.navn}</h2>
                                    <p>${eventP.beskrivelse} </p>
                                </div>
                               
                                `
                                );
                        
                                $("#ContentBox").append("<div class = 'slideBox' id ='eventSlide'></div>");
                                $("#ContentBox").append("<div class = 'dotBox' id='eventDot' style='text-align:center'></div>");
                                $("#eventSlide").append(" <h2>Relaterede Events eller udstillinger</h2>");
                                var count = 0;
                                var added = [];
                                for(var i = 0; i <events.length;i++){
                                    tempEvent = events[i];
                                    
                                    for (var p=0; p <tempEvent.type.length;p++){
                                        if (eventP.type.includes(tempEvent.type[p]) && tempEvent.id != eventP.id && !added.includes(tempEvent.id)){
                                            count += 1;
                                            added.push(tempEvent.id);
                                            $("#eventSlide").append(`
                                                <div class="mySlides1 fade eventBlock" id ="${tempEvent.id}">
                                                    <img src="${tempEvent.billede}" style="width:50%" >
                                                    <div class= "slideTextBox" style="background-color:rgb(${tempEvent.farve}">
                                                        <div class="capText" style="color:white">
                                                            <h3>${tempEvent.navn}</h3>
                                                            <p>${tempEvent.beskrivelseKort}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            `);
                                            
                                            $("#eventDot").append(`
                                                <span class="dot1" onclick="currentSlide(1,${count})"></span>
                                            `);
                                        }
                                    }
                                }
                                $("#eventSlide").append(`
                                    <a class='prev' onclick='plusSlides(1,-1)'>&#10094;</a>
                                    <a class='next' onclick='plusSlides(1,1)'>&#10095;</a>
                                    `)
                                if (count==0){
                                    $("#eventSlide").remove()
                                }
                                else {
                                    showSlides(1, slideIndex[0])
                                }
                                
                        
                        
                                
                        
                                $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/museums.json", success: function(result){
                                    museums = JSON.parse(result)
                                    var lokation;
                                    for (var i = 0; i < museums.length;i++){
                                        if (museums[i].id == eventP.sted){
                                            lokation = museums[i];
                                        }
                                    }
                                    
                                    $("#ContentBox").append("<div id =lokationBox class='slideBox' style='width:1000px margin:auto'> </div>")
                                           
                                    $("#lokationBox").append(`
                                    
                                        <h2>Lokation</h2>
                                    
                                   `);
                                    $("#lokationBox").append(`
                                     <div class="headBox " id="${lokation.id} lokationBox" style="color:white">
                                        <img src="${lokation.billede}" style="width:50%">
                                        <div class= "slideTextBox" style="background-color:rgb(${lokation.farve}">
                                            <div class="capText">
                                                <h3>${lokation.navn}</h3>
                                                <p>${lokation.beskrivelseKort}</p>
                                            </div>
                                         </div>
                                     </div>
                                    `);  
                                    
                                   
                                }})  
                       
                            }  
                          });
                }
function værkPage(værk){
                    
                    $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/v%C3%A6rker.json", success: function(result){
                            Værker = JSON.parse(result);
                            var værkP;
                           
                            $("#ContentBox").empty();    
                            for(var i = 0; i <Værker.length;i++){
                                    if (Værker[i].id == $(værk).attr("id")){
                                        værkP = Værker[i];
                                    }
                                }
                        
                            
                            $("#ContentBox").append(`
                                <div style="background-color:rgb(${værkP.farve}); color:white" class="headBox">
                                    <img src="${værkP.billede}" class="headBoxImg">
                                    <div class="headBoxText" style="font-size:20px">
                                        <p id="lokationHolder"></p>
                                        <p>${værkP.info} </p>
                                    </div>
                                </div>
                                <div class="beskrivBox"> 
                                    <h2>${værkP.navn}</h2>
                                    <p>${værkP.beskrivelse} </p>
                                </div>
                                `)
                                $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/museums.json", success: function(result){
                                museums = JSON.parse(result);
                                for (var i = 0; i < museums.length;i++){
                                    
                                        if (museums[i].id == værkP.sted){
                                            
                                            document.getElementById('lokationHolder').innerHTML = "<b>Lokation: </b>"+museums[i].navn;
                                        }
                                   
                                }
                              }})
                               
                                $("#ContentBox").append("<div class = 'slideBox' id ='emneSlide'></div>");
                                $("#ContentBox").append("<div class = 'dotBox' id='emneDot' style='text-align:center'></div>");
                                $("#emneSlide").append(`
                                        <h2>Værker med lignende emner</h2>
                                    `)
                                
                                $("#ContentBox").append("<div class = 'slideBox' id ='typeSlide'></div>");
                                $("#ContentBox").append("<div class = 'dotBox' id='typeDot' style='text-align:center'></div>");
                                $("#typeSlide").append(`
                                        <h2>Værker af lignende type</h2>
                                    `)
                        
                                $("#ContentBox").append("<div class = 'slideBox' id ='udstillingSlide'></div>");
                                $("#ContentBox").append("<div class = 'dotBox' id='udstillingDot' style='text-align:center'></div>");
                                $("#udstillingSlide").append(`
                                        <h2>Udstillinger med relaterede emner</h2>
                                    `)
                        
                                $("#ContentBox").append("<div class = 'slideBox' id ='museumSlide'></div>");
                                $("#ContentBox").append("<div class = 'dotBox' id='museumDot' style='text-align:center'></div>");
                                $("#museumSlide").append(`
                                        <h2>Relaterede Institutioner</h2>
                                    `)
                                
                               $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/værker.json", success: function(result){
                                    Værker = JSON.parse(result)
                                    count1 = 0;
                                    count2 =0
                                    added =[];
                                    for (var i = 0; i < Værker.length;i++){
                                        var tempVærk = Værker[i]
                                        
                                        for (var p = 0; p < tempVærk.emner.length;p++){
                                            if (værkP.emner.includes(tempVærk.emner[p]) && tempVærk.id != værkP.id && !added.includes(tempVærk.id) ){
                                                count1 += 1;
                                                added.push(tempVærk.id);
                                                
                                                 $("#emneSlide").append(`
                                                <div class="mySlides1 fade værkBlock" id ="${tempVærk.id}">
                                                    <img src="${tempVærk.billede}" style="width:50%">
                                                    <div class= "slideTextBox" style="background-color:rgb(${tempVærk.farve}">
                                                        <div class="capText" style="color:white">
                                                            <h3>${tempVærk.navn}</h3>
                                                            <p>${tempVærk.beskrivelseKort} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            `);
                                            
                                            $("#emneDot").append(`
                                                <span class="dot1" onclick="currentSlide(1,${count1})"></span>
                                            `);
                                            } 
                                        }
                                        
                                        if (tempVærk.type == værkP.type && tempVærk.id != værkP.id && !added.includes(tempVærk.id) ){
                                             count2 += 1;
                                                added.push(tempVærk.id);
                                                
                                                 $("#typeSlide").append(`
                                                <div class="mySlides2 fade værkBlock" id ="${tempVærk.id}">
                                                    <img src="${tempVærk.billede}" style="width:50%">
                                                    <div class= "slideTextBox" style="background-color:rgb(${tempVærk.farve}">
                                                        <div class="capText" style="color:white">
                                                            <h3>${tempVærk.navn}</h3>
                                                            <p>${tempVærk.beskrivelseKort} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            `);
                                            
                                            $("#typeDot").append(`
                                                <span class="dot2" onclick="currentSlide(2,${count2})"></span>
                                            `);
                                        }
                                        
                                        
                                    }
                                   $("#emneSlide").append(`
                                    <a class='prev' onclick='plusSlides(1,-1)'>&#10094;</a>
                                    <a class='next' onclick='plusSlides(1,1)'>&#10095;</a>
                                    `)
                                   $("#typeSlide").append(`
                                    <a class='prev' onclick='plusSlides(2,-1)'>&#10094;</a>
                                    <a class='next' onclick='plusSlides(2,1)'>&#10095;</a>
                                    `)
                                  
                                   
                                   
                                   if(count1 == 0){
                                       $("#emneSlide").remove();
                                   }
                                   else{
                                        showSlides(1, slideIndex[0])
                                   }
                                   if(count2 == 0){
                                       $("#typeSlide").remove();
                                   }
                                   else {
                                       showSlides(2, slideIndex[1])
                                   }
                                   
                                }})
                                $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/events.json", success: function(result){
                                    events = JSON.parse(result)
                                    count3 = 0;
                                    added =[];
                                    
                                    for (var i = 0; i < events.length;i++){
                                        var tempEvent = events[i]
                                        
                                        for (var p = 0; p < tempEvent.type.length;p++){
                                            if ((værkP.emner.includes(tempEvent.type[p]) || værkP.type == tempEvent.type[p] ) &&  !added.includes(tempEvent.id) ){
                                                count3 += 1;
                                                added.push(tempEvent.id);
                                                
                                                 $("#udstillingSlide").append(`
                                                <div class="mySlides3 fade eventBlock" id ="${tempEvent.id}">
                                                    <img src="${tempEvent.billede}" style="width:50%">
                                                    <div class= "slideTextBox" style="background-color:rgb(${tempEvent.farve}">
                                                        <div class="capText" style="color:white">
                                                            <h3>${tempEvent.navn}</h3>
                                                            <p>${tempEvent.beskrivelseKort} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            `);
                                                $("#udstillingDot").append(`
                                                <span class="dot3" onclick="currentSlide(3,${count3})"></span>
                                            `);
                                            }
                                        }
                                    }
                                    $("#udstillingSlide").append(`
                                    <a class='prev' onclick='plusSlides(3,-1)'>&#10094;</a>
                                    <a class='next' onclick='plusSlides(3,1)'>&#10095;</a>
                                    `)
                                    if(count3 == 0){
                                       $("#udstillingSlide").remove();
                                   }
                                   else{
                                       
                                        showSlides(3, slideIndex[2])
                                   }
                                    
                                }})
                        
                                 $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/museums.json", success: function(result){
                                    museums = JSON.parse(result)
                                    count4 = 0;
                                    added =[];
                                    
                                    for (var i = 0; i < museums.length;i++){
                                        var tempMuseum = museums[i]
                                        
                                        for (var p = 0; p < tempMuseum.type.length;p++){
                                            
                                            if ((værkP.emner.includes(tempMuseum.type[p]) || værkP.sted == tempMuseum.id ) &&  !added.includes(tempMuseum.id) ){
                                                count4 += 1;
                                                added.push(tempMuseum.id);
                                                console.log(tempMuseum)
                                                 $("#museumSlide").append(`
                                                <div class="mySlides4 fade stedBlock" id ="${tempMuseum.id}">
                                                    <img src="${tempMuseum.billede}" style="width:50%">
                                                    <div class= "slideTextBox" style="background-color:rgb(${tempMuseum.farve}">
                                                        <div class="capText" style="color:white">
                                                            <h3>${tempMuseum.navn}</h3>
                                                            <p>${tempMuseum.beskrivelseKort} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            `);
                                                $("#museumDot").append(`
                                                <span class="dot4" onclick="currentSlide(4,${count4})"></span>
                                            `);
                                            }
                                        }
                                    }
                                    $("#museumSlide").append(`
                                    <a class='prev' onclick='plusSlides(4,-1)'>&#10094;</a>
                                    <a class='next' onclick='plusSlides(4,1)'>&#10095;</a>
                                    `)
                                    if(count4 == 0){
                                       $("#museumSlide").remove();
                                   }
                                   else{
                                       
                                        showSlides(4, slideIndex[3])
                                   }
                                    
                                }})
                                
                            }  
                             
                                
                                
                          });
                }