export type Post = {
  title: string;
  publishDate: string;
  content: string;
  id: string;
  images: string[];
  authors: string[];
}

export type Image = {
  id: string;
  path: string;
  width: number;
  height: number;
}

export type PostWithImages = Post & {
  images: Image[];
}

export type Author = {
  name: string;
  id: string;
}

export type PostWithAuthor = Post & {
  authors: Author[];
}

export type PostWithAuthorAndImages = Post & {
  authors: Author[];
  images: Image[];
}