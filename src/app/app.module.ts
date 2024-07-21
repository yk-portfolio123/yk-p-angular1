import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostService } from './service/post.service';
import { AuthService } from './service/auth.service';

import { AppComponent } from './app.component';
import { ConnectDBComponent } from './component/connect-db/connect-db.component';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { NavigationComponent } from './component/navigation/navigation.component';

import { ClientEventService } from 'src/app/framework/ClientEvent/client-event.service';
import { GlyphComponent } from './lib/glyph/glyph.component';
import { TranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader'

import { PopupModule } from '@progress/kendo-angular-popup';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenusModule } from '@progress/kendo-angular-menu';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';

import { DialogService } from '@progress/kendo-angular-dialog';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { SystemSettingComponent } from './component/dialog/system-setting/system-setting.component';

import { IconsModule } from '@progress/kendo-angular-icons';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ja_JP } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ja from '@angular/common/locales/ja';
import { IconsProviderModule } from './icons-provider.module';

import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { SubFirstComponent } from './component/sub-first/sub-first.component';
import { SubSecondComponent } from './component/sub-second/sub-second.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SubThirdComponent } from './component/sub-third/sub-third.component';
registerLocaleData(ja);

@NgModule({
  declarations: [
    AppComponent,
    ConnectDBComponent,
    LoginComponent,
    MainComponent,
    NavigationComponent,
    GlyphComponent,
    SystemSettingComponent,
    SubFirstComponent,
    SubSecondComponent,
    SubThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    PopupModule,
    BrowserAnimationsModule,
    MenusModule,
    DateInputsModule,
    DialogsModule,
    ButtonsModule,
    DropDownsModule,
    GridModule,
    IconsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    DragDropModule
  ],
  providers: [PostService,AuthService,ClientEventService,DialogService, { provide: NZ_I18N, useValue: ja_JP }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}