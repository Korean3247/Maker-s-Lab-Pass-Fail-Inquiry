# Maker's Lab Pass/Fail Inquiry

## **Overview**  
This project is a simple Google Apps Script application that allows users to check their acceptance status for Maker's Lab by entering their student number and name. The application is deployed using Google Apps Script and interacts with a Google Spreadsheet to fetch and validate applicant information.

---

## **Features**  
- **Input Validation**: Ensures that both student number and name are provided.  
- **Dynamic Response**: Displays personalized acceptance messages based on the applicant's status.  
- **Spreadsheet Integration**: Reads data directly from a Google Spreadsheet to verify user input.  
- **User-Friendly Interface**: Features a simple and intuitive HTML form for input.  
- **Error Handling**: Provides clear feedback if the input is incomplete or incorrect.  

---

## **How It Works**  
1. **Frontend (Page.html)**  
   - Users enter their **student number** and **name** into the provided fields.  
   - A form submission triggers the `submitForm()` function, which sends data to the backend.  

2. **Backend (Code.gs)**  
   - The script validates inputs and checks the Google Spreadsheet for a match.  
   - Based on the status in the spreadsheet:
     - If "합격" is found, the user receives a congratulatory message.  
     - Otherwise, an "unaccepted" message is displayed.  
     - If no match is found, an error message is returned.

3. **Result Display (Result.html)**  
   - The response is dynamically rendered and displayed in the interface.  

---

## **System Requirements**  
- **Google Account**: Required for accessing Google Apps Script and Spreadsheet.  
- **Browser**: Any modern browser to access the published web app.  

---

## **Deployment**  
This application was built and deployed using **Google Apps Script**.  
- The web app is hosted on Google Apps Script.  
- Data is managed through a Google Spreadsheet that contains applicant information.  
- Deployment was done through the **App Script Editor**, enabling public access to the web app link.  

---

## **Usage**  
1. Open the web application using the published URL.  
2. Enter your **student number** and **name**.  
3. Click "확인" to check your status.  
4. View the result directly on the webpage.

---

## **Files**  

| **File Name** | **Description**                                                                 |
|----------------|---------------------------------------------------------------------------------|
| `Code.gs`      | Backend script for handling form submissions and spreadsheet integration.       |
| `Page.html`    | HTML interface for collecting user inputs.                                      |
| `Result.html`  | HTML template for displaying the result message.                                |

---

## **Future Improvements**  
- Support multiple languages for international use.  
- Add email notifications for accepted applicants.  
- Enhance security by restricting access to authorized users.  
