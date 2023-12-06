import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  dropdownOpen=false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
showDropdown() {
  this.dropdownOpen = true;
}

hideDropdown() {
  this.dropdownOpen = false;
}
}
