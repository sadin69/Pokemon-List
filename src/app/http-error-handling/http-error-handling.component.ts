import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-http-error-handling',
  templateUrl: './http-error-handling.component.html',
  styleUrls: ['./http-error-handling.component.css']
})
export class HttpErrorHandlingComponent implements OnInit {

  loading :any
  errorMessage: any
  errorResponse: any


  constructor(
   private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  retrieveWithError(){
    this.loading = true;
    this.dataService.checkWithError().subscribe((res: any) =>{
      this.errorResponse = res;

    }, (error)=> {
      console.log(error);
      this.errorMessage = error.status;
      this.loading = false;

    })

  }

}
