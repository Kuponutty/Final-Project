function getCountryInfo()
{
    let formRef = document.querySelector("#countryInfoForm");
    let selectedCountry = formRef["countrySelection"].value;
    alert(selectedCountry);
    let population = document.querySelector("#population");
    population.value = 3.14159;
    let pUnitSelected = formRef["populationDensity"].value;
    let areaUnitSelected = formRef["areaSelection"].value;

    let wikiLink = document.querySelector("#wikiPageLink");
    wikiLink.setAttribute("href", "https://en.wikipedia.org/" + selectedCountry);

}