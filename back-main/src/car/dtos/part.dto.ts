import { PartStatusDTO } from "./part-status.dto"; 
import { PartTypeDTO } from "./part-type.dto"; 

export class PartDTO {
    id?: number;
    car_id: number;
    part_status_id: number;
    part_type_id: number;
    description: string;
    price: number;
    part_status?: PartStatusDTO; 
    part_type?: PartTypeDTO; 

    constructor(part: PartDTO) {
        this.id = part.id;
        this.car_id = part.car_id;
        this.part_status_id = part.part_status_id;
        this.part_type_id = part.part_type_id;
        this.description = part.description;
        this.price = part.price;
        this.part_status = part.part_status;
        this.part_type = part.part_type;
    }
}
