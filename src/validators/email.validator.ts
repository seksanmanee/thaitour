/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a validation of Email Address
 * File path - '../../../src/validators/email.validator'
 */

import { FormControl } from '@angular/forms';

export class EmailValidator {

  static isValid(control: FormControl) {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value);

    if (re) { return null; }
    return { "invalidEmail": true };
  }
}