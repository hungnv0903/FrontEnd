function upper(strings,values) {
    return values.toUpperCase() ; 
}
var strings ; 
var name = 'Nguyen Van A', account = 'ANV', classname = 'Fresher FrontEnd';

console.log(
    `Hello ${upper(strings,name)} (@${upper(strings,account)}), welcome to the ${upper(strings,classname)}!!!` ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!'
);