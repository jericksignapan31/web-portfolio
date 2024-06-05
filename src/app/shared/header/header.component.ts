import { Component, OnInit } from '@angular/core';
import { ILabelname } from 'src/app/interface/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
   showControls: boolean = false; 
  ngOnInit(): void {
      setTimeout(() => {
      this.showControls = true;
    }, 200); 
  }

  controls: ILabelname[] = [{name:'HOME'},{name:'ABOUT'},{name:'SKILL'},{name:'WORK'},{name:'CONTACT'}]

  
}
