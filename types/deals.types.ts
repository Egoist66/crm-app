export interface IBaseField {
    $created_at: string;
    $id: string
}

export interface ICustomer extends IBaseField {
    name: string;
    email: string;
    avatar_url: string;
    from_source?: string;
    
}

export interface IComment extends IBaseField {
    text: string;
}

export enum EnumStatus {
    TODO = 'todo',
    TOBEAGREED = 'to-be-agreed',
    IN_PROGRESS = 'in-progress',
    PRODUCED = 'produced',
    DONE = 'done'
}

export interface IDeal extends IBaseField {
    comments: IComment[];
    created_at: string,
    customer: ICustomer;
    avatar_url: string;
    email: string;
    from_source?: string;
    name: string;
    price: number;
    status: EnumStatus;
    

}


