import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface BoardPost {
  id: number
  title: string
  content: string
  author: string
  created_at: string
  views: number
  category: string
}

export const getPosts = async (): Promise<BoardPost[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }

  return data || []
}

export const getPostById = async (id: number): Promise<BoardPost | null> => {
  await supabase
    .from('posts')
    .update({ views: supabase.raw('views + 1') })
    .eq('id', id)

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }

  return data
}

export const createPost = async (post: Omit<BoardPost, 'id' | 'created_at' | 'views'>): Promise<BoardPost | null> => {
  const { data, error } = await supabase
    .from('posts')
    .insert([{ ...post, views: 0 }])
    .select()
    .single()

  if (error) {
    console.error('Error creating post:', error)
    return null
  }

  return data
} 