function removePassword(user) {
    // Remove password property
    if(typeof user !== 'object'){
      return 'Not object'
    }
    delete user.password
    return user
  }
  let result  = removePassword({username:"Ganesh", password: 123});
  console.log(result);
  