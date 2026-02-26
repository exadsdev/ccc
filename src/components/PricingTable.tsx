import { TOP_UP_PACKAGES, TERMS, ACCOUNT_PRICE_USD } from '@/lib/constants';

export default function PricingTable() {
  const colorMap: Record<string, { card: string; badge: string; fee: string; btn: string }> = {
    blue: {
      card: 'border-blue-500/30 hover:border-blue-500/60',
      badge: 'bg-blue-500/20 text-blue-300',
      fee: 'text-blue-400',
      btn: 'bg-blue-600 hover:bg-blue-500',
    },
    indigo: {
      card: 'border-indigo-500/50 hover:border-indigo-400 shadow-indigo-500/20 shadow-lg',
      badge: 'bg-indigo-500/20 text-indigo-300',
      fee: 'text-indigo-400',
      btn: 'bg-indigo-600 hover:bg-indigo-500',
    },
    violet: {
      card: 'border-violet-500/30 hover:border-violet-500/60',
      badge: 'bg-violet-500/20 text-violet-300',
      fee: 'text-violet-400',
      btn: 'bg-violet-600 hover:bg-violet-500',
    },
    gold: {
      card: 'border-yellow-500/30 hover:border-yellow-500/60',
      badge: 'bg-yellow-500/20 text-yellow-300',
      fee: 'text-yellow-400',
      btn: 'bg-yellow-600 hover:bg-yellow-500',
    },
  };

  return (
    <section id="pricing" className="py-16">
      {/* Account Price Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm font-medium mb-4">
          💰 ราคาบัญชีโฆษณา Google Agency
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          บัญชีละ{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            ${ACCOUNT_PRICE_USD} USD
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          ราคาคงที่ต่อบัญชี ไม่มีค่าบริการรายเดือน เติมเงินได้ทันทีหลังได้รับบัญชี
        </p>
      </div>

      {/* Top-up Package Table */}
      <div className="mb-10">
        <h3 className="text-xl font-display font-semibold text-white text-center mb-2">
          แพ็คเกจค่าธรรมเนียมการเติมเงิน (Top-up Fee per Transaction)
        </h3>
        <p className="text-gray-400 text-sm text-center mb-8">
          ค่าธรรมเนียมขึ้นอยู่กับวงเงินโฆษณาที่เติม — ยิ่งเติมมาก ค่าธรรมเนียมยิ่งถูก
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">แพ็คเกจ</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">ชื่อแผน</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">งบโฆษณา (Budget)</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">ค่าธรรมเนียม (Fee)</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">เหมาะสำหรับ</th>
              </tr>
            </thead>
            <tbody>
              {TOP_UP_PACKAGES.map((pkg, i) => (
                <tr
                  key={pkg.id}
                  className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                    pkg.popular ? 'bg-indigo-500/5' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2">
                      <code className="text-xs bg-white/10 rounded px-1.5 py-0.5 text-gray-300 font-mono">
                        {pkg.id}
                      </code>
                      {pkg.popular && (
                        <span className="text-xs bg-indigo-500 text-white rounded-full px-2 py-0.5 font-medium">
                          ยอดนิยม
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{pkg.label}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-green-400 font-semibold font-mono">
                      ${pkg.budgetUSD.toLocaleString()} USD
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`text-2xl font-bold font-display ${
                        colorMap[pkg.color]?.fee || 'text-blue-400'
                      }`}
                    >
                      {pkg.managementFee}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{pkg.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOP_UP_PACKAGES.map((pkg) => {
            const colors = colorMap[pkg.color] || colorMap.blue;
            return (
              <div
                key={pkg.id}
                className={`relative bg-gray-900/50 border rounded-xl p-5 transition-all duration-300 ${colors.card}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      ⭐ ยอดนิยม
                    </span>
                  </div>
                )}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <code className="text-xs text-gray-400 font-mono">{pkg.id}</code>
                    <h4 className="text-white font-semibold mt-0.5">{pkg.label}</h4>
                  </div>
                  <span className={`text-3xl font-bold font-display ${colors.fee}`}>
                    {pkg.managementFee}%
                  </span>
                </div>
                <p className="text-green-400 font-mono font-semibold text-sm mb-2">
                  ${pkg.budgetUSD.toLocaleString()} USD
                </p>
                <p className="text-gray-400 text-xs">{pkg.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terms */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
        <h3 className="text-amber-400 font-semibold mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          เงื่อนไขและข้อกำหนด
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">•</span>
            <span className="text-gray-300">
              ขั้นต่ำการใช้จ่าย: <strong className="text-white">${TERMS.minimumSpend} USD</strong>
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">•</span>
            <span className="text-gray-300">
              ใช้ได้ถึง: <strong className="text-white">{TERMS.validUntil}</strong>
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">•</span>
            <span className="text-gray-300">
              การชำระเงิน: <strong className="text-white">{TERMS.paymentCondition}</strong>
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">•</span>
            <span className="text-gray-300">
              แพลตฟอร์ม:{' '}
              <strong className="text-white">{TERMS.platforms.join(', ')}</strong>
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-400 mt-0.5">•</span>
            <span className="text-gray-300">
              <strong className="text-red-400">ไม่มีการคืนเงินทุกกรณี</strong>
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">•</span>
            <span className="text-gray-300">
              ภาษี: <strong className="text-white">{TERMS.tax}%</strong> + ค่าบัญชี{' '}
              <strong className="text-white">${TERMS.accountFeeUSD}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
