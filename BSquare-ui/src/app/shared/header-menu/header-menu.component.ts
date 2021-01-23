import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  menuItems = ['profile', 'projects', 'certifications', 'hobbies', 'futureProjects'];
  navigationExtras: NavigationExtras = {
    state: {
      home: 'Welcome to my home',
      profile: 'Welcome to my profile',
    }
  };
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateMenu(item: string) {
    this.router.navigate(['/profile'], this.navigationExtras)
    // this.router.navigateByUrl('/'+item);
  }

}
