var data=[{id:272822514,firstName:"Billy",lastName:"Bob",gender:"male",dob:"1/18/1949",height:71,weight:175,eyeColor:"brown",occupation:"programmer",parents:[],currentSpouse:401222887},{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514},{id:409574486,firstName:"Michael",lastName:"Walkens",gender:"male",dob:"5/9/1951",height:76,weight:250,eyeColor:"brown",occupation:"landscaper",parents:[],currentSpouse:260451248},{id:260451248,firstName:"Jon",lastName:"Walkens",gender:"male",dob:"9/6/1945",height:62,weight:115,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:409574486},{id:629807187,firstName:"Jack",lastName:"Pafoy",gender:"male",dob:"3/16/1938",height:70,weight:207,eyeColor:"black",occupation:"nurse",parents:[],currentSpouse:464142841},{id:464142841,firstName:"Jen",lastName:"Pafoy",gender:"female",dob:"4/10/1940",height:72,weight:256,eyeColor:"black",occupation:"student",parents:[],currentSpouse:629807187},{id:982411429,firstName:"Mister",lastName:"Potatoo",gender:"male",dob:"12/18/1952",height:66,weight:170,eyeColor:"hazel",occupation:"architect",parents:[],currentSpouse:595767575},{id:595767575,firstName:"Missuz",lastName:"Potatoo",gender:"female",dob:"10/28/1948",height:59,weight:137,eyeColor:"blue",occupation:"architect",parents:[],currentSpouse:982411429},{id:693243224,firstName:"Joy",lastName:"Madden",gender:"female",dob:"4/20/1939",height:69,weight:199,eyeColor:"hazel",occupation:"doctor",parents:[],currentSpouse:null},{id:888201200,firstName:"Mader",lastName:"Madden",gender:"male",dob:"5/6/1937",height:76,weight:205,eyeColor:"black",occupation:"landscaper",parents:[],currentSpouse:null},{id:878013758,firstName:"Jill",lastName:"Pafoy",gender:"female",dob:"2/8/1972",height:74,weight:118,eyeColor:"brown",occupation:"programmer",parents:[401222887],currentSpouse:294874671},{id:951747547,firstName:"Ralph",lastName:"Bob",gender:"male",dob:"12/23/1969",height:66,weight:179,eyeColor:"blue",occupation:"nurse",parents:[401222887],currentSpouse:159819275},{id:159819275,firstName:"Jasmine",lastName:"Bob",gender:"female",dob:"12/18/1969",height:58,weight:156,eyeColor:"blue",occupation:"assistant",parents:[409574486,260451248],currentSpouse:951747547},{id:348457184,firstName:"Annie",lastName:"Pafoy",gender:"female",dob:"11/4/1970",height:62,weight:235,eyeColor:"hazel",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:294874671,firstName:"Dave",lastName:"Pafoy",gender:"male",dob:"8/5/1967",height:61,weight:112,eyeColor:"green",occupation:"doctor",parents:[629807187,464142841],currentSpouse:878013758},{id:931247228,firstName:"Amii",lastName:"Pafoy",gender:"female",dob:"3/13/1963",height:74,weight:184,eyeColor:"brown",occupation:"landscaper",parents:[629807187,464142841],currentSpouse:null},{id:822843554,firstName:"Regina",lastName:"Madden",gender:"female",dob:"7/26/1959",height:71,weight:249,eyeColor:"brown",occupation:"nurse",parents:[693243224,888201200],currentSpouse:null},{id:819168108,firstName:"Hana",lastName:"Madden",gender:"female",dob:"10/7/1953",height:70,weight:187,eyeColor:"brown",occupation:"politician",parents:[693243224,888201200],currentSpouse:null},{id:969837479,firstName:"Eloise",lastName:"Madden",gender:"female",dob:"12/11/1961",height:63,weight:241,eyeColor:"brown",occupation:"assistant",parents:[693243224,888201200],currentSpouse:null},{id:313207561,firstName:"Mattias",lastName:"Madden",gender:"male",dob:"2/19/1966",height:70,weight:110,eyeColor:"blue",occupation:"assistant",parents:[693243224,888201200],currentSpouse:313997561},{id:313997561,firstName:"Ellen",lastName:"Madden",gender:"female",dob:"2/19/1970",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[],currentSpouse:313207561},{id:313998e3,firstName:"Joey",lastName:"Madden",gender:"female",dob:"2/02/1987",height:67,weight:100,eyeColor:"blue",occupation:"doctor",parents:[313207561,313997561],currentSpouse:null}];

describe('function initSearchByAgeSpecifics', function(){
    it('search by age 69', function() {
        var test1 = [{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514}];
        expect(initSearchByAgeSpecifics(69, data)).toEqual(test1);
    });
});
describe('function initSearchByAgeSpecifics zero results', function(){
    it('search by age 200', function() {
        var test2 = [];
        expect(initSearchByAgeSpecifics(200, data)).toEqual(test2);
    });
});

