function initSearch(people){
    var input = prompt("Do you know the characteristics you would like to search by?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        initSearchBySpecificCharacteristics(people);
    }
    else if(noOptions.includes(input)){
        promptForSearchByName(people);
    }
    else{
        alert("Please enter a valid response..");
        initSearch(people);
    }
}
function initSearchBySpecificCharacteristics(people){
    var input = prompt("Enter the characteristics you would wish to search by, each in one word and separated by a comma! (THE OPTIONS ARE: firstname, lastname, gender, age, height, weight, eyecolor & occupation");
    var searchCriteria = input.split(",");

    for(var i = 0; i < searchCriteria.length; i++){

    }
}
function promptForSearchByName(people) {
    var input = prompt("Do you know the name of the person you are searching for?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
    	initSearchByName(people);
	}
	else if(noOptions.includes(input)){
    	initChooseAlternateSearchOptions(people)
	}
	else{
		alert("Please enter a valid response..");
		initSearch(people);
	}
}
function initSearchByName(people){
    var input = prompt("Please enter a first or last name");
    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (el.firstName.toLowerCase() == input.toLowerCase() || el.lastName.toLowerCase() == input.toLowerCase()) {
                return true
            }
            else {
                return false
            }
        });
		displayResults(filteredSearch);
		if(filteredSearch.length === 1){
		    promptForDescendantsSearch(filteredSearch[0],data);
		    promptForImmediateFamilySearch(filteredSearch[0],data);
		    promptForNextOfKinSearch(filteredSearch[0],data);
        }
        else {
            promptAnotherSearch(filteredSearch);
        }
    }
    else{
    	alert("Please enter a valid name..");
    	initSearchByName(people)
	}
}
function initChooseAlternateSearchOptions(people){
	var input = prompt("Do you know the height, weight, or eye color of the person you are searching for?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
    	initSearchByPhysicalTraits(people)
	}
	else if(noOptions.includes(input)){
    	initSearchByAge(people);
	}
	else{
		alert("Please enter a valid response..");
		initChooseAlternateSearchOptions(people);
	}
}
function initSearchByPhysicalTraits(people){
	var input = prompt("Which trait would you like to search by: height, weight or eye color?")

	if(input.toLowerCase() == "height"){
		initSearchByHeight(people);
	}
	else if(input.toLowerCase() == "weight"){
		initSearchByWeight(people);
	}
	else if(input.toLowerCase() == "eye color" || input.toLowerCase() == "eyecolor"){
		initSearchByEyeColor(people);
	}
	else{
		alert("Please enter a valid response..");
		initSearchByPhysicalTraits(people);
	}
}
function initSearchByHeight(people){
    var input = prompt("Please enter a height to search by");

    if(isNaN(input) === false) {
        var filteredSearch = people.filter(function (el) {
            if (el.height == input) {
                return true
            }
            else {
                return false
            }
        });
        displayResults(filteredSearch);
        if(filteredSearch.length === 1){
            promptForDescendantsSearch(filteredSearch[0],data);
        }
        else {
            promptAnotherSearch(filteredSearch);
        }
    }
    else{
    	alert("Please enter a valid height..");
    	initSearchByHeight(people);
	}
}
function initSearchByWeight(people){
    var input = prompt("Please enter a weight to search by");

    if(isNan(input) === false) {
        var filteredSearch = people.filter(function (el) {
            if (el.weight == input) {
                return true
            }
            else {
                return false
            }
        });
        displayResults(filteredSearch);
        if(filteredSearch.length === 1){
            promptForDescendantsSearch(filteredSearch[0],data);
        }
        else {
            promptAnotherSearch(filteredSearch);
        }
    }
    else{
    	alert("Please enter a valid weight..");
    	initSearchByWeight(people);
	}
}
function initSearchByEyeColor(people){
    var input = prompt("Please enter an eye color to search by");

    if(isNaN(input) === true) {
        var filteredSearch = people.filter(function (el) {
            if (el.eyeColor == input) {
                return true
            }
            else {
                return false
            }
        });
        displayResults(filteredSearch);
        if(filteredSearch.length === 1){
            promptForDescendantsSearch(filteredSearch[0],data);
        }
        else {
            promptAnotherSearch(filteredSearch);
        }
    }
    else{
    	alert("Please enter a valid eye color..");
    	initSearchByEyeColor(people);
	}
}
function initSearchByAge(people){
	var input = prompt("Do you know the age of the person you are searching for?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter an age to search by");

        if(isNaN(input) === false) {
            var filteredSearch = people.filter(function (el) {
                if (getAge(el.dob) == input) {
                    return true
                }
                else {
                    return false
                }
            });
            displayResults(filteredSearch);
            if(filteredSearch.length === 1){
                promptForDescendantsSearch(filteredSearch[0],data);
            }
            else {
                promptAnotherSearch(filteredSearch);
            }
        }
        else{
        	alert("Please enter a valid age..");
        	initSearchByAge(people);
		}
	}
	else if(noOptions.includes(input)){
    	initSearchByOccupation(people);
	}
	else{
		alert("Please enter a valid response..");
		initSearchByAge(people);
	}
}
function initSearchByOccupation(people){
    var input = prompt("Do you know the occupation of the person you are searching for?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter an occupation to search by");

        if(isNaN(input) === true) {
            var filteredSearch = people.filter(function (el) {
                if (el.occupation == input) {
                    return true
                }
                else {
                    return false
                }
            });
            displayResults(filteredSearch);
            if(filteredSearch.length === 1){
                promptForDescendantsSearch(filteredSearch[0],data);
            }
            else {
                promptAnotherSearch(filteredSearch);
            }
        }
        else{
        	alert("Please enter a valid occupation");
        	initSearchByOccupation(people);
		}
    }
    else if(noOptions.includes(input)){
        initSearchByGender(people);
    }
    else{
        alert("Please enter a valid response..");
        initSearchByOccupation(people);
    }
}
function initSearchByGender(people){
    var input = prompt("Do you at least know the gender of the person you are searching for?!?!");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var input = prompt("Please enter a gender to search by");

        if(isNaN(input) === true) {
            var filteredSearch = people.filter(function (el) {
                if (el.gender == input) {
                    return true
                }
                else {
                    return false
                }
            });
            displayResults(filteredSearch);
            if(filteredSearch.length === 1){
                promptForDescendantsSearch(filteredSearch[0],data);
            }
            else {
                promptAnotherSearch(filteredSearch);
            }
        }
        else{
        	alert("Please enter a valid gender..");
        	initSearchByGender(people);
		}
    }
    else if(noOptions.includes(input)){
        alert("Well I guess you are SOL..");
    }
    else{
        alert("Please enter a valid response..");
        initSearchByGender(people);
    }
}
function displayResults(people){
	var nameOnly = [];
	for(var i = 0; i < people.length; i++){
		var fullName = people[i].firstName + " " + people[i].lastName;
		nameOnly.push(fullName);
	}
	var joinedNames = nameOnly.join(", ");
    alert(joinedNames);
}
function getAge(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}
function promptAnotherSearch(people){
    var input = prompt("Would you like to narrow your results even more?!");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        initSearch(people);
    }
    else if(noOptions.includes(input)){
        alert("Okay have a nice day!");
    }
    else{
        alert("Please enter a valid response..");
        promptAnotherSearch(people);
    }
}
function promptForDescendantsSearch(person, people){
    var input = prompt("Would you like to find the descendants of this person?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var descendants = getDescendants(person, people);
        displayResults(descendants);
    }
    else if(noOptions.includes(input)){
        alert("Okay, have a nice day!");
    }
    else{
        alert("Please enter a valid response..");
        promptForDescendantsSearch(person,people);
    }
}
function getDescendants(person, people,counter=-1, descList=[]){
    if(person != undefined) {
        var descendants = people.filter(function (el) {
            return el.parents.includes(person.id);
        });
        descList.push(...descendants);

        counter++;
        getDescendants(descList[counter],people,counter,descList);
    }
    return descList;
}
function promptForImmediateFamilySearch(person, people){
    var input = prompt("Would you like to find the immediate family of this person?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var family = getImmediateFamily(person, people);
        displayResults(family);
    }
    else if(noOptions.includes(input)){
        alert("Okay, have a nice day!");
    }
    else{
        alert("Please enter a valid response..");
        promptForImmediateFamilySearch(person,people);
    }
}
function getImmediateFamily(person, people){
    var parents = getParents(person, people);
    var siblings = getSiblings(person, people);
    var spouse = getSpouse(person, people);
    var children = getChildren(person, people);
    var allImmediateFamily = [];

    allImmediateFamily.push(...parents);
    allImmediateFamily.push(...siblings);
    allImmediateFamily.push(...spouse);
    allImmediateFamily.push(...children);

    return allImmediateFamily;
}
function promptForNextOfKinSearch(person, people){
    var input = prompt("Would you like to find the next of kin for this person?");
    var yesOptions = ["yes", "Yes", "YES", "y", "Y"];
    var noOptions = ["no", "No", "NO", "n", "N"];

    if(yesOptions.includes(input)){
        var nextOfKin = getImmediateFamily(person, people);
        displayResults(nextOfKin);
    }
    else if(noOptions.includes(input)){
        alert("Okay, have a nice day!");
    }
    else{
        alert("Please enter a valid response..");
        promptForNextOfKinSearch(person,people);
    }
}
function getNextOfKinSearch(person,people){
    var spouse = getSpouse(person, people);
    var childrenList = getChildren(person, people);
    var parentsList = getParents(person, people);
    var siblingsList = getSiblings(person, people);
    var grandChildrenList = getGrandChildren(person, people);
    var grandParentsList = getGrandParents(person, people);
    var nieceNephewList = getNiecesAndNephews(person, people);
    var auntUncleList = getAuntsAndUncles(person, people);
    var greatGrandChildrenList = getGreatGrandChildren(person, people);
    var greatGrandParentsList = getGreatGrandParents(person, people);
    var nextOfKinList = [];

    nextOfKin.push(...spouse);
    nextOfKin.push(...childrenList);
    nextOfKin.push(...parentsList);
    nextOfKin.push(...siblingsList);
    nextOfKin.push(...grandChildrenList);
    nextOfKin.push(...grandParentsList);
    nextOfKin.push(...nieceNephewList);
    nextOfKin.push(...auntUncleList);
    nextOfKin.push(...greatGrandChildrenList);
    nextOfKin.push(...greatGrandParentsList);

    return nextOfKinList;
}
function getParents(person, people){
    var parentList = people.filter(function (el) {
        return person.parents.includes(el.id);
    });
    parentList.sort(function (a, b){
        return b.value - a.value;
    });
    return parentList;
}
function getSiblings(person, people){
    var siblingList = people.filter(function (el) {
        return el.parents.includes(person.parents);
    });
    siblingList.sort(function (a, b){
        return b.value - a.value;
    });
    return siblingList;
}
function getSpouse(person, people){
    var spouse = people.filter(function (el) {
        return el.currentSpouse == person.id;
    });
    return spouse;
}
function getChildren(person, people){
    var childrenList = people.filter(function (el) {
        return el.parents.includes(person.id);
    });
    childrenList.sort(function (a, b){
        return b.value - a.value;
    });
    return childrenList;
}
function getGrandChildren(person, people){
    var children = getChildren(person, people);
    var grandChildrenList = [];

    for(var child in children){
        var grandChild = getChildren(child, people);
        grandChildrenList.push(...grandChild);
    }
    grandChildrenList.sort(function (a, b){
        return b.value - a.value;
    });
    return grandChildrenList;

}
function getGrandParents(person, people){
    var parents = getParents(person, people);
    var grandParentsList = [];

    for(var parent in parents){
        var grandParent = getParents(parent, people);
        grandParentsList.push(...grandParent);
    }
    grandParentsList.sort(function (a, b){
        return b.value - a.value;
    });
    return grandParentsList;
}
function getNiecesAndNephews(person, people){
    var siblings = getSiblings(person, people);
    var niecesAndNephewsList = [];

    for(var sibling in siblings){
        var nieceAndNephew = getChildren(sibling, people);
        niecesAndNephewsList.push(...nieceAndNephew);
    }
    niecesAndNephewsList.sort(function (a, b){
        return b.value - a.value;
    });
    return niecesAndNephewsList;
}
function getAuntsAndUncles(person, people){
    var parents = getParents(person, people);
    var auntsAndUnclesList = [];

    for(var parent in parents){
        var auntAndUncle = getSiblings(parent, people);
        auntsAndUnclesList.push(...auntAndUncle);
    }
    auntsAndUnclesList.sort(function (a, b){
        return b.value - a.value;
    });
    return auntsAndUnclesList;
}
function getGreatGrandChildren(person, people){
    var grandChildren = getGrandChildren(person, people);
    var greatGrandChildrenList = [];

    for(var grandChild in grandChildren){
        var greatGrandChild = getChildren(grandChild, people);
        greatGrandChildrenList.push(...greatGrandChild);
    }
    greatGrandChildrenList.sort(function (a, b){
        return b.value - a.value;
    });
    return greatGrandChildrenList;
}
function getGreatGrandParents(person, people){
    var grandParents = getGrandParents(person, people);
    var greatGrandParentsList = [];

    for(var grandParent in grandParents){
        var greatGrandParent = getParents(grandParent, people);
        greatGrandParentsList.push(...greatGrandParent);
    }
    greatGrandParentsList.sort(function (a, b){
        return b.value - a.value;
    });
    return greatGrandParentsList;
}
