
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as joint from 'jointjs';
import { listOfData, customColumn, gridData, CustomColumn, fa } from '../../lib/glyph/mock-data';
import { GraphService } from 'src/app/service/graph.service';

@Component({
  selector: 'app-sub-first',
  templateUrl: './sub-first.component.html',
  styleUrls: ['./sub-first.component.scss']
})
export class SubFirstComponent implements OnInit, AfterViewInit {
  @ViewChild('paperContainer', { static: true })
  paperContainer!: ElementRef;
  private paper!: joint.dia.Paper;
  private graph = new joint.dia.Graph({}, { cellNamespace: joint.shapes });
  // listOfData: VirtualDataInterface[] = [];

  widthConfig:string[] = [];
  listOfData = listOfData;
  customColumn = customColumn;
  isVisible: boolean = false;
  title: CustomColumn[] = [];
  footer: CustomColumn[] = [];
  fix: CustomColumn[] = [];
  notFix: CustomColumn[] = [];
  visibleColumns: CustomColumn[] = [];

  selectedRowId: number | null = null;

  constructor(private cdr: ChangeDetectorRef,private graphService: GraphService) {}
  trackByIndex(_: number, data: gridData): number {
    return data.id;
  }
  ngOnInit(): void {
    this.title = this.customColumn.filter(item => item.position === 'left' && item.required);
    this.footer = this.customColumn.filter(item => item.position === 'right' && item.required);
    this.fix = this.customColumn.filter(item => item.default && !item.required);
    this.notFix = this.customColumn.filter(item => !item.default && !item.required);
    this.visibleColumns = [...this.title, ...this.fix, ...this.footer];
    this.visibleColumns.forEach((column) => {this.widthConfig.push(column.width)});
  }
  ngAfterViewInit(): void{
    //this.workflow();
    this.initializePaper();
    this.adjustPaperSize();
  }

  drop(event: CdkDragDrop<CustomColumn[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.fix = this.fix.map(item => {
      item.default = true;
      return item;
    });
    this.notFix = this.notFix.map(item => {
      item.default = false;
      return item;
    });
    this.visibleColumns = [...this.title, ...this.fix, ...this.footer];
    this.cdr.markForCheck();
  }

  deleteCustom(value: CustomColumn, index: number): void {
    value.default = false;
    this.notFix = [...this.notFix, value];
    this.fix.splice(index, 1);
    this.visibleColumns = [...this.title, ...this.fix, ...this.footer];
    this.cdr.markForCheck();
  }

  addCustom(value: CustomColumn, index: number): void {
    value.default = true;
    this.fix = [...this.fix, value];
    this.notFix.splice(index, 1);
    this.visibleColumns = [...this.title, ...this.fix, ...this.footer];
    this.cdr.markForCheck();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.customColumn = [...this.title, ...this.fix, ...this.notFix, ...this.footer];
    this.visibleColumns = [...this.title, ...this.fix, ...this.footer];
    this.isVisible = false;
    this.cdr.markForCheck();
    this.widthConfig = [];
    this.visibleColumns.forEach((column) => {this.widthConfig.push(column.width)});
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  @HostListener('window:resize')
  onResize() {
    // this.adjustTableWidth();
    this.adjustPaperSize();
  }
  private initializePaper() {
    
    this.graph.on('change:position', (cell) => {
      const bbox = {
        width: this.paper.el.clientWidth,
        height: this.paper.el.clientHeight
      };
      const nodeBBox = cell.getBBox();
    
      const maxX = bbox.width - nodeBBox.width;
      const maxY = bbox.height - nodeBBox.height;
    
      const x = Math.max(0, Math.min(cell.get('position').x, maxX));
      const y = Math.max(0, Math.min(cell.get('position').y, maxY));
    
      cell.set('position', { x, y });
    });
    const paperElement = this.paperContainer.nativeElement.querySelector('#paper');
    const container = this.paperContainer.nativeElement;
    this.paper = new joint.dia.Paper({
      el: paperElement,
      model: this.graph,
      width: container.offsetWidth,
      height: container.offsetHeight,
      gridSize: 10,
      drawGrid: true,
      background: { color: '#141414' },
      interactive: (cellView: any) => {
        const model = cellView.model;
        if (model.isElement()) {
          const element = model as joint.dia.Element;
          return !element.attr('nonEditable'); // Check for non-editable attribute
        }
        return true;
      }
    });

    //this.graphService.createRectangle(this.graph);
    
  }

  private adjustPaperSize() {
    if (this.paper) {
      const container = this.paperContainer.nativeElement;
      this.paper.setDimensions(container.offsetWidth, container.offsetHeight);
    }
  }

  columnTrackBy(index: number, item: any) {
    return item.key;
  }

  onRowClick(data: any): void {
    // this.selectedRow = data;
    this.graphService.createRectangle(this.graph,data.id);
    this.graphService.createRectangle(this.graph,data.id);
    this.selectedRowId = data.id;
    console.log('Selected Row:', data);
  }
  isRowSelected(data: any): boolean {
    return this.selectedRowId === data.id;
  }
}
