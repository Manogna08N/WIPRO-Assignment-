import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackForm } from "./feedback-form/feedback-form";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedbackForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title ='feedback-form';
}