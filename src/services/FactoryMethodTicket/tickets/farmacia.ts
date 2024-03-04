import { ITicket, ITicketService } from './../types/ticket';

export class TicketFarmacia implements ITicketService {
  /**
   *
   */
  public generateTicket(): ITicket {
    return {id:"1", name: "leo"};
  }
}
