import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db('portfolio')
    const collection = db.collection('contacts')

    // Insert the contact message
    const result = await collection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
      read: false
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully',
        id: result.insertedId 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
