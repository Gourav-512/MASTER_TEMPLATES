/**
 * ================================================================
 * WINIKS — SALON MASTER TEMPLATE
 * Google Apps Script Backend
 * File: Code.gs
 * ================================================================
 */

const CONFIG = {
  notificationEmail: 'your@email.com',
  businessName: 'Professional Unisex Salon'
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('Appointments');
    if (!sheet) {
      sheet = ss.insertSheet('Appointments');
      sheet.appendRow(['ID', 'Timestamp', 'Name', 'Phone', 'Service', 'Date', 'Time']);
    }
    const id = 'APT-' + Date.now().toString(36).toUpperCase();
    sheet.appendRow([id, new Date().toLocaleString(), data.name || '', data.phone || '', data.service || '', data.preferredDate || '', data.preferredTime || '']);
    
    MailApp.sendEmail({
      to: CONFIG.notificationEmail,
      subject: `New Salon Appointment - ${data.name}`,
      body: `New Appointment Request:\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nDate: ${data.preferredDate}\nTime: ${data.preferredTime}`
    });
    return ContentService.createTextOutput(JSON.stringify({success: true, id: id})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
