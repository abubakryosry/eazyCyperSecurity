import { getTestimonial } from '../../lib/api';
import TestimonialsClient from './TestimonialsClient';

type TestimonialProps = {
  locale: string;
};

export default async function Testimonials({ locale }: TestimonialProps) {
  const data = await getTestimonial(locale);
  return <TestimonialsClient data={data} />;
}
