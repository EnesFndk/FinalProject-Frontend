import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators  } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      //burda boş bir obje oluşturuyoruz, this.loginForm.value'yu da onun içine map'lemis oluyoruz.
      let loginModel = Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.info(response.message)
        //bunu nasıl görebiliriz? = giriş yaptıktan sonra projede incele dersek, ordan application sekmesinde solda storage kısmında local storage kısmının altında localhost seçersek orda yer alıyor. key ve value olarak.
        localStorage.setItem("token" , response.data.token)
      },responseError=> {
        //error'ları vs herşeyi console ile denememiz gerekiyor çalışıyor mu diye.
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }
}
