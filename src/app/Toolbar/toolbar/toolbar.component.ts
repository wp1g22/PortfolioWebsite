import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { style, transition, trigger, animate, state } from '@angular/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, AppRoutingModule],
  animations: [
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
          animate('0.5s 00ms ease-in',style({
          rotate:'0deg'}))]),

          transition('closed => open', [
            style({rotate:'0deg'}),
            animate('0.5s 00ms ease-in',style({
            rotate:'90deg'}))]),
      ]
    )
    ]
})
export class ToolbarComponent implements OnInit{
ngOnInit(): void {
  
}
hide = false;
hover(num : number) {
  // console.log('hover + o' + num)
  const elements = document.querySelectorAll('.o' + num);
  elements.forEach((element) => {
    if(element.classList.contains('oHover')){
      element.classList.remove('oHover');
    }else{
      element.classList.add('oHover');
    }
  });
}
toggleHome() {
  const elements = document.querySelectorAll('.example-icon');
  const elements2 = document.querySelectorAll('.row');
  const elements3 = document.querySelectorAll('.menu');
  const elements4 = document.querySelectorAll('.example-text');
  const elements5 = document.querySelectorAll('.example-text-small');

  elements3.forEach((element) => {
    if(element.classList.contains('activeMenu')){
      element.classList.remove('activeMenu');
    }else{
      element.classList.add('activeMenu');
    }
  });

  elements.forEach((element) => {
    if(element.classList.contains('activeIcon')){
      element.classList.remove('activeIcon');
    }else{
      element.classList.add('activeIcon');
    }
  });

  elements4.forEach((element) => {
    if(element.classList.contains('activeText')){
      element.classList.remove('activeText');
    }else{
      element.classList.add('activeText');
    }
  });

  elements5.forEach((element) => {
    if(element.classList.contains('activeTextSmall')){
      element.classList.remove('activeTextSmall');
    }else{
      element.classList.add('activeTextSmall');
    }
  });

  elements2.forEach((element) => {
    if(element.classList.contains('activeRow')){
      element.classList.remove('activeRow');
      element.classList.add('nonActiveRow');
    } else{
      element.classList.remove('nonActiveRow');
      element.classList.add('activeRow');
    }
  });

  this.hide = !this.hide;
}
}