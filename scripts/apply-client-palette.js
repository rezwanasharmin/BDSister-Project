const fs = require('fs');
const path = require('path');

function updateFile(filePath, transforms) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const [pattern, replacement] of transforms) {
    content = content.replace(pattern, replacement);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated:', filePath);
  } else {
    console.log('No changes needed:', filePath);
  }
}

// 1. HeroSection.tsx
updateFile('src/components/home/HeroSection.tsx', [
  [/bg-\[#173330\] hover:bg-\[#5B9891\] text-\[#F7DFC7\] hover:text-white/g, 'bg-[#D98408] hover:bg-[#B86E04] text-white'],
  [/border-\[#D98408\]\/50/g, 'border-[#F2B55D]'],
  [/bg-white text-\[#173330\] font-bold text-sm border border-\[#E8D0B8\] hover:bg-\[#F7DFC7\]/g, 'bg-[#5B9891] hover:bg-[#477C76] text-white font-bold text-sm border border-[#5B9891]'],
  [/ShoppingBag className="w-4 h-4 text-\[#5B9891\]"/g, 'ShoppingBag className="w-4 h-4 text-[#F7DFC7]"'],
  [/w-20 h-20 rounded-2xl bg-\[#173330\] text-\[#F7DFC7\]/g, 'w-20 h-20 rounded-2xl bg-[#5B9891] text-[#F7DFC7] border-2 border-[#D98408]'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 2. ShopShowcase.tsx
updateFile('src/components/home/ShopShowcase.tsx', [
  [/bg-\[#173330\] text-\[#F7DFC7\] shadow-sm border border-\[#D98408\]\/50/g, 'bg-[#5B9891] text-white shadow-sm border border-[#5B9891]'],
  [/bg-\[#173330\]\/90 text-\[#F7DFC7\]/g, 'bg-[#5B9891] text-white'],
  [/bg-\[#173330\] text-\[#F7DFC7\] border border-\[#D98408\]\/60/g, 'bg-[#F7DFC7] text-[#111E28] border border-[#D98408]'],
  [/bg-\[#173330\] text-\[#F7DFC7\] text-xs font-bold hover:bg-\[#5B9891\] hover:text-white transition-colors flex items-center justify-center gap-1.5 shadow-xs border border-\[#D98408\]\/40/g, 'bg-[#5B9891] hover:bg-[#477C76] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs border border-[#5B9891]'],
  [/inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-\[#173330\] text-\[#F7DFC7\] text-xs font-bold hover:bg-\[#5B9891\] hover:text-white transition-all shadow-md border border-\[#D98408\]\/50/g, 'inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D98408] hover:bg-[#B86E04] text-white text-xs font-bold transition-all shadow-md border border-[#F2B55D]'],
  [/ArrowRight className="w-4 h-4 text-\[#D98408\]"/g, 'ArrowRight className="w-4 h-4 text-white"'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 3. UnifiedWingsSection.tsx
updateFile('src/components/home/UnifiedWingsSection.tsx', [
  [/bg-\[#173330\] text-\[#F7DFC7\] p-6 sm:p-8 shadow-xl/g, 'bg-[#5B9891] text-white p-6 sm:p-8 shadow-xl border border-[#477C76]'],
  [/bg-\[#173330\] text-\[#F7DFC7\]/g, 'bg-[#5B9891] text-white'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 4. NewsletterSection.tsx
updateFile('src/components/home/NewsletterSection.tsx', [
  [/bg-\[#173330\] text-white p-6 sm:p-8/g, 'bg-[#5B9891] text-white p-6 sm:p-8 border border-[#477C76] shadow-xl'],
  [/bg-\[#173330\] hover:bg-\[#5B9891\]/g, 'bg-[#D98408] hover:bg-[#B86E04]'],
  [/bg-\[#5B9891\] hover:bg-\[#477C76\] text-white font-bold text-xs px-5 py-2.5 rounded-xl/g, 'bg-[#D98408] hover:bg-[#B86E04] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md border border-[#F2B55D]'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 5. ForumTeaser.tsx
updateFile('src/components/home/ForumTeaser.tsx', [
  [/bg-\[#173330\] text-\[#F7DFC7\] shadow-xs border border-\[#D98408\]\/40/g, 'bg-[#5B9891] text-white shadow-xs border border-[#5B9891]'],
  [/bg-\[#173330\] text-\[#F7DFC7\] hover:bg-\[#5B9891\] hover:text-white/g, 'bg-[#5B9891] hover:bg-[#477C76] text-white shadow-xs'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 6. ProfileEngineSection.tsx
updateFile('src/components/home/ProfileEngineSection.tsx', [
  [/bg-\[#173330\] text-\[#F7DFC7\] shadow-sm border border-\[#D98408\]\/50/g, 'bg-[#5B9891] text-white shadow-sm border border-[#5B9891]'],
  [/w-6 h-6 rounded-full bg-\[#173330\] text-\[#F7DFC7\] border border-\[#D98408\]/g, 'w-6 h-6 rounded-full bg-[#5B9891] text-white border border-[#F2B55D]'],
  [/bg-\[#173330\] text-\[#F7DFC7\] font-bold text-xs hover:bg-\[#5B9891\] hover:text-white/g, 'bg-[#D98408] text-white font-bold text-xs hover:bg-[#B86E04]'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 7. EventsPreview.tsx
updateFile('src/components/home/EventsPreview.tsx', [
  [/bg-\[#173330\] text-\[#F7DFC7\]/g, 'bg-[#5B9891] text-white'],
  [/hover:bg-\[#5B9891\]/g, 'hover:bg-[#477C76]'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 8. ResourceLibraryPreview.tsx
updateFile('src/components/home/ResourceLibraryPreview.tsx', [
  [/hover:bg-\[#173330\] hover:text-\[#F7DFC7\]/g, 'hover:bg-[#5B9891] hover:text-white'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 9. KeyAreasGrid.tsx
updateFile('src/components/home/KeyAreasGrid.tsx', [
  [/bg-\[#173330\] text-\[#F7DFC7\]/g, 'bg-[#5B9891] text-white'],
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 10. AboutValuesSection.tsx
updateFile('src/components/home/AboutValuesSection.tsx', [
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 11. SectionHoverInfo.tsx
updateFile('src/components/common/SectionHoverInfo.tsx', [
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

// 12. mockData.ts
updateFile('src/data/mockData.ts', [
  [/#173330/g, '#111E28'],
  [/#E8D0B8/g, '#F7DFC7'],
  [/#FAF5EE/g, '#FAF8F5'],
]);

console.log('All palette transforms completed successfully.');
