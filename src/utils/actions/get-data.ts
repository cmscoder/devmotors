import { redirect } from 'next/navigation';

export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/67f54320cbb3fe972a638713?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type,metadata`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    throw new Error('Error fetching data');
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }
    return res.json();
  } catch (err) {
    throw new Error('Error fetching data');
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: 'slug,title,metadata',
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      throw new Error(`Error fetching item: ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    redirect('/');
  }
}
