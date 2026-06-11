// Adivyne Arc — ElevenLabs Voice Proxy
// Receives text from Noa widget, calls ElevenLabs, returns audio
// Keeps ElevenLabs API key server-side

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { text, voice_id } = req.body;

    if (!text) return res.status(400).json({ error: 'No text provided' });

    const voiceId = voice_id || 'tMXujoAjiboschVOhAnk';
    const clean = text.replace(/[*_#`]/g, '');

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': process.env.ELEVENLABS_API_KEY,
      },
      body: JSON.stringify({
        text: clean,
        model_id: 'eleven_turbo_v2',
        voice_settings: {
          stability: 0.4,
          similarity_boost: 0.75,
          style: 0.2,
          use_speaker_boost: true
          speed: 1.15
        }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('ElevenLabs error:', err);
      return res.status(response.status).json({ error: 'Voice service error' });
    }

    // Stream the audio back to the widget
    const audioBuffer = await response.arrayBuffer();
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', audioBuffer.byteLength);
    return res.status(200).send(Buffer.from(audioBuffer));

  } catch (error) {
    console.error('Speak proxy error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
