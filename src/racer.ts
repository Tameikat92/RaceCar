export interface Racer {
    team: string;
    speed: number;
    accerlerate: () => void;
    isFuelEmpty: () => boolean;
}



