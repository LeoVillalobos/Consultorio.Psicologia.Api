export interface ITicketService {
  generateTicket(): ITicket
}

export interface ITicket {
  id: string;
  name: string;
}

export enum ticketType {
  "farmacia" = 1,
  "binata" = 2
}
