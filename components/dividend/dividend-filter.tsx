"use client";

import { useEffect, useState } from "react";

type Query = {
  insuranceCompany?: string;
  productName?: string;
  productExact?: boolean;
};

export function DividendFilter({ onSearch }: { onSearch: (query: Query) => void }) {
  const [insurerValue, setInsurerValue] = useState("");
  const [productValue, setProductValue] = useState("");
  const [insurerTerm, setInsurerTerm] = useState("");
  const [productTerm, setProductTerm] = useState("");
  const [insurerOpen, setInsurerOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [insurers, setInsurers] = useState<string[]>([]);
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    async function loadOptions() {
      const search = new URLSearchParams();
      if (insurerValue.trim()) {
        search.set("insuranceCompany", insurerValue.trim());
      }
      const response = await fetch(`/api/dividend/options?${search.toString()}`);
      const result = await response.json();
      if (!result.success) return;
      setInsurers(result.data.insurers || []);
      setProducts(result.data.products || []);
    }
    loadOptions();
  }, [insurerValue]);

  const filteredInsurers = insurers.filter((item) => item.toLowerCase().includes(insurerTerm.toLowerCase()));
  const filteredProducts = products.filter((item) => item.toLowerCase().includes(productTerm.toLowerCase()));

  const insurerExact = insurers.some((item) => item === insurerValue.trim());
  const productExact = products.some((item) => item === productValue.trim());

  function triggerSearch() {
    onSearch({
      insuranceCompany: insurerValue.trim() || undefined,
      productName: productValue.trim() || undefined,
      productExact: productValue.trim() ? productExact : undefined,
    });
  }

  return (
    <section className="rounded-2xl border border-[#d8e5ff] bg-white p-5 shadow-[0_12px_26px_rgba(58,92,169,0.08)]">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="relative space-y-1 text-sm text-[#4f6591]">
          <span>保險公司</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 pr-9 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="insuranceCompany"
            aria-label="保險公司"
            placeholder="請選擇或輸入保險公司"
            value={insurerValue}
            onFocus={() => {
              setInsurerOpen(true);
              setInsurerTerm("");
            }}
            onBlur={() => setTimeout(() => setInsurerOpen(false), 120)}
            onChange={(e) => {
              setInsurerValue(e.target.value);
              setInsurerTerm(e.target.value);
              setProductValue("");
              setProductTerm("");
            }}
          />
          <button
            type="button"
            className="absolute top-[36px] right-2 rounded p-1 text-[#7a93c7]"
            onMouseDown={(e) => {
              e.preventDefault();
              setInsurerOpen((prev) => {
                const next = !prev;
                if (next) setInsurerTerm("");
                return next;
              });
            }}
            aria-label="展開保險公司選單"
          >
            ▾
          </button>
          {insurerOpen ? (
            <div className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-[#cfe0ff] bg-white shadow-lg">
              {filteredInsurers.length ? (
                filteredInsurers.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="block w-full px-3 py-2 text-left text-sm text-[#1f3f88] hover:bg-[#f2f7ff]"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setInsurerValue(item);
                      setInsurerTerm("");
                      setInsurerOpen(false);
                      setProductValue("");
                      setProductTerm("");
                    }}
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="px-3 py-2 text-sm text-[#7a90b9]">無匹配保險公司</p>
              )}
            </div>
          ) : null}
          {!insurerExact && insurerValue.trim() ? (
            <p className="text-xs text-[#7a90b9]">可继续输入模糊搜索，或从下拉选择标准保司名</p>
          ) : null}
        </label>

        <label className="relative space-y-1 text-sm text-[#4f6591]">
          <span>產品名稱</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 pr-9 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="productName"
            aria-label="產品名稱"
            placeholder="請選擇或輸入產品名稱"
            value={productValue}
            onFocus={() => {
              setProductOpen(true);
              setProductTerm("");
            }}
            onBlur={() => setTimeout(() => setProductOpen(false), 120)}
            onChange={(e) => {
              setProductValue(e.target.value);
              setProductTerm(e.target.value);
            }}
          />
          <button
            type="button"
            className="absolute top-[36px] right-2 rounded p-1 text-[#7a93c7]"
            onMouseDown={(e) => {
              e.preventDefault();
              setProductOpen((prev) => {
                const next = !prev;
                if (next) setProductTerm("");
                return next;
              });
            }}
            aria-label="展開產品選單"
          >
            ▾
          </button>
          {productOpen ? (
            <div className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-[#cfe0ff] bg-white shadow-lg">
              {filteredProducts.length ? (
                filteredProducts.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="block w-full px-3 py-2 text-left text-sm text-[#1f3f88] hover:bg-[#f2f7ff]"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setProductValue(item);
                      setProductTerm("");
                      setProductOpen(false);
                    }}
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="px-3 py-2 text-sm text-[#7a90b9]">無匹配產品名稱</p>
              )}
            </div>
          ) : null}
          {!productExact && productValue.trim() ? (
            <p className="text-xs text-[#7a90b9]">当前为模糊关键词，查询会返回相关产品</p>
          ) : null}
        </label>
      </div>
      <button
        className="mt-4 rounded-xl bg-gradient-to-r from-[#2d66ff] to-[#6f76ff] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(49,94,205,0.28)] transition hover:translate-y-[-1px]"
        onClick={triggerSearch}
      >
        開始查詢
      </button>
    </section>
  );
}
