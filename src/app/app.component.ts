import { Component, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MeasurementFormComponent } from './measurement-form/measurement-form.component';
import { ButtonComponent } from './button/button.component';
import { DialogComponent } from './dialog/dialog.component';

// js-solutions
import '../js/modules/jquery.js';
import '../js/modules/collapse.js';
import '../js/modules/resizer.js';

@Component({
  standalone: true,

  imports: [
    NgFor,
    ButtonComponent,
    HeaderComponent,
    MeasurementFormComponent,
    DialogComponent,
  ],

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: [
    './app.component.scss',
    './header/header.component.scss',
    './button/button.component.scss',
    './dialog/dialog.component.scss',
  ],
})
export class AppComponent {
  title = 'monitor-app';

  // Data for the table

  measurementHeaders = [
    'Дата',
    'Время',
    'Источник',
    'Фаза',
    'U, kB',
    'I, A',
    'Р, МВт',
    'Q, Мвар',
    'coѕ ф',
  ];

  measurements = [
    {
      id: 1,
      date: '30.07.2022',
      time: '10:15:23',
      source: 'Оператор',
      phase: '-',
      u: '-',
      i: '-',
      p: '-',
      q: '-',
      cos: '-',
    },

    {
      id: 2,
      date: '30.07.2022',
      time: '10:08:44',
      source: 'Оператор',
      phase: '-',
      u: '-',
      i: '-',
      p: '-',
      q: '-',
      cos: '-',
    },

    {
      id: 3,
      date: '29.07.2022',
      time: '15:08:44',
      source: 'Оператор',
      phase: 'a',
      u: '1',
      i: '0.5',
      p: '3',
      q: '0.7',
      cos: '0.67',
    },

    {
      id: 4,
      date: '12.06.2022',
      time: '10:28:02',
      source: 'SCADA',
      phase: 'b',
      u: '1',
      i: '0.6',
      p: '2.756',
      q: '0.9',
      cos: '0.83',
    },

    {
      id: 5,
      date: '05.05.2022',
      time: '13:56:39',
      source: 'АСКУЭ',
      phase: 'c',
      u: '1.2',
      i: '0.5',
      p: '3.143',
      q: '0.78',
      cos: '0.67',
    },

    {
      id: 6,
      date: '05.05.2022',
      time: '13:56:39',
      source: 'АСКУЭ',
      phase: 'c',
      u: '1.2',
      i: '0.5',
      p: '3.143',
      q: '0.78',
      cos: '0.67',
    },

    {
      id: 7,
      date: '02.03.2022',
      time: '17:43:51',
      source: 'Регистратор',
      phase: 'ab',
      u: '1.1',
      i: '0.4',
      p: '3.343',
      q: '0.76',
      cos: '0.65',
    },
  ];



  // Data for the list

  listHeaders = ['Наименование', 'U ном.'];

  listData = [
    { name: 'PTCH\\HH-1', u: '6' },

    { name: 'PTCH\\HH-2', u: '6' },

    { name: 'БТ1\\НН-2', u: '10.5' },

    { name: 'БТ-1\\ВН', u: '110' },
  ];

  // Substations

  substations: any = [
    { id: 0, value: 'Выберите подстанцию' },
    { id: 1, value: 'ТЭЦ ПГУ ГСР Энерго' },
    { id: 2, value: 'Подстанция 2' },
    { id: 3, value: 'Подстанция 3' },
    { id: 4, value: 'Подстанция 4' },
    { id: 5, value: 'Подстанция 5' },
  ];

  // equipment

  equipment: any = [
    { name: '', value: 'Выберите оборудование' },
    { name: 'tr1', value: 'Трансформатор 1' },
    { name: 'tr2', value: 'Трансформатор 2' },
    { name: 'tr3', value: 'Трансформатор 3' },
    { name: 'tr4', value: 'Трансформатор 4' },
    { name: 'tr5', value: 'Трансформатор 5' },
  ];

  // Equipment Types

  equipmentTypes: any = [
    { name: '', value: 'Выберите тип' },
    { name: 'transformator', value: 'Трансформаторы' },
    { name: 'generator', value: 'Генераторы' },
  ];

  // RU Values

  ruValues: any = [
    { name: '', value: 'Выберите РУ' },
    { name: 'RU1', value: 'РУ 1' },
    { name: 'RU2', value: 'РУ 2' },
  ];

  // Variables

  selectedMeasurement: any;
  selectedSubstation: string = 'ТЭЦ ПГУ ГСР Энерго';
  selectedEquipmentType: string = 'transformator';
  selectedRU: string = 'RU1';

  // Check if a measurement is checked

  isChecked(measurement: any) {
    return measurement.checked;
  }

  // Toggle checked state of a measurement

  toggleCheck(measurement: any) {
    measurement.checked = !measurement.checked;
  }

  addNewMeasurement(measurement: any) {
    this.measurements.push(measurement);
  }

  selectMeasurement(measurement: any) {
    this.selectedMeasurement = measurement;
  }

  getSelectedMeasurementId() {
    return this.selectedMeasurement?.id;
  }

  removeMeasurement() {
    if (this.selectedMeasurement.id) {
      const measurementToRemove = this.measurements.find(measurement => measurement.id === this.selectedMeasurement.id);

      if (measurementToRemove) {
        this.measurements = this.measurements.filter(measurement => measurement.id !== this.selectedMeasurement.id);

        // Send a request to the backend to delete the measurement (if necessary)
        // this.http.delete(`https://example.com/api/measurements/${this.selectedMeasurementId}`)
        //   .subscribe(() => console.log('Measurement deleted successfully'));
      }
    }
  }


  @ViewChild('dialog') dialog: DialogComponent | undefined;

  openDialog() {
    if (this.dialog) {
      this.dialog.open();
    }
  }

  closeDialog() {
    if (this.dialog) {
      this.dialog.close();
    }
  }
}
