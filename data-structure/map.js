const mapObj = new Map([
    ['fName', 'kalpesh'],
    ['mName', 'kashinath'],
    ['lName', 'Bhadane'],
])
//set data
mapObj.set('age', 29); //return whole Map
mapObj.set('DOB', new Date('1994-05-29'))

//get data
console.log(mapObj.get('age'));
console.log(mapObj);

//delete
mapObj.delete('DOB') //return true if deleted else false
seperator()
//looping
mapObj.forEach((value, key) => {
    console.log(`${key} => ${value}`);
})

for(const [key, value] of mapObj) {
    console.log(`${key} => ${value}`);
}
seperator()
// convert object to Map
const normalObj = {
    name: 'kalpesh',
    age: 29
}
console.log('normal Obj', normalObj);
seperator()
const objConvertedToMap = new Map(Object.entries(normalObj));
console.log('object to map', objConvertedToMap);
seperator()
//convert object to map
const mapToObj = Object.fromEntries(objConvertedToMap);
console.log('map to object', mapToObj);

function seperator() {
    console.log("===============================================================================================");
}
