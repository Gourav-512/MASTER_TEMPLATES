/**
 * ================================================================
 * WINIKS — BAKERY MASTER TEMPLATE
 * Google Apps Script Backend
 * File: Code.gs
 * ================================================================
 *
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets → Extensions → Apps Script
 * 2. Paste this entire file into Code.gs
 * 3. Update CONFIG below with your actual values
 * 4. Click Deploy → New Deployment → Web App
 *    Execute as: Me
 *    Who has access: Anyone
 * 5. Copy the Web App URL
 * 6. Paste into script.js → BUSINESS.appsScriptUrl
 * 7. Test using the form on the website
 *
 * ================================================================
 */

// ================================================================
// CONFIGURATION — UPDATE FOR EACH CLIENT
// ================================================================

const CONFIG = {
  notificationEmail: 'your@email.com',          // ← Email to receive notifications
  emailSubjectPrefix: '[WINIKS Bakery]',        // ← Email subject prefix
  businessName: 'Sweet Cravings Bakery',        // ← Client business name
  sheetName_contacts:    'Contacts',
  sheetName_enquiries:   'CakeEnquiries',
  sheetName_settings:    'Settings',
};

// ================================================================
// MAIN POST HANDLER
// ================================================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType || 'unknown';

    let result;

    if (formType === 'cakeEnquiry') {
      result = handleCakeEnquiry(data);
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
// GET handler (health check)
// ================================================================

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', service: 'WINIKS Bakery Forms' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ================================================================
// CAKE ENQUIRY HANDLER
// ================================================================

function handleCakeEnquiry(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.sheetName_enquiries);

  // Create sheet with headers if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.sheetName_enquiries);
    sheet.appendRow([
      'ID', 'Timestamp', 'Name', 'Phone',
      'Cake Type', 'Preferred Date', 'Quantity', 'Message',
      'Source', 'Status'
    ]);
    sheet.getRange(1, 1, 1, 10).setFontWeight('bold').setBackground('#c97d4e').setFontColor('#ffffff');
  }

  const submissionId = generateId('CAKE');
  const timestamp    = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  sheet.appendRow([
    submissionId,
    timestamp,
    sanitize(data.name),
    sanitize(data.phone),
    sanitize(data.cakeType),
    sanitize(data.preferredDate),
    sanitize(data.quantity),
    sanitize(data.message),
    sanitize(data.source || 'Website'),
    'NEW',
  ]);

  // Send email notification
  sendEmailNotification({
    subject: `${CONFIG.emailSubjectPrefix} New Cake Enquiry — ${sanitize(data.cakeType)}`,
    body: formatCakeEnquiryEmail(data, submissionId),
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
    sheet.appendRow([
      'ID', 'Timestamp', 'Name', 'Phone', 'Message', 'Source', 'Status'
    ]);
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#3d1a00').setFontColor('#ffffff');
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
    body: formatContactEmail(data, submissionId),
  });

  return { success: true, submissionId };
}

// ================================================================
// EMAIL NOTIFICATION
// ================================================================

function sendEmailNotification({ subject, body }) {
  try {
    MailApp.sendEmail({
      to:      CONFIG.notificationEmail,
      subject: subject,
      body:    body,
    });
  } catch (err) {
    Logger.log('Email error: ' + err.message);
    // Don't throw — form submission should succeed even if email fails
  }
}

// ================================================================
// EMAIL TEMPLATES
// ================================================================

function formatCakeEnquiryEmail(data, id) {
  return `
NEW CAKE ENQUIRY — ${CONFIG.businessName}
==========================================

Submission ID : ${id}
Received at   : ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

CUSTOMER DETAILS
----------------
Name          : ${sanitize(data.name)}
Phone         : ${sanitize(data.phone)}

ORDER DETAILS
-------------
Cake Type     : ${sanitize(data.cakeType)}
Preferred Date: ${sanitize(data.preferredDate)}
Quantity      : ${sanitize(data.quantity) || '—'}
Description   : ${sanitize(data.message) || '—'}

Source        : ${sanitize(data.source || 'Website')}

==========================================
Respond within 2 hours for best experience.
Status in Sheet: Mark as CONTACTED once called.
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
  return String(val)
    .replace(/[<>]/g, '')   // Strip basic HTML
    .trim()
    .substring(0, 1000);    // Limit length
}

function buildResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
