import { ModelDTO } from "./model.dto";
import { PartDTO } from "./part.dto"; 
import { SellerDTO } from "src/seller/dtos/seller.dto";

export class CarDTO {
    model: ModelDTO;
    release_year: string;
    cost: number;
    purchase_date: string;
    parts: PartDTO[];

    constructor(car: CarDTO) {
        this.release_year = car.release_year;
        this.cost = car.cost;
        this.purchase_date = car.purchase_date;
        this.model = car.model;
        this.parts = car.parts;
    }
}
