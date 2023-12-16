var _a;
let user = {
    name: "Doanh",
    age: 25,
    address: {
        street: "Duy Tan"
    }
};
function checkUser(user) {
    user.address = undefined;
    return user;
}
user = checkUser(user);
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.street);
// if(user.address && user.address.street) {
//     console.log(user.address.street);
// }
