import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountComponent } from './count/count.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CountComponent, SidebarComponent ],
  bootstrap:    [ AppComponent ],
  providers:[{provide:'days',useValue:100}]
})
export class AppModule { }
