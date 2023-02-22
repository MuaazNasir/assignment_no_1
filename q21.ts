interface pass{
    Name:string;
    RollNo:string;
    DistanceLearning:string;
    City:string;
    Center:string;
    Campus:string;
    Days_Time:string;
    Batch:Number;
}
let studentPass:pass = {
    Name: 'Muaaz Nasir',
    RollNo: 'PIAIC205981',
    DistanceLearning: 'No',
    City: 'Lahore',
    Center: 'University of Management & Technology',
    Campus: 'Main Campus',
    Days_Time : 'Sunday - 02:00 PM To 06:00 PM',
    Batch : 43,
}

console.log(`hey, my name is ${studentPass.Name} , i am learning at ${studentPass.Center}.....`)

export default {}