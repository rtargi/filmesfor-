
import React from 'react';
import type { TimelineEvent } from '../types';

interface TimelineProps {
    events: TimelineEvent[];
}

const colorSchemes = [
    {
        iconBg: 'bg-blue-900',
        iconBorder: 'border-blue-500',
        iconText: 'text-blue-300',
        dateText: 'text-blue-400',
    },
    {
        iconBg: 'bg-yellow-900',
        iconBorder: 'border-yellow-500',
        iconText: 'text-yellow-300',
        dateText: 'text-yellow-400',
    },
    {
        iconBg: 'bg-orange-900',
        iconBorder: 'border-orange-500',
        iconText: 'text-orange-300',
        dateText: 'text-orange-400',
    },
    {
        iconBg: 'bg-red-900',
        iconBorder: 'border-red-500',
        iconText: 'text-red-300',
        dateText: 'text-red-400',
    },
];

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <div className="relative max-w-3xl mx-auto py-4">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2" aria-hidden="true"></div>
            
            <div className="relative flex flex-col gap-y-12">
                {events.map((event, index) => {
                    const colors = colorSchemes[index % colorSchemes.length];

                    return (
                        <div key={index} className="relative pl-20">
                            {/* Icon */}
                            <div className={`absolute top-0 left-6 w-12 h-12 rounded-full flex items-center justify-center ${colors.iconBg} border-4 ${colors.iconBorder} transform -translate-x-1/2`}>
                                <span className={`font-mono font-bold text-xl ${colors.iconText}`}>{index + 1}</span>
                            </div>
                            
                            {/* Content */}
                            <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-lg">
                                <p className={`font-mono text-sm uppercase font-semibold ${colors.dateText}`}>{event.monthYear}</p>
                                <h3 className="font-bold text-xl mt-1 text-gray-100">{event.title}</h3>
                                <p className="text-gray-300 mt-2">{event.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
