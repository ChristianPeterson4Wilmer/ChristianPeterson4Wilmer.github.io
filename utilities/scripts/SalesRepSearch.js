var State = {
    name: "Empty",
    initial: "NUL",
    zipcodes: null,

    AK : {
        name: "Alaska",
        initial: "AK"
    },
    AL : {
        name: "Alabama",
        initial: "AL"
    }, 
    AR : {
        name: "Arkansas",
        initial: "AR"
    },
    AZ : {
        name : "Arizona",
        initial: "AZ"
    },
    CA : {
        name : "California",
        initial : "CA"
    },
    CO : {
        name : "Colorado",
        initial: "CO"
    },
    CT : {
        name : "Conneticut",
        initial : "CT"
    },
    DC : {
        name : "District of Columbia",
        initial : "DC"
    },
    DE : {
        name : "Delaware",
        initial : "DE"
    },
    FL : {
        name : "Florida",
        initial : "FL"
    },
    GA : {
        name: "Georgia",
        intial : "GA"
    },
    HI : {
        name : "Hawaii",
        intial : "HI"
    },
    ID : {
        name : "Idaho",
        initial: "ID"
    },
    IL : {
        name : "Illinois",
        initial: "IL"
    },
    IN : {
        name: "Indiana",
        initial : "IN"
    },
    IA : {
        name : "Iowa",
        initial : "IA"
    },
    KS : {
        name : "Kansas",
        initial : "KS"
    },
    KY : {
        name : "Kentucky",
        initial : "KY"
    },
    LA : {
        name : "Louisiana",
        initital : "LA"
    },
    ME : {
        name : "Maine",
        initial : "ME"
    },
    MD : {
        name : "Maryland",
        initial : "MD"
    },
    MA : {
        name : "Massachusetts",
        initial : "MA"
    },
    MI : {
        name : "Michigan",
        initial : "MI"
    },
    MN : {
        name: "Minnesota",
        initial : "MN"
    },
    MS : {
        name : "Mississippi",
        initial : "MS"
    },
    MO : {
        name : "Missouri",
        initial : "MO"
    },
    MT : {
        name : "Montana",
        initial : "MT"
    },
    NE : {
        name : "Nebraska",
        initial : "NE"
    },
    NV : {
        name : "Nevada",
        initial : "NV"
    },
    NH : {
        name : "New Hampshire",
        initial : "NH"
    },
    NJ : {
        name : "New Jersey",
        initial : "NJ"
    },
    NM : {
        name : "New Mexico",
        initial : "NM"
    },
    NY : {
        name : "New York",
        initial : "NY"
    },
    NC : {
        name : "North Carolina",
        initial : "NC"
    },
    ND : {
        name : "North Dakota",
        initial : "ND"
    },
    OH : {
        name : "Ohio",
        initial : "OH"
    },
    OK : {
        name : "Oklahoma",
        initial : "OK"
    },
    OR : {
        name : "Oregon",
        initial : "OR"
    },
    PA : {
        name : "Pennsylvania",
        initial : "PA"
    },
    RI : {
        name : "Rhode Island",
        initial : "RI"
    },
    SC : {
        name : "Soutch Carolina",
        initial : "SC"
    },
    SD : {
        name : "South Dakota",
        initial : "SD"
    },
    TN : {
        name : "Tenessee",
        initial : "TN"
    },
    TX : {
        name : "Texas",
        initial: "TX"
    },
    UT : {
        name : "Utah",
        initial : "UT"
    },
    VT : {
        name : "Vermont",
        initial : "VT"
    },
    VA : {
        name : "Virginia",
        initial : "VA"
    },
    WA : {
        name : "Washington",
        initial : "WA"
    },
    WV : {
        name : "West Virginia",
        initial : "WV"
    },
    WI : {
        name : "Wisconsin",
        initial : "WI"
    },
    WY : {
        name : "Wyoming",
        initial : "WY"
    },

    PR : {
        name : "Puerto Rico",
        initial : "PR"
    },

    IL_Menker : {
        name : "Illinois",
        initial : "IL",
        zipcodes : [622, 624, 628, 629]
    },
    IL_SCHROEDER : {
        name : "Illinois",
        initial : "IL",
        zipcodes : [-622, -624, -628, -629]
    },

    IN_MENKER : {
        name : "Indiana",
        initial : "IN",
        zipcodes : [460,461,462,467,468,469,470,471,472,473,474,475,476,477,478]
    },
    IN_SCHROEDER : {
        name : "Indiana",
        initial : "IN",
        zipcodes : [463, 464, 465, 466, 469, 479]
    },

    MI_MENKER : {
        name : "Michigan",
        initial : "MI",
        zipcodes : [480, 481, 482, 483, 484, 485, 486, 487, 492]
    },
    MI_SCHROEDER : {
        name : "Michigan",
        initial : "MI",
        zipcodes : [-480, -481, -482, -483, -484, -485, -486, -487, -492]
    },

    PA_TECHTMANN : {
        name : "Pennsylvania",
        initial : "PA",
        zipcodes : [-150, -151, -152, -153, -154, -155, -156, -157, -158, -159, -160, -161, -162, -163, -164, -165, -166, -167]
    },
    PA_MENKER : {
        name : "Pennsylvania",
        initial : "PA",
        zipcodes : [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167]
    },

    TN_MENKER : {
        name : "Tenessee",
        initial : "TN",
        zipcodes : [-369, -374]
    },
    TN_STALKER : {
        name : "Tenesee",
        initial : "TN",
        zipcodes : [369, 374]
    }

}

