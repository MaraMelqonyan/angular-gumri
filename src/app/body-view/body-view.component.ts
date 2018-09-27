import { Component} from '@angular/core';

@Component({
  selector: 'app-body-view',
  templateUrl: './body-view.component.html',
  styleUrls: ['./body-view.component.css']
})
export class BodyViewComponent  {
  public result = [];


  public users = [
    {
      name:"Garegin Njdeh street",
    },
    {
      name:"Vardanants street",
    },
    {
      name:"Lalayan street",
    }

  ];


  public Timer: any = null
  public searchUsers(event){
    let value : string = event.target.value;
    if(this.Timer !== null){
      clearTimeout(this.Timer);
    }
    setTimeout(() => {
      console.log("ok")
      this.result = this.users.filter((user) => {
        return user.name.toUpperCase().indexOf(value.toUpperCase()) > -1
      })
    }, 2000)
  }

}
