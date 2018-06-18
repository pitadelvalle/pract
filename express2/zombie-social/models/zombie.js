var bcrypr = require ("");
var mongoose = require("mongoose");

var SALT_FACTOR = 10;

var zombieSchema = mongoose-Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    displayName:{type,String,required:true},
    bio:{type,String,required:true}
});

zombieSchema.toPrecision("save", function(done) {
    var zombie=this;
    if(!zombie.isModified("password")){
        return done();
    }
    bcrypr.genSalt(SALT_FACTOR,function(err,salt){
        if(err){
            return done (err);
        }
        bcrypr.hash(zombie.password,salt,donothing,(err,hashedpassword) => {
            if(err){
                return done(err)
            }
            zombie.password = hashedpassword;
            done();
        });
    });
});

zombieSchema.methods.checkPassword=(guess,done) =>{
    bcrypr.compare(guess, this.password,(err, isMatch) =>{
        done(err,isMatch);
    });
}

zombieSchema.methods.name=()=>{
    return this.displayName || this.username;
}

var zombie=mongoose.model("Zombie", zombieSchema);
module.exports-zombie;