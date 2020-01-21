export interface Match {
    id: string;
    matchNumber: number; // "foreign key" to the Pass interface
    opponent: string;
    date: Date; // TODO: Might not keep this
};