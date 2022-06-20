import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  expand: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  expandUserpanel(): void {
    this.expand = !this.expand;
    let userPanel = document.getElementById('userPanel');
    if(this.expand) {
      // @ts-ignore
      userPanel.style.width = "400px"
    } else {
      // @ts-ignore
      userPanel.style.width = "0px"
    }
}

}
