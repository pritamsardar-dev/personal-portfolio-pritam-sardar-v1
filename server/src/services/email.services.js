import { Resend } from "resend";

import SiteConfig from "../models/SiteConfig.model.js";
import { siteConfigGlobalTemplate } from "../templates/global/siteConfig.global.template.js";

const resend = new Resend(process.env.RESEND_API_KEY);

// Fetches the live site config, falling back to the template defaults
// if the DB document doesn't exist yet (e.g. before the admin saves once)
const getSiteConfigData = async () => {
  const config = await SiteConfig.findOne({ enabled: true }).lean();
  return config || siteConfigGlobalTemplate;
};

// --- Auto-reply ---

const buildAutoReplyText = (name, config) =>
  `
Dear ${name},

Thank you for your message. I have received it and
will get back to you as soon as possible.

I look forward to speaking with you.

Best regards,
${config.identity.name}
${config.identity.role}
${config.links.portfolio}
`.trim();

const buildAutoReplyHtml = (name, config) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <style>
    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      background: transparent;
    }
    table {
      border-spacing: 0;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    td { padding: 0; }
    img { border: 0; display: block; }

    /*
     * Outer wrapper - no background, fills full width.
     * Card fills full width on mobile,
     * caps at 600px on desktop.
     */
    .outer {
      width: 100%;
      padding: 32px 0;
      box-sizing: border-box;
    }
    .card {
      max-width: 600px;
      width: 100%;
      background: #ffffff;
      border: 1px solid #e4e4e7;
      margin: 0 auto;
      border-radius: 4px;
      overflow: hidden;
    }

    /* Header */
    .hd {
      background: #3f3f46;
      padding: 20px 28px;
    }

    /* Body */
    .bd { padding: 32px 28px 0; }

    /*
     * Inner text container - keeps line length
     * comfortable (~65ch) so text never feels too wide
     */
    .bd p {
      max-width: 540px;
      margin: 0 0 20px;
      font-size: 15px;
      line-height: 1.7;
      color: #3f3f46;
      font-family: Arial, Helvetica, sans-serif;
    }
    .bd p.name {
      color: #18181b;
      font-weight: 600;
    }
    .bd p:last-child { margin-bottom: 0; }

    /* Divider */
    .dv { padding: 24px 28px 0; }
    .dv td {
      border-top: 1px solid #e4e4e7;
      font-size: 0;
      line-height: 0;
    }

    /* Signature */
    .sg { padding: 20px 28px 28px; }
    .sg p {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
    }
    .sg .sg-name {
      font-size: 15px;
      font-weight: 700;
      color: #18181b;
      margin-bottom: 6px;
    }
    .sg .sg-role {
      font-size: 14px;
      color: #52525b;
      margin-bottom: 6px;
    }
    .sg .sg-meta {
      font-size: 13px;
      color: #a1a1aa;
      margin-bottom: 16px;
    }
    .sg .sg-links {
      font-size: 0;
      line-height: 2;
    }
    .sg-link {
      font-size: 13px;
      color: #2563eb;
      text-decoration: none;
      font-family: Arial, Helvetica, sans-serif;
    }
    .sg-sep {
      font-size: 13px;
      color: #d4d4d8;
      padding: 0 7px;
      font-family: Arial, Helvetica, sans-serif;
    }

    /* Footer */
    .ft {
      padding: 14px 28px;
      border-top: 1px solid #f4f4f5;
      background: #fafafa;
    }
    .ft p {
      margin: 0;
      font-size: 12px;
      color: #a1a1aa;
      line-height: 1.6;
      font-family: Arial, Helvetica, sans-serif;
    }
    .ft a { color: #a1a1aa; text-decoration: underline; }

    @media only screen and (max-width: 620px) {
      .outer { padding: 0 !important; }
      .card {
        border-left: 0 !important;
        border-right: 0 !important;
        border-radius: 0 !important;
      }
      .hd  { padding: 18px 20px !important; }
      .bd  { padding: 24px 20px 0 !important; }
      .bd p { font-size: 15px !important; }
      .dv  { padding: 20px 20px 0 !important; }
      .sg  { padding: 18px 20px 24px !important; }
      .sg .sg-name { font-size: 15px !important; }
      .sg .sg-role { font-size: 14px !important; }
      .sg .sg-meta { font-size: 13px !important; }
      .sg-link { font-size: 13px !important; }
      .sg-sep  { font-size: 13px !important; }
      .ft  { padding: 14px 20px !important; }
      .ft p { font-size: 12px !important; }
    }
  </style>
</head>
<body>
<div class="outer">
  <div class="card">

    <!-- Header -->
    <table role="presentation" width="100%"
      cellpadding="0" cellspacing="0"
      style="border-radius:4px 4px 0 0;
        overflow:hidden;">
      <tr>
        <td class="hd"
          style="border-radius:4px 4px 0 0;"
        >
          <a href="${config.links.portfolio}"
            style="display:inline-block;
              text-decoration:none;">
            <img
              src="${config.links.logo}"
              alt="${config.identity.name}"
              width="150"
              height="auto"
              style="display:block;border:0;
                max-width:150px;height:auto;"
            />
          </a>
        </td>
      </tr>
    </table>

    <!-- Body -->
    <div class="bd">
      <p class="name">Dear ${name},</p>
      <p>
        Thank you for your message. I have received it
        and will get back to you as soon as possible.
      </p>
      <p>I look forward to speaking with you.</p>
    </div>

    <!-- Divider -->
    <div class="dv">
      <table role="presentation" width="100%"
        cellpadding="0" cellspacing="0">
        <tr><td>&nbsp;</td></tr>
      </table>
    </div>

    <!-- Signature -->
    <div class="sg">
      <p class="sg-name">${config.identity.name}</p>
      <p class="sg-role">${config.identity.role}</p>
      <p class="sg-meta">
        ${config.identity.metaLine}
      </p>
      <p class="sg-links">
        <a href="${config.links.portfolio}"
          class="sg-link">Portfolio</a>
        <span class="sg-sep">|</span>
        <a href="${config.links.github}"
          class="sg-link">GitHub</a>
        <span class="sg-sep">|</span>
        <a href="${config.links.linkedin}"
          class="sg-link">LinkedIn</a>
        <span class="sg-sep">|</span>
        <a href="mailto:${config.links.email}"
          class="sg-link">${config.links.email}</a>
      </p>
    </div>

    <!-- Footer -->
    <div class="ft">
      <p>
        This is an automated confirmation.
        Please do not reply to this email.
        To reach me directly, use
        <a href="${config.links.contactPage}"
          >${config.links.contactPage}</a>.
      </p>
    </div>

  </div>
</div>
</body>
</html>
`.trim();

// --- Notification ---

const buildNotificationText = ({
  name, email, subject, message,
}) =>
  `
New contact form submission

Name:    ${name}
Email:   ${email}
Subject: ${subject}

Message:
${message}
`.trim();

const buildNotificationHtml = ({
  name, email, subject, message, config,
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <style>
    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      background: transparent;
    }
    table {
      border-spacing: 0;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    td { padding: 0; }

    .outer {
      width: 100%;
      padding: 32px 0;
      box-sizing: border-box;
    }
    .card {
      max-width: 600px;
      width: 100%;
      background: #ffffff;
      border: 1px solid #e4e4e7;
      border-radius: 4px;
      overflow: hidden;
      margin: 0 auto;
    }

    /* Header */
    .hd {
      background: #3f3f46;
      padding: 20px 28px;
    }
    .hd-title {
      margin: 0 0 3px;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
    }
    .hd-sub {
      margin: 0;
      font-size: 12px;
      color: #a1a1aa;
      font-family: Arial, Helvetica, sans-serif;
    }

    /* Details table */
    .dt { padding: 24px 28px 0; }
    .dt-table {
      width: 100%;
      border: 1px solid #e4e4e7;
      border-radius: 4px;
      overflow: hidden;
    }

    /*
     * Label column fixed at 72px.
     * Value column takes remaining space.
     * Consistent 10px 14px padding everywhere.
     */
    .lbl {
      width: 72px;
      padding: 10px 14px;
      background: #fafafa;
      border-bottom: 1px solid #ebebeb;
      vertical-align: middle;
    }
    .lbl-last {
      width: 72px;
      padding: 10px 14px;
      background: #fafafa;
      vertical-align: middle;
    }
    .lbl p, .lbl-last p {
      margin: 0;
      font-size: 11px;
      font-weight: 700;
      color: #a1a1aa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-family: Arial, Helvetica, sans-serif;
      white-space: nowrap;
    }
    .val {
      padding: 10px 14px;
      border-left: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      vertical-align: middle;
    }
    .val-last {
      padding: 10px 14px;
      border-left: 1px solid #ebebeb;
      vertical-align: middle;
    }
    .val p, .val-last p {
      margin: 0;
      font-size: 14px;
      color: #18181b;
      font-family: Arial, Helvetica, sans-serif;
      word-break: break-word;
    }
    .val .v-name, .val-last .v-name {
      font-weight: 700;
    }
    .val a, .val-last a {
      font-size: 14px;
      color: #2563eb;
      text-decoration: underline;
      font-family: Arial, Helvetica, sans-serif;
      word-break: break-word;
    }

    /* Message */
    .msg { padding: 20px 28px 24px; }
    .msg-lbl {
      margin: 0 0 8px;
      font-size: 11px;
      font-weight: 700;
      color: #a1a1aa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-family: Arial, Helvetica, sans-serif;
    }
    .msg-text {
      margin: 0;
      font-size: 14px;
      color: #3f3f46;
      line-height: 1.75;
      white-space: pre-wrap;
      word-break: break-word;
      font-family: Arial, Helvetica, sans-serif;
      max-width: 540px;
    }

    /* CTA */
    .cta { padding: 0 28px 28px; }
    .cta a {
      display: inline-block;
      background: #18181b;
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      padding: 9px 16px;
      border-radius: 4px;
      font-family: Arial, Helvetica, sans-serif;
    }

    /* Footer */
    .ft {
      padding: 12px 28px;
      border-top: 1px solid #f4f4f5;
      background: #fafafa;
    }
    .ft p {
      margin: 0;
      font-size: 11px;
      color: #a1a1aa;
      line-height: 1.6;
      font-family: Arial, Helvetica, sans-serif;
    }
    .ft a { color: #a1a1aa; text-decoration: underline; }

    @media only screen and (max-width: 620px) {
      .outer { padding: 0 !important; }
      .card {
        border-left: 0 !important;
        border-right: 0 !important;
        border-radius: 0 !important;
      }
      .hd  { padding: 18px 20px !important; }
      .dt  { padding: 20px 20px 0 !important; }

      /*
       * On mobile, give rows a bit more vertical
       * breathing room - 12px top/bottom padding.
       * Label column narrows to 60px.
       */
      .lbl, .lbl-last {
        width: 60px !important;
        padding: 12px 10px !important;
      }
      .val, .val-last {
        padding: 12px 10px !important;
      }
      .val p, .val-last p,
      .val a, .val-last a {
        font-size: 13px !important;
      }
      .lbl p, .lbl-last p {
        font-size: 10px !important;
      }
      .msg  { padding: 16px 20px 20px !important; }
      .msg-text {
        font-size: 13px !important;
        line-height: 1.7 !important;
      }
      .cta  { padding: 0 20px 24px !important; }
      .cta a {
        font-size: 13px !important;
        padding: 9px 14px !important;
      }
      .ft   { padding: 12px 20px !important; }
      .ft p { font-size: 11px !important; }
    }
  </style>
</head>
<body>
<div class="outer">
  <div class="card">

    <!-- Header -->
    <table role="presentation" width="100%"
      cellpadding="0" cellspacing="0"
      style="border-radius:4px 4px 0 0;
        overflow:hidden;">
      <tr>
        <td class="hd"
          style="border-radius:4px 4px 0 0;"
        >
          <p class="hd-title">New Message Received</p>
          <p class="hd-sub">
            pritamsardar.dev &nbsp;·&nbsp; Contact Form
          </p>
        </td>
      </tr>
    </table>

    <!-- Details -->
    <div class="dt">
      <table role="presentation" class="dt-table"
        cellpadding="0" cellspacing="0">
        <tr>
          <td class="lbl"><p>Name</p></td>
          <td class="val">
            <p class="v-name">${name}</p>
          </td>
        </tr>
        <tr>
          <td class="lbl"><p>Email</p></td>
          <td class="val">
            <a href="mailto:${email}">${email}</a>
          </td>
        </tr>
        <tr>
          <td class="lbl-last"><p>Subject</p></td>
          <td class="val-last">
            <p>${subject}</p>
          </td>
        </tr>
      </table>
    </div>

    <!-- Message -->
    <div class="msg">
      <p class="msg-lbl">Message</p>
      <p class="msg-text">${message}</p>
    </div>

    <!-- Reply CTA -->
    <div class="cta">
      <a
        href="mailto:${email}?subject=Re%3A%20
          ${encodeURIComponent(subject)}">
        Reply to ${name}
      </a>
    </div>

    <!-- Footer -->
    <div class="ft">
      <p>
        Submitted via
        <a href="${config.links.contactPage}"
          >${config.links.contactPage}</a>
      </p>
    </div>

  </div>
</div>
</body>
</html>
`.trim();

// --- Export ---

export const sendAutoReplyEmail = async ({
  to, name, subject, message,
}) => {
  const config = await getSiteConfigData();

  const fromAddress = `${config.identity.name} <noreply@mail.pritamsardar.dev>`;

  await Promise.all([
    resend.emails.send({
      from: fromAddress,
      to,
      subject: "Your message has been received",
      text: buildAutoReplyText(name, config),
      html: buildAutoReplyHtml(name, config),
    }),

    resend.emails.send({
      from: fromAddress,
      to: config.links.email,
      replyTo: to,
      subject: `[Contact] ${name}: ${subject}`,
      text: buildNotificationText({
        name, email: to, subject, message,
      }),
      html: buildNotificationHtml({
        name, email: to, subject, message, config,
      }),
    }),
  ]);
};