// import { getBlog } from "../../lib/api";
// import Image from "next/image";
// type ServicesProps = {
//   locale: string;
// };

// export default async function BlogServer({ locale }: ServicesProps) {
//   const data = await getBlog(locale); // fetch مباشر على السيرفر
  

//   return (
//     <section dir={locale === "ar" ? "rtl" : "ltr"} className="text-gray-800 py-8">
//   <div className="max-w-6xl mx-auto flex flex-col">
//     {/* العنوان */}
//     <div className="flex justify-between items-center">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
//         {locale === "ar" ? "المدونة" : "Blog"}
//       </h2>
//       <a
//         href="#"
//         className="font-semibold text-md md:text-xl px-6 py-2 rounded-xl border border-blue-600 hover:bg-blue-700 hover:text-white transition"
//       >
//         {locale === "ar" ? "تصفح المقالات" : "Browse Our Articles"}
//       </a>
//     </div>

//     {/* الكروت */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-8 pb-12">
//       {data.map((blog: any) => (
//         <div
//           key={blog.id}
//           className="rounded-lg overflow-hidden border border-gray-200 shadow-md bg-white"
//         >
//           {/* الصورة */}
//           <Image
//             src={`http://localhost:1337${blog?.blogImage?.url}`}
//             width={500}
//             height={300}
//             alt={blog.title}
//             className="w-full h-56 object-cover"
//             priority
//           />
//           {/* النصوص */}
//           <div className="p-4 text-center">
//             <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
//             <p className="text-gray-600 text-sm">{blog.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// }
