function UserInfo(name,location) {
    this.name=name,
    this.location=location
    
}

function serveFood(food) {
    let obj={}
    obj.food=food
    UserInfo.call(obj)
    return obj

}
function serveIn() {}
function billNote() {}
function generateInVoice() {}
const user_one=new UserInfo("aaabbb","delhi")
const foodie= serveFood("Pizza")
console.log(user_one)
console.log(foodie)

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
