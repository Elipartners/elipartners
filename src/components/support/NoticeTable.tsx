'use client';

import React, { useState } from 'react';

export default function NoticeTable({ notices }: { notices: any[] }) {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse min-w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="p-4 font-semibold text-gray-600 w-20 text-center">No.</th>
                        <th className="p-4 font-semibold text-gray-600">제목</th>
                        <th className="p-4 font-semibold text-gray-600 w-32 text-center">등록일</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {notices.map((notice, index) => (
                        <React.Fragment key={notice.id}>
                            <tr
                                onClick={() => setExpandedId(expandedId === notice.id ? null : notice.id)}
                                className={`hover:bg-gray-50 transition-colors cursor-pointer group ${expandedId === notice.id ? 'bg-gray-50/50' : ''}`}
                            >
                                <td className="p-4 text-center text-gray-500 font-mono text-sm">{notices.length - index}</td>
                                <td className="p-4">
                                    <h3 className={`text-[15px] font-medium truncate transition-colors ${expandedId === notice.id ? 'text-brand-teal' : 'text-gray-800 group-hover:text-brand-teal'}`}>
                                        {notice.title}
                                    </h3>
                                </td>
                                <td className="p-4 text-center text-sm text-gray-400 whitespace-nowrap">
                                    {new Date(notice.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                            {expandedId === notice.id && (
                                <tr className="bg-gray-50/80">
                                    <td colSpan={3} className="p-0 border-t border-gray-100">
                                        <div className="px-8 py-10 animate-fade-in">
                                            <div className="text-gray-700 whitespace-pre-wrap text-[15px] leading-relaxed">
                                                {notice.content}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
