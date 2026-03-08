import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-blue text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">ELIPARTNERS</h2>
                        <p className="text-blue-200 text-sm mb-2">주식회사 엘리파트너스</p>
                        <p className="text-blue-200 text-sm mb-2">대표번호: 010-7486-1407 | 팩스: 0504-070-9031 | 이메일: eli1407@elipartners.co.kr</p>
                        <p className="text-blue-200 text-sm">대전광역시 서구 둔산중로 40, 621호(둔산동)</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-teal">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-blue-200">
                            <li><Link href="/company" className="hover:text-white transition-colors">회사소개</Link></li>
                            <li><Link href="/business/consulting" className="hover:text-white transition-colors">사업영역</Link></li>
                            <li><Link href="/support" className="hover:text-white transition-colors">고객지원</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-teal">Support</h3>
                        <ul className="space-y-2 text-sm text-blue-200">
                            <li><Link href="/support#notice" className="hover:text-white transition-colors">공지사항</Link></li>
                            <li><Link href="/support#inquiry" className="hover:text-white transition-colors">1:1 문의</Link></li>
                            <li><Link href="/admin" className="hover:text-white transition-colors">관리자 (Admin)</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-blue-900 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-blue-300">
                    <p>&copy; {new Date().getFullYear()} Elipartners Co., Ltd. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
