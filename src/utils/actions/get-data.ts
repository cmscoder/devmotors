export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/67f54320cbb3fe972a638713?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type,`
    );

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    throw new Error('Error fetching data');
  }
}
