import React, { useEffect } from "react";

const BasicDemo = () => {

    useEffect(() => {
        const basicDemoSearchBarDom = document.getElementById("basic-demo-search-bar");
        let numberOfKeyPresses = 0;
        let numberOfApiCalls = 0;

        const getResults = () => {
            numberOfApiCalls += 1;
            console.log(`Number of API calls: ${numberOfApiCalls}`);
        };

        basicDemoSearchBarDom.addEventListener("input", function(e){
            numberOfKeyPresses += 1;
            console.log("Search keyword: ", e.target.value);
            console.log(`Number of Key Presses: ${numberOfKeyPresses}`);
            getResults();
        });
    });

    return(
    <>
    <label>Search: </label>
    <input type="text" id="basic-demo-search-bar"/>
    </>);
};

export default BasicDemo;