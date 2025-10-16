"use client";

import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";

type ContactFormProps = {
  locale: string;
};

interface ContactFormValues {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  service: string;
  details: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const isAr = locale === "ar";
  const t = (ar: string, en: string) => (isAr ? ar : en);

  const formik: FormikProps<ContactFormValues> = useFormik<ContactFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      position: "",
      phone: "",
      email: "",
      service: "",
      details: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(
        t("الاسم الأول مطلوب", "First name is required")
      ),
      lastName: Yup.string().required(
        t("الاسم الأخير مطلوب", "Last name is required")
      ),
      company: Yup.string().required(
        t("اسم الشركة مطلوب", "Company name is required")
      ),
      position: Yup.string().required(
        t("الوظيفة مطلوبة", "Position is required")
      ),
      phone: Yup.string().required(
        t("رقم الهاتف مطلوب", "Phone number is required")
      ),
      email: Yup.string()
        .email(t("بريد إلكتروني غير صالح", "Invalid email"))
        .required(t("البريد الإلكتروني مطلوب", "Email is required")),
      service: Yup.string().required(t("اختر خدمة", "Please select a service")),
      details: Yup.string().required(
        t("أدخل تفاصيل المشروع", "Enter project details")
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="bg-[#0a0a2a] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="text-center md:text-start max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {t("احجز موعد الآن معنا", "Book an Appointment Now")}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {t(
              "اكتشف كيف يمكننا مساعدتك في تعزيز أمنك السيبراني وضمان استمرار أعمالك بثقة وأمان.",
              "Discover how we can help strengthen your cybersecurity and ensure your business continuity with confidence and security."
            )}
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-lg">
          <h2 className="text-lg font-bold mb-4">
            {t("املأ البيانات الآتية", "Fill in your details")}
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label={t("الاسم الأول", "First Name")}
                name="firstName"
                formik={formik}
                placeholder={t("مثلاً: أحمد", "e.g. Ahmed")}
              />
              <Input
                label={t("الاسم الأخير", "Last Name")}
                name="lastName"
                formik={formik}
                placeholder={t("مثلاً: العتيبي", "e.g. Smith")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label={t("اسم الشركة", "Company Name")}
                name="company"
                formik={formik}
                placeholder={t("اسم الشركة", "Company name")}
              />
              <Input
                label={t("الوظيفة", "Position")}
                name="position"
                formik={formik}
                placeholder={t("مثلاً: مدير الأمن", "e.g. Security Manager")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label={t("رقم الجوال / الواتساب", "Phone / WhatsApp")}
                name="phone"
                formik={formik}
                placeholder={t("05xxxxxxxx", "+971xxxxxxxxx")}
              />
              <Input
                label={t("البريد الإلكتروني", "Email")}
                name="email"
                type="email"
                formik={formik}
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                {t("الخدمة التي ترغبها", "Service Required")}
              </label>
              <select
                name="service"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.service}
                className="w-full bg-[#EFEFEF] border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              >
                <option value="" disabled>
                  {t("اختر الخدمة المناسبة", "Select a service")}
                </option>
                <option value="aisolutions">
                  {t(" الذكاء الاصطناعي", "AI Solutions")}
                </option>
                <option value="bigdata">
                  {t("البيانات الضخمة والتحليلات", "Big Data & Analytics")}
                </option>
                <option value="cybersecurity">
                  {t("الأمن السيبراني", "Cybersecurity")}
                </option>
                <option value="cloudcomputing">
                  {t("الحوسبة السحابية والاستضافة", "Cloud Computing & Hosting")}
                </option>
              </select>
              {formik.touched.service && formik.errors.service && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.service}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">
                {t("تفاصيل المشروع", "Project Details")}
              </label>
              <textarea
                name="details"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.details}
                className="w-full bg-[#EFEFEF] border border-gray-300 rounded-md p-3 mt-1 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder={t(
                  "اكتب تفاصيل مشروعك...",
                  "Write your project details..."
                )}
              />
              {formik.touched.details && formik.errors.details && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.details}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white rounded-md py-3 mt-2 hover:bg-blue-800 transition font-semibold shadow-md hover:shadow-lg"
            >
              {t("الحصول على استشارة مجانية", "Get a Free Consultation")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  formik,
  type = "text",
  placeholder,
}: {
  label: string;
  name: keyof ContactFormValues;
  formik: FormikProps<ContactFormValues>;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="w-full bg-[#EFEFEF] border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );
}
