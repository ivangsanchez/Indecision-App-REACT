function square (x){
    return x*x;
};

console.log(square(8));

////////////////////////////
const squareArrow = (x) =>{
    return x*x;
};

console.log(squareArrow(8));

/////////////////////////////
const squareArrow2 = (x) => x*x;  
console.log(squareArrow2(8));

const getFiertName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFiertName('Mike Smith'))