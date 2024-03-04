import { TicketBinata } from "./tickets/binata";
import { TicketFarmacia } from "./tickets/farmacia";
import { ticketType } from "./types/ticket";

class TicketFactory {

  public obtenerTicket(type:  ticketType) {
    if(type === ticketType.binata){
      return new TicketBinata();
    }
    else {
      return new TicketFarmacia();
    }
  }
}

export { TicketFactory }
