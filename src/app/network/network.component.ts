import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'corp-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  @Input() isExpanded: boolean = true;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  tab: string = "home";

  constructor() { }

  ngOnInit(): void {
  }

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  tabChange(val: string) {
    this.tab = val;
  }

}
