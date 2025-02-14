import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  heroImageUrl = 'assets/srihari/Screenshot from 2025-02-07 19-04-50.png';
  heading = 'Transform Your Table Tennis Skills with Personalized Training!';
  subHeading = `If you have the vision and passion to learn and master table tennis, you’re in the right place. Join me on this journey to elevate your game.`;
  actionText =
    'Explore My Courses | Watch Training Videos | Let’s Start Your Training Today!';
  detailText =
    "I provide customized training programs for players and beginners. Whether you're looking to refine your skills or start from scratch, my videos, courses, and personalized coaching will guide you every step of the way. Let’s make your table tennis dreams a reality!";
  contactText =
    'For personalized training, contact me now and let’s get started!';
}
