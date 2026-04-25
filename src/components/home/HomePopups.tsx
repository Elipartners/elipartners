'use client';

import { useState, useEffect } from 'react';

export default function HomePopups() {
    const [popups, setPopups] = useState<any[]>([]);
    const [visiblePopups, setVisiblePopups] = useState<any[]>([]);

    useEffect(() => {
        const fetchPopups = async () => {
            try {
                const res = await fetch('/api/popups');
                if (!res.ok) return;
                const data = await res.json();
                
                // Filter based on localStorage
                const filtered = data.filter((popup: any) => {
                    const hideUntil = localStorage.getItem(`hide_popup_${popup.id}`);
                    if (hideUntil) {
                        const hideDate = new Date(hideUntil);
                        if (new Date() < hideDate) return false;
                    }
                    return true;
                });
                
                setVisiblePopups(filtered);
            } catch (error) {
                console.error("Failed to fetch popups:", error);
            }
        };
        fetchPopups();
    }, []);

    const handleClose = (id: number) => {
        setVisiblePopups(prev => prev.filter(p => p.id !== id));
    };

    const handleHideToday = (id: number) => {
        // Set expiry to tomorrow midnight
        const tomorrow = new Date();
        tomorrow.setHours(24, 0, 0, 0);
        localStorage.setItem(`hide_popup_${id}`, tomorrow.toISOString());
        handleClose(id);
    };

    if (visiblePopups.length === 0) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="absolute inset-0 bg-black/50 pointer-events-auto backdrop-blur-sm" onClick={() => setVisiblePopups([])}></div>
            <div className="relative z-10 flex gap-6 max-w-full overflow-x-auto p-4 items-center pb-10 pointer-events-none w-full justify-center">
                {visiblePopups.map((popup) => (
                    <div key={popup.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[550px] shrink-0 flex flex-col pointer-events-auto transform transition-all translate-y-0 opacity-100 duration-300">
                        <div className="w-full">
                            {popup.type === 'IMAGE' ? (
                                popup.linkUrl ? (
                                    <a href={popup.linkUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={popup.content} alt={popup.title} className="w-full h-auto cursor-pointer" />
                                    </a>
                                ) : (
                                    <img src={popup.content} alt={popup.title} className="w-full h-auto" />
                                )
                            ) : (
                                <iframe 
                                    srcDoc={popup.content} 
                                    className="w-full border-none bg-transparent"
                                    style={{ height: '75vh', minHeight: '650px' }}
                                    title={popup.title}
                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                />
                            )}
                        </div>
                        <div className="flex bg-gray-50 border-t border-gray-100 divide-x divide-gray-200 mt-auto">
                            <button
                                onClick={() => handleHideToday(popup.id)}
                                className="flex-1 py-4 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                            >
                                오늘 하루 보지 않기
                            </button>
                            <button
                                onClick={() => handleClose(popup.id)}
                                className="flex-1 py-4 text-sm font-bold text-gray-800 hover:bg-gray-100 transition-colors"
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
