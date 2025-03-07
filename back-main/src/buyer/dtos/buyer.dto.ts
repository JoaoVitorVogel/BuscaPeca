import { UserDTO } from 'src/user/dtos/user.dto';

export class BuyerDTO {
  user: UserDTO;
  company_name: string;
  trading_name: string;
  document_number: string;
  email: string;
  phone_country_code: string;
  phone_area_code: string;
  phone_number: string;
  street: string;
  neighborhood: string;
  number: string;
  city: string;
  state: string;
  complement: string;
  postal_code: string;

  constructor(buyer: BuyerDTO) {
    this.user = buyer.user;
    this.company_name = buyer.company_name;
    this.trading_name = buyer.trading_name;
    this.document_number = buyer.document_number;
    this.email = buyer.email;
    this.phone_country_code = buyer.phone_country_code;
    this.phone_area_code = buyer.phone_area_code;
    this.phone_number = buyer.phone_number;
    this.street = buyer.street;
    this.neighborhood = buyer.neighborhood;
    this.number = buyer.number;
    this.city = buyer.city;
    this.state = buyer.state;
    this.complement = buyer.complement;
    this.postal_code = buyer.postal_code;
  }
}
