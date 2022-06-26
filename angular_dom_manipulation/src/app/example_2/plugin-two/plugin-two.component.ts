import { Component, Input, OnInit } from '@angular/core';
import { PluginComponent } from '../example-dynamic-components.model';

@Component({
  selector: 'app-plugin-two',
  templateUrl: './plugin-two.component.html',
  styleUrls: ['./plugin-two.component.scss'],
})
export class PluginTwoComponent implements OnInit, PluginComponent {
  @Input() message: string;

  constructor() {}

  ngOnInit(): void {}
}
