const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://eazycyperstrapi.onrender.com";

// Fetch hero data
export async function getHero(locale: string) {
  // استخدم populate=* لو في روابط أو صور أو ميديا
  const res = await fetch(`${baseUrl}/api/hero?locale=${locale}&populate=*`);

  if (!res.ok) {
    console.error("Failed to fetch hero data:", res.statusText);
    throw new Error("Failed to fetch hero data");
  }

  const json = await res.json();

  // في Strapi v4/v5، البيانات الرئيسية بتيجي في json.data
  return json.data;
}


// Fetch services data 
// export async function getServices(locale: string) {
//   const res = await fetch(`${baseUrl}/api/services?locale=${locale}&populate=*`, {
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch hero data");
//   }

//   const json = await res.json();
//   return json.data;
// }

// Fetch Why data
export async function getWhy(locale: string) {
  const res = await fetch(`${baseUrl}/api/why-uses?locale=${locale}&populate=*`, {
  });

  if (!res.ok) {
    throw new Error("Failed to fetch hero data");
  }

  const json = await res.json();
  return json.data;
}
// Fetch testimonial
export async function getTestimonial(locale: string) {
  const res = await fetch(`${baseUrl}/api/testimonials?locale=${locale}&populate=*`, {
  });

  if (!res.ok) {
    throw new Error("Failed to fetch hero data");
  }

  const json = await res.json();
  return json.data;
}
// Fetch blog
export async function getBlog(locale: string) {
  const res = await fetch(`${baseUrl}/api/blogs?locale=${locale}&populate=*`, {
  });

  if (!res.ok) {
    throw new Error("Failed to fetch hero data");
  }

  const json = await res.json();
  return json.data;
}
