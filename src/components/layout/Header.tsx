import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2 md:gap-3">
                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                        <Image
                            src="/images/logo.png"
                            alt="ELIPARTNERS Logo"
                            fill
                            sizes="(max-width: 768px) 40px, 48px"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold text-brand-blue">ELIPARTNERS</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/company" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">회사소개</Link>
                    <div className="group relative">
                        <span className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors cursor-pointer py-4">사업영역</span>
                        <div className="absolute left-0 top-full hidden w-48 flex-col rounded-md bg-white py-2 shadow-lg group-hover:flex border border-gray-100">
                            <Link href="/business/solution" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal">솔루션</Link>
                            <Link href="/business/real-estate" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal">부동산개발</Link>
                            <Link href="/business/consulting" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal">경영컨설팅</Link>
                        </div>
                    </div>
                    <Link href="/support" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">고객지원</Link>
                </nav>
                <div className="flex md:hidden">
                    <button className="text-gray-700 hover:text-brand-teal" aria-label="Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
