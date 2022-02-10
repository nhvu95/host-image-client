import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiButtonModule, TuiDialogModule,
  TuiNotificationsModule, TuiRootModule, TuiSvgModule, TuiTextfieldControllerModule, TUI_SANITIZER
} from '@taiga-ui/core';
import {
  ToggleOptions, TuiInputNumberModule,
  TuiToggleModule,
  TUI_TOGGLE_DEFAULT_OPTIONS,
  TUI_TOGGLE_OPTIONS
} from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';



const options: Partial<ToggleOptions> = {
  icons: {
    toggleOff: ({ $implicit }) =>
      $implicit === 'm' ? 'tuiIconChevronRight' : 'tuiIconChevronRightLarge',
    toggleOn: ({ $implicit }) =>
      $implicit === 'm' ? 'tuiIconChevronLeft' : 'tuiIconChevronLeftLarge',
  },
};

@NgModule({
  declarations: [AppComponent, UploadComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    FormsModule,
    ReactiveFormsModule,
    TuiToggleModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiInputNumberModule,
    TuiTextfieldControllerModule
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: TUI_TOGGLE_OPTIONS,
      useValue: {
        ...TUI_TOGGLE_DEFAULT_OPTIONS,
        ...options,
      },
    },
  ],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
