import { Component, OnInit,Input } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  shows=false;
  RegisInfo;
  constructor(private formBuilder:FormBuilder)
  {
  this.RegisInfo=this.formBuilder.group(
    {
      Name:['',Validators.required],
      EmailId:['',[Validators.required,Validators.email]]
    }
  )
  }

  ngOnInit(): void {
    
  }
  OnSubmit(values)
  {
    if(this.RegisInfo.status=='INVALID')
    {
      alert('Please add proper details')
    }
    else
    {
    console.warn("Yuhoooo Form Submitted!!!!",values)
    }
  }
  get Name(){return this.RegisInfo.get('Name')}
  get EmailId(){return this.RegisInfo.get('EmailId')}
  @Input() public hero;
}
