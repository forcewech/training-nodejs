import mongoose from 'mongoose'
class DatabaseService {
  constructor() {
    this.connect()
  }
  connect(): void {
    mongoose
      .connect('mongodb+srv://dungnttn02:anhyeuem@cluster0.buztt4a.mongodb.net/midterm-nodejs?retryWrites=true&w=majority&appName=Cluster0')
      .then(() => {
        console.log('Database connection successfully')
      })
      .catch((err) => {
        console.error('Database connection error')
      })
  }
}
const databaseService = new DatabaseService()
export default databaseService
