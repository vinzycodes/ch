export interface MenuItemType {
    category: string;
    products: ItemType[];
}

export interface ItemType {
    name: string;
    details?: string;
    modifications?: ModificationType[];
    price: number
}

export interface ModificationType {
    type: string;
    options: OptionsType[];
    selectedOption?: string;
    price?: number;
}

export interface OptionsType {
    name: string;
    price: number;
}

export interface OrderType {
    name?: string;
    price?: number;
    modifications?: ExportModificationType[];
}

export interface ExportModificationType {
    selectedOption: string;
    type: string;
    price: number;
}