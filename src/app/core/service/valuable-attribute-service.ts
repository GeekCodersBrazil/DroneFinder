import { ValuableAttribute } from './../model/subtypes/valuable-attribute';
export interface ValuableAttributeService {
  list: ValuableAttribute[]
  insertValue(value: ValuableAttribute)
}
//
