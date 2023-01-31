import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'This is a One-way Data binding example..';
  clientName: string = 'Sam';

  appliedCSSClass = 'green';
  notappliedCSSClass = false;
  myColor = 'orange';

  //Event binding

  message = '';

  onButtonClick() {
    this.message = 'Button was clicked!';
  }

  //Event as an alert()
  showAlert() {
    alert('Button was clicked!');
  }

  // for two-way data binding demo
  myName = '';

  //ngIf Demo
  showElement = false;

  //ngFor Demo
  students = ['Joseph', 'Mary', 'Ivan'];
  fruits = ['Apple', 'Orange', 'Grapes'];

  //ngSwitch
  selectedOption = 2;

  //ngStyle
  color = 'pink';

  //ngClass
  isBold = true;
  isItalic = true;

  //ngModel
  name = '';
}
