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
                                <div> 
                                    <h2>${stedP.navn}</h2>
                                    <p>${stedP.beskrivelse} </p>
                                </div>
                                <div id="udstillingTitel">
                                    <h2>Udstillinger</h2>
                                </div>
                                `
                                );
                                
                                var udstillinger = [];
                                $("#ContentBox").append("<div class = 'slideBox' id ='museumSlide'></div>");
                                $("#ContentBox").append("<div class = 'dotBox' id='museumDot' style='text-align:center'></div>");
                                
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
                                   showSlides(1, slideIndex[0])
                                   
                                }})
                           
                            $("#ContentBox").append(`
                                <div>
                                    <h2>Steder af lignende type</h2>
                                </div>
                                <div class = 'slideBox' id ='relateredeSlide'></div>
                                <div class = 'dotBox' id='relateredeDot' style='text-align:center'></div>
                            `);
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
                                showSlides(2, slideIndex[1])
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
                                <div> 
                                    <h2>${eventP.navn}</h2>
                                    <p>${eventP.beskrivelse} </p>
                                </div>
                                <div>
                                    <h2>Relaterede Events eller udstillinger</h2>
                                </div>
                                `
                                );
                        
                                $("#ContentBox").append("<div class = 'slideBox' id ='eventSlide'></div>");
                                $("#ContentBox").append("<div class = 'dotBox' id='eventDot' style='text-align:center'></div>");
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
                                showSlides(1, slideIndex[0])
                        
                        
                                $("#ContentBox").append(`
                                    <div>
                                        <h2>Lokation</h2>
                                    </div>
                                `);
                        
                                $.ajax({url:"https://raw.githubusercontent.com/MrSteiner/2SemesterProjekt/master/Prototype%201.0/json/museums.json", success: function(result){
                                    museums = JSON.parse(result)
                                    var lokation;
                                    for (var i = 0; i < museums.length;i++){
                                        if (museums[i].id == eventP.sted){
                                            lokation = museums[i];
                                        }
                                    }
                                                                                
                                    $("#ContentBox").append(`
                                     <div class="headBox " id="${lokation.id}" style="color:white">
                                        <img src="${lokation.billede}" style="width:50%">
                                        <div class= "headBoxText" style="background-color:rgb(${lokation.farve}">
                                            
                                                <h3>${lokation.navn}</h3>
                                                <p>${lokation.beskrivelseKort}</p>
                                            
                                         </div>
                                     </div>
                                    `);    
                                   
                                }})  
                       
                            }  
                          });
                }