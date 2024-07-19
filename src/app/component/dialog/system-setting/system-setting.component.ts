import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DialogRef,
  DialogContentBase,
  PreventableEvent,
} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-system-setting',
  template: `
        <kendo-dialog-titlebar (close)="onClose($event)">
            <div style="font-size: 18px; line-height: 1.3em;">
                <span class="k-icon k-button-icon k-i-form-element"></span> User Form
            </div>
        </kendo-dialog-titlebar>

        <div>
            dialog
        </div>

        <kendo-dialog-actions>
            <button kendoButton (click)="onCancelAction()">Cancel</button>
            <button kendoButton
              (click)="onConfirmAction()"
              themeColor="primary"
            >
                Submit
            </button>
        </kendo-dialog-actions>
    `,
})
export class SystemSettingComponent implements OnInit {
  @Input() public age: number = 0;
  @Input() public name: string = '';

  public formGroup: FormGroup | undefined;

  constructor(public dialog: DialogRef, private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.formGroup = this.fb.group({
      age: [this.age],
      name: [this.name, Validators.required],
    });
  }

  public onClose(ev: PreventableEvent): void {
    this.dialog.close({ text: 'Cancel' });
  }

  public onCancelAction(): void {
    console.log('🟥');

    this.dialog.close({ text: 'Cancel' });
  }

  public onConfirmAction(): void {
    console.log('🟢');
    this.dialog.close({ text: 'Submit', themeColor: 'primary' });
  }
}
