import { DemoForm } from "@/components/demo/demo-form";

export default function DemoPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/65">Demo Booking</p>
      <h1 className="mt-2 text-3xl font-bold text-brand-ink">預約產品演示</h1>
      <p className="mt-3 text-sm text-brand-ink/80">
        請填寫你的聯絡資訊與需求，我們會安排顧問在 1 個工作日內與你對接。
      </p>
      <div className="mt-8">
        <DemoForm />
      </div>
    </main>
  );
}
