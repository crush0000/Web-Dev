import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TopBarComponent, RouterOutlet],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
