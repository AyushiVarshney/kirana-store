const CITY_LIST = [
    { name: 'Noida', code: 'us' },
    { name: 'Delhi', code: 'gb' },
    { name: 'Greater Noida', code: 'in' }
  ];

  const STATE_LIST = [
    { name: 'Uttar Pradesh', code: 'us' },
    { name: 'Punjab', code: 'gb' },
    { name: 'Delhi', code: 'in' }
  ];
  
  const DATA_STEP_1 = {
    yourName: { type: 'text', validations: {}, errors: {}, placeholder: 'Enter your full name..' },
    yourEmail: { type: 'email', validations: {}, errors: {pattern:'Enter a valid email address'}, 
      placeholder: 'Enter your email address..' },
    phone: {
      type: 'phone',
      validations: {
        pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/
      },
      errors: {
        pattern: 'Please enter a valid phone number'
      },
      placeholder: 'Enter your contact number..'
    },
    password: { type: 'text', validations: {}, errors: {}, placeholder: 'Create your password..' },
    confirmPassword: { type: 'email', validations: {}, errors: {pattern:'Enter a valid email address'}, 
      placeholder: 'Confirm your password..' },
  };
  
  const DATA_STEP_2 = {
    shopName: { type: 'text', validations: {}, errors: {}, placeholder: 'Enter shop name..' },
    gstNumber: {
      type: 'text',
      validations: {},
      errors: {},
      placeholder: 'Enter shop GST number..'
    } ,
    addressLine:{type: 'text', validations:{}, errors:{},placeholder:'Enter shop address line..'},
    pincode:{type: 'number', validations:{}, errors:{},placeholder:'Enter shop postal code..'},
    city:{
      type:'select',
      options: CITY_LIST,
      validations: {},
      errors: {},
      placeholder: 'dgafg'
    }
  };
  
  const DATA_STEP_3 = {
    range: {type: 'range', validations: {}, errors: {}, placeholder: ''}
  };
  
  const STEP_ITEMS = [
    { label: 'Personal Details', data: DATA_STEP_1 },
    { label: 'Shop Details', data: DATA_STEP_2 },
    { label: 'Services Provided', data: DATA_STEP_3 },
    { label: 'Review & Submit', data: {} }
  ];
  
  export { STEP_ITEMS }