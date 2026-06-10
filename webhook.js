// Adivyne Arc — Web Concierge Backend
// Deploy to Vercel (free tier)
// Handles: lead capture webhook + Resend email routing

import { Resend } from 'resend';
import { emailSequences } from './emails/sequences.js';

const resend = new Resend(process.env.RESEND_API_KEY);

const ARC_FROM_EMAIL = 'Aisha at Adivyne Arc <hello@adivynearc.com>';
const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL || null; // add when ready

// Intent tag routing
const TAG_MAP = {
  'demo-request': 'demo-request',
  'pricing-interest': 'pricing-interest',
  'healthcare-lead': 'healthcare-lead',
  'smb-lead': 'smb-lead',
  'nurture': 'nurture'
};

export default async function handler(req, res) {
  // CORS headers for widget
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { first_name, email, phone, intent_tag, summary } = req.body;

    if (!email || !intent_tag) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const tag = TAG_MAP[intent_tag] || 'nurture';
    const sequence = emailSequences[tag];

    // Send first email immediately
    if (sequence && sequence.length > 0) {
      const firstEmail = sequence[0];
      const personalizedHtml = firstEmail.html.replace(/{{first_name}}/g, first_name || 'there');

      await resend.emails.send({
        from: ARC_FROM_EMAIL,
        to: email,
        subject: firstEmail.subject,
        html: personalizedHtml
      });
    }

    // Send internal notification to Arc
    await resend.emails.send({
      from: ARC_FROM_EMAIL,
      to: 'hello@adivynearc.com',
      subject: `New lead: ${first_name || 'Unknown'} — ${tag}`,
      html: `
        <h2>New Web Concierge Lead</h2>
        <p><strong>Name:</strong> ${first_name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Intent:</strong> ${tag}</p>
        <p><strong>Conversation summary:</strong><br>${summary || 'No summary captured'}</p>
      `
    });

    // Fire GHL webhook if configured
    if (GHL_WEBHOOK_URL) {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name,
          email,
          phone,
          tags: [tag],
          source: 'web-concierge',
          summary
        })
      });
    }

    return res.status(200).json({ success: true, tag });

  } catch (error) {
    console.error('Arc webhook error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
