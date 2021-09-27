import {IExam} from '../../domain/Interfaces/IExam';
import { Schema, model } from 'mongoose';



const ExamSchema = new Schema<IExam>({
    title: {
        type: String,      
    },
    price: {
        type: Number,
       
    },
    description: {
        type:String,       
    },
    resultTime: {
        type:String,
        
    },
    code: {
        type:String,
        unique:true        
    },
    searchTags: [String],
    tags:[String],
    category: {
                type:String, 
        
    },
    reason:{
        type:String,       
    },
    enabled : {
        type: Boolean,
        default: true       
    },
    highlight : {
        type: Boolean,
        default: false
    }    
},
{
    timestamps:true
});

export = model<IExam>('Exam',ExamSchema);