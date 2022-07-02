# SIMCEN: MedicalApp

It is a Web Application that has two roles, the first is to be used as a Landing Page for new customers to learn about the services that Medical Center offers. Also, it is an Electronic Medical Record (EMR) that makes it easy for doctors to maintain patient records and medical history so that they are accessible at all times regardless of the device they are using.

![alt text](https://github.com/lasarang/T5/blob/main/assets/medical-app.png?raw=true)


## Technologies

**Client:** Angular

**Server:** Firesbase API

**Services:** Authentication, Firestore DB, Storage, Hosting

## Authors

- [@Luis A. Sarango-Parrales](https://www.github.com/lasarang)
- [@Mauricio Ortiz](https://github.com/MauricioOrtiz1999)
- [@Andrea Soriano](https://github.com/AndreaSoriano)
- [@Rainiero Cedillo](https://github.com/rpcedill)
- [@Emanuel Parra](https://github.com/eapb99)
- [@Joyce Rojas](https://github.com/JoyceRojas)

## Acknowledgements

 - [Carlos Mera]


## Table of Contents

1. [Installation guide](#installation-guide)
2. [User Manual](#my-second-title)


## Installation guide

After cloning this repository. 

Inside the directory, run `npm i` to install dependencies of the project.

Then run `ng s` to build and executes the app using a port. This url is usually `http://localhost:4200/`


But if you need to deploy the app remotely. Follow the next steps.

First enter to your Firebase console project settings `https://console.firebase.google.com/u/1/project/medical-app-8cdb7/settings/general/web:OTQ5NTY1M2ItNjc0Yi00ZDg1LWFiNDktMWI3MDdmMGI1MzRk`
![alt text](https://github.com/lasarang/T5/blob/main/assets/remote_deploy_1.png?raw=true)

Once you're logged, in the section 'Your apps' select 'Medical App' and and make sure that in 'Linked Firebase Hosting' is selected with `medical-app-8cdb7`.
![alt text](https://github.com/lasarang/T5/blob/main/assets/remote_deploy_2.png?raw=true)

Then, in the top of this repo there is a the last commit code with an icon of the status of the build, click on it and select 'Details'. 

Try with `Re-run-jobs` and choose `Re-run all jobs`. Suddenly, the project will start to be built.

![alt text](https://github.com/lasarang/T5/blob/main/assets/remote_deploy_3.png?raw=true)

It will execute `npm ci` that replaces local command `npm install`.
Also, test cases will be used checked with `npm test`.

After that, it will run `npm build` for the construction of the project.

However, for keep a clean code standards will be executed the `npm run lint && npm run prettier`.

![alt text](https://github.com/lasarang/T5/blob/main/assets/remote_deploy_4.png?raw=true)

Finally, the FirebaseExtended/action-hosting-deploy@v0 would verify the Deploying to production site and will provide an address: `https://medical-app-8cdb7.web.app/`, so you can use the app everywhere.

![alt text](https://github.com/lasarang/T5/blob/main/assets/remote_deploy_5.png?raw=true)
## User Manual
###Landing Page
#### Cover page
######  Header
After visiting the website, the Narcisa de Jesus Medical Center header will immediately appear
######  Body
Information about Narcisa de Jesus Medical Center, such as its history, mission and vision, will be displayed.
######  Footer
In addition, the contact information of the Medical Center and where it is located is shown.

#### Specialties
######  Banner
You will have a button with which you have the option to Request a consultation. This will redirect you to the consultation module.
######  List of Medical Specialties
Each specialty will display the doctor's name and a short description of the specialty.
Among the specialties offered by the Medical Center are:
- General Medicine
- Endocrinology
- Cardiology
- Pediatrics
- Laboratory
- Gynecology
- Traumatology
- Physical Rehabilitation

#### Lab Tests
This module will show the types of medical examinations that patients can undergo at the Medical Center.
######  Banner
You will have a button with which you have the option to Download Request. This will download a document in which the patient will fill in the necessary fields and select the tests he/she wishes to undergo.
######  List of lab tests
Each test will show some available analyses of the test and a short description.
Among the tests offered by the Medical Center are:
- Hematology
- Biochemistry
- Immunology
- Serology
- Parasitology
- Bacteriology
- Toxicology

#### Results
This module will show the results of the tests that patients have had.
######  Banner
######  Checking results
1.	Enter the idOrder given by the Physician who generated the order for the exam.
2.	Click on the send button.
3.	The browser will show a confirmation message, click OK.
4.	If the idOrder is valid, then click in Show button, the results will be display into a new tab. But, if the entered idOrder is wrong, a warning message will be shown. Keep in mind that the input id need to be clean from both sides with no white-spaces.
![alt text](https://github.com/lasarang/T5/blob/main/assets/results.png?raw=true)

#### Consultation
######  Banner
######  New consultation request
The patient will fill in the fields with basic information, and will also choose the date he/she wishes to attend the consultation, the area he/she wishes to be seen in and the reason for the consultation.
1. Fill the form, do not care about errors. There were validations for a correct fill. If there is a wrong field, the send button won't be enable.
2. Click on the send button and OK on the confirmation message.
3. Now, you create a new consultation request. Just have to wait a few days for the receive the answer.
![alt text](https://github.com/lasarang/T5/blob/main/assets/consultation.png?raw=true)

#### Q&A
######  Banner
######  List of Q&A
This module will display frequently asked questions to which patients can view the answers.

#### Sign in
###### Login form
The login allows a registered patient to access the Electronic Medical Report.

 1. Fill the form with valid email and password. Then, the patient's profile will appear.
 2. Its possible a password change if you have forgotten it, to do this you must click on forgot my password.

#### Sign up
######New Patient Register Form
This section allows the registration of a patient to access the Electronic Medical Report.
1. Fill the form, do not care about errors. There were validations for a correct fill. If there is a wrong field, the send button won't be enable. Choose a right password with minimum 6 characters and maximum 12.
2. Click on the Save button. Then will show little success message, and the new patient's profile will appear.

###Electronic Medical Record (EMR)
#### Home 
###### Basic Information
Here is the basic and legal information of a patient as a citizen
###### Personal Information
Here is the personal, medical and private information of a patient as a client
###### Contacts
Here is a list of important and emergency contacts of a patient

#### Consultation Appointments
###### List of Consultation Appointments

#### Lab Test Orders
###### List of Lab Tests Orders
###### Lab Test Order Viewer


#### Medical History
###### List of personal history
###### List of familiar history
###### List of surgeries
###### List of Allergies
###### List of Vaccines
###### List of Medications

#### Lab Test Results
###### List of Lab Tests Results
###### Lab Test Result Viewer

#### Medical images
###### List of Medical Images

#### Medical Certificates
###### List of Medical Certificates
###### Medical Certificates Viewer

#### Log Out
