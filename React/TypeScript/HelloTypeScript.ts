export module HelloTypeScript {
    var     burger        : string    = "Hamburger", 
            calories      : number    = 500 ,
            tasty         : boolean   = true,
            brand         : string,
            price         : 50000,
            promotion, 
            counstries    : string[]        = ['VietNam' , "Lao" , "China"],
            counstriesV2  : Array<string>   = ["VietNam" , "Lao" , "China"],
            isPromote     : boolean[]       = [true,false,false],
            priceEscalate : number[]        = [100,200,300],
            mixArray      : any[]           = [1,2,3,"VietNam",true],
            mixArray2     : (string|number|boolean)[]   = ['Lao',1,true],
            tuple         : [string,number,boolean]     = ["Vietnam" , 5000 , true],
     
            //Object
            object        : object = {key: "Value"},
            person        : {name:string , age:number} = {name:"Fsoft" , age:35}
            
            //Enum
            enum YesOrNo {
                    Thinking = 1,
                    Yes = 4,
                    No = 10,
                    Never,
            }
            console.log(YesOrNo.Thinking , YesOrNo.Yes , YesOrNo.No , YesOrNo.Never)

            enum Color {
                Red     = "Red",
                Green   = "Green",
                Blue    = "Blue"      
            }

            let answer: YesOrNo = YesOrNo.Never ;
            console.log(answer);

            function doYouLoveMe(question:number){
                switch (question){
                    case YesOrNo.No: return "Good luck man!" ;
                    case YesOrNo.Thinking: return  "I'm busy" ;
                    case YesOrNo.Yes: return "OK man!" ;  
                }
            }
            console.log(doYouLoveMe(YesOrNo.No));
            
    //Ex1
    let variable : any  = 10  ; 
    variable = "Hello" ; 
    variable  = true ;
    console.log(variable);

    //Ex2 
    function speak(food: string , energy: number , tasty: boolean){
        console.log(`You are eating ${food} with ${energy} calories`);
    }
    speak(burger , calories ,tasty) ;
    
    //HOF

    function add(a:number , b:number):number {
        return a+b ; 
    }

    const mul = (a:number , b:number):number =>{
        return a*b ; 
    }
    console.log(add(1,2));
    console.log(mul(add(1,2),3));
}