import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, subject, message, consent } = body;

    // Validate required fields
    if (!name || !company || !email || !subject || !message || !consent) {
      return NextResponse.json(
        { error: 'Alle Pflichtfelder müssen ausgefüllt werden' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (SendGrid, AWS SES, etc.)
    // TODO: Integrate with CRM system
    console.log('Contact form submission:', {
      name,
      company,
      email,
      phone,
      subject,
      message,
      consent,
      timestamp: new Date().toISOString(),
    });

    // For now, just log the data and return success
    return NextResponse.json(
      { message: 'Nachricht erfolgreich gesendet' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}
