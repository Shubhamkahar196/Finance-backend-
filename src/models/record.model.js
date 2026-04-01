import mongoose,{Schema} from "mongoose";

const recordSchema = mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    amount: Number,
    type:{
        type:String,
        enum:["income",'expense'],
    },
    category: string,
    date: {
        type: Date,
        default: Date.now,
    },
    notes: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

const Record = mongoose.model("Record",recordSchema);

export default Record;