import { Component, Input, OnInit } from '@angular/core';
import { PluginComponent } from '../example-dynamic-components.model';

@Component({
  selector: 'app-plugin-one',
  templateUrl: './plugin-one.component.html',
  styleUrls: ['./plugin-one.component.scss'],
  standalone: true,
})
export class PluginOneComponent implements OnInit, PluginComponent {
  @Input() message!: string;

  constructor() {}

  ngOnInit(): void {}
}
