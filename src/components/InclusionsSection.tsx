import React from 'react';
import { Car, Utensils, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface InclusionsSectionProps {
  currentLang: Language;
}

export const InclusionsSection: React.FC<InclusionsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const items = [
    {
      id: 'inclusion-transport',
      icon: Car,
      title: t.inclusions.transportTitle,
      description: t.inclusions.transportDesc,
      tag: 'Watamu Departure',
    },
    {
      id: 'inclusion-lunch',
      icon: Utensils,
      title: t.inclusions.lunchTitle,
      description: t.inclusions.lunchDesc,
      tag: 'Kenyan Cuisine',
    },
    {
      id: 'inclusion-style',
      icon: Compass,
      title: t.inclusions.styleTitle,
      description: t.inclusions.styleDesc,
      tag: 'Flexible Format',
    },
  ];

  return (
    <section id="inclusions" className="py-20 bg-[#F4EAD3]/60 border-y border-[#8A6045]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8A6045] font-semibold block mb-2">
            Quality Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#18201B]">
            {t.inclusions.title}
          </h2>
          <p className="text-sm text-[#18201B]/75 mt-2">
            {t.inclusions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-[#F7F4EC] rounded-2xl p-8 border border-[#8A6045]/20 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#304C3A]/10 border border-[#304C3A]/20 flex items-center justify-center mb-6 text-[#304C3A]">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8A6045] mb-2">
                  {item.tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#18201B] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#18201B]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