var SalesRep = {
    firstName: "err",
    lastName: "err",
    states: null,

    JACKSON : {
        firstName : "Thomas",
        lastName : "Jackson",
        states : [State.AK, State.AZ, State.CA, State.CO, State.HI, State.ID, State.MT, State.NV, State.OR, State.UT, State.WA, State.IL, State.WY],
        fullname : function() {
            return this.firstName + " " + this.lastName;
        }
    },
    MENKER : {
        firstName : "Robert",
        lastName : "Menker",
        states : [State.IL_Menker, State.IN_MENKER, State.KY, State.MI_MENKER, State.OH, State.PA_MENKER, State.TN_MENKER, State.WV],
        fullname : function() {
            return this.firstName + " " + this.lastName;
        }
    },
    OSTERHOLT : {
        firstName : "Richard",
        lastName : "Osterholt",
        states : [State.FL, State.PR],
        fullname : function() {
            return this.firstName + " " + this.lastName;
        }
    },
    SCHROEDER : {
        firstName : "Eric",
        lastName : "Schroeder",
        states : [State.IA, State.IL_SCHROEDER, State.IN_SCHROEDER, State.MI_SCHROEDER, State.MN, State.NE, State.ND, State.SD, State.WI],
        fullname : function() {
            return this.firstName + " " + this.lastName;
        }
    },
    STALKER : {
        firstName : "Greg",
        lastName : "Stalker",
        states : [State.AL, State.GA, State.MS, State.NC, State.SC, State.TN_STALKER],
        fullname : function() {
            return this.firstName + " " + this.lastName;
        }
    },
    TECHTMANN : {
        firstName : "Jack",
        lastName : "Techtmann",
        states : [State.CT, State.DC, State.DE, State.MA, State.MD, State.ME, State.NH, State.NJ, State.NY, State.PA_TECHTMANN, State.RI, State.VA, State.VT],
        fullname : function() {
            return this.firstName + " " + this.lastName;
        }
    },
    TRAVERS: {
        firstName : "Mark",
        lastName : "Travers",
        states : [State.AR, State.KS, State.LA, State.MO, State.NM, State.OK, State.TX],
        fullname : function() {
            return this.firstName + " " + this.lastName;
        }
    }
}

var SalesRepList = [SalesRep.JACKSON, SalesRep.MENKER, SalesRep.OSTERHOLT, SalesRep.SCHROEDER, SalesRep.STALKER, SalesRep.TECHTMANN, SalesRep.TRAVERS];

function searchSalesRep(stateNameOrInitial, zipCode) {
    var count = 0;
    var matchingList = [];
    for (var i = 0; i < SalesRepList.length; i++) {
        var rep = SalesRepList[i];
        console.log(rep);

        for (var j = 0; j < rep.states.length; j++) {
            var state = rep.states[j];
            //console.log(state.zipcodes);
            if(stateNameOrInitial.toUpperCase() === state.name.toUpperCase() 
            || stateNameOrInitial.toUpperCase() === state.initial) {
                var stateZips = state.zipcodes;
                if (stateZips === null || zipCode === -1 || stateZips === undefined) {
                    //console.log("MATCH");
                    matchingList[count] = rep;
                    ++count;
                }
                else {
                    if (stateZips.includes(parseInt(zipCode))) {
                        //console.log("MATCH");
                        matchingList[count] = rep;
                        ++count;
                    }
                    else if (stateZips[0] < 1) {
                        if (!stateZips.includes(parseInt(zipCode)*-1)) {
                            //console.log("MATCH");
                            //console.log(rep.fullname());
                            matchingList[count] = rep;
                            ++count;
                        }
                    }
                }
            }
        }
    }
    var list = "";
    for (var i = 0; i < matchingList.length; i++) {
        list += matchingList[i].fullname() + "\n";
        console.log(matchingList[i].fullname());
    }

    return matchingList;
}