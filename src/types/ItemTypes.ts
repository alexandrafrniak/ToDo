export interface ItemType {
  itemId: number;
  createdAt?: Date;
  itemState: boolean;
  itemName: string;
  deadline: Date | null;
  itemText: string;
  listId: number;
}
