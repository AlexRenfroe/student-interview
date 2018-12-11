var sableObject = {
    firstName: "Sable",
    lastName: "Bowen",
    favoriteFoods: ["tacos", "sushi"],
    firstJob: "waitress",
    dreamJob: "olympic weight lifter",
    greatestFear: "small spaces",
    homeTown: "Gainsville, FL",
    secretTalents: "Baking",
    wouldSkydive: "would not",
    petInfo: {
        type: "dog",
        name: "Captian"
    }
}

var htmlString = `
<h1>${sableObject.firstName} ${sableObject.lastName}</h1> 
<ul>
    <li>${sableObject.favoriteFoods[0]}</li>
    <li>${sableObject.favoriteFoods[1]}</li>
</ul>
<p>${sableObject.firstJob}</p>
<p>${sableObject.dreamJob}</p>
<p>${sableObject.greatestFear}</p>
<p>${sableObject.homeTown}</p>
<p>${sableObject.secretTalents}</p>
<p>${sableObject.wouldSkydive}</p>
<p>${"Sable"} ${"has"} ${"a"} ${sableObject.petInfo.type} ${"named"} ${sableObject.petInfo.name}</p>
`


document.querySelector("#name").innerHTML = htmlString;
