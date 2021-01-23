import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  navigation: any;
  state: any;

  constructor(private router: Router) { 
    this.navigation = this.router.getCurrentNavigation();
    this.state = this.navigation.extras.state as {
      home: string,
      profile: string,
  };
  }

  ngOnInit(): void {
  }

}
