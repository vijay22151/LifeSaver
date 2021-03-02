import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{FormGroup,FormControl} from '@angular/forms'
import{TestService} from './test.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeSaver';
  obj={name:'Paras Gupta',
email:'paras@gmail.com'}
arraytest=[10,20,30,40,50]
show=false;
shows=false;
color='red'
Fruits=['Apple','Banana','Lichi','Grapes','Orange']
heros=['A','B','C','D','E']

apiUrl='https://localhost:44311/api/home/mainPage'
// constructor(private http:HttpClient)  //commented for calling webservice
// {
// }
clickMebutton()
{
  alert('Mission successfull!');
  //this.http.get(this.apiUrl).subscribe((data)=>   //commented for calling webservice
  // {
  //   console.warn(data)
  // })
}
constructor(ts:TestService)
{
ts.CallService()
}
}
