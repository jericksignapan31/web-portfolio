import { Component } from '@angular/core';
import { ILabelname } from 'src/app/interface/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  controls: ILabelname[] = [{name:'HOME'},{name:'ABOUT'},{name:'SKILL'},{name:'WORK'},{name:'CONTACT'}]
}
