import { ModelDTO } from "./model.dto"; 

export class BrandDTO {
    brand_id: string;
    enumerator: string;

    constructor(brand: BrandDTO) {
        this.brand_id = brand.brand_id;
        this.enumerator = brand.enumerator;
    }
}