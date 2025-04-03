export interface Filter {
    type: string;
    values: string[];
  }
  
  export const filters: Filter[] = [
    {
      type: "subsidiary",
      values: ["subsidiary1", "subsidiary2", "subsidiary3"]
    },
    {
      type: "sector",
      values: ["sector1", "sector2", "sector3"]
    }
  ];
  