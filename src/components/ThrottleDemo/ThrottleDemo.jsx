import React, { useEffect } from "react";

const ThrottleDemo = () => {
    
    useEffect(() => {
        const throttleSearchBar = document.getElementById("throttle-search-bar");
        let numberOfKeyPresses = 0;
        let numberOfApiCalls = 0;

        const getResults = throttle(() => {
            numberOfApiCalls += 1;
            console.log(`Number of API calls: ${numberOfApiCalls}`);
        }, 1000);

        throttleSearchBar.addEventListener("input", function(e){
            numberOfKeyPresses += 1;
            console.log(`Search Keyword: ${e.target.value}`);
            console.log(`Number of Key Presses: ${numberOfKeyPresses}`);
            getResults();
        });

        function throttle(callback, delay){
            let shouldWait = false;

            return (...args) => {
                if(shouldWait)
                return;

                callback(...args);
                shouldWait = true;
                setTimeout(() => shouldWait = false, delay);
            };
        };
    })

    return(
        <>
        <label>Search: </label>
        <input type="text" id="throttle-search-bar"></input>
        </>
    )
};

export default ThrottleDemo;