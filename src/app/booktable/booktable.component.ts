import { DatePipe, formatDate, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Sms } from '../sms';
import { User } from '../user';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {

  user:any = new User();
  sms:any = new Sms();
  currentTime:any = new Date();
  today:any = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
  
  constructor(private _service:CommonService) {
   
   }

  ngOnInit(): void {
    this.Test();
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("userdate")[0].setAttribute('min', today);
  }

  Test()
  {  
   console.log("Current Time : "+this.currentTime.toLocaleTimeString('it-IT'));
   console.log("Current Date : "+this.today);
  }
  bookTable(data:any)
  {     
    if(this.user.bookdate>this.today)
    {
      console.log("Booked date is greater than today");
      
    }
    else
    {
      console.log("Today date");
      
    }
    if(this.user.bookdate != null &&this.user.booktime != null && this.user.name != null && this.user.phoneNumber != null && this.user.person != null )
    {
      if(this.user.bookdate > this.today)
      {
      console.log(data);
      this._service.bookTableRemote(data).subscribe(
        data =>{
          console.log(data); 
          this.refresh();         
          alert("Table Booked Successfully !"); 
          this.sendConfirmation();      
        }  
      ) 
      }
      else if(this.currentTime.toLocaleTimeString('it-IT')<this.user.booktime)
      {
        console.log(data);
        this._service.bookTableRemote(data).subscribe(
          data =>{
            console.log(data); 
            this.refresh();         
            alert("Table Booked Successfully !");          
          }  
        )
      }
      else
      {
        alert("Invalid Time or date !")
      }   
    }
    else
    {
      alert("Some of the fields are Empty !")
    }
    
  }
  getDate(event:any)
  {
    let userdate = event.target.value;
    console.log("Got Date : "+userdate);
    this.user.bookdate = userdate;
  }
  getTime(event:any)
  {
    let usertime = event.target.value;
    console.log("Got Time : "+usertime);
    this.user.booktime = usertime;
  }
  refresh(): void {
    window.location.reload();
  }
  sendConfirmation()
  {
    this.sms.phoneNumber = this.user.phoneNumber
    this.sms.message = "Hi, "+this.user.name+
                       " your booking for "+this.user.person+
                       " person for the Date: "+this.user.bookdate+
                       " and for the Timing: "+this.user.booktime+
                       " has been Successfully done. Thank you..😊 Come Again..😇"
                       console.log(this.sms);                       
    this._service.sendConfirmationSMS(this.sms).subscribe(
      data=>
      {
        console.log(this.sms);        
      }
    )
  }
}
