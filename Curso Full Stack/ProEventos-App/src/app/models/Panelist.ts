import { Contact } from "./Contact";
import { PanelistEvent } from "./PanelistEvent";
import { SocialMedia } from "./SocialMedia";

export interface Panelist {

  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  contact: Contact;
  socialMedia: SocialMedia[];
  panelistEvent: PanelistEvent[];

}
