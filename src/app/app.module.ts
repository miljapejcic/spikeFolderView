import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderViewModule } from './folder-view/folder-view.module';

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FolderViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
