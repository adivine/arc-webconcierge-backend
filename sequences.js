// Adivyne Arc — Email Sequences
// All sequences triggered by webhook intent tag
// Sender: your Arc business email via Resend

export const emailSequences = {

  "demo-request": [
    {
      delay: 0, // immediately
      subject: "Your Naomi demo is ready",
      html: `
        <p>Hi {{first_name}},</p>
        <p>Thank you for reaching out. You asked about seeing Naomi in action — here she is.</p>
        <p><a href="https://briefing.adivynearc.com/ai-concierge-pilot" style="background:#1a1a2e;color:#fff;padding:12px 24px;text-decoration:none;border-radius:6px;display:inline-block;">Watch the Naomi Demo</a></p>
        <p>Naomi is Arc's AI Intelligent Concierge. She answers calls, captures inquiries, and routes the right next step — so your practice never misses an opportunity again.</p>
        <p>If you'd like to see how this would work specifically for your practice, reply to this email and we'll set up a 20-minute briefing.</p>
        <p>— Aisha<br>Founder, Adivyne Arc<br>adivynearc.com</p>
      `
    },
    {
      delay: 3, // days
      subject: "What Naomi recovered for a practice like yours",
      html: `
        <p>Hi {{first_name}},</p>
        <p>One thing we hear consistently from practice owners: the calls they lose after 5pm are the ones that never come back.</p>
        <p>Naomi is built for exactly that moment. She's present when your front desk isn't — answering, capturing, and routing every inquiry without missing a beat.</p>
        <p>The 90-day pilot shows you exactly what she recovers. No guesswork. Real data on every call she handled.</p>
        <p>Ready to see the numbers? <a href="https://briefing.adivynearc.com/ai-concierge-pilot">Learn about the pilot here.</a></p>
        <p>— Aisha<br>Adivyne Arc</p>
      `
    },
    {
      delay: 7,
      subject: "Still thinking it over?",
      html: `
        <p>Hi {{first_name}},</p>
        <p>No pressure — I just want to make sure you have what you need to make the right call for your practice.</p>
        <p>If you have questions about how Naomi works, what the pilot includes, or whether this is the right fit, I'm happy to answer them directly.</p>
        <p>Reply here or <a href="https://briefing.adivynearc.com/ai-concierge-pilot">book a 20-minute briefing</a> at your convenience.</p>
        <p>— Aisha<br>Adivyne Arc</p>
      `
    }
  ],

  "pricing-interest": [
    {
      delay: 0,
      subject: "Naomi pilot — what's included and what it costs",
      html: `
        <p>Hi {{first_name}},</p>
        <p>You asked about pricing. Here's the straight answer.</p>
        <p>The Naomi 90-Day Launch Term starts at <strong>$2,500/month</strong>. That includes:</p>
        <ul>
          <li>Full setup and voice configuration</li>
          <li>Workflow integration with your existing tools</li>
          <li>Live deployment and active monitoring</li>
          <li>Monthly performance review with real data</li>
        </ul>
        <p>One recovered patient appointment per week at your average ticket value covers that fee. The pilot shows you exactly what was recovered — the math is transparent.</p>
        <p><a href="https://briefing.adivynearc.com/ai-concierge-pilot">See the full pilot details here.</a></p>
        <p>Questions? Reply directly — I read every email.</p>
        <p>— Aisha<br>Adivyne Arc</p>
      `
    },
    {
      delay: 4,
      subject: "The ROI question most practice owners ask first",
      html: `
        <p>Hi {{first_name}},</p>
        <p>The most common question we get: "How do I know this pays for itself?"</p>
        <p>The pilot is designed to answer that question with your own data. At the end of 90 days, you'll know exactly how many calls Naomi handled, how many led to booked appointments, and what that recovered revenue looks like.</p>
        <p>If the numbers don't work for your practice, you'll know before you commit to anything long-term.</p>
        <p>Want to walk through the math together? <a href="https://briefing.adivynearc.com/ai-concierge-pilot">Book a briefing here.</a></p>
        <p>— Aisha<br>Adivyne Arc</p>
      `
    }
  ],

  "healthcare-lead": [
    {
      delay: 0,
      subject: "Adivyne Arc — built for practices like yours",
      html: `
        <p>Hi {{first_name}},</p>
        <p>Thank you for connecting with us. Adivyne Arc works exclusively with healthcare and high-trust practices — medspas, dental offices, specialty care, and independent providers who take their patient experience seriously.</p>
        <p>Our AI Intelligent Concierge, Naomi, is designed for the moments your front desk can't be everywhere at once. After hours. During lunch. When the line is long and the phone keeps ringing.</p>
        <p>She answers, captures, and routes — without replacing your team.</p>
        <p><a href="https://briefing.adivynearc.com/ai-concierge-pilot">Learn how the 90-day pilot works.</a></p>
        <p>— Aisha<br>Founder, Adivyne Arc</p>
      `
    },
    {
      delay: 3,
      subject: "A question for your practice",
      html: `
        <p>Hi {{first_name}},</p>
        <p>Quick question: how many calls does your practice miss in a typical week — after hours, during lunch, or when the front desk is with a patient?</p>
        <p>If even two of those become appointments, what's that worth to your practice?</p>
        <p>That's the conversation Naomi starts. And the pilot shows you the answer in real numbers.</p>
        <p><a href="https://briefing.adivynearc.com/ai-concierge-pilot">See what the pilot includes.</a></p>
        <p>— Aisha<br>Adivyne Arc</p>
      `
    },
    {
      delay: 7,
      subject: "Is Naomi the right fit for your practice?",
      html: `
        <p>Hi {{first_name}},</p>
        <p>Not every practice is the right fit for Naomi — and that's intentional. We work with practices that value patient experience, have real phone volume, and want data on what they're recovering.</p>
        <p>If that sounds like you, I'd love to have a 20-minute conversation to see if the pilot makes sense.</p>
        <p><a href="https://briefing.adivynearc.com/ai-concierge-pilot">Book your briefing here.</a></p>
        <p>— Aisha<br>Adivyne Arc</p>
      `
    }
  ],

  "smb-lead": [
    {
      delay: 0,
      subject: "AI that works while you're working",
      html: `
        <p>Hi {{first_name}},</p>
        <p>Thank you for reaching out to Adivyne Arc.</p>
        <p>We build AI infrastructure for businesses that can't afford to miss an inquiry — and don't want to hire another person just to answer the phone.</p>
        <p>Our Web Concierge and voice AI solutions are designed for small and growing businesses that want enterprise-level responsiveness without enterprise-level overhead.</p>
        <p>Let's talk about what that looks like for your business. <a href="https://adivynearc.com/contact">Connect with us here.</a></p>
        <p>— Aisha<br>Founder, Adivyne Arc</p>
      `
    },
    {
      delay: 4,
      subject: "What businesses like yours are automating right now",
      html: `
        <p>Hi {{first_name}},</p>
        <p>The most common thing we hear from small business owners: "I wish I had someone to handle the initial inquiries so I can focus on delivery."</p>
        <p>That's exactly what Arc builds. AI that handles the front door — inquiries, questions, lead capture — so you can stay focused on the work.</p>
        <p>Curious what this would look like for your business? Reply here and let's figure it out together.</p>
        <p>— Aisha<br>Adivyne Arc</p>
      `
    }
  ],

  "nurture": [
    {
      delay: 0,
      subject: "Welcome to Adivyne Arc",
      html: `
        <p>Hi {{first_name}},</p>
        <p>Thank you for stopping by. Adivyne Arc builds AI infrastructure for healthcare practices and high-trust businesses — the kind that runs operations, not just answers questions.</p>
        <p>Take a look at what we do: <a href="https://adivynearc.com">adivynearc.com</a></p>
        <p>When you're ready to talk about what AI could do for your business, we're here.</p>
        <p>— Aisha<br>Founder, Adivyne Arc</p>
      `
    },
    {
      delay: 5,
      subject: "One thing most businesses don't track — but should",
      html: `
        <p>Hi {{first_name}},</p>
        <p>Most businesses track revenue, expenses, and appointments. Very few track missed opportunities — the calls that went unanswered, the inquiries that never got a reply, the leads that moved on.</p>
        <p>Arc builds AI that captures those moments. Every one of them.</p>
        <p>If you're curious what that looks like in practice, <a href="https://briefing.adivynearc.com/ai-concierge-pilot">start here.</a></p>
        <p>— Aisha<br>Adivyne Arc</p>
      `
    }
  ]

};
