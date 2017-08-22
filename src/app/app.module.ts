import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppService } from './app.service';

import { TooltipComponent } from './tooltip.component';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(style: string) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, SafePipe, TooltipComponent ],
  providers:    [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
