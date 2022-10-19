import { Component, OnInit, TemplateRef } from '@angular/core';

import { EventService } from '../services/event.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Events',
  templateUrl: './Events.component.html',
  styleUrls: ['./Events.component.scss']
})
export class EventsComponent implements OnInit {

  modalRef?: BsModalRef;

  public events: any = [];
  public filteredEvents: any = [];

  public widthImage = 200;
  public marginImage  = 2;
  public hideImage  = false;
  private _listFilter = '';

  public get listFilter(): string{
    return this._listFilter;
  }

  public set listFilter(value: string){
    this._listFilter = value;
    this.filteredEvents = this.listFilter ? this.listFiltered(this.listFilter) : this.events;
  }

  public listFiltered(filterBy: string): Event[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.events.filter(
      (event: any) => event.theme.toLocaleLowerCase().indexOf(filterBy) !== -1
      || event.local.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }

  constructor(private eventService: EventService ,
              private modalService: BsModalService,
              private toastr: ToastrService) { }

  public ngOnInit(): void {
    this.getEvents();
  }

  public showImage(): void{
    this.hideImage = !this.hideImage;
  }

  public getEvents(): void {
    this.eventService.getEvents().subscribe(
      (_events: Event[]) =>{
        this.events = _events,
        this.filteredEvents = this.events
      },
      error => console.log(error)
    );

    this.events
  }

openModal(template: TemplateRef<any>): void {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'})
}

confirm(): void {
  this.toastr.success('Hello world!', 'Toastr fun!')
  this.modalRef?.hide()
}

decline(): void {
  this.modalRef?.hide();
}


}
