import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { exampleScript2, exampleVideo, isValidUrl } from './example_5_data.model';

@Component({
  selector: 'app-example-sanitizer',
  templateUrl: './example-sanitizer.component.html',
  styleUrls: ['./example-sanitizer.component.scss'],
})
export class ExampleSanitizerComponent implements OnInit {
  @ViewChild('anchorRef') anchorRef: ElementRef;
  @ViewChild('iframeRef') iframeRef: ElementRef;

  safeUrl: any = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    localStorage.setItem('token', JSON.stringify({ isAdmin: true }));
  }

  activateLink(): void {
    of(exampleScript2).subscribe((res) => {
      this.anchorRef.nativeElement.href = res; // will run the script -> console logging isAdmin
      //this.anchorRef.nativeElement.href = this.sanitizer.bypassSecurityTrustHtml(res); // will not run the script
    });
  }

  activateVideo(): void {
    // exampleScript2
    of(exampleVideo).subscribe((res) => {
      // wil result in error
      //this.iframeRef.nativeElement.src = res;

      // will result in error
      // this.iframeRef.nativeElement.src = this.sanitizer.sanitize(
      //   SecurityContext.RESOURCE_URL,
      //   this.sanitizer.bypassSecurityTrustResourceUrl(res)
      // );

      // will result in error
      //this.safeUrl = res;

      // will result in error
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res);

      console.log('exampleVideo', isValidUrl(exampleVideo));
      console.log('exampleScript2', isValidUrl(exampleScript2));
    });
  }
}
