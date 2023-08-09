import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'PortfolioWebsite';
  message: string = "";
  threshold : number = 0;
  // @Input() hide !: boolean;;
  // observer !: IntersectionObserver;

  ngOnInit() {
    this.createObserver();
    this.typeWriter('Welcome to my portfolio website!', 0, 100);
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
        }
      });
    }, options);
    elements.forEach(element => {
      observer.observe(element);
    });
  }
}
