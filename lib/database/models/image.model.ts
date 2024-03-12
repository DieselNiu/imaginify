import {Document, Schema, model, models } from "mongoose";




export interface IImage  extends Document{
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // Assuming URL is a string representation for simplicity
  width?: number; // Optional property
  height?: number; // Optional property
  config?: object; // 'object' type can be replaced with a more specific interface if the config structure is known
  transformationUrl?: string; // Assuming URL is a string representation for simplicity
  aspectRatio?: string; // Optional property
  color?: string; // Optional property
  prompt?: string; // Optional property
  author: {
    _id: string;
    firstName: string;
    lastName:string
  }; // Referencing 'User' schema, using mongoose Types.ObjectId for MongoDB ObjectId type
  createdAt?: Date; // Optional property with default value
  updatedAt?: Date; // Optional property with default value
}

const ImageSchema  = new Schema({
    title: {type: String,required: true},
    transformationType: {type:String,required:true},
    publicId: {type:String,required: true},
    secureUrl: {type:URL,required: true},
    width: {type:Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type:String},
    prompt: {type:String},
    author: {type:Schema.Types.ObjectId,ref: 'User'},
    createdAt: {type:Date,default: Date.now},
    updatedAt: {type:Date,default: Date.now}
    });

    

const Image = models?.Image || model('Image',ImageSchema);

export default Image;

