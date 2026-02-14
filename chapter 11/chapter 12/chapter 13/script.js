const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn =document.querryselecetor("#btn");

const getcatfact = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data[0].text;
};

function getfacts(){
    fetch(URL)
    .then((response) =>{
        return response.json();
    })
    .them((data) => {
        console.log(data);
        factpara.innerText = data[0].text;
    });
}