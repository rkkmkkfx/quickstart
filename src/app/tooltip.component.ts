import { Component, Input, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})

export class TooltipComponent implements OnInit {
  constructor(private appService: AppService) {}

  item: any = {};

  @Input()
  data: string;

  ngOnInit() {
    this.item.desc = this.data;
  }
}
