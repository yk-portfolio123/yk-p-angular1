import { Component, OnInit } from '@angular/core';
import { listOfData, customColumn } from '../../lib/glyph/mock-data';

@Component({
  selector: 'app-sub-second',
  templateUrl: './sub-second.component.html',
  styleUrls: ['./sub-second.component.scss']
})
export class SubSecondComponent implements OnInit {
  
  widthConfig:string[] = [];
  listOfData = listOfData;
  customColumn = customColumn;
  isVisible = false; // モーダルの表示状態
  modalData: any = {};

  columns: string[] = ['Name', 'Age', 'Address']; // 列名の配列

  constructor() {}

  ngOnInit(): void {
    this.customColumn.forEach((column) => {this.widthConfig.push(column.width)});
    this.widthConfig.push('50px');
  }
  showModal(data: any): void {
    this.modalData = {};
    this.modalData = data.detail;
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    console.log('OK clicked');
    this.isVisible = false;
  }
}
