import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle'
})
export class UserTitlePipe implements PipeTransform {

  transform(value: string): string {
    if(value==='yourName'){
      return 'Your Name';
    }else if(value==='yourEmail'){
      return 'Your Email';
    }else if(value === 'phone'){
      return 'Your Phone'
    }else if(value==='password'){
      return 'Password';
    }else if(value==='confirmPassword'){
      return 'Confirm Password';
    }else if(value==='shopName'){
      return 'Shop Name';
    }else if(value==='gstNumber'){
      return 'GST Number';
    }else if(value==='addressLine'){
      return 'Address Line';
    }else if(value==='pincode'){
      return 'Your Email';
    }else if(value==='city'){
      return 'City';
    }else if(value==='range'){
      return 'Range (10 - 1000)'
    }
    return 'Your Input';
  }

}
