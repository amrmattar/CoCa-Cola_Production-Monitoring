export class DashboardFilter {
  id: string;
  TimeType: number;
  Factory: string;
  startDate: string;
  endDate: string;
  LineID: number;
  duration: number;

  constructor() {
    this.id = null;
    this.TimeType = 0;
    this.Factory = null;
    this.startDate = null;
    this.endDate = null;
    this.LineID = null;
    this.duration = null;
  }
}

export enum TimeType {
  Shift,
  Day,
  Week,
  Month,
  Quarter,
  Year,
}

export enum GroupIdentifierType {
  Line,
  Function,
  Machine,
}
