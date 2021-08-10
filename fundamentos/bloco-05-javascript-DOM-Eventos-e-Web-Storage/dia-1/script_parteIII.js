const headerNode = document.querySelector('#header-container');
headerNode.style.backgroundColor = 'green';

const sectionEmergency = document.querySelector('.emergency-tasks');
sectionEmergency.style.backgroundColor = 'orange';
sectionEmergency.style.display = 'inline-block'

const sectionNoEmergency = document.querySelector('.no-emergency-tasks');
sectionNoEmergency.style.backgroundColor = 'yellow';
sectionNoEmergency.style.display = 'inline-block'

const h3EmergencyList = document.querySelectorAll('.emergency-tasks h3');

for (let h3 of h3EmergencyList) {
  h3.style.backgroundColor = 'purple';
}

const h3NoEmergencyList = document.querySelectorAll('.no-emergency-tasks h3');

for (let h3 of h3NoEmergencyList) {
  h3.style.backgroundColor = 'black';
}

const footerNode = document.querySelector('#footer-container');
footerNode.style.backgroundColor = 'darkgreen'