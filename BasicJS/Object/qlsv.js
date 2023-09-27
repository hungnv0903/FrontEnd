

var Student = {
    data : [] , 

    viewStudent : function(){
        //Xem danh sach sinh vien 
        var list = document.querySelector(".output ol") ;
        var listStudent = this.data ; 
        for(var i in listStudent){
            // console.log(listStudent[i]);
            var list_item = document.createElement('li') ; 
            list_item.textContent = `Id : ${ listStudent[i].id} | Name : ${listStudent[i].name} |
                                    Email : ${listStudent[i].email} ` ; 
            console.log(list_item);
            list.appendChild(list_item) ; 
        }

    },

    addStudent : function(id , name , email){
        //Them sinhvien

        // tao thong tin sinh vien
        var item = {
            id : id,
            name : name , 
            email : email
        }
        
        //them sinh vien
        this.data.push(item) ; 
    },

    removeStudent: function(id){
        //Xoa sinh vien
        var listStudent = this.data ; 
        for(i = 0 ; i<listStudent.length ; i++){
            if(listStudent[i].id===id){
                listStudent.splice(i,1) ; //xoa dung vi tri thu i 
            }
        }
    },
    editStudent:function(id , name , email){
        //Edit sinhg vien
        var listStudent = this.data ; 
        for(i in listStudent){
            if(listStudent[i].id===id){
                listStudent[i].name = name ; 
                listStudent[i].email = email ; 
            }
        }
    }
} ; 

Student.addStudent("sv001", 'Nguyễn Văn Cường', "thehalfheart@gmail.com");
Student.addStudent("sv003", 'Nguyễn Văn Cường', "thehalfheart@gmail.com");
Student.addStudent("sv002", 'Vũ Thị Thu Tình', "freetuts.net@gmail.com");
Student.editStudent("sv001" , "Nguyễn Văn Hùng" , "nguyenhung090399@gmail.com") ; 
Student.removeStudent("sv003") ; 
Student.viewStudent() ; 
console.log(Student);