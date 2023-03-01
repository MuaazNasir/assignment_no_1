// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let Name:String = 'HeLlO wOrLd mOHID'

console.log(`in lower case ${Name.toLowerCase()}`)

console.log(`in lower case ${Name.toUpperCase()}`)

let tabName:string[] = Name.split(' ');
function tab(str:String[]):String{
    for(let i = 0 ; i<tabName.length ; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
    }
    let x:String = str.join(' ').toString()
    return (x)
}

console.log(`in tab form ${tab(tabName)}`)

export default {}