import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'corp-cloud-native',
  templateUrl: './cloud-native.component.html',
  styleUrls: ['./cloud-native.component.scss']
})
export class CloudNativeComponent implements OnInit {

  disMoi = false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  clickDisMoi() {
    this.disMoi = !this.disMoi;
  }

}
