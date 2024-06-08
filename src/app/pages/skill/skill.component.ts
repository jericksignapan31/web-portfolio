import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit{
 constructor(private el: ElementRef) { }

  ngOnInit() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const aboutSection = this.el.nativeElement.querySelector('.about');
    const skillsSection = this.el.nativeElement.querySelector('.skills-container');

    observer.observe(aboutSection);
    observer.observe(skillsSection);
  }

}