describe('function initSearchByAgeRangeSpecifics', function(){
    it('search by ages 69-70', function() {
        var test3 = [{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514}];
        expect(initSearchByAgeRangeSpecifics(69, 70, data)).toEqual(test3);
    });
});
describe('function initSearchByAgeRangeSpecifics zero results', function(){
    it('search by ages 150-200', function() {
        var test4 = [];
        expect(initSearchByAgeRangeSpecifics(150, 200, data)).toEqual(test4);
    });
});

describe('function initSearchByHeightSpecifics', function(){
    it("search by height 5'5''", function() {
        var test5 = [{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514}];
        expect(initSearchByHeightSpecifics("5'5''", data)).toEqual(test5);
    });
});
describe('function initSearchByHeightSpecifics zero results', function(){
    it("search by height 7'0''", function() {
        var test6 = [];
        expect(initSearchByHeightSpecifics("7'0''", data)).toEqual(test6);
    });
});

describe('function initSearchByWeightSpecifics', function(){
    it("search by weight 162lbs", function() {
        var test7 = [{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514}];
        expect(initSearchByWeightSpecifics(162, data)).toEqual(test7);
    });
});
describe('function initSearchByWeightSpecifics zero results', function(){
    it("search by weight 1000lbs", function() {
        var test8 = [];
        expect(initSearchByWeightSpecifics("1000lbs", data)).toEqual(test8);
    });
});

describe('function initSearchByOccupationSpecifics', function(){
    it("search by occupation student", function() {
        var test9 = [{"id": 464142841, "firstName": "Jen", "lastName": "Pafoy", "gender": "female", "dob": "4/10/1940", "height": 72, "weight": 256, "eyeColor": "black", "occupation": "student", "parents": [], "currentSpouse": 629807187}];
        expect(initSearchByOccupationSpecifics("student", data)).toEqual(test9);
    });
});
describe('function initSearchByOccupationSpecifics zero results', function(){
    it("search by occupation police officer", function() {
        var test10 = [];
        expect(initSearchByOccupationSpecifics("police officer", data)).toEqual(test10);
    });
});

describe('function initSearchByEyeColorSpecifics', function(){
    it("search by eye color green", function() {
        var test11 = [{"id": 294874671, "firstName": "Dave", "lastName": "Pafoy", "gender": "male", "dob": "8/5/1967", "height": 61, "weight": 112, "eyeColor": "green", "occupation": "doctor", "parents": [629807187, 464142841], "currentSpouse": 878013758}];
        expect(initSearchByEyeColorSpecifics("green", data)).toEqual(test11);
    });
});
describe('function initSearchByEyeColorSpecifics zero results', function(){
    it("search by eye color orange", function() {
        var test12 = [];
        expect(initSearchByEyeColorSpecifics("orange", data)).toEqual(test12);
    });
});

describe('function getAge', function(){
    it("return age of '1/18/1949'", function() {
        expect(getAge("1/18/1949")).toEqual(68);
    });
});
describe('function getAge not valid', function(){
    it("return age of 68", function() {
        expect(getAge("", data)).toEqual(NaN);
    });
});

describe('function convertInchesToFootInches', function(){
    it("return conversion of 71 inches", function() {
        expect(convertInchesToFootInches(71)).toEqual("5'11''");
    });
});
describe('function convertInchesToFootInches reversed', function(){
    it("return conversion of 5'11''", function() {
        expect(convertInchesToFootInches("5'11''")).toEqual(NaN+"'"+NaN+"''");
    });
});

