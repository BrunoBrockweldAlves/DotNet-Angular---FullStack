import { Panelist } from "./Panelist";

export interface PanelistEvent {

   id: string;
   panelistid: string;
   panelist: Panelist;
   eventid: string;
   event: Event;

}
