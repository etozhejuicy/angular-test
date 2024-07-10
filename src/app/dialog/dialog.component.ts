import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() title: string = '';
  @Output() confirmEvent = new EventEmitter<void>();
  @Output() cancelEvent = new EventEmitter<void>();

  closeDialog() {
    this.cancelEvent.emit();
  }

  isOpen = false;

  open(): void {
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }

  confirm(): void {
    this.confirmEvent.emit();
    this.close();
  }

  cancel(): void {
    this.cancelEvent.emit();
    this.close();
  }
}
