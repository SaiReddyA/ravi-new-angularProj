
import { Component, DestroyRef, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { BackgroundColor } from './background-color';
import { CapitalisePipe } from './capitalise-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgClass, NgStyle, BackgroundColor, CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe, CapitalisePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('ravi-ang-proj');
  price = 100;
  date: Date = new Date();
  pipedName: string = "ravikumar";
  isUserActive: boolean = true;
  UserNames: string[] = ["Ravi", "Kumar Chennai", "Ravi Andra", "Ravi Hyderabad", "Ravi Bangalore"];

  constructor(){
     console.log("App Component Constructed")
  }
  ngOnInit(): void {
    console.log("App Component Initialized")
  }

  ngOnDestroy(): void {
    console.log("App Component Destroyed")
  }

  sample : string = "Day 2 Hello World";
  isPropertyEnabled : boolean = true;

  buttonClick(): void{
    console.log("Button Clicked");
  }


}
