
export class ModelDTO {
    model_id: number;
    enumerator: string;
    brand_id: number;

    constructor(model: ModelDTO) {
        this.model_id = model.model_id;
        this.enumerator = model.enumerator;
        this.brand_id = model.brand_id;
    }
}
