import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
          404
        </div>
        <h1 className="text-2xl font-display font-bold text-white mb-3">ไม่พบหน้าที่ต้องการ</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          หน้าที่คุณกำลังค้นหาอาจถูกย้าย ลบออก หรือยังไม่มีอยู่
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-colors"
          >
            กลับหน้าหลัก
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors border border-white/20"
          >
            ดูบทความ
          </Link>
        </div>
      </div>
    </div>
  );
}
