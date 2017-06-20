import 'fetch';
import {HttpClient} from 'aurelia-fetch-client';

let httpClient = new HttpClient();

export class App {

	constructor() {	
	
	this.PatientRecords = null;
   	this.fetchUserDataFromWebService();
	} 

	fetchUserDataFromWebService()
	{
		 httpClient.fetch('https://fhirtest.uhn.ca/baseDstu2/Patient')
		      .then(response => response.json())
		      .then(data => { 
		         this.PatientRecords = data.entry;	
                 console.log(data.entry);
		      });
	}
}