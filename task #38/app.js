"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
;
describe_city("Karachi", "Pakistan");
describe_city("Lahore", "Pakistan");
describe_city("Islamabad");