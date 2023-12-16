const  Person =  [
    {
        id: 1,
        name: 'Dung',
        age: 20
    },
    {
        id: 2,
        name: 'Diu',
        age: 20
    },
    {
        id: 3,
        name: 'Ky',
        age: 20
    },
    {
        id: 1,
        name: 'Hai',
        age: 22
    },
   
]

const setPerson = new Set() ; 
var newArray = [] ; 
for(let person of Person){
    if(!setPerson.has(person.id)){
        setPerson.add(person.id); 
        newArray.push(person); 
    }
}

console.log(newArray);

//