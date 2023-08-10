import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  ngOnInit(): void {
    this.createObserver();
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
