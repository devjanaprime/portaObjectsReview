console.log( 'js' );
// basic object literal
let tempHuman = {
    firstName: "Bill",
    lastName: "Gates",
    description: "super rich",
    heightInInches: 70
}
// array of people in line
let peopleInLine = [];
peopleInLine.push( tempHuman );
peopleInLine.push( { firstName: "Melinda", lastName: "Gates", description: "also rich", heightInInches: 72 } );
// constructor
function Person( firstName, lastName, description, heightInInches ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.heightInInches = heightInInches;
}
const newPerson = new Person( "Abraham", "Lincoln", "El Peresidente", 76 );
peopleInLine.push( newPerson );
peopleInLine.push( new Person( "Verne", "Troyer", "Famous", 32 ) );

function checkLine( lineArray ){
    // loop through the people in line
    for( let i=0; i<lineArray.length; i++ ){
        // run isTallEnough on each
        // grant access to the ride based on response from isTallEnough
        if( isTallEnough( lineArray[i] ) ){
            console.log( lineArray[i].firstName, lineArray[i].lastName, 'is allowed on ride' );
        } // end tall enough
        else{
            console.log( lineArray[i].firstName, lineArray[i].lastName, 'is denied a ride' );
        } //end !tall enough
    } // end for
} // end checkLine

function isTallEnough( person ){
    if( person.heightInInches >= 40 ){
        return true;
    }
    return false;
}
// run checkLine on peopleInLine
checkLine( peopleInLine );