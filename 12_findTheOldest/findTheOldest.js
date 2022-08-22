const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        const lastGuy = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextGuy = getAge(b.yearOfBirth, b.yearOfDeath);
        return lastGuy > nextGuy ? -1: 1;
    })
    return oldest[0];
    //(oldest[0].yearOfDeath != undefined) ? oldest[0]: oldest[people.length - 1];
    //return oldest[people.length - 1].yearOfDeath;
};

const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
