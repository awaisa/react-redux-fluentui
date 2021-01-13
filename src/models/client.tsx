export type Client = {
    id: number;
    name: string;
    phoneNo: string,
    address: string
};


export type ClientView = {
    list: Client[]
    search: string
};