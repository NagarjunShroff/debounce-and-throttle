import React, { useEffect } from "react";

const DebounceDemo = () => {

    useEffect(() => {
        const debounceSearchBar = document.getElementById("debounce-search-bar");
        let numberOfApiCalls = 0;
        let numberOfKeyPresses = 0;

        const getResults = debounce(() => {
            numberOfApiCalls += 1;
            console.log(`Number of API calls: ${numberOfApiCalls}`);
        }, 1000);

        debounceSearchBar.addEventListener("input", function(e){
            numberOfKeyPresses += 1;
            console.log(`Search Keyword: ${e.target.value}`);
            console.log(`Number of Key Presses: ${numberOfKeyPresses}`);
            getResults();
        });

        function debounce(callback, delay){
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => callback(...args), delay);
            };
        };

    });

    return (
        <>
        <label>Search: </label>
        <input type="text" id="debounce-search-bar"/>
        </>
    )
};

export default DebounceDemo;