
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ravi-ang-proj');

  sample : string = "Day 2 Hello World";
  isPropertyEnabled : boolean = true;

  buttonClick(): void{
    console.log("Button Clicked");
  }


}
