import { ParentEntity } from "./parentEntity.model"

export class StepModel extends ParentEntity{
    public name: string;
    public description: string;
    public orderPosition: number;
}