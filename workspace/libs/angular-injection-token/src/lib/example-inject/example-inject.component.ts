import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LOGGER_PROVIDER_TOKEN } from './models/token.model';
import { NewLoggerService } from './services/new-logger.service';
import { OldLoggerService } from './services/old-logger.service';

@Component({
  selector: 'app-example-inject',
  templateUrl: './example-inject.component.html',
  styleUrls: ['./example-inject.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  providers: [
    {
      provide: LOGGER_PROVIDER_TOKEN,
      useClass: NewLoggerService,
    },
    // {
    //   provide: OldLoggerService,
    //   useClass: NewLoggerService,
    // },
  ],
})
export class ExampleInjectComponent implements OnInit {
  constructor(
    @Inject(LOGGER_PROVIDER_TOKEN) private oldLoggerService1: OldLoggerService,
    private oldLoggerService2: OldLoggerService
  ) {}

  ngOnInit(): void {}

  onLogNormal(): void {
    this.oldLoggerService1.logNormal();
    this.oldLoggerService2.logNormal();
    console.log('==============');
  }

  onLogWarn(): void {
    this.oldLoggerService1.logWarning();
    this.oldLoggerService2.logWarning();
    console.log('==============');
  }
}
