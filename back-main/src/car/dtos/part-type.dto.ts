import { PartDTO } from "./part.dto"; 

export class PartTypeDTO {
    part_type_id: string;
    enumerator: string;

    constructor(partType: PartTypeDTO) {
        this.part_type_id = partType.part_type_id;
        this.enumerator = partType.enumerator;
    }
}