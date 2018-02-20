import { StepModel } from './step.model';
import { ParentEntity } from "./parentEntity.model";



export class ProjectModel extends ParentEntity{
    public name: string;
    public description: string;

    public steps: Array<StepModel>;

    public get orderSteps(): Array<StepModel>{
        return this.steps;
    }
}