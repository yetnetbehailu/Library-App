import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService) {}

  ngOnInit(): void {
    // Grouping the login form inputs
    this.loginForm=this.fb.group({
      username:['', Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      // Send obj to db
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(response)=>{
          alert(response.message)
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
    else
    {
      //throw error using toaster message
      this.validateAuthFormFields(this.loginForm);
      alert("your form invalid")
    }
  }

  // Validation method of authentication form fields
  private validateAuthFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true}); //once control value becomes changed marks as dirty
      }
      else if(control instanceof FormGroup)
      {
        this.validateAuthFormFields(control)
      }
    })
  }

}
