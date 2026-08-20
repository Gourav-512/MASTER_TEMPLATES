/**
 * ================================================================
 * WINIKS — DENTAL MASTER TEMPLATE
 * Google Apps Script Backend
 * File: Code.gs
 * ================================================================
 *
 * SETUP:
 * 1. Open Google Sheets → Extensions → Apps Script
 * 2. Paste this file into Code.gs
 * 3. Update CONFIG below
 * 4. Deploy → New Deployment → Web App
 *    Execute as: Me | Who has access: Anyone
 * 5. Copy the Web App URL → paste into script.js → BUSINESS.appsScriptUrl
 *
 * ================================================================
 */

// ================================================================
// CONFIGURATION
// ================================================================

const CONFIG = {
  notificationEmail: 'your@email.com',       // ← Email for notifications
  emailSubjectPrefix: '[WINIKS Dental]',      // ← Email subject prefix
  businessName: 'SmileCare Dental Clinic',   // ← Client clinic name
  doctorName: 'Dr. [Name]',                  // ← Doctor name for email
  sheetName_appointments: 'Appointments',
  sheetName_contacts:     'Contacts',
  sheetName_settings:     'Settings',
};

// ================================================================
// POST HANDLER — MAIN ENTRY POINT
// ================================================================

function doPost(e) {
  try {
    const data     = JSON.parse(e.postData.contents);
    const formType = data.formType || 'unknown';
    let result;

    if (formType === 'appointment') {
      result = handleAppointment(data);
    } else if (formType === 'contact') {
      result = handleContact(data);
    } else {
      result = { success: false, error: 'Unknown form type: ' + formType };
    }

    return buildResponse(result);

  } catch (err) {
    Logger.log('doPost error: ' + err.message);
    return buildResponse({ success: false, error: err.message });
  }
}

// ================================================================
// GET HANDLER (health check)
// ================================================================

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', service: 'WINIKS Dental Forms' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ================================================================
// APPOINTMENT HANDLER
// ================================================================

function handleAppointment(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.sheetName_appointments);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.sheetName_appointments);
    sheet.appendRow([
      'ID', 'Timestamp', 'Name', 'Phone', 'Service',
      'Preferred Date', 'Preferred Time', 'Notes', 'Source', 'Status'
    ]);
    sheet.getRange(1, 1, 1, 10).setFontWeight('bold').setBackground('#2B7FED').setFontColor('#ffffff');
  }

  const submissionId = generateId('APPT');
  const timestamp    = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  sheet.appendRow([
    submissionId,
    timestamp,
    sanitize(data.name),
    sanitize(data.phone),
    sanitize(data.service),
    sanitize(data.preferredDate),
    sanitize(data.preferredTime),
    sanitize(data.message),
    sanitize(data.source || 'Website'),
    'NEW',
  ]);

  sendEmailNotification({
    subject: `${CONFIG.emailSubjectPrefix} New Appointment Request — ${sanitize(data.service)}`,
    body:    formatAppointmentEmail(data, submissionId),
  });

  return { success: true, submissionId };
}

// ================================================================
// CONTACT HANDLER
// ================================================================

function handleContact(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.sheetName_contacts);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.sheetName_contacts);
    sheet.appendRow(['ID', 'Timestamp', 'Name', 'Phone', 'Message', 'Source', 'Status']);
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#0a2240').setFontColor('#ffffff');
  }

  const submissionId = generateId('MSG');
  const timestamp    = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  sheet.appendRow([
    submissionId,
    timestamp,
    sanitize(data.name),
    sanitize(data.phone),
    sanitize(data.message),
    sanitize(data.source || 'Website'),
    'NEW',
  ]);

  sendEmailNotification({
    subject: `${CONFIG.emailSubjectPrefix} New Message from ${sanitize(data.name)}`,
    body:    formatContactEmail(data, submissionId),
  });

  return { success: true, submissionId };
}

// ================================================================
// EMAIL NOTIFICATIONS
// ================================================================

function sendEmailNotification({ subject, body }) {
  try {
    MailApp.sendEmail({ to: CONFIG.notificationEmail, subject, body });
  } catch (err) {
    Logger.log('Email error: ' + err.message);
  }
}

function formatAppointmentEmail(data, id) {
  return `
NEW APPOINTMENT REQUEST — ${CONFIG.businessName}
==========================================

Submission ID  : ${id}
Received at    : ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

PATIENT DETAILS
---------------
Name           : ${sanitize(data.name)}
Phone          : ${sanitize(data.phone)}

APPOINTMENT DETAILS
-------------------
Service        : ${sanitize(data.service)}
Preferred Date : ${sanitize(data.preferredDate)}
Preferred Time : ${sanitize(data.preferredTime)}
Notes          : ${sanitize(data.message) || '—'}

Source         : ${sanitize(data.source || 'Website')}

==========================================
⚠️  THIS IS AN APPOINTMENT REQUEST — NOT A CONFIRMED APPOINTMENT.
Please call the patient to confirm the appointment time.
Update Status in Sheet: CONTACTED → CONFIRMED → COMPLETED.
==========================================
  `.trim();
}

function formatContactEmail(data, id) {
  return `
NEW MESSAGE — ${CONFIG.businessName}
==========================================

Submission ID : ${id}
Received at   : ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

SENDER DETAILS
--------------
Name    : ${sanitize(data.name)}
Phone   : ${sanitize(data.phone)}

MESSAGE
-------
${sanitize(data.message)}

Source  : ${sanitize(data.source || 'Website')}
==========================================
  `.trim();
}

// ================================================================
// HELPERS
// ================================================================

function generateId(prefix) {
  return prefix + '-' + new Date().getTime().toString(36).toUpperCase();
}

function sanitize(val) {
  if (val === null || val === undefined) return '';
  return String(val).replace(/[<>]/g, '').trim().substring(0, 1000);
}

function buildResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
