import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

// import "" from '../../../assets/tt';
@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router:Router) {}
  //fontawsome icons
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faPhone = faPhone;
  title = 'header componenent';
  logoUrl = '../../../assets/tt/ttbat.png';
  // '/home/g/Desktop/ganesh/angularPrac/srihari/src/assets/tt/ttbat.png';
  name = 'SRI HARI';
  naviatetoHome() {
    this.router.navigate(['home']);

    console.log('Navigating to home');
  }
}
