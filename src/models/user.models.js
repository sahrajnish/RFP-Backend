import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "First Name is required"]
        },
        lastname: {
            type: String,
            required: [true, "Last Name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: [8, "Password must be atleast 8 characters"]
        },
        typeOfUser: {
            type: String,
            enum: ["Admin", "Vendor"],
            required: true,
            default: "Admin"
        },
        refreshToken: {
            type: String
        }
    }, {
        timestamps: true
    }
)

// middlewares
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

//methods
userSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(this.password, password);
}

const User = mongoose.model("users", userSchema);

export default User;