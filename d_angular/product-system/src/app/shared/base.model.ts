import { format } from 'date-fns';

export class BaseModel {
  isUse: boolean;
  createdTime: string;
  updatedTime: string;

  contructor(
    isUse: boolean, 
    createdTime: string, 
    updatedTime: string
    ) {
    this.isUse = isUse;
    this.createdTime = createdTime;
    this.updatedTime = updatedTime;
  }
}