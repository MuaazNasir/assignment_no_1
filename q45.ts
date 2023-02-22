interface type{
    manufacture : string;
    modal : string;
    [key:string] : any;
}
function make_car(manufacture:string , modal:string , ...option:[string , any][]):type {
    const car:type = {manufacture , modal};
    for(const [key , value] of option){
        car[key] = value;
    }
    return car
}

const myCar = make_car('Toyota', 'Camry', ['color', 'blue'], ['year', 2020]);
console.log(myCar);

export default {}