import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation-with-reactive-form',
  templateUrl: './animation-with-reactive-form.component.html',
  styleUrls: ['./animation-with-reactive-form.component.css'],
  animations: [
                trigger('showHide',[
                  state('show', style({
                      backgroundColor: "gray",
                      display: 'block'
                    })
                  ),
                  state('hide', style({
                      display: "none"
                    })
                  ),
                  transition("* =>*", [animate("1s")]),
                ])
              ]
})
export class AnimationWithReactiveFormComponent implements OnInit {
  customerFormData: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  alertMessage = ''
  disableSubmitBtn = true
  ngOnInit() {
    this.customerFormData = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          gender: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          contactNum: ['', [Validators.required, Validators.minLength(10)]]
      })
    this.customerFormData.valueChanges.subscribe(customer => {
        this.alertMessage = '';
        this.disableSubmitBtn = !(customer.firstName && customer.lastName && customer.gender && customer.email && customer.contactNum);
      });
  }

  customerFormDataArray = [
                          {firstName: 'Neeraj', lastName: 'Kashikar', gender: 'Male', email: 'NeerajK@gmail.com', contactNum: '9880056123', isShow: true}
                          ]
    get formControls() { return this.customerFormData.controls; }

  onSubmit() {
    this.customerFormDataArray.push(this.customerFormData.value);
    this.customerFormData.reset();
    this.alertMessage = "Customer form successfully submitted!";
  }
  isShow = true
  toggleDisplay(customer) {
    customer.isShow = !customer.isShow
  }
  getSalutation(customer) {
    if (customer.gender.toLowerCase() == 'female') {
      return 'Ms'
    } else if (customer.gender.toLowerCase() == 'male') {
      return 'Mr'
    } else {
      return ''
    }
  }
}