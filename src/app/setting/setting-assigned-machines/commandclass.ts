export class rowEdit {
  constructor(
    public factory: string,
    public line: string,
    public machineFunctionality: string,
    public machineID: string,
    public productName: string,
    public machineType: string,
    public ratedSpeed: number,
    public id: number,
    public size: number,
    public packSize: number,
    public palteSize: number,
    public technicalSKU: number,
    public useInCalculation: boolean
  ) {}
}
export class command {
  constructor(
    public buttonOption: object,
    public type: string,
    public uid: string
  ) {}
}
