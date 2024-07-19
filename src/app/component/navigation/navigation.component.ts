import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ClientEventService } from 'src/app/framework/ClientEvent/client-event.service';
import { TranslateService } from '@ngx-translate/core'
import { Collision } from "@progress/kendo-angular-popup";
import { DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { SystemSettingComponent } from '../dialog/system-setting/system-setting.component';
type MenuItem = {
  label:string;
  key:string;
  kind:string;
  link:string;
  child:Array<{
    label:string;
    link:string;
    kind:string;
  }>;
}

const items: any[] = [
  {
    text: 'Item3',
  },
  {
    text: 'Item3',
  },
  {
    text: 'Item3',
  },
  {
    text: 'Item3',
  },
  {
    text: 'Item1',
    items: [
      { text: 'Item1.1' },
      {
        text: 'Item1.2',
        items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }],
      },
    ],
  },
  {
    text: 'Item2',
    items: [
      { text: 'Item2.1' },
      { text: 'Item2.2' },
      { text: 'Item2.3' },
      { text: 'Item2.3' },
      { text: 'Item2.3' },
      { text: 'Item2.3' },
      { text: 'Item2.3' },
      { text: 'Item2.3' },
      { text: 'Item2.3' },
      { text: 'Item2.3' },
      { text: 'Item2.3' },
    ],
  },
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public items = items;
  public showChildMenuKind = '';
  public displayNavMenuList:MenuItem[] = [];
  public collision: Collision = { horizontal: "flip", vertical: "flip" };
  private navMenuList: Array<MenuItem> = [
    {
      label: 'NAVIGATION.ORDER',
      key: 'clipboard',
      kind: 'order',
      link: '',
      child: [
        {
          label: 'WORKFLOW_DASHBOARD.MENU.ORDER',
          link: '/main/order',
          kind: 'order'
        },
        {
          label: 'WORKFLOW_DASHBOARD.MENU.ORDER_PRODUCT',
          link: '/main/product',
          kind: 'product'
        },
        {
          label: 'WORKFLOW_DASHBOARD.MENU.ORDER_PARTS',
          link: '/main/parts',
          kind: 'parts'
        },
        {
          label: 'WORKFLOW_DASHBOARD.MENU.SHIPMENT',
          link: '/main/shipment',
          kind: 'shipment'
        }
      ]
    },
    {
      label: 'NAVIGATION.SCHEDULE',
      key: 'calendar',
      kind: 'schedule',
      link: '',
      child: [
        {
          label: 'WORKFLOW_DASHBOARD.MENU.SCHEDULE_EQUIPMENT_SHIFT',
          link: '/main/schedule-stack',
          kind: 'schedule_stack'
        },
        {
          label: 'WORKFLOW_DASHBOARD.MENU.SCHEDULE_EQUIPMENT_TIME',
          link: '/main/schedule',
          kind: 'schedule'
        }
      ]
    },
    {
      label: 'NAVIGATION.STATUS',
      key: 'machinestatus',
      kind: 'status',
      link: '',
      child: [
        {
          label: 'WORKFLOW_DASHBOARD.MENU.STATUS_EQUIPMENT_LIST',
          link: '/main/all-devices',
          kind: 'all_devices'
        },
        {
          label: 'WORKFLOW_DASHBOARD.MENU.STATUS_HISTORY',
          link: '/main/print-status',
          kind: 'print_devices'
        }
      ]
    },
    {
      label: 'NAVIGATION.WORK',
      key: 'tapup',
      kind: 'work',
      link: '/main-mobile/status-mobile',
      child: []
    },
    {
      label: 'NAVIGATION.HISTORY',
      key: 'history',
      kind: 'history',
      link: '',
      child: [
        {
          label: 'WORKFLOW_DASHBOARD.MENU.HISTORY_ORDER',
          link: '/main/order-history',
          kind: 'order_history'
        },
        {
          label: 'WORKFLOW_DASHBOARD.MENU.HISTORY_OPERATION',
          link: '/main/operation-history',
          kind: 'operation_history'
        }
      ]
    },
    {
      label: 'NAVIGATION.DASHBOARD',
      key: 'dashboard',
      kind: 'dashboard',
      link: '/main/widget-basic',
      child: []
    }];
    public showPopup: boolean = false;
    constructor(
      public router:Router,
      public clientEvent:ClientEventService,
      public translate:TranslateService,
      private dialogService: DialogService
    ){
      this.displayNavMenuList = this.navMenuList;
      // this.translate.setDefaultLang('ja');

      // // 現在の言語を設定（オプション）
      // this.translate.use('ja');

      this.translate.addLangs(['ja', 'en']);
      this.translate.setDefaultLang('ja');

    }
    public togglePopup(): void {
      this.showPopup = !this.showPopup;
    }
    public selectCheck(menuItem:any):string{
      const url = location.href;
      const splitUrl = url.split('/');
      let linkChecker = '';
      for (let i = 3;i <= splitUrl.length -1;i++){
        linkChecker = linkChecker + '/' + splitUrl[i];
      }
      linkChecker = linkChecker.split('(').join('').split(')').join('');

      if(menuItem.link === linkChecker){
        return 'nav-menu-selected-style';
      } else {
        for(let j = 0;j < menuItem.child.length;j++){
          if(menuItem.child[j].link === linkChecker){
            return 'nav-menu-selected-style';
          }
        }
      }
      return 'nav-menu-normal-style'
    }

    public onClickParentMenu(menu:any){
      this.clientEvent.setData('key',menu.kind);
      if(menu.kind === 'work'){
        window.open(menu.link,'noopener');
      }else{
        this.router.navigate([menu.link]);
      }
    }

    public onShowChildMenu(kind:string){
      this.showChildMenuKind = kind;
    }

    public showChildMenu(kind:string){
      return this.showChildMenuKind === kind ? true : false;
    }

    public selectChildCheck(link:string):any{
      const url = location.href;
      const splitUrl = url.split('/');
      let linkChecker = '';
      for (let i = 3;i <= splitUrl.length -1;i++){
        linkChecker = linkChecker + '/' + splitUrl[i];
      }
      linkChecker = linkChecker.split('(').join('').split(')').join('');

      if(link === linkChecker){
        return 'color: "80eaff, display:ManagedBlockchain, white-space:nowrap;';
      }
      return 'display:block, white-space:nowrap;';
    }

    public onClickChildMenu(childMenu:any,menu:any){
      this.showChildMenuKind = '';
      this.clientEvent.setData('key',childMenu.kind);
      if(menu.kind === 'work'){
        window.open(childMenu.link,'noopener');
      } else {
        this.router.navigate([childMenu.link]);
      }
    }

    public getIconClass(key:string):string{
      switch (key) {
        case 'clipboard':
          return 'fa fa-clipboard';
        case 'calendar':
          return 'fa fa-calendar';
        case 'machinestatus':
        return 'fa fa-bar-chart';
        case 'tapup':
          return 'fa fa-thumbs-o-up';
        case 'history':
        return 'fa fa-list';
        case 'dashboard':
          return 'fa fa-dashboard';
        default:
          return '';
      }
    }
    public openDialogForm(): void {
      const dialogRef = this.dialogService.open({
        content: SystemSettingComponent,
        width: 300,
      });
    }
}
