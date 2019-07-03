export interface Console {
    name: string;
    company: string;
    year: number;
    month?: number;
    day?: number;
    gameCount: number;
    collectCount: number;
    selected: number[];
    short: string;
}
