import { ITicket, ITicketService } from "../types/ticket";


export class TicketBinata implements ITicketService {
  generateTicket(): ITicket {
      return {id: "58", name: "fiesta loca"}
  }
}
