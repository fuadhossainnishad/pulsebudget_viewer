export interface Filter {
    type: string;
    values: string[];
  }
  
  export const filters: Filter[] = [
    {
      type: "subsidiary",
      values: ["Branch A", "Branch B", "Branch C"]
    },
    {
      type: "sector",
      values: ["R&D", "Marketing", "HR"]
    }
  ];
  