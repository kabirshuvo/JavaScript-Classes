const kamailla = {
    'firstName': 'ka',
    'lastName': 'mal'
  };
  
  const kamaillaString = JSON.stringify(kamailla);
  localStorage.setItem('kamaillaInfo', kamaillaString);
  
  const getKamailla = localStorage.getItem('kamaillaInfo');
  const kamaillaObj = JSON.parse(getKamailla);
  
  // Display first name and last name in the "get-object" element
  document.getElementById('get-object').innerText = kamaillaObj.firstName + '' + kamaillaObj.lastName;
  
  // Log first name and last name to the console
  console.log(kamaillaObj.firstName, kamaillaObj.lastName);