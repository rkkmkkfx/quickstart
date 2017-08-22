import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit  {
  constructor(private appService: AppService) {}

  pricelist: any;

  ngOnInit() {
    this.appService.getPriceList().subscribe(d => {
      this.pricelist = d.pricelist;
    });
  }

  toggleTooltip($event: any) {
    const tooltip = $event.currentTarget.parentNode.querySelector('.tooltip'),
          container = $event.currentTarget.parentNode.querySelector('.container'),
          hover = $event.type === 'mouseover';
    if (tooltip) {
      tooltip.classList.toggle('visible', hover);
      tooltip.classList.toggle('hidden', !hover);
      const windowBottom = window.innerHeight + scrollY,
            tooltipBottom = container.offsetTop + tooltip.clientHeight + 30;
      tooltip.classList.toggle('top', (tooltipBottom > windowBottom));
    }
  }

}
