import Post from '@/models/Post'
import connectDB from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  console.log(params)
  const { id } = params
  try {
    await connectDB()
    const post = await Post.findById(id)
    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (error) {
    console.log("couldn't connect to db")
  }
}
