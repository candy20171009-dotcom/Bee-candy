import { DemoForm } from "@/components/demo/demo-form";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] text-[#132344]">
      <section className="border-b border-[#dbe7ff] bg-[linear-gradient(160deg,#f7faff_0%,#edf4ff_80%)] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#3e63c6]">DEMO BOOKING</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#142a50]">預約產品演示</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5a709c]">
            請填寫你的聯絡資訊與需求，我們會安排顧問在 1 個工作日內與你對接。
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <DemoForm />
      </section>
    </main>
  );
}
