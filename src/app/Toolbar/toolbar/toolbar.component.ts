import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { style, transition, trigger, animate, state } from '@angular/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, AppRoutingModule],
  animations: [
    trigger(
      'inOutAnimationHorizontal', 
      [
        transition(
          ':enter', 
          [
            style({width: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ width: 51, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: 51, opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ width: 0, opacity: 0}))
          ]
        )
      ]
    ),
    trigger(
      'inOutAnimationVertical', 
      [
        transition(
          ':enter', 
          [
            style({height: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ height: 60, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 60, opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ height: 0, opacity: 0}))
          ]
        )
      ]
    ),
    trigger(
      'rotateAnimation',
      [
        state('open',style({
          rotate:'90deg'
          })
          ),
          
          state('closed',style({
            rotate:'0deg'
          })
          ),
          
          transition('open => closed', [
          style({rotate:'90deg'}),
          animate('0.4s 00ms ease-in',style({
          rotate:'0deg'}))]),

          transition('closed => open', [
            style({rotate:'0deg'}),
            animate('0.4s 00ms ease-in',style({
            rotate:'90deg'}))]),
      ]
    )
    ]
})
export class ToolbarComponent implements OnInit{
ngOnInit(): void {
  
}
hide = false;
toggleHome() {
  this.hide = !this.hide;
}
}