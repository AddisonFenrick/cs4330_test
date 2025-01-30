import { Component } from '@angular/core';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-lab',
  imports: [NgClass, NgOptimizedImage, NgStyle, MatProgressBarModule, MatRadioModule, MatButtonModule, MatTabsModule, MatIconModule, MatDividerModule, MatListModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.css'
})
export class LabComponent {
  title = 'Lab 00: Getting Started with Angular';
  Steps: { [key: string]: string } = {
    '1': 'This is the first step of the lab.',
    '2': 'This is the second step of the lab.',
    '3': 'This is the third step of the lab.',
    '4': 'This is the fourth step of the lab.',
    '5': 'This is the fifth step of the lab.',
    '6': 'This is the sixth step of the lab.',
  };
  currentStep = 1;
  totalSteps = Object.keys(this.Steps).length;

  get progress() {
    return (this.currentStep / this.totalSteps) * 100;
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  nextStep() {
    if (this.currentStep < Object.keys(this.Steps).length) {
      this.currentStep++;
    }
  }

  constructor() { }

  resetVM() {
    // Implementation for resetting VM
  }

  submitLab() {
    // Implementation for submitting lab
  }
}
