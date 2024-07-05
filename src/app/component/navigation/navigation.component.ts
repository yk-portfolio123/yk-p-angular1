import { Component } from '@angular/core';

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
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public displayNavMenuList:MenuItem[] = [];

  private navMenuList:Array<MenuItem> = [{label:'WORKFLOW_DASHBOARD.MENU.ORDER',key:'clipboard',kind:'order',link:'',
                                          child:[{label:'WORKFLOW_DASHBOARD.MENU.ORDER',link:'/main/order',kind:''}]},
                                          {label:'WORKFLOW_DASHBOARD.MENU.ORDER',key:'',kind:'order',link:'',
                                          child:[{label:'WORKFLOW_DASHBOARD.MENU.ORDER',link:'/main/order',kind:''}]},
                                          {label:'WORKFLOW_DASHBOARD.MENU.ORDER',key:'',kind:'order',link:'',
                                          child:[{label:'WORKFLOW_DASHBOARD.MENU.ORDER',link:'/main/order',kind:''}]},
                                          {label:'WORKFLOW_DASHBOARD.MENU.ORDER',key:'',kind:'order',link:'',
                                          child:[{label:'WORKFLOW_DASHBOARD.MENU.ORDER',link:'/main/order',kind:''}]},
                                          {label:'WORKFLOW_DASHBOARD.MENU.ORDER',key:'',kind:'order',link:'',
                                          child:[{label:'WORKFLOW_DASHBOARD.MENU.ORDER',link:'/main/order',kind:''}]},
                                          {label:'WORKFLOW_DASHBOARD.MENU.ORDER',key:'',kind:'order',link:'',
                                          child:[{label:'WORKFLOW_DASHBOARD.MENU.ORDER',link:'/main/order',kind:''}]}]
}
