export interface SupportTicketModel {
  title: string;
  description: string;
  priority: string;
  deadLine: string;
  fileUpload: string;
  status: string;
}

export enum TicketStatus {
  TODO = 'to-do',
  INPROGRESS = 'in-progress',
  COMPLETED = 'completed',
  TICKETS = 'tickets'
}

export const TICKET_STATUS_COLOR_MAPPER: Record<TicketStatus, string> = {
  [TicketStatus.TODO]: '#FAD27D',
  [TicketStatus.INPROGRESS]: '#2FC8EB',
  [TicketStatus.COMPLETED]: '#5FD198',
  [TicketStatus.TICKETS]: '#C7C7C7'
};
