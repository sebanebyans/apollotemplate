import { Schema, model } from "mongoose";
import { IExam } from "../../domain/Interfaces/IExam";

const ExamSchema = new Schema<IExam>(
  {
    title: {
      type: String,
      required:true,
      
    },
    price: {
      type: Number,
      required:true,
    },
    description: {
      type: String,
      required:true,
    },
    resultTime: {
      type: String,
      required:true,
    },
    code: {
      type: String,
      unique: true,
      required:true,
    },
    searchTags: [String],
    tags: [String],
    category: {
      type: String,
    },
    reason: {
      type: String,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    highlight: {
      type: Boolean,
      default: false,
    },
    isFast: {
      type:Boolean,
      required:true,
    }
  },
  {
    timestamps: true,
  }
);

export const ExamModel = model<IExam>("Exam", ExamSchema);
