import { Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy, DoCheck,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycles',
  imports: [],
  templateUrl: './lifecycles.html',
  styleUrl: './lifecycles.css',
})
export class Lifecycles implements OnInit,  AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy, DoCheck,OnChanges {
  
  constructor() {
    console.log('Component constructor called');
  }
   ngOnChanges(changes: SimpleChanges): void {
    console.log('Component changes detected', changes);
  }
  
  ngOnInit() {
    console.log('Component initialized');
  }

  ngDoCheck(): void {
    console.log('Component change detection run');
  }

  ngAfterContentInit(): void {
    console.log('Component content initialized');
  }

  ngAfterContentChecked(): void {
    console.log('Component content checked');
  }
  ngAfterViewChecked(): void {
    console.log('Component view checked');
  }
  ngAfterViewInit(): void {
    console.log('Component view initialized');
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
 
 


}
