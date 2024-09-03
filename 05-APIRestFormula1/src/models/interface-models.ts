export interface Team {
  id: number;
  teamName: string;
  drivers: [string,string];
  headquarters: string;
  titlesLast20Years: number;
}
export interface Driver {
  id: number;
  name: string;
  teamName: string; 
  titles: number;
  stats: {
    acceleration: number;
    curve: number;
    driving: number;
    endurance: number;
    strength: number;
  };
}