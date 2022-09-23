import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService, ModalState } from 'src/app/modal.service';

@Component({
  selector: 'corp-dis-moi',
  templateUrl: './dis-moi.component.html',
  styleUrls: ['./dis-moi.component.scss']
})
export class DisMoiComponent implements OnInit {

  display$!: Observable<ModalState>;

  constructor(
      private modalService: ModalService
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

}
