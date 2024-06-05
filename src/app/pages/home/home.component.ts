import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  image = 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/bgg.jpg?alt=media&token=da994c7f-43a1-4fdb-9c02-823fed715783'


    loadImage() {
    const imageDiv = document.querySelector('.image');
    if (imageDiv) {
      imageDiv.classList.add('loaded');
    }
  }
}
