import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule],
})
export class RecruitersComponent implements OnInit {
  message: string = "";
  threshold : number = 0;
  value = '';
  // @Input() hide !: boolean;;
  // observer !: IntersectionObserver;

  ngOnInit() {
    this.createObserver();
    this.typeWriter('Hello Recruiter!', 0, 130);
  }

  async typeWriter(txt: string, i: number, speed: number) {
    this.message="";
    while (i < txt.length) {
      this.message += txt[i];
      i++;
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }

  private createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: [0, 0.5],
    };
    const elements = document.querySelectorAll('.fade-in');
    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) {
          entry.target.classList.add('active');
        }else{
          entry.target.classList.remove('active');
          entry.target.classList.remove('delay')
        }
      });
    }, options);
    elements.forEach(element => {
      observer.observe(element);
    });
  }
}
