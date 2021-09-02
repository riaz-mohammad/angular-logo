import { timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { logoAnimation, logoWordsAnimation } from './logo-animation';
import { take } from 'rxjs/operators';

@Component({
  selector: 'angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [logoAnimation, logoWordsAnimation],
})
export class AppComponent implements OnInit{
  public logoState!: boolean;
  ngOnInit(): void {
    timer(500, 500).pipe(
      take(1)
    ).subscribe(_ => this.logoState = true)
  }
}
