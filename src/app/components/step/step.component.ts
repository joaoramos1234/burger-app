import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
})
export class StepComponent {}
