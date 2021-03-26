import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl}  from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }
contactform=new FormGroup(
{
name: new FormControl(''),
email: new FormControl(''),
mobile: new FormControl(''),
message: new FormControl('')

});

  ngOnInit(): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    debugger;
    this.contactService.addContact(this.contactform.value)
      .subscribe(data => {
        console.log(data)
        
      })      
    console.log(this.contactform.value);
  }
}
