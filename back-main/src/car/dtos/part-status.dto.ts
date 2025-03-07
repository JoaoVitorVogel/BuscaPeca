import { PartDTO } from "./part.dto";

export class PartStatusDTO {
    part_status_id: string;
    enumerator: string;

    constructor(partStatus: PartStatusDTO) {
        this.part_status_id = partStatus.part_status_id;
        this.enumerator = partStatus.enumerator;
    }
}
