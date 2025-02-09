import { Panelist } from "./Panelist";

export interface SocialMedia {

  id: string;
  name: string;
  URL: string;
  eventIdEventId: string;
  event: Event;
  panelistId: string;
  panelist: Panelist;

}
