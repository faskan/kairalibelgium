export interface Schedule {
  id: string;
  userGeneratedId: string;
  eventId: string;
  title: string;
  teamName: string;
  performanceType: string;
  contactPerson: string;
  scheduledTime: string;
  status: string;
  durationInMinutes: number;
  phoneNumber?: string;
  whatsappNumber?: string;
}
