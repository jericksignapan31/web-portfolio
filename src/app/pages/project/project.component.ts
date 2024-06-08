import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/tools%2Fprospera.jpg?alt=media&token=1e6060d1-7ec6-4658-aa5b-26b118a2e7f1',
      title: 'PROSPERA',
      description: 'A platform where you can share your code snippets or ask a question, it is designed to help other developers.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: 'https://prospera.ph/'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/tools%2Fpms.jpg?alt=media&token=080338d3-ebba-437d-8b6c-81de1d681e8e',
      title: 'PMS ',
      description: 'A website where you can download TikTok videos without watermark.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: 'https://pms-mobi.vercel.app/login'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/tools%2Fstudev.png?alt=media&token=a91e84bc-de51-45cc-9cf3-98083eb40e99',
      title: 'STUDEV',
      description: 'API that sends a lot of beautiful, cute, and hot girl TikTok videos.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: ''
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/tools%2FBlue%20Torn%20Paper%20Giveaway%20Announcement%20Instagram%20Post.jpg?alt=media&token=1c22d84b-788a-4d5b-850a-2e9044e0de07',
      title: 'PRINT SAVER',
      description: 'API that sends a lot of beautiful, cute, and hot girl TikTok videos.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: ''
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/tools%2Fport.jpg?alt=media&token=7f4f43a7-43a0-4fba-bd0c-ed506708631e',
      title: 'PORTFOLIO',
      description: 'API that sends a lot of beautiful, cute, and hot girl TikTok videos.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: 'https://ric-portfolio-beta.vercel.app/'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/tools%2Fstudev.png?alt=media&token=a91e84bc-de51-45cc-9cf3-98083eb40e99',
      title: 'STUDEV',
      description: 'API that sends a lot of beautiful, cute, and hot girl TikTok videos.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: ''
    }
  ];
}
