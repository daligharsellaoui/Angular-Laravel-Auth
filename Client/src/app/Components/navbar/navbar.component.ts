import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: any;
  auth = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) { this.auth = false }
  }

  logout() {
    localStorage.removeItem('token');
    this.auth = true;
    this.router.navigate(['/login'])
  }
}
