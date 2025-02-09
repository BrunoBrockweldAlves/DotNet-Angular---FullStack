import { Contact } from "./Contact";
import { PanelistEvent } from "./PanelistEvent";
import { SocialMedia } from "./SocialMedia";

export interface Event {

   id: string;
   local: string;
   date?: Date;
   theme: string;
   peopleAmount: number;
   imageUrl: string;
   contact: Contact;
   socialMedia: SocialMedia[];
   panelistEvent: PanelistEvent[];

}

