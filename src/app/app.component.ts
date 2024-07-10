import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MeasurementFormComponent } from './measurement-form/measurement-form.component';
import { ButtonComponent } from './button/button.component';

// js-solutions
import '../js/modules/jquery.js';
import '../js/modules/collapse.js';
import '../js/modules/resizer.js';

@Component({
  standalone: true,

  imports: [NgFor, ButtonComponent, HeaderComponent, MeasurementFormComponent],

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: [
    './app.component.scss',
    './header/header.component.scss',
    './button/button.component.scss',
  ],
})
export class AppComponent {
  title = 'monitor-app';

  // Data for the table

  tableHeaders = [
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

  tableData = [
    {
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
    { name: '', value: 'Выберите подстанцию' },
    { name: 'ss1', value: 'ТЭЦ ПГУ ГСР Энерго' },
    { name: 'ss2', value: 'Подстанция 2' },
    { name: 'ss3', value: 'Подстанция 3' },
    { name: 'ss4', value: 'Подстанция 4' },
    { name: 'ss5', value: 'Подстанция 5' },
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

  selectedSubstation: string = 'ss1';

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
    this.tableData.unshift(measurement);
  }

  // ButtonComponent
  isDisabled = false;

  onDisabledChange(disabled: boolean) {
    console.log(`Disabled state changed to: ${disabled}`);

    this.isDisabled = disabled;
  }
}
