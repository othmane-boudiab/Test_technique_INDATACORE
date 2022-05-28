export class Order {
  id: number;
  name: string;
  quantity: number;
  description: string;
  dateCreated: Date;
  dateUpdated: Date;

  constructor(id: number, name: string, quantity: number, description: string, dateCreated: Date, dateUpdated: Date) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.description = description;
    this.dateCreated = dateCreated;
    this.dateUpdated = dateUpdated;
  }
}
