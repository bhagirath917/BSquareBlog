import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  menuItems = ['Profile', 'Projects', 'Certifications', 'Hobbies', 'Future Projects'];
  constructor() { }

  ngOnInit(): void {
  }

}
