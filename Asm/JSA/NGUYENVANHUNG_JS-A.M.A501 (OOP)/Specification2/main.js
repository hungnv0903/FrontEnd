class Group {
    constructor(){
        this.element = [] ; 
    }

    add(value){
        if(!this.has(value)){
            this.element.push(value) ; 
        } 
    }

    delete(value){
        this.element = this.element.filter(item=>{
            return item!=value ; 
        });
    }

    has(value){
       if(this.element.length===0){
            return false ; 
       }else{
            let check = 0 ; 
            for(let item of this.element){
                if(value===item){
                    check=1 ; 
                    break ; 
                }
            }
            if(check===0){
                return false ; 
            }else{
                return true ; 
            }
       }
    }

    static from(arr){
        const group = new Group() ; 
        for(let item of arr){
            group.add(item) ; 
        }
        return group ; 
    }
}

let group = Group.from([10,20]) ; 
console.log(group.has(10)); 
console.log(group.has(30));
group.add(10) ; 
// console.log(group.element);
group.delete(10) ;
// console.log(group.element);
console.log(group.has(10)); 
//