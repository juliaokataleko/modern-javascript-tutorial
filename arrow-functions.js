function add(...nums) {

    // let total = nums.reduce( (x, y) => {
    //     return x + y;
    // }) 

    let total = nums.reduce( (x, y) => x + y)

    console.log(total);
}

add(2, 5, 3, 7, 8, 5,0,6,5,5,5)