import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-locked-input-bad',
  templateUrl: './locked-input-bad.component.html',
  styleUrls: ['./locked-input-bad.component.scss']
})
export class LockedInputBadComponent implements OnInit {
  @Output() isClosedEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  isLocked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isLocked = !this.isLocked
    this.isClosedEmitter.emit(this.isLocked);
  }

}
