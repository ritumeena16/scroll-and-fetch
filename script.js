        let loading = document.querySelector("#loading");
        let endData = document.querySelector("#endData");

            function throttling(fnc, delay){
            let lastScroll = 0;
            return function(...args)
            { 
                let now = Date.now();
                
                if(now-lastScroll>=delay)
                {
                    lastScroll=now;
                    fnc(...args);
                }
            }          
            }

            let start = 0;
            let isFetching = false;

            loading.style.display = "none";
            endData.style.display = "none";

            let fetchThrottle = throttling(function(){

                console.log("fetched successfully!");

                if(start >= 100){
                   endData.style.display = "block";
                   let footer = document.querySelector("footer").style.display = "none";
                    return;
                }

                if(isFetching === true){
                    return;
                }

                isFetching = true;
                loading.style.display = "block";
                
                fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`)

                .then((res)=>{

                if(!res.ok){
                  throw new Error("API request failed");
                }
                return res.json();
            }) 
              //actual data pr work                 
              .then((data)=>{

                //hr ek data ke liya document create model
                data.forEach(data => {
                let post = data;
                let card = document.createElement("article");
                card.className = "card";

                let title = document.createElement("h2");
                title.textContent = post.title;

                let body = document.createElement("p");
                body.textContent = post.body;

                card.appendChild(title);
                card.appendChild(body);
                document.querySelector("#user-list").appendChild(card);

                });

            setTimeout(function(){
                loading.style.display = "none";
                 isFetching = false;
                 start += 5;
            },200);

              })
              
             .catch((error)=>{
                console.log("something went wrong:",error);
                loading.style.display = "none";
                isFetching = false;
            });
            
            },500);
    


            //check bottom
            window.addEventListener("scroll",
            function(){
              
                    if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight - 2){
                    console.log("botom reached");
                    fetchThrottle();
                }
            }
        );