describe('function getDescendants', function(){
    it("return descendants of Mader", function() {
        var test17 = [{"id": 822843554, "firstName": "Regina", "lastName": "Madden", "gender": "female", "dob": "7/26/1959", "height": 71, "weight": 249, "eyeColor": "brown", "occupation": "nurse", "parents": [693243224, 888201200], "currentSpouse": null}, {"id": 819168108, "firstName": "Hana", "lastName": "Madden", "gender": "female", "dob": "10/7/1953", "height": 70, "weight": 187, "eyeColor": "brown", "occupation": "politician", "parents": [693243224, 888201200], "currentSpouse": null}, {"id": 969837479, "firstName": "Eloise", "lastName": "Madden", "gender": "female", "dob": "12/11/1961", "height": 63, "weight": 241, "eyeColor": "brown", "occupation": "assistant", "parents": [693243224, 888201200], "currentSpouse": null}, {"id": 313207561, "firstName": "Mattias", "lastName": "Madden", "gender": "male", "dob": "2/19/1966", "height": 70, "weight": 110, "eyeColor": "blue", "occupation": "assistant", "parents": [693243224, 888201200], "currentSpouse": 313997561}, {"id": 313998000, "firstName": "Joey", "lastName": "Madden", "gender": "female", "dob": "2/02/1987", "height": 67, "weight": 100, "eyeColor": "blue", "occupation": "doctor", "parents": [313207561, 313997561], "currentSpouse": null}];
        var mader = [{
            "id": 888201200,
            "firstName": "Mader",
            "lastName": "Madden",
            "gender": "male",
            "dob": "5/6/1937",
            "height": 76,
            "weight": 205,
            "eyeColor": "black",
            "occupation": "landscaper",
            "parents": [],
            "currentSpouse": null
        }];
        expect(getDescendants(mader[0], data)).toEqual(test17);
    });
});
describe('function getDescendants where there are none', function(){
    it("return descendants of Billy Bob", function() {
        var test18 =[];
        var billyBob = [{
            "id": 272822514,
            "firstName": "Billy",
            "lastName": "Bob",
            "gender": "male",
            "dob": "1/18/1949",
            "height": 71,
            "weight": 175,
            "eyeColor": "brown",
            "occupation": "programmer",
            "parents": [],
            "currentSpouse": 401222887
        }];
        expect(getDescendants(billyBob[0], data)).toEqual(test18);
    });
});

describe('function getNextOfKin', function(){
    it("return next of kin of Mader", function() {
        var test19 = [{
            "id": 819168108,
            "firstName": "Hana",
            "lastName": "Madden",
            "gender": "female",
            "dob": "10/7/1953",
            "height": 70,
            "weight": 187,
            "eyeColor": "brown",
            "occupation": "politician",
            "parents": [693243224, 888201200],
            "currentSpouse": null
        }];
        var mader = [{
            "id": 888201200,
            "firstName": "Mader",
            "lastName": "Madden",
            "gender": "male",
            "dob": "5/6/1937",
            "height": 76,
            "weight": 205,
            "eyeColor": "black",
            "occupation": "landscaper",
            "parents": [],
            "currentSpouse": null
        }];
        expect(getNextOfKinSearch(mader[0], data)).toEqual(test19);
    });
});

describe('function getImmediateFamily single result', function(){
    it("return immediate family of Billy Bob", function() {
        var test20 = [{id:401222887,firstName:"Uma",lastName:"Bob",gender:"female",dob:"4/1/1947",height:65,weight:162,eyeColor:"brown",occupation:"assistant",parents:[],currentSpouse:272822514}];
        var billyBob = [{
            "id": 272822514,
            "firstName": "Billy",
            "lastName": "Bob",
            "gender": "male",
            "dob": "1/18/1949",
            "height": 71,
            "weight": 175,
            "eyeColor": "brown",
            "occupation": "programmer",
            "parents": [],
            "currentSpouse": 401222887
        }];
        expect(getImmediateFamily(billyBob[0], data)).toEqual(test20);
    });
});
describe('function getImmediateFamily multiple results', function(){
    it("return immediate family of ", function() {
        var test21 =[{
            "id": 819168108,
            "firstName": "Hana",
            "lastName": "Madden",
            "gender": "female",
            "dob": "10/7/1953",
            "height": 70,
            "weight": 187,
            "eyeColor": "brown",
            "occupation": "politician",
            "parents": [693243224, 888201200],
            "currentSpouse": null
        },
            {
            "id": 822843554,
            "firstName": "Regina",
            "lastName": "Madden",
            "gender": "female",
            "dob": "7/26/1959",
            "height": 71,
            "weight": 249,
            "eyeColor": "brown",
            "occupation": "nurse",
            "parents": [693243224, 888201200],
            "currentSpouse": null
        },
            {
                "id": 969837479,
                "firstName": "Eloise",
                "lastName": "Madden",
                "gender": "female",
                "dob": "12/11/1961",
                "height": 63,
                "weight": 241,
                "eyeColor": "brown",
                "occupation": "assistant",
                "parents": [693243224, 888201200],
                "currentSpouse": null
            },
            {
                "id": 313207561,
                "firstName": "Mattias",
                "lastName": "Madden",
                "gender": "male",
                "dob": "2/19/1966",
                "height": 70,
                "weight": 110,
                "eyeColor": "blue",
                "occupation": "assistant",
                "parents": [693243224, 888201200],
                "currentSpouse": 313997561
            }];
        var mader = [{
            "id": 888201200,
            "firstName": "Mader",
            "lastName": "Madden",
            "gender": "male",
            "dob": "5/6/1937",
            "height": 76,
            "weight": 205,
            "eyeColor": "black",
            "occupation": "landscaper",
            "parents": [],
            "currentSpouse": null
        }];
        expect(getImmediateFamily(mader[0], data)).toEqual(test21);
    });
});








