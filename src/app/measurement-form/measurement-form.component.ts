import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-measurement-form',

  templateUrl: './measurement-form.component.html',

  styleUrls: ['./measurement-form.component.css'],
})
export class MeasurementFormComponent {
  @Output() newMeasurement = new EventEmitter<any>();

  addMeasurement() {
    const phase = (document.getElementById('phase') as HTMLInputElement).value;

    const u = (document.getElementById('u') as HTMLInputElement).value;

    const i = (document.getElementById('i') as HTMLInputElement).value;

    const p = (document.getElementById('p') as HTMLInputElement).value;

    const q = (document.getElementById('q') as HTMLInputElement).value;

    const cos = (document.getElementById('cos') as HTMLInputElement).value;

    const newMeasurement = {
      phase,

      u,

      i,

      p,

      q,

      cos,
    };

    this.newMeasurement.emit(newMeasurement);

    (document.getElementById('phase') as HTMLInputElement).value = '';

    (document.getElementById('u') as HTMLInputElement).value = '';

    (document.getElementById('i') as HTMLInputElement).value = '';

    (document.getElementById('p') as HTMLInputElement).value = '';

    (document.getElementById('q') as HTMLInputElement).value = '';

    (document.getElementById('cos') as HTMLInputElement).value = '';
  }
}
