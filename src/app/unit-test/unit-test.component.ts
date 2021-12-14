import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    // For Unit Testing
    checkCompute(number: any)
    {
  
      if(number<0)
      {
  
        return 0;
      }
      
      return number+1;
  
    }

    checkComparison(name: string)
    {

      if(name ==='Secupay')
      {
        return 'Welcome to Software Development!';
      }
      return '?'

    }








}
