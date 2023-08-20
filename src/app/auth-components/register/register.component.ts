import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) {}

  ngOnInit(): void {
    // Grouping the register form inputs
    this.registerForm=this.fb.group({
      username:['', Validators.required],
      password:['',Validators.required]
    })
  }


  onRegister(){
    if(this.registerForm.valid){
      // Send obj to db
      this.auth.register(this.registerForm.value)
      .subscribe({
        next:(response)=>{
          alert(response.message)
          this.registerForm.reset();
          this.router.navigate(['login']);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
      console.log(this.registerForm.value)
    }
    else
    {
      //throw error using toaster message
      this.validateAuthFormFields(this.registerForm);
      alert("your form invalid")
    }
  }

  // Validation method of authentication form fields
  private validateAuthFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true}); //once control value becomes changed, marks as dirty
      }
      else if(control instanceof FormGroup)
      {
        this.validateAuthFormFields(control)
      }
    })
  }

}
