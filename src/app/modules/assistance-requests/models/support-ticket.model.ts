import { CloudProviders } from "./feature-ticket.model";

export interface SupportTicketModel {
  title: string;
  description: string;
  cloudProvider: CloudProviders;
  priority: string;
  deadLine: string;
  fileUpload: File
}
