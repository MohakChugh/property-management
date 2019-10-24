property= 'qwe'
fh_lh= 'qwe'
locality= 'qwe'
bhk= 'qwe'
property_type= 'qwe'
isFurnished= 'qwe'
area= 'qwe'
isSale= 'qwe'
block= 'qwe'
floor= 'qwe'
priceFrom= 'qwe'
priceTo='qwe'

let arr1 = [
    property,
    fh_lh,
    locality,
    bhk,
    property_type,
    isFurnished,
    area,
    isSale,
    block,
    floor,
    priceFrom,
    priceTo
]
let arr2 = [
    "property",
    "fh_lh",
    "locality",
    "bhk",
    "property_type",
    "isFurnished",
    "area",
    "isSale",
    "block",
    "floor",
    "priceFrom",
    "priceTo"
]
var string = ''
for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] != '') {
        string += `${arr2[i]} : {_eq: "${arr1[i]}"},`
    }
}
console.log(string)