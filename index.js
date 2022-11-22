// Code your solution in this file!
const returnFirstTwoDrivers= drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(drivers.length-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return fare => fare*multiplier;
}
const fareDoubler = fare => createFareMultiplier(2)(fare)
const fareTripler = fare => createFareMultiplier(3)(fare)

function selectDifferentDrivers(array1, array2){
        return array2(array1);
    

}