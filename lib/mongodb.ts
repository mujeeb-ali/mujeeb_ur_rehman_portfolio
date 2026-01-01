import { MongoClient, Db } from 'mongodb'

if (!process.env.MONGODB_URI) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  }
  // During development/build, use a placeholder
  console.warn('MONGODB_URI not set, using placeholder for development')
}

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || 'portfolio')
    return { client, db }
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw new Error('Database connection failed')
  }
}