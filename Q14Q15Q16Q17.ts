//qno 14
let guestlist:string[];
guestlist = ['imran' , 'haseeb' , 'zaigam'];

console.log('original list:');
for (let i = 0; i < guestlist.length; i++) {
    console.log(guestlist[i])
}


// qno 15
let notattended:string[] = ['zaigam']
console.log(`unfortunately!! ${notattended} is unable to attend due to some reasons`);
guestlist.splice(2,1,'hamza')

// qno 16
let newGuests:string[] = ['mohid' , 'raza' , 'ahmad']
guestlist.unshift(newGuests[0]);
guestlist.splice(2,0,newGuests[1])
guestlist.push(newGuests[2])
console.log(`${newGuests} you all are also invited to dinner!`)
// qno 17
while(guestlist.length > 2){
    let guest = guestlist.pop();
    console.log(`${guest}, i can not invite you to dinner!`)
}

guestlist.forEach(guest =>{
    console.log(`hey ${guest}, you are invited to the dinner party!`)
} )
guestlist.splice(0,guestlist.length);
console.log(guestlist);

export default {}

