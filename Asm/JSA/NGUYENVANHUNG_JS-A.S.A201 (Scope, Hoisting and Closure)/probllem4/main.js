var nodes = document.getElementsByTagName("button");
for (let i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("click", function () {
    console.log("You clicked element #" + i);
  });
}


// Output : You clicked element #4 ; 
// Vì for() là một block scope mà biến i khai báo là var thì i lúc này có phạm vi là global scope và khi kết thúc
// vòng lặp i đạt giá trị cuối cùng là 4.
//Cách khắc phục là sửa lại khai báo var = let. 
